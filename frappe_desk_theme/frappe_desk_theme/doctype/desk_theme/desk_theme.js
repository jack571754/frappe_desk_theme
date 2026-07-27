// Copyright (c) 2025, Dhwani RIS and contributors
// For license information, please see license.txt

const CRM_THEME_PRESETS = [
	{
		id: "tech_blue",
		select_val: "Tech Blue (经典商务蓝 - 纷享销客/销售易风)",
		name: "经典商务蓝 (纷享销客 / 销售易风)",
		desc: "中国主流科技 CRM 标准蓝白高雅配色，专业稳重，提升协同信任度",
		badge: "最受欢迎",
		badge_class: "badge-primary",
		preview: { nav: "#0052D9", side: "#001529", btn: "#0052D9", bg: "#F2F3F5" },
		values: {
			navbar_color: "#0052D9",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#001529",
			sidebar_text_color: "#E6F7FF",
			button_background_color: "#0052D9",
			button_hover_background_color: "#0039B3",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#F0F2F5",
			secondary_button_hover_background_color: "#E4E7ED",
			secondary_button_text_color: "#1D2129",
			secondary_button_hover_text_color: "#0052D9",
			body_background_color: "#F2F3F5",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#1D2129",
			table_head_background_color: "#F7F8FA",
			table_head_text_color: "#4E5969",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#1D2129",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#1D2129",
			number_card_border_color: "#E5E6EB",
			input_background_color: "#F7F8FA",
			input_border_color: "#E5E6EB",
			input_text_color: "#1D2129",
			input_label_color: "#4E5969",
			login_button_background_color: "#0052D9",
			login_page_button_hover_background_color: "#0039B3",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#F0F2F5",
			footer_background_color: "#001529",
			footer_text_color: "#8C8C8C"
		}
	},
	{
		id: "feishu_light",
		select_val: "Feishu Light (极简飞书风 - 飞书/钉钉纯白高雅)",
		name: "极简飞书风 (飞书 / 钉钉纯白高雅)",
		desc: "纯白极简顶栏与浅灰低饱和度侧边栏，微渐变交互，极致优雅无干扰",
		badge: "现代化办公",
		badge_class: "badge-info",
		preview: { nav: "#FFFFFF", side: "#F5F6F7", btn: "#3370FF", bg: "#F5F6F7" },
		values: {
			navbar_color: "#FFFFFF",
			navbar_text_color: "#1F2329",
			sidebar_background_color: "#F5F6F7",
			sidebar_text_color: "#1F2329",
			button_background_color: "#3370FF",
			button_hover_background_color: "#2B58F0",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#EFF0F1",
			secondary_button_hover_background_color: "#E4E5E7",
			secondary_button_text_color: "#1F2329",
			secondary_button_hover_text_color: "#3370FF",
			body_background_color: "#F5F6F7",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#1F2329",
			table_head_background_color: "#F7F8FA",
			table_head_text_color: "#646A73",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#1F2329",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#1F2329",
			number_card_border_color: "#DEE0E2",
			input_background_color: "#F5F6F7",
			input_border_color: "#DEE0E2",
			input_text_color: "#1F2329",
			input_label_color: "#646A73",
			login_button_background_color: "#3370FF",
			login_page_button_hover_background_color: "#2B58F0",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#F5F6F7",
			footer_background_color: "#F5F6F7",
			footer_text_color: "#8F959E"
		}
	},
	{
		id: "chinese_red",
		select_val: "Chinese Red (尊贵中国红 - 国企/政企/大型制造)",
		name: "尊贵中国红 (国企 / 政企 / 大型制造)",
		desc: "沉稳大方中国红结合深色灰黑侧栏，彰显企业实力与品牌权威",
		badge: "政企标配",
		badge_class: "badge-danger",
		preview: { nav: "#B20813", side: "#1F1A1B", btn: "#C41420", bg: "#F7F8FA" },
		values: {
			navbar_color: "#B20813",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#1F1A1B",
			sidebar_text_color: "#F0E6E6",
			button_background_color: "#C41420",
			button_hover_background_color: "#9E0D17",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#F5ECEC",
			secondary_button_hover_background_color: "#E8D8D8",
			secondary_button_text_color: "#2C1E1E",
			secondary_button_hover_text_color: "#C41420",
			body_background_color: "#F7F8FA",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#2C1E1E",
			table_head_background_color: "#FAF2F2",
			table_head_text_color: "#6E4D4D",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#2C1E1E",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#2C1E1E",
			number_card_border_color: "#E8D8D8",
			input_background_color: "#FAF2F2",
			input_border_color: "#E8D8D8",
			input_text_color: "#2C1E1E",
			input_label_color: "#6E4D4D",
			login_button_background_color: "#C41420",
			login_page_button_hover_background_color: "#9E0D17",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#F7F8FA",
			footer_background_color: "#1F1A1B",
			footer_text_color: "#A89999"
		}
	},
	{
		id: "emerald_green",
		select_val: "Emerald Green (翡翠智造绿 - 用友/鼎捷 ERP 风)",
		name: "翡翠智造绿 (用友 / 鼎捷 ERP 风格)",
		desc: "经典 ERP 绿与藏青蓝侧边栏，适合制造、供应链与商品计划管理",
		badge: "ERP经典",
		badge_class: "badge-success",
		preview: { nav: "#00875A", side: "#091E42", btn: "#00875A", bg: "#F4F5F7" },
		values: {
			navbar_color: "#00875A",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#091E42",
			sidebar_text_color: "#EBECF0",
			button_background_color: "#00875A",
			button_hover_background_color: "#006644",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#E3FCEF",
			secondary_button_hover_background_color: "#ABF5D1",
			secondary_button_text_color: "#006644",
			secondary_button_hover_text_color: "#004733",
			body_background_color: "#F4F5F7",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#172B4D",
			table_head_background_color: "#F4F5F7",
			table_head_text_color: "#5E6C84",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#172B4D",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#172B4D",
			number_card_border_color: "#DFE1E6",
			input_background_color: "#FAFBFC",
			input_border_color: "#DFE1E6",
			input_text_color: "#172B4D",
			input_label_color: "#5E6C84",
			login_button_background_color: "#00875A",
			login_page_button_hover_background_color: "#006644",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#F4F5F7",
			footer_background_color: "#091E42",
			footer_text_color: "#A5ADBA"
		}
	},
	{
		id: "obsidian_gold",
		select_val: "Obsidian Gold (曜石黑金 - 字节/高定品牌风)",
		name: "曜石黑金 (字节 / 高定品牌风)",
		desc: "黑金渐变与雅致灰，高端大方，适合高端品牌管理与管理者仪表盘",
		badge: "尊享黑金",
		badge_class: "badge-warning",
		preview: { nav: "#1E1F23", side: "#141517", btn: "#FFB800", bg: "#0E0F11" },
		values: {
			navbar_color: "#1E1F23",
			navbar_text_color: "#FFD700",
			sidebar_background_color: "#141517",
			sidebar_text_color: "#F0E6D2",
			button_background_color: "#FFB800",
			button_hover_background_color: "#E6A100",
			button_text_color: "#141517",
			button_hover_text_color: "#141517",
			secondary_button_background_color: "#2C2D32",
			secondary_button_hover_background_color: "#3A3B42",
			secondary_button_text_color: "#FFD700",
			secondary_button_hover_text_color: "#FFB800",
			body_background_color: "#0E0F11",
			main_body_content_box_background_color: "#1E1F23",
			main_body_content_box_text_color: "#F0E6D2",
			table_head_background_color: "#25272D",
			table_head_text_color: "#D4C5A9",
			table_body_background_color: "#1E1F23",
			table_body_text_color: "#F0E6D2",
			number_card_background_color: "#1E1F23",
			number_card_text_color: "#FFD700",
			number_card_border_color: "#3A3B42",
			input_background_color: "#25272D",
			input_border_color: "#3A3B42",
			input_text_color: "#F0E6D2",
			input_label_color: "#D4C5A9",
			login_button_background_color: "#FFB800",
			login_page_button_hover_background_color: "#E6A100",
			login_button_text_color: "#141517",
			login_box_background_color: "#1E1F23",
			login_page_background_color: "#0E0F11",
			footer_background_color: "#141517",
			footer_text_color: "#998E7B"
		}
	},
	{
		id: "purple_tech",
		select_val: "Purple Tech (紫金未来 - AI/大模型科技风)",
		name: "紫金未来 (AI / 大模型科技风)",
		desc: "深紫渐变与紫金高亮，极具未来科技感，适合 AI/大数据应用系统",
		badge: "未来科技",
		badge_class: "badge-primary",
		preview: { nav: "#2B1F47", side: "#171026", btn: "#722ED1", bg: "#F9F0FF" },
		values: {
			navbar_color: "#2B1F47",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#171026",
			sidebar_text_color: "#EFDBFF",
			button_background_color: "#722ED1",
			button_hover_background_color: "#531DAB",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#F9F0FF",
			secondary_button_hover_background_color: "#EFDBFF",
			secondary_button_text_color: "#722ED1",
			secondary_button_hover_text_color: "#531DAB",
			body_background_color: "#F9F0FF",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#22075E",
			table_head_background_color: "#F9F0FF",
			table_head_text_color: "#531DAB",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#22075E",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#22075E",
			number_card_border_color: "#D3ADF7",
			input_background_color: "#F9F0FF",
			input_border_color: "#D3ADF7",
			input_text_color: "#22075E",
			input_label_color: "#531DAB",
			login_button_background_color: "#722ED1",
			login_page_button_hover_background_color: "#531DAB",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#F9F0FF",
			footer_background_color: "#171026",
			footer_text_color: "#9254DE"
		}
	},
	{
		id: "teal_harmony",
		select_val: "Teal Harmony (青翠和弦 - 医药/医疗/新能源)",
		name: "青翠和弦 (医药 / 医疗 / 新能源)",
		desc: "清爽青翠蓝绿调，给人健康、环保与可持续发展的美学感受",
		badge: "清爽健康",
		badge_class: "badge-info",
		preview: { nav: "#006D75", side: "#002329", btn: "#13C2C2", bg: "#E6FFFB" },
		values: {
			navbar_color: "#006D75",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#002329",
			sidebar_text_color: "#E6FFFB",
			button_background_color: "#13C2C2",
			button_hover_background_color: "#08979C",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#E6FFFB",
			secondary_button_hover_background_color: "#B5F5EC",
			secondary_button_text_color: "#006D75",
			secondary_button_hover_text_color: "#00474F",
			body_background_color: "#E6FFFB",
			main_body_content_box_background_color: "#FFFFFF",
			main_body_content_box_text_color: "#002329",
			table_head_background_color: "#E6FFFB",
			table_head_text_color: "#006D75",
			table_body_background_color: "#FFFFFF",
			table_body_text_color: "#002329",
			number_card_background_color: "#FFFFFF",
			number_card_text_color: "#002329",
			number_card_border_color: "#87E8DE",
			input_background_color: "#E6FFFB",
			input_border_color: "#87E8DE",
			input_text_color: "#002329",
			input_label_color: "#006D75",
			login_button_background_color: "#13C2C2",
			login_page_button_hover_background_color: "#08979C",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#FFFFFF",
			login_page_background_color: "#E6FFFB",
			footer_background_color: "#002329",
			footer_text_color: "#5CDBD5"
		}
	},
	{
		id: "dark_mode",
		select_val: "Dark Mode (高级暗黑夜色 - 护眼极客模式)",
		name: "高级暗黑夜色 (护眼极客模式)",
		desc: "深邃玄黑背景与高对比蓝光，适合夜间高强度数据分析与运维监控",
		badge: "暗黑护眼",
		badge_class: "badge-warning",
		preview: { nav: "#141414", side: "#1F1F1F", btn: "#1677FF", bg: "#000000" },
		values: {
			navbar_color: "#141414",
			navbar_text_color: "#FFFFFF",
			sidebar_background_color: "#1F1F1F",
			sidebar_text_color: "#E5E5E5",
			button_background_color: "#1677FF",
			button_hover_background_color: "#0958D9",
			button_text_color: "#FFFFFF",
			button_hover_text_color: "#FFFFFF",
			secondary_button_background_color: "#262626",
			secondary_button_hover_background_color: "#303030",
			secondary_button_text_color: "#D9D9D9",
			secondary_button_hover_text_color: "#1677FF",
			body_background_color: "#000000",
			main_body_content_box_background_color: "#141414",
			main_body_content_box_text_color: "#E5E5E5",
			table_head_background_color: "#1F1F1F",
			table_head_text_color: "#A6A6A6",
			table_body_background_color: "#141414",
			table_body_text_color: "#E5E5E5",
			number_card_background_color: "#141414",
			number_card_text_color: "#E5E5E5",
			number_card_border_color: "#303030",
			input_background_color: "#1F1F1F",
			input_border_color: "#434343",
			input_text_color: "#E5E5E5",
			input_label_color: "#A6A6A6",
			login_button_background_color: "#1677FF",
			login_page_button_hover_background_color: "#0958D9",
			login_button_text_color: "#FFFFFF",
			login_box_background_color: "#141414",
			login_page_background_color: "#000000",
			footer_background_color: "#141414",
			footer_text_color: "#8C8C8C"
		}
	}
];

frappe.ui.form.on("Desk Theme", {
	refresh(frm) {
		// 渲染内置的 HTML 预设卡片选择器
		render_preset_cards_in_form(frm);

		// Load app options for default_app field
		frappe.xcall("frappe.apps.get_apps").then((r) => {
			let apps = r?.map((r) => r.name) || [];
			frm.set_df_property("default_app", "options", ["", ...apps]);
		});

		// Load current system default app if hide_app_switcher is enabled
		if (frm.doc.hide_app_switcher) {
			frappe.call({
				method: "frappe.client.get_value",
				args: {
					doctype: "System Settings",
					fieldname: "default_app"
				},
				callback: function(r) {
					if (r.message && r.message.default_app) {
						frm.set_value("default_app", r.message.default_app);
					}
				}
			});
		}

		// Add CRM Theme Presets Dialog Button
		frm.add_custom_button(__('🎨 弹出选主题框'), function() {
			open_crm_theme_presets_dialog(frm);
		}).addClass('btn-primary');

		// Add refresh theme button       
		frm.add_custom_button(__('刷新主题缓存'), function() {
			window.frappeDeskTheme?.clearCache();
			window.frappeDeskTheme?.refreshTheme();
			frappe.show_alert({message: __('主题缓存已刷新'), indicator: 'green'});
		});
	},

	preset_theme(frm) {
		const val = frm.doc.preset_theme;
		if (val && val !== "Custom") {
			const target = CRM_THEME_PRESETS.find(p => p.select_val === val);
			if (target) {
				apply_preset_values_to_form(frm, target);
			}
		}
	},

	hide_app_switcher(frm) {
		if (frm.doc.hide_app_switcher) {
			frappe.call({
				method: "frappe.client.get_value",
				args: {
					doctype: "System Settings",
					fieldname: "default_app"
				},
				callback: function(r) {
					if (r.message && r.message.default_app) {
						frm.set_value("default_app", r.message.default_app);
					}
				}
			});
		} else {
			frm.set_value("default_app", "");
		}
	},

	validate(frm) {
		if (frm.doc.hide_app_switcher && !frm.doc.default_app) {
			frappe.throw(__("Default App is required when App Switcher is hidden"));
		}
	},

	after_save(frm) {
		window.frappeDeskTheme?.clearCache();
		window.frappeDeskTheme?.refreshTheme();

		if (frm.doc.hide_app_switcher && frm.doc.default_app) {
			frappe.call({
				method: "frappe_desk_theme.frappe_desk_theme.doctype.desk_theme.desk_theme.update_system_default_app",
				args: {
					default_app: frm.doc.default_app
				},
				callback: function(r) {
					if (r.message && r.message.success) {
						frappe.show_alert({
							message: __("系统默认应用更新成功"),
							indicator: "green"
						});
					}
				}
			});
		}
	}
});

/**
 * 嵌入到表单顶部的 8 款预设卡片渲染器
 */
function render_preset_cards_in_form(frm) {
	if (!frm.fields_dict.preset_theme_html) return;

	let html = `
	<div style="padding: 10px 0 20px 0;">
		<div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
			<span style="font-size: 13px; color: #666; font-weight: 500;">
				👇 点击下方任意预设主题卡片，即可自动填充对应配色并保存切换：
			</span>
		</div>
		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
	`;

	CRM_THEME_PRESETS.forEach(p => {
		const isSelected = (frm.doc.preset_theme === p.select_val);
		const borderStyle = isSelected ? "2px solid #3370FF" : "1px solid #E5E6EB";
		const activeBadge = isSelected ? `<span class="badge badge-success" style="position: absolute; top: 10px; right: 10px; font-size: 10px;">当前生效</span>` : "";

		html += `
		<div class="in-form-theme-card" data-id="${p.id}" style="
			border: ${borderStyle};
			border-radius: 8px;
			padding: 12px;
			background: #fff;
			cursor: pointer;
			position: relative;
			transition: all 0.2s ease;
			box-shadow: 0 2px 4px rgba(0,0,0,0.03);
		" onmouseover="this.style.borderColor='#3370FF'; this.style.boxShadow='0 4px 12px rgba(51,112,255,0.15)'" onmouseout="this.style.borderColor='${isSelected ? '#3370FF' : '#E5E6EB'}'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.03)'">
			${activeBadge}
			<div style="margin-bottom: 6px;">
				<span style="font-weight: 600; font-size: 13px; color: #1D2129;">${p.name}</span>
			</div>
			<p style="font-size: 11px; color: #86909C; margin-bottom: 10px; line-height: 1.4; height: 30px; overflow: hidden;">
				${p.desc}
			</p>
			<div style="display: flex; height: 24px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08);">
				<div style="flex: 2; background: ${p.preview.nav}; text-align: center; color: #fff; font-size: 9px; line-height: 24px;">顶栏</div>
				<div style="flex: 1.5; background: ${p.preview.side}; text-align: center; color: #fff; font-size: 9px; line-height: 24px;">侧栏</div>
				<div style="flex: 1.5; background: ${p.preview.btn}; text-align: center; color: #fff; font-size: 9px; line-height: 24px;">按钮</div>
				<div style="flex: 2; background: ${p.preview.bg}; text-align: center; color: #666; font-size: 9px; line-height: 24px;">背景</div>
			</div>
		</div>
		`;
	});

	html += `
		</div>
	</div>
	`;

	frm.fields_dict.preset_theme_html.$wrapper.html(html);

	// 绑定卡片点击逻辑
	frm.fields_dict.preset_theme_html.$wrapper.find('.in-form-theme-card').on('click', function() {
		const presetId = $(this).attr('data-id');
		const targetPreset = CRM_THEME_PRESETS.find(p => p.id === presetId);
		if (targetPreset) {
			frm.set_value('preset_theme', targetPreset.select_val);
			apply_preset_values_to_form(frm, targetPreset);
			frm.save();
		}
	});
}

/**
 * 填充预设属性到表单（包含字段存在性安全校验）
 */
function apply_preset_values_to_form(frm, preset) {
	if (frm.fields_dict.preset_theme) {
		frm.set_value('preset_theme', preset.select_val);
	}
	
	Object.keys(preset.values).forEach(key => {
		if (frm.fields_dict[key]) {
			frm.set_value(key, preset.values[key]);
		}
	});

	frappe.show_alert({
		message: `已一键应用主题方案：【${preset.name}】`,
		indicator: 'green'
	}, 4);
}

/**
 * 弹窗式预设主题选择器
 */
function open_crm_theme_presets_dialog(frm) {
	let html = `
	<div style="padding: 10px 0;">
		<p style="color: #666; font-size: 13px; margin-bottom: 16px;">
			请从以下 8 款中国主流 CRM & ERP 预设配色方案中选择。点击方案卡片后将自动填入对应配色并触发保存预览。
		</p>
		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 12px;">
	`;

	CRM_THEME_PRESETS.forEach(p => {
		html += `
		<div class="crm-theme-card-dialog" data-id="${p.id}" style="
			border: 1px solid #E5E6EB;
			border-radius: 8px;
			padding: 12px;
			background: #fff;
			cursor: pointer;
			transition: all 0.2s ease;
			box-shadow: 0 2px 4px rgba(0,0,0,0.03);
		" onmouseover="this.style.borderColor='#3370FF'; this.style.boxShadow='0 4px 12px rgba(51,112,255,0.15)'" onmouseout="this.style.borderColor='#E5E6EB'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.03)'">
			<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
				<span style="font-weight: 600; font-size: 13px; color: #1D2129;">${p.name}</span>
				<span class="badge ${p.badge_class}" style="font-size: 10px; padding: 2px 6px; border-radius: 4px;">${p.badge}</span>
			</div>
			<p style="font-size: 11px; color: #86909C; margin-bottom: 10px; line-height: 1.4; height: 30px; overflow: hidden;">
				${p.desc}
			</p>
			<div style="display: flex; height: 26px; border-radius: 4px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08);">
				<div style="flex: 2; background: ${p.preview.nav}; text-align: center; color: #fff; font-size: 9px; line-height: 26px;">顶栏</div>
				<div style="flex: 1.5; background: ${p.preview.side}; text-align: center; color: #fff; font-size: 9px; line-height: 26px;">侧栏</div>
				<div style="flex: 1.5; background: ${p.preview.btn}; text-align: center; color: #fff; font-size: 9px; line-height: 26px;">按钮</div>
				<div style="flex: 2; background: ${p.preview.bg}; text-align: center; color: #666; font-size: 9px; line-height: 26px;">背景</div>
			</div>
		</div>
		`;
	});

	html += `
		</div>
	</div>
	`;

	const d = new frappe.ui.Dialog({
		title: __('🎨 选择中国 CRM 风格预设主题'),
		size: 'large',
		fields: [
			{
				fieldname: 'presets_cards_html',
				fieldtype: 'HTML',
				options: html
			}
		],
		primary_action_label: __('关闭'),
		primary_action() {
			d.hide();
		}
	});

	d.show();

	setTimeout(() => {
		d.fields_dict.presets_cards_html.$wrapper.find('.crm-theme-card-dialog').on('click', function() {
			const presetId = $(this).attr('data-id');
			const targetPreset = CRM_THEME_PRESETS.find(p => p.id === presetId);
			if (targetPreset) {
				apply_preset_values_to_form(frm, targetPreset);
				d.hide();
				frm.save();
			}
		});
	}, 100);
}




