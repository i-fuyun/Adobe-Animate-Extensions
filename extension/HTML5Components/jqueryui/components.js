{
	"category": "CATEGORY_JQUERYUI",
	"components": [{
			"className": "an.RadioSet",
			"displayName": "DISP_NAME_RADIOSET",
			"version": "1.0",
			"source": "src/radioset.js",
			"icon": "assets/radioset-icon.png",
			"dimensions": [300, 64],
			"dependencies": [
				{"src": "../lib/jquery-3.4.1.min.js", "cdn": "https://code.jquery.com/jquery-3.4.1.min.js"},
				{"src": "../sdk/anwidget.js"},
				{"src": "jquery-ui-1.12.0/jquery-ui.min.js", "cdn": "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"},
				{"src": "jquery-ui-1.12.0/jquery-ui.min.css", "cdn": "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_444444_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_444444_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_555555_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_555555_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_777777_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_777777_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_cc0000_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_cc0000_256x240.png"},				
				{"src": "jquery-ui-1.12.0/images/ui-icons_ffffff_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_ffffff_256x240.png"}
				],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": ""},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_ITEMS", "variable": "items", "type": "Collection", "default": "dummy, dummy, items, 1, "},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "jqueryui-radioset"}
			]
		},
		{
			"className": "an.DatePicker",
			"displayName": "DISP_NAME_DATEPICKER",
			"version": "1.0",
			"source": "src/datepicker.js",
			"icon": "assets/datepicker-icon.png",
			"dimensions": [100, 22],
			"dependencies": [
				{"src": "../lib/jquery-3.4.1.min.js", "cdn": "https://code.jquery.com/jquery-3.4.1.min.js"},
				{"src": "../sdk/anwidget.js"},
				{"src": "jquery-ui-1.12.0/jquery-ui.min.js", "cdn": "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"},
				{"src": "jquery-ui-1.12.0/jquery-ui.min.css", "cdn": "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_444444_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_444444_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_555555_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_555555_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_777777_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_777777_256x240.png"},
				{"src": "jquery-ui-1.12.0/images/ui-icons_cc0000_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_cc0000_256x240.png"},				
				{"src": "jquery-ui-1.12.0/images/ui-icons_ffffff_256x240.png", "cdn": "https://code.jquery.com/ui/images/ui-icons_ffffff_256x240.png"}
			],
			"properties": [
				{"name": "PROP_LABEL", "variable": "label", "type": "String", "default": ""},
				{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"},
				{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "jqueryui-datepicker"}
			]
		}]
}