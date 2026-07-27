# Copyright (c) 2025, Dhwani RIS and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class DeskTheme(Document):
	def validate(self):
		# Validate that default_app is set when hide_app_switcher is checked
		if self.hide_app_switcher and not self.default_app:
			frappe.throw(_("Default App is required when App Switcher is hidden"))

		# Carousel validation: if carousel selected, must have at least one image
		if self.page_background_type == "Carousel":
			if not self.carousel_images or not any(img.image for img in self.carousel_images):
				# Fallback: clear page_background_type
				self.page_background_type = ""
				frappe.msgprint(_("No carousel images found. Falling back to default background."))

	def on_update(self):
		# Update system settings with the selected default app
		if self.hide_app_switcher and self.default_app:
			update_system_default_app(self.default_app)
		
		# Update website settings with footer information
		self.update_website_settings()

	def update_website_settings(self):
		"""Update Website Settings with copyright and powered by text from Desk Theme"""
		try:
			website_settings = frappe.get_single("Website Settings")
			
			# Update copyright text if provided
			if self.copyright_text:
				website_settings.copyright = self.copyright_text
			
			# Update footer powered by text if provided
			if self.footer_powered_by:
				website_settings.footer_powered = self.footer_powered_by
			
			# Save without triggering permissions check
			website_settings.save(ignore_permissions=True)
			
		except Exception as e:
			frappe.log_error(f"Error updating website settings: {str(e)}")

	def get_carousel_data(self):
		"""Return carousel images and config for API"""
		if self.page_background_type != "Carousel":
			return None
		images = [img.image for img in self.carousel_images if img.image]
		return {
			"images": images,
			"manual_navigation": getattr(self, "allow_manual_navigation", True),
			"auto_advance": getattr(self, "carousel_auto_advance", True),
		}


@frappe.whitelist()
def update_system_default_app(default_app):
	"""Update the system default app setting"""
	try:
		# Check if the app exists in installed apps
		installed_apps = frappe.get_installed_apps()
		if default_app not in installed_apps:
			frappe.throw(_("App '{0}' is not installed").format(default_app))
		
		# Update system settings
		system_settings = frappe.get_single("System Settings")
		system_settings.default_app = default_app
		system_settings.save(ignore_permissions=True)
		
		return {"success": True}
	except Exception as e:
		frappe.log_error(f"Error updating system default app: {str(e)}")
		frappe.throw(_("Failed to update system default app: {0}").format(str(e)))


@frappe.whitelist()
def reset_default_theme():
	"""Reset Desk Theme single doctype to standard default settings"""
	try:
		theme = frappe.get_doc("Desk Theme")
		theme.preset_theme = "Tech Blue (经典商务蓝 - 纷享销客/销售易风)"
		
		default_values = {
			"navbar_color": "#0052D9",
			"navbar_text_color": "#FFFFFF",
			"sidebar_background_color": "#001529",
			"sidebar_text_color": "#E6F7FF",
			"button_background_color": "#0052D9",
			"button_hover_background_color": "#0039B3",
			"button_text_color": "#FFFFFF",
			"button_hover_text_color": "#FFFFFF",
			"secondary_button_background_color": "#F0F2F5",
			"secondary_button_hover_background_color": "#E4E7ED",
			"secondary_button_text_color": "#1D2129",
			"secondary_button_hover_text_color": "#0052D9",
			"body_background_color": "#F2F3F5",
			"main_body_content_box_background_color": "#FFFFFF",
			"main_body_content_box_text_color": "#1D2129",
			"table_head_background_color": "#F7F8FA",
			"table_head_text_color": "#4E5969",
			"table_body_background_color": "#FFFFFF",
			"table_body_text_color": "#1D2129",
			"number_card_background_color": "#FFFFFF",
			"number_card_text_color": "#1D2129",
			"number_card_border_color": "#E5E6EB",
			"input_background_color": "#F7F8FA",
			"input_border_color": "#E5E6EB",
			"input_text_color": "#1D2129",
			"input_label_color": "#4E5969",
			"login_button_background_color": "#0052D9",
			"login_page_button_hover_background_color": "#0039B3",
			"login_button_text_color": "#FFFFFF",
			"login_box_background_color": "#FFFFFF",
			"login_page_background_color": "#F0F2F5",
			"footer_background_color": "#001529",
			"footer_text_color": "#8C8C8C",
			"hide_app_switcher": 0,
			"default_app": "",
			"hide_help_button": 0,
			"page_background_type": "",
			"sticky_footer": 0,
			"copyright_text": "",
			"footer_powered_by": "",
		}
		
		for key, val in default_values.items():
			if hasattr(theme, key):
				setattr(theme, key, val)

		theme.set("hide_search", [])
		theme.set("carousel_images", [])
		theme.save(ignore_permissions=True)
		
		return {
			"success": True,
			"message": _("Theme reset to default successfully")
		}
	except Exception as e:
		frappe.log_error(f"Error resetting desk theme: {str(e)}")
		frappe.throw(_("Failed to reset desk theme: {0}").format(str(e)))

