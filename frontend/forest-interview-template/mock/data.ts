const schema = {
  "docs": [
    {
      "doctype": "DocType",
      "name": "Fiscal Year",
      "creation": "2013-01-22 16:50:25",
      "modified": "2020-11-05 12:16:53.081573",
      "modified_by": "Administrator",
      "owner": "Administrator",
      "docstatus": 0,
      "idx": 1,
      "issingle": 0,
      "is_tree": 0,
      "istable": 0,
      "editable_grid": 0,
      "track_changes": 0,
      "module": "Accounts",
      "autoname": "field:year",
      "sort_field": "name",
      "sort_order": "DESC",
      "description": "**Fiscal Year** represents a Financial Year. All accounting entries and other major transactions are tracked against **Fiscal Year**.",
      "read_only": 0,
      "in_create": 0,
      "allow_copy": 0,
      "allow_rename": 0,
      "allow_import": 1,
      "hide_toolbar": 0,
      "track_seen": 0,
      "max_attachments": 0,
      "document_type": "Setup",
      "icon": "fa fa-calendar",
      "engine": "InnoDB",
      "is_submittable": 0,
      "show_name_in_global_search": 1,
      "custom": 0,
      "beta": 0,
      "has_web_view": 0,
      "allow_guest_to_view": 0,
      "email_append_to": 0,
      "show_title_field_in_link": 0,
      "migration_hash": "4f6eba725df7161ff2fa9156c26e5da2",
      "translated_doctype": 0,
      "is_calendar_and_gantt": 0,
      "quick_entry": 0,
      "track_views": 0,
      "is_virtual": 0,
      "allow_events_in_timeline": 0,
      "allow_auto_repeat": 0,
      "make_attachments_public": 0,
      "force_re_route_to_default_view": 0,
      "show_preview_popup": 0,
      "index_web_pages_for_search": 0,
      "fields": [
        {
          "doctype": "DocField",
          "name": "7baecdac52",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 1,
          "fieldname": "year",
          "label": "Year Name",
          "oldfieldname": "year",
          "fieldtype": "Data",
          "oldfieldtype": "Data",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 0,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 1,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 1,
          "no_copy": 0,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "description": "For e.g. 2012, 2012-13",
          "in_list_view": 1,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "3d2311d939",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 2,
          "fieldname": "disabled",
          "label": "Disabled",
          "fieldtype": "Check",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 0,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 0,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 0,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "default": "0",
          "in_list_view": 0,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "9de5138f9f",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 3,
          "fieldname": "is_short_year",
          "label": "Is Short Year",
          "fieldtype": "Check",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 1,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 0,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 0,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "default": "0",
          "description": "Less than 12 months.",
          "in_list_view": 0,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "e78393dd37",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 4,
          "fieldname": "year_start_date",
          "label": "Year Start Date",
          "oldfieldname": "year_start_date",
          "fieldtype": "Date",
          "oldfieldtype": "Date",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 1,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 1,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 1,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "in_list_view": 1,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "bc17b50f20",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 5,
          "fieldname": "year_end_date",
          "label": "Year End Date",
          "fieldtype": "Date",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 1,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 1,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 1,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "in_list_view": 1,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "3e6d789639",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 6,
          "fieldname": "companies",
          "label": "Companies",
          "fieldtype": "Table",
          "options": "Fiscal Year Company",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 0,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 0,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 0,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "in_list_view": 0,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        },
        {
          "doctype": "DocField",
          "name": "d46725c3e8",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 7,
          "fieldname": "auto_created",
          "label": "Auto Created",
          "fieldtype": "Check",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 1,
          "set_only_once": 0,
          "allow_in_quick_entry": 0,
          "print_hide": 1,
          "report_hide": 0,
          "reqd": 0,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 1,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 0,
          "columns": 0,
          "default": "0",
          "in_list_view": 0,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 1,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null,
          "linked_document_type": null
        }
      ],
      "permissions": [
        {
          "doctype": "DocPerm",
          "name": "dacc7c8871",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 1,
          "permlevel": 0,
          "role": "System Manager",
          "read": 1,
          "write": 1,
          "create": 1,
          "submit": 0,
          "cancel": 0,
          "delete": 1,
          "amend": 0,
          "report": 1,
          "export": 0,
          "import": 0,
          "share": 1,
          "print": 1,
          "email": 1,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        },
        {
          "doctype": "DocPerm",
          "name": "8f52a64580",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 2,
          "permlevel": 0,
          "role": "Sales User",
          "read": 1,
          "write": 0,
          "create": 0,
          "submit": 0,
          "cancel": 0,
          "delete": 0,
          "amend": 0,
          "report": 0,
          "export": 0,
          "import": 0,
          "share": 0,
          "print": 0,
          "email": 0,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        },
        {
          "doctype": "DocPerm",
          "name": "484d5cfeb5",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 3,
          "permlevel": 0,
          "role": "Purchase User",
          "read": 1,
          "write": 0,
          "create": 0,
          "submit": 0,
          "cancel": 0,
          "delete": 0,
          "amend": 0,
          "report": 0,
          "export": 0,
          "import": 0,
          "share": 0,
          "print": 0,
          "email": 0,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        },
        {
          "doctype": "DocPerm",
          "name": "ff313dbc9c",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 4,
          "permlevel": 0,
          "role": "Accounts User",
          "read": 1,
          "write": 0,
          "create": 0,
          "submit": 0,
          "cancel": 0,
          "delete": 0,
          "amend": 0,
          "report": 0,
          "export": 0,
          "import": 0,
          "share": 0,
          "print": 0,
          "email": 0,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        },
        {
          "doctype": "DocPerm",
          "name": "cd41387a5b",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 5,
          "permlevel": 0,
          "role": "Stock User",
          "read": 1,
          "write": 0,
          "create": 0,
          "submit": 0,
          "cancel": 0,
          "delete": 0,
          "amend": 0,
          "report": 0,
          "export": 0,
          "import": 0,
          "share": 0,
          "print": 0,
          "email": 0,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        },
        {
          "doctype": "DocPerm",
          "name": "8af6748b4f",
          "creation": "2013-01-22 16:50:25",
          "modified": "2022-11-01 13:48:03.994918",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year",
          "parentfield": "permissions",
          "parenttype": "DocType",
          "idx": 6,
          "permlevel": 0,
          "role": "Employee",
          "read": 1,
          "write": 0,
          "create": 0,
          "submit": 0,
          "cancel": 0,
          "delete": 0,
          "amend": 0,
          "report": 0,
          "export": 0,
          "import": 0,
          "share": 0,
          "print": 0,
          "email": 0,
          "if_owner": 0,
          "select": 0,
          "set_user_permissions": 0,
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ]
        }
      ],
      "__js": "\n\n/* Adding /workspace/development/frappe-bench/apps/erpnext/erpnext/accounts/doctype/fiscal_year/fiscal_year.js */\n\n// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors\n// License: GNU General Public License v3. See license.txt\n\nfrappe.ui.form.on('Fiscal Year', {\n\tonload: function(frm) {\n\t\tif(frm.doc.__islocal) {\n\t\t\tfrm.set_value(\"year_start_date\",\n\t\t\t\tfrappe.datetime.add_days(frappe.defaults.get_default(\"year_end_date\"), 1));\n\t\t}\n\t},\n\trefresh: function (frm) {\n\t\tif (!frm.doc.__islocal && (frm.doc.name != frappe.sys_defaults.fiscal_year)) {\n\t\t\tfrm.add_custom_button(__(\"Set as Default\"), () => frm.events.set_as_default(frm));\n\t\t\tfrm.set_intro(__(\"To set this Fiscal Year as Default, click on 'Set as Default'\"));\n\t\t} else {\n\t\t\tfrm.set_intro(\"\");\n\t\t}\n\t},\n\tset_as_default: function(frm) {\n\t\treturn frm.call('set_as_default');\n\t},\n\tyear_start_date: function(frm) {\n\t\tif (!frm.doc.is_short_year) {\n\t\t\tlet year_end_date =\n\t\t\t\tfrappe.datetime.add_days(frappe.datetime.add_months(frm.doc.year_start_date, 12), -1);\n\t\t\tfrm.set_value(\"year_end_date\", year_end_date);\n\t\t}\n\t},\n});\n\n\n//# sourceURL=fiscal_year__js",
      "__custom_js": "\n\n//# sourceURL=fiscal_year__custom_js",
      "__custom_list_js": "\n\n//# sourceURL=fiscal_year__custom_list_js",
      "__assets_loaded": true,
      "actions": [

      ],
      "links": [

      ],
      "states": [

      ],
      "__css": null,
      "__list_js": null,
      "__calendar_js": null,
      "__map_js": null,
      "__linked_with": null,
      "__messages": null,
      "__print_formats": [

      ],
      "__workflow_docs": [

      ],
      "__form_grid_templates": null,
      "__listview_template": null,
      "__tree_js": null,
      "__dashboard": {
        "fieldname": "fiscal_year",
        "transactions": [
          {
            "label": "Budgets",
            "items": [
              "Budget"
            ]
          },
          {
            "label": "References",
            "items": [
              "Period Closing Voucher"
            ]
          },
          {
            "label": "Target Details",
            "items": [
              "Sales Person",
              "Sales Partner",
              "Territory",
              "Monthly Distribution"
            ]
          }
        ],
        "non_standard_fieldnames": {

        },
        "internal_links": {

        }
      },
      "__kanban_column_fields": [

      ],
      "__templates": null
    },
    {
      "doctype": "DocType",
      "name": "Fiscal Year Company",
      "creation": "2014-10-02 13:35:44.155278",
      "modified": "2021-09-28 18:01:53.495929",
      "modified_by": "Administrator",
      "owner": "Administrator",
      "docstatus": 0,
      "idx": 0,
      "issingle": 0,
      "is_tree": 0,
      "istable": 1,
      "editable_grid": 1,
      "track_changes": 1,
      "module": "Accounts",
      "sort_field": "modified",
      "sort_order": "DESC",
      "read_only": 0,
      "in_create": 0,
      "allow_copy": 0,
      "allow_rename": 0,
      "allow_import": 0,
      "hide_toolbar": 0,
      "track_seen": 0,
      "max_attachments": 0,
      "document_type": "Setup",
      "engine": "InnoDB",
      "is_submittable": 0,
      "show_name_in_global_search": 0,
      "custom": 0,
      "beta": 0,
      "has_web_view": 0,
      "allow_guest_to_view": 0,
      "email_append_to": 0,
      "show_title_field_in_link": 0,
      "migration_hash": "f09dbbddbf6c401c7a36a3606e8c59ee",
      "translated_doctype": 0,
      "is_calendar_and_gantt": 0,
      "quick_entry": 0,
      "track_views": 0,
      "is_virtual": 0,
      "allow_events_in_timeline": 0,
      "allow_auto_repeat": 0,
      "make_attachments_public": 0,
      "force_re_route_to_default_view": 0,
      "show_preview_popup": 0,
      "index_web_pages_for_search": 1,
      "fields": [
        {
          "doctype": "DocField",
          "name": "e5ed057526",
          "creation": "2014-10-02 13:35:44.155278",
          "modified": "2022-11-01 13:48:04.197065",
          "modified_by": "Administrator",
          "owner": "Administrator",
          "docstatus": 0,
          "parent": "Fiscal Year Company",
          "parentfield": "fields",
          "parenttype": "DocType",
          "idx": 1,
          "fieldname": "company",
          "label": "Company",
          "fieldtype": "Link",
          "options": "Company",
          "search_index": 0,
          "show_dashboard": 0,
          "hidden": 0,
          "set_only_once": 0,
          "allow_in_quick_entry": 0,
          "print_hide": 0,
          "report_hide": 0,
          "reqd": 0,
          "bold": 0,
          "in_global_search": 0,
          "collapsible": 0,
          "unique": 0,
          "no_copy": 0,
          "allow_on_submit": 0,
          "show_preview_popup": 0,
          "permlevel": 0,
          "ignore_user_permissions": 1,
          "columns": 0,
          "in_list_view": 1,
          "fetch_if_empty": 0,
          "in_filter": 0,
          "remember_last_selected_value": 0,
          "ignore_xss_filter": 0,
          "print_hide_if_no_value": 0,
          "allow_bulk_edit": 0,
          "in_standard_filter": 0,
          "in_preview": 0,
          "read_only": 0,
          "length": 0,
          "translatable": 0,
          "hide_border": 0,
          "hide_days": 0,
          "hide_seconds": 0,
          "non_negative": 0,
          "is_virtual": 0,
          "linked_document_type": "Setup",
          "fields": [

          ],
          "permissions": [

          ],
          "actions": [

          ],
          "links": [

          ],
          "states": [

          ],
          "search_fields": null,
          "is_custom_field": null
        }
      ],
      "__assets_loaded": true,
      "permissions": [

      ],
      "actions": [

      ],
      "links": [

      ],
      "states": [

      ],
      "__js": null,
      "__css": null,
      "__list_js": null,
      "__calendar_js": null,
      "__map_js": null,
      "__linked_with": null,
      "__messages": null,
      "__print_formats": null,
      "__workflow_docs": null,
      "__form_grid_templates": null,
      "__listview_template": null,
      "__tree_js": null,
      "__dashboard": null,
      "__kanban_column_fields": null,
      "__templates": null,
      "__custom_js": null,
      "__custom_list_js": null
    }
  ],
  "user_settings": "{\"updated_on\": \"Tue Nov 01 2022 16:49:35 GMT+0800\", \"last_view\": \"List\", \"List\": {\"filters\": [], \"sort_by\": \"modified\", \"sort_order\": \"desc\"}}"
}

const data = {
  "docs": [
    {
      "name": "2022",
      "owner": "Administrator",
      "creation": "2022-11-01 14:22:48.502532",
      "modified": "2022-11-01 14:22:48.502532",
      "modified_by": "Administrator",
      "docstatus": 0,
      "idx": 0,
      "year": "2022",
      "disabled": 0,
      "is_short_year": 0,
      "year_start_date": "2022-11-02",
      "year_end_date": "2023-11-01",
      "auto_created": 0,
      "doctype": "Fiscal Year",
      "companies": [

      ]
    }
  ],
  "docinfo": {
    "user_info": {

    },
    "comments": [

    ],
    "shared": [

    ],
    "assignment_logs": [

    ],
    "attachment_logs": [

    ],
    "info_logs": [

    ],
    "like_logs": [

    ],
    "workflow_logs": [

    ],
    "doctype": "Fiscal Year",
    "name": "2022",
    "attachments": [

    ],
    "communications": [

    ],
    "automated_messages": [

    ],
    "total_comments": 0,
    "versions": [

    ],
    "assignments": [

    ],
    "permissions": {
      "select": 1,
      "read": 1,
      "write": 1,
      "create": 1,
      "delete": 1,
      "submit": 0,
      "cancel": 1,
      "amend": 1,
      "print": 1,
      "email": 1,
      "report": 1,
      "import": 1,
      "export": 1,
      "set_user_permissions": 1,
      "share": 1
    },
    "views": [

    ],
    "energy_point_logs": [

    ],
    "additional_timeline_content": [

    ],
    "milestones": [

    ],
    "is_document_followed": null,
    "tags": "",
    "document_email": null
  },
  "_link_titles": {

  }
}
