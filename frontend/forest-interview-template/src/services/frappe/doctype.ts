export interface BaseDocument extends Record<string, any> {
  // Identifier.
  doctype?: KnownDocType | string;
  name?: string;

  // System attributes.
  creation?: string;
  modified?: string;
  modified_by?: string;
  owner?: string;
  idx?: number;
  docstatus?: DocStatus;
  _comment_count?: number;
  _user_tags?: any;
  _comments?: any;
  _assign?: any;
  _liked_by?: any;
  _seen?: string;
  __js?: string;
  __list_js?: string;
  __custom_js?: string;
  __custom_list_js?: string;
  __assets_loaded?: boolean;
  __css?: any;
  __calendar_js?: any;
  __map_js?: any;
  __linked_with?: any;
  __messages?: any;
  __print_formats?: any[];
  __workflow_docs?: any[];
  __form_grid_templates?: any;
  __listview_template?: any;
  __tree_js?: any;
  __dashboard?: Dashboard;
  __kanban_column_fields?: any[];
  __templates?: Templates;

  // Nested doc type
  parent?: string;
  parentfield?: string;
  parenttype?: string;
}

// A non-exhaustive list of doc types.
export enum KnownDocType {
  ACCOUNTS_ACCOUNT = 'Account',
  ACCOUNTS_ACCOUNTING_DIMENSION_DETAIL = 'Accounting Dimension Detail',
  ACCOUNTS_ACCOUNTING_DIMENSION_FILTER = 'Accounting Dimension Filter',
  ACCOUNTS_ACCOUNTING_DIMENSION = 'Accounting Dimension',
  ACCOUNTS_ACCOUNTING_PERIOD = 'Accounting Period',
  ACCOUNTS_ACCOUNTS_SETTINGS = 'Accounts Settings',
  ACCOUNTS_ADVANCE_TAX = 'Advance Tax',
  ACCOUNTS_ADVANCE_TAXES_AND_CHARGES = 'Advance Taxes and Charges',
  ACCOUNTS_ALLOWED_DIMENSION = 'Allowed Dimension',
  ACCOUNTS_ALLOWED_TO_TRANSACT_WITH = 'Allowed To Transact With',
  ACCOUNTS_APPLICABLE_ON_ACCOUNT = 'Applicable On Account',
  ACCOUNTS_BANK_ACCOUNT_SUBTYPE = 'Bank Account Subtype',
  ACCOUNTS_BANK_ACCOUNT_TYPE = 'Bank Account Type',
  ACCOUNTS_BANK_ACCOUNT = 'Bank Account',
  ACCOUNTS_BANK_CLEARANCE_DETAIL = 'Bank Clearance Detail',
  ACCOUNTS_BANK_CLEARANCE = 'Bank Clearance',
  ACCOUNTS_BANK_GUARANTEE = 'Bank Guarantee',
  ACCOUNTS_BANK_RECONCILIATION_TOOL = 'Bank Reconciliation Tool',
  ACCOUNTS_BANK_STATEMENT_IMPORT = 'Bank Statement Import',
  ACCOUNTS_BANK_TRANSACTION_MAPPING = 'Bank Transaction Mapping',
  ACCOUNTS_BANK_TRANSACTION_PAYMENTS = 'Bank Transaction Payments',
  ACCOUNTS_BANK_TRANSACTION = 'Bank Transaction',
  ACCOUNTS_BANK = 'Bank',
  ACCOUNTS_BUDGET_ACCOUNT = 'Budget Account',
  ACCOUNTS_BUDGET = 'Budget',
  ACCOUNTS_CAMPAIGN_ITEM = 'Campaign Item',
  ACCOUNTS_CASH_FLOW_MAPPER = 'Cash Flow Mapper',
  ACCOUNTS_CASH_FLOW_MAPPING_ACCOUNTS = 'Cash Flow Mapping Accounts',
  ACCOUNTS_CASH_FLOW_MAPPING_TEMPLATE_DETAILS = 'Cash Flow Mapping Template Details',
  ACCOUNTS_CASH_FLOW_MAPPING_TEMPLATE = 'Cash Flow Mapping Template',
  ACCOUNTS_CASH_FLOW_MAPPING = 'Cash Flow Mapping',
  ACCOUNTS_CASHIER_CLOSING_PAYMENTS = 'Cashier Closing Payments',
  ACCOUNTS_CASHIER_CLOSING = 'Cashier Closing',
  ACCOUNTS_CHART_OF_ACCOUNTS_IMPORTER = 'Chart of Accounts Importer',
  ACCOUNTS_CHEQUE_PRINT_TEMPLATE = 'Cheque Print Template',
  ACCOUNTS_CLOSED_DOCUMENT = 'Closed Document',
  ACCOUNTS_COST_CENTER_ALLOCATION_PERCENTAGE = 'Cost Center Allocation Percentage',
  ACCOUNTS_COST_CENTER_ALLOCATION = 'Cost Center Allocation',
  ACCOUNTS_COST_CENTER = 'Cost Center',
  ACCOUNTS_COUPON_CODE = 'Coupon Code',
  ACCOUNTS_CURRENCY_EXCHANGE_SETTINGS_DETAILS = 'Currency Exchange Settings Details',
  ACCOUNTS_CURRENCY_EXCHANGE_SETTINGS_RESULT = 'Currency Exchange Settings Result',
  ACCOUNTS_CURRENCY_EXCHANGE_SETTINGS = 'Currency Exchange Settings',
  ACCOUNTS_CUSTOMER_GROUP_ITEM = 'Customer Group Item',
  ACCOUNTS_CUSTOMER_ITEM = 'Customer Item',
  ACCOUNTS_DISCOUNTED_INVOICE = 'Discounted Invoice',
  ACCOUNTS_DUNNING_LETTER_TEXT = 'Dunning Letter Text',
  ACCOUNTS_DUNNING_TYPE = 'Dunning Type',
  ACCOUNTS_DUNNING = 'Dunning',
  ACCOUNTS_EXCHANGE_RATE_REVALUATION_ACCOUNT = 'Exchange Rate Reuation Account',
  ACCOUNTS_EXCHANGE_RATE_REVALUATION = 'Exchange Rate Reuation',
  ACCOUNTS_FINANCE_BOOK = 'Finance Book',
  ACCOUNTS_FISCAL_YEAR_COMPANY = 'Fiscal Year Company',
  ACCOUNTS_FISCAL_YEAR = 'Fiscal Year',
  ACCOUNTS_GL_ENTRY = 'GL Entry',
  ACCOUNTS_INVOICE_DISCOUNTING = 'Invoice Discounting',
  ACCOUNTS_ITEM_TAX_TEMPLATE_DETAIL = 'Item Tax Template Detail',
  ACCOUNTS_ITEM_TAX_TEMPLATE = 'Item Tax Template',
  ACCOUNTS_JOURNAL_ENTRY_ACCOUNT = 'Journal Entry Account',
  ACCOUNTS_JOURNAL_ENTRY_TEMPLATE_ACCOUNT = 'Journal Entry Template Account',
  ACCOUNTS_JOURNAL_ENTRY_TEMPLATE = 'Journal Entry Template',
  ACCOUNTS_JOURNAL_ENTRY = 'Journal Entry',
  ACCOUNTS_LEDGER_MERGE_ACCOUNTS = 'Ledger Merge Accounts',
  ACCOUNTS_LEDGER_MERGE = 'Ledger Merge',
  ACCOUNTS_LOYALTY_POINT_ENTRY_REDEMPTION = 'Loyalty Point Entry Redemption',
  ACCOUNTS_LOYALTY_POINT_ENTRY = 'Loyalty Point Entry',
  ACCOUNTS_LOYALTY_PROGRAM_COLLECTION = 'Loyalty Program Collection',
  ACCOUNTS_LOYALTY_PROGRAM = 'Loyalty Program',
  ACCOUNTS_MODE_OF_PAYMENT_ACCOUNT = 'Mode of Payment Account',
  ACCOUNTS_MODE_OF_PAYMENT = 'Mode of Payment',
  ACCOUNTS_MONTHLY_DISTRIBUTION_PERCENTAGE = 'Monthly Distribution Percentage',
  ACCOUNTS_MONTHLY_DISTRIBUTION = 'Monthly Distribution',
  ACCOUNTS_OPENING_INVOICE_CREATION_TOOL_ITEM = 'Opening Invoice Creation Tool Item',
  ACCOUNTS_OPENING_INVOICE_CREATION_TOOL = 'Opening Invoice Creation Tool',
  ACCOUNTS_POS_CLOSING_ENTRY_DETAIL = 'POS Closing Entry Detail',
  ACCOUNTS_POS_CLOSING_ENTRY_TAXES = 'POS Closing Entry Taxes',
  ACCOUNTS_POS_CLOSING_ENTRY = 'POS Closing Entry',
  ACCOUNTS_POS_CUSTOMER_GROUP = 'POS Customer Group',
  ACCOUNTS_POS_FIELD = 'POS Field',
  ACCOUNTS_POS_INVOICE_ITEM = 'POS Invoice Item',
  ACCOUNTS_POS_INVOICE_MERGE_LOG = 'POS Invoice Merge Log',
  ACCOUNTS_POS_INVOICE_REFERENCE = 'POS Invoice Reference',
  ACCOUNTS_POS_INVOICE = 'POS Invoice',
  ACCOUNTS_POS_ITEM_GROUP = 'POS Item Group',
  ACCOUNTS_POS_OPENING_ENTRY_DETAIL = 'POS Opening Entry Detail',
  ACCOUNTS_POS_OPENING_ENTRY = 'POS Opening Entry',
  ACCOUNTS_POS_PAYMENT_METHOD = 'POS Payment Method',
  ACCOUNTS_POS_PROFILE_USER = 'POS Profile User',
  ACCOUNTS_POS_PROFILE = 'POS Profile',
  ACCOUNTS_POS_SEARCH_FIELDS = 'POS Search Fields',
  ACCOUNTS_POS_SETTINGS = 'POS Settings',
  ACCOUNTS_PSOA_COST_CENTER = 'PSOA Cost Center',
  ACCOUNTS_PSOA_PROJECT = 'PSOA Project',
  ACCOUNTS_PARTY_ACCOUNT = 'Party Account',
  ACCOUNTS_PARTY_LINK = 'Party Link',
  ACCOUNTS_PAYMENT_ENTRY_DEDUCTION = 'Payment Entry Deduction',
  ACCOUNTS_PAYMENT_ENTRY_REFERENCE = 'Payment Entry Reference',
  ACCOUNTS_PAYMENT_ENTRY = 'Payment Entry',
  ACCOUNTS_PAYMENT_GATEWAY_ACCOUNT = 'Payment Gateway Account',
  ACCOUNTS_PAYMENT_LEDGER_ENTRY = 'Payment Ledger Entry',
  ACCOUNTS_PAYMENT_ORDER_REFERENCE = 'Payment Order Reference',
  ACCOUNTS_PAYMENT_ORDER = 'Payment Order',
  ACCOUNTS_PAYMENT_RECONCILIATION_ALLOCATION = 'Payment Reconciliation Allocation',
  ACCOUNTS_PAYMENT_RECONCILIATION_INVOICE = 'Payment Reconciliation Invoice',
  ACCOUNTS_PAYMENT_RECONCILIATION_PAYMENT = 'Payment Reconciliation Payment',
  ACCOUNTS_PAYMENT_RECONCILIATION = 'Payment Reconciliation',
  ACCOUNTS_PAYMENT_REQUEST = 'Payment Request',
  ACCOUNTS_PAYMENT_SCHEDULE = 'Payment Schedule',
  ACCOUNTS_PAYMENT_TERM = 'Payment Term',
  ACCOUNTS_PAYMENT_TERMS_TEMPLATE_DETAIL = 'Payment Terms Template Detail',
  ACCOUNTS_PAYMENT_TERMS_TEMPLATE = 'Payment Terms Template',
  ACCOUNTS_PERIOD_CLOSING_VOUCHER = 'Period Closing Voucher',
  ACCOUNTS_PRICING_RULE_BRAND = 'Pricing Rule Brand',
  ACCOUNTS_PRICING_RULE_DETAIL = 'Pricing Rule Detail',
  ACCOUNTS_PRICING_RULE_ITEM_CODE = 'Pricing Rule Item Code',
  ACCOUNTS_PRICING_RULE_ITEM_GROUP = 'Pricing Rule Item Group',
  ACCOUNTS_PRICING_RULE = 'Pricing Rule',
  ACCOUNTS_PROCESS_DEFERRED_ACCOUNTING = 'Process Deferred Accounting',
  ACCOUNTS_PROCESS_STATEMENT_OF_ACCOUNTS_CUSTOMER = 'Process Statement Of Accounts Customer',
  ACCOUNTS_PROCESS_STATEMENT_OF_ACCOUNTS = 'Process Statement Of Accounts',
  ACCOUNTS_PROMOTIONAL_SCHEME_PRICE_DISCOUNT = 'Promotional Scheme Price Discount',
  ACCOUNTS_PROMOTIONAL_SCHEME_PRODUCT_DISCOUNT = 'Promotional Scheme Product Discount',
  ACCOUNTS_PROMOTIONAL_SCHEME = 'Promotional Scheme',
  ACCOUNTS_PURCHASE_INVOICE_ADVANCE = 'Purchase Invoice Advance',
  ACCOUNTS_PURCHASE_INVOICE_ITEM = 'Purchase Invoice Item',
  ACCOUNTS_PURCHASE_INVOICE = 'Purchase Invoice',
  ACCOUNTS_PURCHASE_TAXES_AND_CHARGES_TEMPLATE = 'Purchase Taxes and Charges Template',
  ACCOUNTS_PURCHASE_TAXES_AND_CHARGES = 'Purchase Taxes and Charges',
  ACCOUNTS_SALES_INVOICE_ADVANCE = 'Sales Invoice Advance',
  ACCOUNTS_SALES_INVOICE_ITEM = 'Sales Invoice Item',
  ACCOUNTS_SALES_INVOICE_PAYMENT = 'Sales Invoice Payment',
  ACCOUNTS_SALES_INVOICE_TIMESHEET = 'Sales Invoice Timesheet',
  ACCOUNTS_SALES_INVOICE = 'Sales Invoice',
  ACCOUNTS_SALES_PARTNER_ITEM = 'Sales Partner Item',
  ACCOUNTS_SALES_TAXES_AND_CHARGES_TEMPLATE = 'Sales Taxes and Charges Template',
  ACCOUNTS_SALES_TAXES_AND_CHARGES = 'Sales Taxes and Charges',
  ACCOUNTS_SHARE_BALANCE = 'Share Balance',
  ACCOUNTS_SHARE_TRANSFER = 'Share Transfer',
  ACCOUNTS_SHARE_TYPE = 'Share Type',
  ACCOUNTS_SHAREHOLDER = 'Shareholder',
  ACCOUNTS_SHIPPING_RULE_CONDITION = 'Shipping Rule Condition',
  ACCOUNTS_SHIPPING_RULE_COUNTRY = 'Shipping Rule Country',
  ACCOUNTS_SHIPPING_RULE = 'Shipping Rule',
  ACCOUNTS_SOUTH_AFRICA_VAT_ACCOUNT = 'South Africa VAT Account',
  ACCOUNTS_SUBSCRIPTION_INVOICE = 'Subscription Invoice',
  ACCOUNTS_SUBSCRIPTION_PLAN_DETAIL = 'Subscription Plan Detail',
  ACCOUNTS_SUBSCRIPTION_PLAN = 'Subscription Plan',
  ACCOUNTS_SUBSCRIPTION_SETTINGS = 'Subscription Settings',
  ACCOUNTS_SUBSCRIPTION = 'Subscription',
  ACCOUNTS_SUPPLIER_GROUP_ITEM = 'Supplier Group Item',
  ACCOUNTS_SUPPLIER_ITEM = 'Supplier Item',
  ACCOUNTS_TAX_CATEGORY = 'Tax Category',
  ACCOUNTS_TAX_RULE = 'Tax Rule',
  ACCOUNTS_TAX_WITHHELD_VOUCHERS = 'Tax Withheld Vouchers',
  ACCOUNTS_TAX_WITHHOLDING_ACCOUNT = 'Tax Withholding Account',
  ACCOUNTS_TAX_WITHHOLDING_CATEGORY = 'Tax Withholding Category',
  ACCOUNTS_TAX_WITHHOLDING_RATE = 'Tax Withholding Rate',
  ACCOUNTS_TERRITORY_ITEM = 'Territory Item',

  ASSETS_ASSET_CAPITALIZATION_ASSET_ITEM = 'Asset Capitalization Asset Item',
  ASSETS_ASSET_CAPITALIZATION_SERVICE_ITEM = 'Asset Capitalization Service Item',
  ASSETS_ASSET_CAPITALIZATION_STOCK_ITEM = 'Asset Capitalization Stock Item',
  ASSETS_ASSET_CAPITALIZATION = 'Asset Capitalization',
  ASSETS_ASSET_CATEGORY_ACCOUNT = 'Asset Category Account',
  ASSETS_ASSET_CATEGORY = 'Asset Category',
  ASSETS_ASSET_FINANCE_BOOK = 'Asset Finance Book',
  ASSETS_ASSET_MAINTENANCE_LOG = 'Asset Maintenance Log',
  ASSETS_ASSET_MAINTENANCE_TASK = 'Asset Maintenance Task',
  ASSETS_ASSET_MAINTENANCE_TEAM = 'Asset Maintenance Team',
  ASSETS_ASSET_MAINTENANCE = 'Asset Maintenance',
  ASSETS_ASSET_MOVEMENT_ITEM = 'Asset Movement Item',
  ASSETS_ASSET_MOVEMENT = 'Asset Movement',
  ASSETS_ASSET_REPAIR_CONSUMED_ITEM = 'Asset Repair Consumed Item',
  ASSETS_ASSET_REPAIR = 'Asset Repair',
  ASSETS_ASSET_VALUE_ADJUSTMENT = 'Asset Value Adjustment',
  ASSETS_ASSET = 'Asset',
  ASSETS_DEPRECIATION_SCHEDULE = 'Depreciation Schedule',
  ASSETS_LINKED_LOCATION = 'Linked Location',
  ASSETS_LOCATION = 'Location',
  ASSETS_MAINTENANCE_TEAM_MEMBER = 'Maintenance Team Member',

  AUTOMATION_ASSIGNMENT_RULE_DAY = 'Assignment Rule Day',
  AUTOMATION_ASSIGNMENT_RULE_USER = 'Assignment Rule User',
  AUTOMATION_ASSIGNMENT_RULE = 'Assignment Rule',
  AUTOMATION_AUTO_REPEAT_DAY = 'Auto Repeat Day',
  AUTOMATION_AUTO_REPEAT = 'Auto Repeat',
  AUTOMATION_MILESTONE_TRACKER = 'Milestone Tracker',
  AUTOMATION_MILESTONE = 'Milestone',

  BULK_TRANSACTION_BULK_TRANSACTION_LOG_DETAIL = 'Bulk Transaction Log Detail',
  BULK_TRANSACTION_BULK_TRANSACTION_LOG = 'Bulk Transaction Log',

  BUYING_BUYING_SETTINGS = 'Buying Settings',
  BUYING_PURCHASE_ORDER_ITEM_SUPPLIED = 'Purchase Order Item Supplied',
  BUYING_PURCHASE_ORDER_ITEM = 'Purchase Order Item',
  BUYING_PURCHASE_ORDER = 'Purchase Order',
  BUYING_PURCHASE_RECEIPT_ITEM_SUPPLIED = 'Purchase Receipt Item Supplied',
  BUYING_REQUEST_FOR_QUOTATION_ITEM = 'Request for Quotation Item',
  BUYING_REQUEST_FOR_QUOTATION_SUPPLIER = 'Request for Quotation Supplier',
  BUYING_REQUEST_FOR_QUOTATION = 'Request for Quotation',
  BUYING_SUPPLIER_QUOTATION_ITEM = 'Supplier Quotation Item',
  BUYING_SUPPLIER_QUOTATION = 'Supplier Quotation',
  BUYING_SUPPLIER_SCORECARD_CRITERIA = 'Supplier Scorecard Criteria',
  BUYING_SUPPLIER_SCORECARD_PERIOD = 'Supplier Scorecard Period',
  BUYING_SUPPLIER_SCORECARD_SCORING_CRITERIA = 'Supplier Scorecard Scoring Criteria',
  BUYING_SUPPLIER_SCORECARD_SCORING_STANDING = 'Supplier Scorecard Scoring Standing',
  BUYING_SUPPLIER_SCORECARD_SCORING_VARIABLE = 'Supplier Scorecard Scoring Variable',
  BUYING_SUPPLIER_SCORECARD_STANDING = 'Supplier Scorecard Standing',
  BUYING_SUPPLIER_SCORECARD_VARIABLE = 'Supplier Scorecard Variable',
  BUYING_SUPPLIER_SCORECARD = 'Supplier Scorecard',
  BUYING_SUPPLIER = 'Supplier',

  CRM_APPOINTMENT_BOOKING_SETTINGS = 'Appointment Booking Settings',
  CRM_APPOINTMENT_BOOKING_SLOTS = 'Appointment Booking Slots',
  CRM_APPOINTMENT = 'Appointment',
  CRM_AVAILABILITY_OF_SLOTS = 'Availability Of Slots',
  CRM_CRM_NOTE = 'CRM Note',
  CRM_CRM_SETTINGS = 'CRM Settings',
  CRM_CAMPAIGN_EMAIL_SCHEDULE = 'Campaign Email Schedule',
  CRM_CAMPAIGN = 'Campaign',
  CRM_COMPETITOR_DETAIL = 'Competitor Detail',
  CRM_COMPETITOR = 'Competitor',
  CRM_CONTRACT_FULFILMENT_CHECKLIST = 'Contract Fulfilment Checklist',
  CRM_CONTRACT_TEMPLATE_FULFILMENT_TERMS = 'Contract Template Fulfilment Terms',
  CRM_CONTRACT_TEMPLATE = 'Contract Template',
  CRM_CONTRACT = 'Contract',
  CRM_EMAIL_CAMPAIGN = 'Email Campaign',
  CRM_LEAD_SOURCE = 'Lead Source',
  CRM_LEAD = 'Lead',
  CRM_LINKEDIN_SETTINGS = 'LinkedIn Settings',
  CRM_LOST_REASON_DETAIL = 'Lost Reason Detail',
  CRM_MARKET_SEGMENT = 'Market Segment',
  CRM_OPPORTUNITY_ITEM = 'Opportunity Item',
  CRM_OPPORTUNITY_LOST_REASON_DETAIL = 'Opportunity Lost Reason Detail',
  CRM_OPPORTUNITY_LOST_REASON = 'Opportunity Lost Reason',
  CRM_OPPORTUNITY_TYPE = 'Opportunity Type',
  CRM_OPPORTUNITY = 'Opportunity',
  CRM_PROSPECT_LEAD = 'Prospect Lead',
  CRM_PROSPECT_OPPORTUNITY = 'Prospect Opportunity',
  CRM_PROSPECT = 'Prospect',
  CRM_SALES_STAGE = 'Sales Stage',
  CRM_SOCIAL_MEDIA_POST = 'Social Media Post',
  CRM_TWITTER_SETTINGS = 'Twitter Settings',

  COMMUNICATION_COMMUNICATION_MEDIUM_TIMESLOT = 'Communication Medium Timeslot',
  COMMUNICATION_COMMUNICATION_MEDIUM = 'Communication Medium',

  CONTACTS_ADDRESS_TEMPLATE = 'Address Template',
  CONTACTS_ADDRESS = 'Address',
  CONTACTS_CONTACT_EMAIL = 'Contact Email',
  CONTACTS_CONTACT_PHONE = 'Contact Phone',
  CONTACTS_CONTACT = 'Contact',
  CONTACTS_GENDER = 'Gender',
  CONTACTS_SALUTATION = 'Salutation',

  CORE_ACCESS_LOG = 'Access Log',
  CORE_ACTIVITY_LOG = 'Activity Log',
  CORE_BLOCK_MODULE = 'Block Module',
  CORE_COMMENT = 'Comment',
  CORE_COMMUNICATION_LINK = 'Communication Link',
  CORE_COMMUNICATION = 'Communication',
  CORE_CUSTOM_DOCPERM = 'Custom DocPerm',
  CORE_CUSTOM_ROLE = 'Custom Role',
  CORE_DATA_EXPORT = 'Data Export',
  CORE_DATA_IMPORT_LOG = 'Data Import Log',
  CORE_DATA_IMPORT = 'Data Import',
  CORE_DEFAULTVALUE = 'DefaultValue',
  CORE_DELETED_DOCUMENT = 'Deleted Document',
  CORE_DOCFIELD = 'DocField',
  CORE_DOCPERM = 'DocPerm',
  CORE_DOCSHARE = 'DocShare',
  CORE_DOCTYPE_ACTION = 'DocType Action',
  CORE_DOCTYPE_LINK = 'DocType Link',
  CORE_DOCTYPE_STATE = 'DocType State',
  CORE_DOCTYPE = 'DocType',
  CORE_DOCUMENT_NAMING_RULE_CONDITION = 'Document Naming Rule Condition',
  CORE_DOCUMENT_NAMING_RULE = 'Document Naming Rule',
  CORE_DOCUMENT_NAMING_SETTINGS = 'Document Naming Settings',
  CORE_DOCUMENT_SHARE_KEY = 'Document Share Key',
  CORE_DOMAIN_SETTINGS = 'Domain Settings',
  CORE_DOMAIN = 'Domain',
  CORE_DYNAMIC_LINK = 'Dynamic Link',
  CORE_ERROR_LOG = 'Error Log',
  CORE_ERROR_SNAPSHOT = 'Error Snapshot',
  CORE_FILE = 'File',
  CORE_HAS_DOMAIN = 'Has Domain',
  CORE_HAS_ROLE = 'Has Role',
  CORE_INSTALLED_APPLICATION = 'Installed Application',
  CORE_INSTALLED_APPLICATIONS = 'Installed Applications',
  CORE_LANGUAGE = 'Language',
  CORE_LOG_SETTING_USER = 'Log Setting User',
  CORE_LOG_SETTINGS = 'Log Settings',
  CORE_LOGS_TO_CLEAR = 'Logs To Clear',
  CORE_MODULE_DEF = 'Module Def',
  CORE_MODULE_PROFILE = 'Module Profile',
  CORE_NAVBAR_ITEM = 'Navbar Item',
  CORE_NAVBAR_SETTINGS = 'Navbar Settings',
  CORE_PACKAGE_IMPORT = 'Package Import',
  CORE_PACKAGE_RELEASE = 'Package Release',
  CORE_PACKAGE = 'Package',
  CORE_PAGE = 'Page',
  CORE_PATCH_LOG = 'Patch Log',
  CORE_PREPARED_REPORT = 'Prepared Report',
  CORE_RQ_JOB = 'RQ Job',
  CORE_RQ_WORKER = 'RQ Worker',
  CORE_REPORT_COLUMN = 'Report Column',
  CORE_REPORT_FILTER = 'Report Filter',
  CORE_REPORT = 'Report',
  CORE_ROLE_PERMISSION_FOR_PAGE_AND_REPORT = 'Role Permission for Page and Report',
  CORE_ROLE_PROFILE = 'Role Profile',
  CORE_ROLE = 'Role',
  CORE_SMS_PARAMETER = 'SMS Parameter',
  CORE_SMS_SETTINGS = 'SMS Settings',
  CORE_SCHEDULED_JOB_LOG = 'Scheduled Job Log',
  CORE_SCHEDULED_JOB_TYPE = 'Scheduled Job Type',
  CORE_SERVER_SCRIPT = 'Server Script',
  CORE_SESSION_DEFAULT_SETTINGS = 'Session Default Settings',
  CORE_SESSION_DEFAULT = 'Session Default',
  CORE_SUCCESS_ACTION = 'Success Action',
  CORE_SYSTEM_SETTINGS = 'System Settings',
  CORE_TRANSACTION_LOG = 'Transaction Log',
  CORE_TRANSLATION = 'Translation',
  CORE_USER_DOCUMENT_TYPE = 'User Document Type',
  CORE_USER_EMAIL = 'User Email',
  CORE_USER_GROUP_MEMBER = 'User Group Member',
  CORE_USER_GROUP = 'User Group',
  CORE_USER_PERMISSION = 'User Permission',
  CORE_USER_SELECT_DOCUMENT_TYPE = 'User Select Document Type',
  CORE_USER_SOCIAL_LOGIN = 'User Social Login',
  CORE_USER_TYPE_MODULE = 'User Type Module',
  CORE_USER_TYPE = 'User Type',
  CORE_USER = 'User',
  CORE_VERSION = 'Version',
  CORE_VIEW_LOG = 'View Log',

  CUSTOM_CLIENT_SCRIPT = 'Client Script',
  CUSTOM_CUSTOM_FIELD = 'Custom Field',
  CUSTOM_CUSTOMIZE_FORM_FIELD = 'Customize Form Field',
  CUSTOM_CUSTOMIZE_FORM = 'Customize Form',
  CUSTOM_DOCTYPE_LAYOUT_FIELD = 'DocType Layout Field',
  CUSTOM_DOCTYPE_LAYOUT = 'DocType Layout',
  CUSTOM_PROPERTY_SETTER = 'Property Setter',

  DESK_BULK_UPDATE = 'Bulk Update',
  DESK_CALENDAR_VIEW = 'Calendar View',
  DESK_CONSOLE_LOG = 'Console Log',
  DESK_DASHBOARD_CHART_FIELD = 'Dashboard Chart Field',
  DESK_DASHBOARD_CHART_LINK = 'Dashboard Chart Link',
  DESK_DASHBOARD_CHART_SOURCE = 'Dashboard Chart Source',
  DESK_DASHBOARD_CHART = 'Dashboard Chart',
  DESK_DASHBOARD_SETTINGS = 'Dashboard Settings',
  DESK_DASHBOARD = 'Dashboard',
  DESK_DESKTOP_ICON = 'Desktop Icon',
  DESK_EVENT_PARTICIPANTS = 'Event Participants',
  DESK_EVENT = 'Event',
  DESK_FORM_TOUR_STEP = 'Form Tour Step',
  DESK_FORM_TOUR = 'Form Tour',
  DESK_GLOBAL_SEARCH_DOCTYPE = 'Global Search DocType',
  DESK_GLOBAL_SEARCH_SETTINGS = 'Global Search Settings',
  DESK_KANBAN_BOARD_COLUMN = 'Kanban Board Column',
  DESK_KANBAN_BOARD = 'Kanban Board',
  DESK_LIST_FILTER = 'List Filter',
  DESK_LIST_VIEW_SETTINGS = 'List View Settings',
  DESK_MODULE_ONBOARDING = 'Module Onboarding',
  DESK_NOTE_SEEN_BY = 'Note Seen By',
  DESK_NOTE = 'Note',
  DESK_NOTIFICATION_LOG = 'Notification Log',
  DESK_NOTIFICATION_SETTINGS = 'Notification Settings',
  DESK_NOTIFICATION_SUBSCRIBED_DOCUMENT = 'Notification Subscribed Document',
  DESK_NUMBER_CARD_LINK = 'Number Card Link',
  DESK_NUMBER_CARD = 'Number Card',
  DESK_ONBOARDING_PERMISSION = 'Onboarding Permission',
  DESK_ONBOARDING_STEP_MAP = 'Onboarding Step Map',
  DESK_ONBOARDING_STEP = 'Onboarding Step',
  DESK_ROUTE_HISTORY = 'Route History',
  DESK_SYSTEM_CONSOLE = 'System Console',
  DESK_TAG_LINK = 'Tag Link',
  DESK_TAG = 'Tag',
  DESK_TODO = 'ToDo',
  DESK_WORKSPACE_CHART = 'Workspace Chart',
  DESK_WORKSPACE_LINK = 'Workspace Link',
  DESK_WORKSPACE_QUICK_LIST = 'Workspace Quick List',
  DESK_WORKSPACE_SHORTCUT = 'Workspace Shortcut',
  DESK_WORKSPACE = 'Workspace',

  E_COMMERCE_E_COMMERCE_SETTINGS = 'E Commerce Settings',
  E_COMMERCE_ITEM_REVIEW = 'Item Review',
  E_COMMERCE_RECOMMENDED_ITEMS = 'Recommended Items',
  E_COMMERCE_WEBSITE_ITEM_TABBED_SECTION = 'Website Item Tabbed Section',
  E_COMMERCE_WEBSITE_ITEM = 'Website Item',
  E_COMMERCE_WEBSITE_OFFER = 'Website Offer',
  E_COMMERCE_WISHLIST_ITEM = 'Wishlist Item',
  E_COMMERCE_WISHLIST = 'Wishlist',

  ERPNEXT_INTEGRATIONS_EXOTEL_SETTINGS = 'Exotel Settings',
  ERPNEXT_INTEGRATIONS_GOCARDLESS_MANDATE = 'GoCardless Mandate',
  ERPNEXT_INTEGRATIONS_GOCARDLESS_SETTINGS = 'GoCardless Settings',
  ERPNEXT_INTEGRATIONS_MPESA_SETTINGS = 'Mpesa Settings',
  ERPNEXT_INTEGRATIONS_PLAID_SETTINGS = 'Plaid Settings',
  ERPNEXT_INTEGRATIONS_QUICKBOOKS_MIGRATOR = 'QuickBooks Migrator',
  ERPNEXT_INTEGRATIONS_TALLY_MIGRATION = 'Tally Migration',
  ERPNEXT_INTEGRATIONS_TAXJAR_NEXUS = 'TaxJar Nexus',
  ERPNEXT_INTEGRATIONS_TAXJAR_SETTINGS = 'TaxJar Settings',
  ERPNEXT_INTEGRATIONS_WOOCOMMERCE_SETTINGS = 'Woocommerce Settings',

  EMAIL_AUTO_EMAIL_REPORT = 'Auto Email Report',
  EMAIL_DOCUMENT_FOLLOW = 'Document Follow',
  EMAIL_EMAIL_ACCOUNT = 'Email Account',
  EMAIL_EMAIL_DOMAIN = 'Email Domain',
  EMAIL_EMAIL_FLAG_QUEUE = 'Email Flag Queue',
  EMAIL_EMAIL_GROUP_MEMBER = 'Email Group Member',
  EMAIL_EMAIL_GROUP = 'Email Group',
  EMAIL_EMAIL_QUEUE_RECIPIENT = 'Email Queue Recipient',
  EMAIL_EMAIL_QUEUE = 'Email Queue',
  EMAIL_EMAIL_RULE = 'Email Rule',
  EMAIL_EMAIL_TEMPLATE = 'Email Template',
  EMAIL_EMAIL_UNSUBSCRIBE = 'Email Unsubscribe',
  EMAIL_IMAP_FOLDER = 'IMAP Folder',
  EMAIL_NEWSLETTER_ATTACHMENT = 'Newsletter Attachment',
  EMAIL_NEWSLETTER_EMAIL_GROUP = 'Newsletter Email Group',
  EMAIL_NEWSLETTER = 'Newsletter',
  EMAIL_NOTIFICATION_RECIPIENT = 'Notification Recipient',
  EMAIL_NOTIFICATION = 'Notification',
  EMAIL_UNHANDLED_EMAIL = 'Unhandled Email',

  GEO_COUNTRY = 'Country',
  GEO_CURRENCY = 'Currency',

  INTEGRATIONS_CONNECTED_APP = 'Connected App',
  INTEGRATIONS_DROPBOX_SETTINGS = 'Dropbox Settings',
  INTEGRATIONS_GOOGLE_CALENDAR = 'Google Calendar',
  INTEGRATIONS_GOOGLE_CONTACTS = 'Google Contacts',
  INTEGRATIONS_GOOGLE_DRIVE = 'Google Drive',
  INTEGRATIONS_GOOGLE_SETTINGS = 'Google Settings',
  INTEGRATIONS_INTEGRATION_REQUEST = 'Integration Request',
  INTEGRATIONS_LDAP_GROUP_MAPPING = 'LDAP Group Mapping',
  INTEGRATIONS_LDAP_SETTINGS = 'LDAP Settings',
  INTEGRATIONS_OAUTH_AUTHORIZATION_CODE = 'OAuth Authorization Code',
  INTEGRATIONS_OAUTH_BEARER_TOKEN = 'OAuth Bearer Token',
  INTEGRATIONS_OAUTH_CLIENT = 'OAuth Client',
  INTEGRATIONS_OAUTH_PROVIDER_SETTINGS = 'OAuth Provider Settings',
  INTEGRATIONS_OAUTH_SCOPE = 'OAuth Scope',
  INTEGRATIONS_QUERY_PARAMETERS = 'Query Parameters',
  INTEGRATIONS_S3_BACKUP_SETTINGS = 'S3 Backup Settings',
  INTEGRATIONS_SLACK_WEBHOOK_URL = 'Slack Webhook URL',
  INTEGRATIONS_SOCIAL_LOGIN_KEY = 'Social Login Key',
  INTEGRATIONS_TOKEN_CACHE = 'Token Cache',
  INTEGRATIONS_WEBHOOK_DATA = 'Webhook Data',
  INTEGRATIONS_WEBHOOK_HEADER = 'Webhook Header',
  INTEGRATIONS_WEBHOOK_REQUEST_LOG = 'Webhook Request Log',
  INTEGRATIONS_WEBHOOK = 'Webhook',

  LOAN_MANAGEMENT_LOAN_APPLICATION = 'Loan Application',
  LOAN_MANAGEMENT_LOAN_BALANCE_ADJUSTMENT = 'Loan Balance Adjustment',
  LOAN_MANAGEMENT_LOAN_DISBURSEMENT = 'Loan Disbursement',
  LOAN_MANAGEMENT_LOAN_INTEREST_ACCRUAL = 'Loan Interest Accrual',
  LOAN_MANAGEMENT_LOAN_REFUND = 'Loan Refund',
  LOAN_MANAGEMENT_LOAN_REPAYMENT_DETAIL = 'Loan Repayment Detail',
  LOAN_MANAGEMENT_LOAN_REPAYMENT = 'Loan Repayment',
  LOAN_MANAGEMENT_LOAN_SECURITY_PLEDGE = 'Loan Security Pledge',
  LOAN_MANAGEMENT_LOAN_SECURITY_PRICE = 'Loan Security Price',
  LOAN_MANAGEMENT_LOAN_SECURITY_SHORTFALL = 'Loan Security Shortfall',
  LOAN_MANAGEMENT_LOAN_SECURITY_TYPE = 'Loan Security Type',
  LOAN_MANAGEMENT_LOAN_SECURITY_UNPLEDGE = 'Loan Security Unpledge',
  LOAN_MANAGEMENT_LOAN_SECURITY = 'Loan Security',
  LOAN_MANAGEMENT_LOAN_TYPE = 'Loan Type',
  LOAN_MANAGEMENT_LOAN_WRITE_OFF = 'Loan Write Off',
  LOAN_MANAGEMENT_LOAN = 'Loan',
  LOAN_MANAGEMENT_PLEDGE = 'Pledge',
  LOAN_MANAGEMENT_PROCESS_LOAN_INTEREST_ACCRUAL = 'Process Loan Interest Accrual',
  LOAN_MANAGEMENT_PROCESS_LOAN_SECURITY_SHORTFALL = 'Process Loan Security Shortfall',
  LOAN_MANAGEMENT_PROPOSED_PLEDGE = 'Proposed Pledge',
  LOAN_MANAGEMENT_REPAYMENT_SCHEDULE = 'Repayment Schedule',
  LOAN_MANAGEMENT_SANCTIONED_LOAN_AMOUNT = 'Sanctioned Loan Amount',
  LOAN_MANAGEMENT_UNPLEDGE = 'Unpledge',

  MAINTENANCE_MAINTENANCE_SCHEDULE_DETAIL = 'Maintenance Schedule Detail',
  MAINTENANCE_MAINTENANCE_SCHEDULE_ITEM = 'Maintenance Schedule Item',
  MAINTENANCE_MAINTENANCE_SCHEDULE = 'Maintenance Schedule',
  MAINTENANCE_MAINTENANCE_VISIT_PURPOSE = 'Maintenance Visit Purpose',
  MAINTENANCE_MAINTENANCE_VISIT = 'Maintenance Visit',

  MANUFACTURING_BOM_EXPLOSION_ITEM = 'BOM Explosion Item',
  MANUFACTURING_BOM_ITEM = 'BOM Item',
  MANUFACTURING_BOM_OPERATION = 'BOM Operation',
  MANUFACTURING_BOM_SCRAP_ITEM = 'BOM Scrap Item',
  MANUFACTURING_BOM_UPDATE_BATCH = 'BOM Update Batch',
  MANUFACTURING_BOM_UPDATE_LOG = 'BOM Update Log',
  MANUFACTURING_BOM_UPDATE_TOOL = 'BOM Update Tool',
  MANUFACTURING_BOM_WEBSITE_ITEM = 'BOM Website Item',
  MANUFACTURING_BOM_WEBSITE_OPERATION = 'BOM Website Operation',
  MANUFACTURING_BOM = 'BOM',
  MANUFACTURING_BLANKET_ORDER_ITEM = 'Blanket Order Item',
  MANUFACTURING_BLANKET_ORDER = 'Blanket Order',
  MANUFACTURING_DOWNTIME_ENTRY = 'Downtime Entry',
  MANUFACTURING_JOB_CARD_ITEM = 'Job Card Item',
  MANUFACTURING_JOB_CARD_OPERATION = 'Job Card Operation',
  MANUFACTURING_JOB_CARD_SCRAP_ITEM = 'Job Card Scrap Item',
  MANUFACTURING_JOB_CARD_TIME_LOG = 'Job Card Time Log',
  MANUFACTURING_JOB_CARD = 'Job Card',
  MANUFACTURING_MANUFACTURING_SETTINGS = 'Manufacturing Settings',
  MANUFACTURING_MATERIAL_REQUEST_PLAN_ITEM = 'Material Request Plan Item',
  MANUFACTURING_OPERATION = 'Operation',
  MANUFACTURING_PRODUCTION_PLAN_ITEM_REFERENCE = 'Production Plan Item Reference',
  MANUFACTURING_PRODUCTION_PLAN_ITEM = 'Production Plan Item',
  MANUFACTURING_PRODUCTION_PLAN_MATERIAL_REQUEST_WAREHOUSE = 'Production Plan Material Request Warehouse',
  MANUFACTURING_PRODUCTION_PLAN_MATERIAL_REQUEST = 'Production Plan Material Request',
  MANUFACTURING_PRODUCTION_PLAN_SALES_ORDER = 'Production Plan Sales Order',
  MANUFACTURING_PRODUCTION_PLAN_SUB_ASSEMBLY_ITEM = 'Production Plan Sub Assembly Item',
  MANUFACTURING_PRODUCTION_PLAN = 'Production Plan',
  MANUFACTURING_ROUTING = 'Routing',
  MANUFACTURING_SUB_OPERATION = 'Sub Operation',
  MANUFACTURING_WORK_ORDER_ITEM = 'Work Order Item',
  MANUFACTURING_WORK_ORDER_OPERATION = 'Work Order Operation',
  MANUFACTURING_WORK_ORDER = 'Work Order',
  MANUFACTURING_WORKSTATION_WORKING_HOUR = 'Workstation Working Hour',
  MANUFACTURING_WORKSTATION = 'Workstation',

  PAYMENT_GATEWAYS_BRAINTREE_SETTINGS = 'Braintree Settings',
  PAYMENT_GATEWAYS_PAYPAL_SETTINGS = 'PayPal Settings',
  PAYMENT_GATEWAYS_PAYTM_SETTINGS = 'Paytm Settings',
  PAYMENT_GATEWAYS_RAZORPAY_SETTINGS = 'Razorpay Settings',
  PAYMENT_GATEWAYS_STRIPE_SETTINGS = 'Stripe Settings',
  PAYMENTS_PAYMENT_GATEWAY = 'Payment Gateway',

  PORTAL_HOMEPAGE_FEATURED_PRODUCT = 'Homepage Featured Product',
  PORTAL_HOMEPAGE_SECTION_CARD = 'Homepage Section Card',
  PORTAL_HOMEPAGE_SECTION = 'Homepage Section',
  PORTAL_HOMEPAGE = 'Homepage',
  PORTAL_WEBSITE_ATTRIBUTE = 'Website Attribute',
  PORTAL_WEBSITE_FILTER_FIELD = 'Website Filter Field',

  PRINTING_LETTER_HEAD = 'Letter Head',
  PRINTING_NETWORK_PRINTER_SETTINGS = 'Network Printer Settings',
  PRINTING_PRINT_FORMAT_FIELD_TEMPLATE = 'Print Format Field Template',
  PRINTING_PRINT_FORMAT = 'Print Format',
  PRINTING_PRINT_SETTINGS = 'Print Settings',
  PRINTING_PRINT_STYLE = 'Print Style',

  PROJECTS_ACTIVITY_COST = 'Activity Cost',
  PROJECTS_ACTIVITY_TYPE = 'Activity Type',
  PROJECTS_DEPENDENT_TASK = 'Dependent Task',
  PROJECTS_PROJECT_TEMPLATE_TASK = 'Project Template Task',
  PROJECTS_PROJECT_TEMPLATE = 'Project Template',
  PROJECTS_PROJECT_TYPE = 'Project Type',
  PROJECTS_PROJECT_UPDATE = 'Project Update',
  PROJECTS_PROJECT_USER = 'Project User',
  PROJECTS_PROJECT = 'Project',
  PROJECTS_PROJECTS_SETTINGS = 'Projects Settings',
  PROJECTS_TASK_DEPENDS_ON = 'Task Depends On',
  PROJECTS_TASK_TYPE = 'Task Type',
  PROJECTS_TASK = 'Task',
  PROJECTS_TIMESHEET_DETAIL = 'Timesheet Detail',
  PROJECTS_TIMESHEET = 'Timesheet',

  QUALITY_MANAGEMENT_NON_CONFORMANCE = 'Non Conformance',
  QUALITY_MANAGEMENT_QUALITY_ACTION_RESOLUTION = 'Quality Action Resolution',
  QUALITY_MANAGEMENT_QUALITY_ACTION = 'Quality Action',
  QUALITY_MANAGEMENT_QUALITY_FEEDBACK_PARAMETER = 'Quality Feedback Parameter',
  QUALITY_MANAGEMENT_QUALITY_FEEDBACK_TEMPLATE_PARAMETER = 'Quality Feedback Template Parameter',
  QUALITY_MANAGEMENT_QUALITY_FEEDBACK_TEMPLATE = 'Quality Feedback Template',
  QUALITY_MANAGEMENT_QUALITY_FEEDBACK = 'Quality Feedback',
  QUALITY_MANAGEMENT_QUALITY_GOAL_OBJECTIVE = 'Quality Goal Objective',
  QUALITY_MANAGEMENT_QUALITY_GOAL = 'Quality Goal',
  QUALITY_MANAGEMENT_QUALITY_MEETING_AGENDA = 'Quality Meeting Agenda',
  QUALITY_MANAGEMENT_QUALITY_MEETING_MINUTES = 'Quality Meeting Minutes',
  QUALITY_MANAGEMENT_QUALITY_MEETING = 'Quality Meeting',
  QUALITY_MANAGEMENT_QUALITY_PROCEDURE_PROCESS = 'Quality Procedure Process',
  QUALITY_MANAGEMENT_QUALITY_PROCEDURE = 'Quality Procedure',
  QUALITY_MANAGEMENT_QUALITY_REVIEW_OBJECTIVE = 'Quality Review Objective',
  QUALITY_MANAGEMENT_QUALITY_REVIEW = 'Quality Review',

  REGIONAL_IMPORT_SUPPLIER_INVOICE = 'Import Supplier Invoice',
  REGIONAL_KSA_VAT_PURCHASE_ACCOUNT = 'KSA VAT Purchase Account',
  REGIONAL_KSA_VAT_SALES_ACCOUNT = 'KSA VAT Sales Account',
  REGIONAL_KSA_VAT_SETTING = 'KSA VAT Setting',
  REGIONAL_LOWER_DEDUCTION_CERTIFICATE = 'Lower Deduction Certificate',
  REGIONAL_PRODUCT_TAX_CATEGORY = 'Product Tax Category',
  REGIONAL_SOUTH_AFRICA_VAT_SETTINGS = 'South Africa VAT Settings',
  REGIONAL_UAE_VAT_ACCOUNT = 'UAE VAT Account',
  REGIONAL_UAE_VAT_SETTINGS = 'UAE VAT Settings',

  SELLING_CUSTOMER_CREDIT_LIMIT = 'Customer Credit Limit',
  SELLING_CUSTOMER = 'Customer',
  SELLING_INDUSTRY_TYPE = 'Industry Type',
  SELLING_INSTALLATION_NOTE_ITEM = 'Installation Note Item',
  SELLING_INSTALLATION_NOTE = 'Installation Note',
  SELLING_PARTY_SPECIFIC_ITEM = 'Party Specific Item',
  SELLING_PRODUCT_BUNDLE_ITEM = 'Product Bundle Item',
  SELLING_PRODUCT_BUNDLE = 'Product Bundle',
  SELLING_QUOTATION_ITEM = 'Quotation Item',
  SELLING_QUOTATION = 'Quotation',
  SELLING_SMS_CENTER = 'SMS Center',
  SELLING_SALES_ORDER_ITEM = 'Sales Order Item',
  SELLING_SALES_ORDER = 'Sales Order',
  SELLING_SALES_PARTNER_TYPE = 'Sales Partner Type',
  SELLING_SALES_TEAM = 'Sales Team',
  SELLING_SELLING_SETTINGS = 'Selling Settings',

  SETUP_AUTHORIZATION_CONTROL = 'Authorization Control',
  SETUP_AUTHORIZATION_RULE = 'Authorization Rule',
  SETUP_BRANCH = 'Branch',
  SETUP_BRAND = 'Brand',
  SETUP_COMPANY = 'Company',
  SETUP_CURRENCY_EXCHANGE = 'Currency Exchange',
  SETUP_CUSTOMER_GROUP = 'Customer Group',
  SETUP_DEPARTMENT = 'Department',
  SETUP_DESIGNATION = 'Designation',
  SETUP_DRIVER = 'Driver',
  SETUP_DRIVING_LICENSE_CATEGORY = 'Driving License Category',
  SETUP_EMAIL_DIGEST_RECIPIENT = 'Email Digest Recipient',
  SETUP_EMAIL_DIGEST = 'Email Digest',
  SETUP_EMPLOYEE_EDUCATION = 'Employee Education',
  SETUP_EMPLOYEE_EXTERNAL_WORK_HISTORY = 'Employee External Work History',
  SETUP_EMPLOYEE_GROUP_TABLE = 'Employee Group Table',
  SETUP_EMPLOYEE_GROUP = 'Employee Group',
  SETUP_EMPLOYEE_INTERNAL_WORK_HISTORY = 'Employee Internal Work History',
  SETUP_EMPLOYEE = 'Employee',
  SETUP_GLOBAL_DEFAULTS = 'Global Defaults',
  SETUP_HOLIDAY_LIST = 'Holiday List',
  SETUP_HOLIDAY = 'Holiday',
  SETUP_ITEM_GROUP = 'Item Group',
  SETUP_PARTY_TYPE = 'Party Type',
  SETUP_PRINT_HEADING = 'Print Heading',
  SETUP_QUOTATION_LOST_REASON_DETAIL = 'Quotation Lost Reason Detail',
  SETUP_QUOTATION_LOST_REASON = 'Quotation Lost Reason',
  SETUP_SALES_PARTNER = 'Sales Partner',
  SETUP_SALES_PERSON = 'Sales Person',
  SETUP_SUPPLIER_GROUP = 'Supplier Group',
  SETUP_TARGET_DETAIL = 'Target Detail',
  SETUP_TERMS_AND_CONDITIONS = 'Terms and Conditions',
  SETUP_TERRITORY = 'Territory',
  SETUP_TRANSACTION_DELETION_RECORD_ITEM = 'Transaction Deletion Record Item',
  SETUP_TRANSACTION_DELETION_RECORD = 'Transaction Deletion Record',
  SETUP_UOM_CONVERSION_FACTOR = 'UOM Conversion Factor',
  SETUP_UOM = 'UOM',
  SETUP_VEHICLE = 'Vehicle',
  SETUP_WEBSITE_ITEM_GROUP = 'Website Item Group',

  SOCIAL_ENERGY_POINT_LOG = 'Energy Point Log',
  SOCIAL_ENERGY_POINT_RULE = 'Energy Point Rule',
  SOCIAL_ENERGY_POINT_SETTINGS = 'Energy Point Settings',
  SOCIAL_REVIEW_LEVEL = 'Review Level',

  STOCK_BATCH = 'Batch',
  STOCK_BIN = 'Bin',
  STOCK_CUSTOMS_TARIFF_NUMBER = 'Customs Tariff Number',
  STOCK_DELIVERY_NOTE_ITEM = 'Delivery Note Item',
  STOCK_DELIVERY_NOTE = 'Delivery Note',
  STOCK_DELIVERY_SETTINGS = 'Delivery Settings',
  STOCK_DELIVERY_STOP = 'Delivery Stop',
  STOCK_DELIVERY_TRIP = 'Delivery Trip',
  STOCK_INVENTORY_DIMENSION = 'Inventory Dimension',
  STOCK_ITEM_ALTERNATIVE = 'Item Alternative',
  STOCK_ITEM_ATTRIBUTE_VALUE = 'Item Attribute Value',
  STOCK_ITEM_ATTRIBUTE = 'Item Attribute',
  STOCK_ITEM_BARCODE = 'Item Barcode',
  STOCK_ITEM_CUSTOMER_DETAIL = 'Item Customer Detail',
  STOCK_ITEM_DEFAULT = 'Item Default',
  STOCK_ITEM_MANUFACTURER = 'Item Manufacturer',
  STOCK_ITEM_PRICE = 'Item Price',
  STOCK_ITEM_QUALITY_INSPECTION_PARAMETER = 'Item Quality Inspection Parameter',
  STOCK_ITEM_REORDER = 'Item Reorder',
  STOCK_ITEM_SUPPLIER = 'Item Supplier',
  STOCK_ITEM_TAX = 'Item Tax',
  STOCK_ITEM_VARIANT_ATTRIBUTE = 'Item Variant Attribute',
  STOCK_ITEM_VARIANT_SETTINGS = 'Item Variant Settings',
  STOCK_ITEM_VARIANT = 'Item Variant',
  STOCK_ITEM_WEBSITE_SPECIFICATION = 'Item Website Specification',
  STOCK_ITEM = 'Item',
  STOCK_LANDED_COST_ITEM = 'Landed Cost Item',
  STOCK_LANDED_COST_PURCHASE_RECEIPT = 'Landed Cost Purchase Receipt',
  STOCK_LANDED_COST_TAXES_AND_CHARGES = 'Landed Cost Taxes and Charges',
  STOCK_LANDED_COST_VOUCHER = 'Landed Cost Voucher',
  STOCK_MANUFACTURER = 'Manufacturer',
  STOCK_MATERIAL_REQUEST_ITEM = 'Material Request Item',
  STOCK_MATERIAL_REQUEST = 'Material Request',
  STOCK_PACKED_ITEM = 'Packed Item',
  STOCK_PACKING_SLIP_ITEM = 'Packing Slip Item',
  STOCK_PACKING_SLIP = 'Packing Slip',
  STOCK_PICK_LIST_ITEM = 'Pick List Item',
  STOCK_PICK_LIST = 'Pick List',
  STOCK_PRICE_LIST_COUNTRY = 'Price List Country',
  STOCK_PRICE_LIST = 'Price List',
  STOCK_PURCHASE_RECEIPT_ITEM = 'Purchase Receipt Item',
  STOCK_PURCHASE_RECEIPT = 'Purchase Receipt',
  STOCK_PUTAWAY_RULE = 'Putaway Rule',
  STOCK_QUALITY_INSPECTION_PARAMETER_GROUP = 'Quality Inspection Parameter Group',
  STOCK_QUALITY_INSPECTION_PARAMETER = 'Quality Inspection Parameter',
  STOCK_QUALITY_INSPECTION_READING = 'Quality Inspection Reading',
  STOCK_QUALITY_INSPECTION_TEMPLATE = 'Quality Inspection Template',
  STOCK_QUALITY_INSPECTION = 'Quality Inspection',
  STOCK_QUICK_STOCK_BALANCE = 'Quick Stock Balance',
  STOCK_REPOST_ITEM_VALUATION = 'Repost Item Valuation',
  STOCK_SERIAL_NO = 'Serial No',
  STOCK_SHIPMENT_DELIVERY_NOTE = 'Shipment Delivery Note',
  STOCK_SHIPMENT_PARCEL_TEMPLATE = 'Shipment Parcel Template',
  STOCK_SHIPMENT_PARCEL = 'Shipment Parcel',
  STOCK_SHIPMENT = 'Shipment',
  STOCK_STOCK_ENTRY_DETAIL = 'Stock Entry Detail',
  STOCK_STOCK_ENTRY_TYPE = 'Stock Entry Type',
  STOCK_STOCK_ENTRY = 'Stock Entry',
  STOCK_STOCK_LEDGER_ENTRY = 'Stock Ledger Entry',
  STOCK_STOCK_RECONCILIATION_ITEM = 'Stock Reconciliation Item',
  STOCK_STOCK_RECONCILIATION = 'Stock Reconciliation',
  STOCK_STOCK_REPOSTING_SETTINGS = 'Stock Reposting Settings',
  STOCK_STOCK_SETTINGS = 'Stock Settings',
  STOCK_UOM_CATEGORY = 'UOM Category',
  STOCK_UOM_CONVERSION_DETAIL = 'UOM Conversion Detail',
  STOCK_VARIANT_FIELD = 'Variant Field',
  STOCK_WAREHOUSE_TYPE = 'Warehouse Type',
  STOCK_WAREHOUSE = 'Warehouse',

  SUBCONTRACTING_SUBCONTRACTING_ORDER_ITEM = 'Subcontracting Order Item',
  SUBCONTRACTING_SUBCONTRACTING_ORDER_SERVICE_ITEM = 'Subcontracting Order Service Item',
  SUBCONTRACTING_SUBCONTRACTING_ORDER_SUPPLIED_ITEM = 'Subcontracting Order Supplied Item',
  SUBCONTRACTING_SUBCONTRACTING_ORDER = 'Subcontracting Order',
  SUBCONTRACTING_SUBCONTRACTING_RECEIPT_ITEM = 'Subcontracting Receipt Item',
  SUBCONTRACTING_SUBCONTRACTING_RECEIPT_SUPPLIED_ITEM = 'Subcontracting Receipt Supplied Item',
  SUBCONTRACTING_SUBCONTRACTING_RECEIPT = 'Subcontracting Receipt',

  SUPPORT_ISSUE_PRIORITY = 'Issue Priority',
  SUPPORT_ISSUE_TYPE = 'Issue Type',
  SUPPORT_ISSUE = 'Issue',
  SUPPORT_PAUSE_SLA_ON_STATUS = 'Pause SLA On Status',
  SUPPORT_SLA_FULFILLED_ON_STATUS = 'SLA Fulfilled On Status',
  SUPPORT_SERVICE_DAY = 'Service Day',
  SUPPORT_SERVICE_LEVEL_AGREEMENT = 'Service Level Agreement',
  SUPPORT_SERVICE_LEVEL_PRIORITY = 'Service Level Priority',
  SUPPORT_SUPPORT_SEARCH_SOURCE = 'Support Search Source',
  SUPPORT_SUPPORT_SETTINGS = 'Support Settings',
  SUPPORT_WARRANTY_CLAIM = 'Warranty Claim',

  TELEPHONY_CALL_LOG = 'Call Log',
  TELEPHONY_INCOMING_CALL_HANDLING_SCHEDULE = 'Incoming Call Handling Schedule',
  TELEPHONY_INCOMING_CALL_SETTINGS = 'Incoming Call Settings',
  TELEPHONY_TELEPHONY_CALL_TYPE = 'Telephony Call Type',
  TELEPHONY_VOICE_CALL_SETTINGS = 'Voice Call Settings',

  UTILITIES_RENAME_TOOL = 'Rename Tool',
  UTILITIES_SMS_LOG = 'SMS Log',
  UTILITIES_VIDEO_SETTINGS = 'Video Settings',
  UTILITIES_VIDEO = 'Video',

  WEBSITE_ABOUT_US_SETTINGS = 'About Us Settings',
  WEBSITE_ABOUT_US_TEAM_MEMBER = 'About Us Team Member',
  WEBSITE_BLOG_CATEGORY = 'Blog Category',
  WEBSITE_BLOG_POST = 'Blog Post',
  WEBSITE_BLOG_SETTINGS = 'Blog Settings',
  WEBSITE_BLOGGER = 'Blogger',
  WEBSITE_COLOR = 'Color',
  WEBSITE_COMPANY_HISTORY = 'Company History',
  WEBSITE_CONTACT_US_SETTINGS = 'Contact Us Settings',
  WEBSITE_DISCUSSION_REPLY = 'Discussion Reply',
  WEBSITE_DISCUSSION_TOPIC = 'Discussion Topic',
  WEBSITE_HELP_ARTICLE = 'Help Article',
  WEBSITE_HELP_CATEGORY = 'Help Category',
  WEBSITE_PERSONAL_DATA_DELETION_REQUEST = 'Personal Data Deletion Request',
  WEBSITE_PERSONAL_DATA_DELETION_STEP = 'Personal Data Deletion Step',
  WEBSITE_PERSONAL_DATA_DOWNLOAD_REQUEST = 'Personal Data Download Request',
  WEBSITE_PORTAL_MENU_ITEM = 'Portal Menu Item',
  WEBSITE_PORTAL_SETTINGS = 'Portal Settings',
  WEBSITE_SOCIAL_LINK_SETTINGS = 'Social Link Settings',
  WEBSITE_TOP_BAR_ITEM = 'Top Bar Item',
  WEBSITE_WEB_FORM_FIELD = 'Web Form Field',
  WEBSITE_WEB_FORM_LIST_COLUMN = 'Web Form List Column',
  WEBSITE_WEB_FORM = 'Web Form',
  WEBSITE_WEB_PAGE_BLOCK = 'Web Page Block',
  WEBSITE_WEB_PAGE_VIEW = 'Web Page View',
  WEBSITE_WEB_PAGE = 'Web Page',
  WEBSITE_WEB_TEMPLATE_FIELD = 'Web Template Field',
  WEBSITE_WEB_TEMPLATE = 'Web Template',
  WEBSITE_WEBSITE_META_TAG = 'Website Meta Tag',
  WEBSITE_WEBSITE_ROUTE_META = 'Website Route Meta',
  WEBSITE_WEBSITE_ROUTE_REDIRECT = 'Website Route Redirect',
  WEBSITE_WEBSITE_SCRIPT = 'Website Script',
  WEBSITE_WEBSITE_SETTINGS = 'Website Settings',
  WEBSITE_WEBSITE_SIDEBAR_ITEM = 'Website Sidebar Item',
  WEBSITE_WEBSITE_SIDEBAR = 'Website Sidebar',
  WEBSITE_WEBSITE_SLIDESHOW_ITEM = 'Website Slideshow Item',
  WEBSITE_WEBSITE_SLIDESHOW = 'Website Slideshow',
  WEBSITE_WEBSITE_THEME_IGNORE_APP = 'Website Theme Ignore App',
  WEBSITE_WEBSITE_THEME = 'Website Theme',

  WORKFLOW_WORKFLOW_ACTION_MASTER = 'Workflow Action Master',
  WORKFLOW_WORKFLOW_ACTION_PERMITTED_ROLE = 'Workflow Action Permitted Role',
  WORKFLOW_WORKFLOW_ACTION = 'Workflow Action',
  WORKFLOW_WORKFLOW_DOCUMENT_STATE = 'Workflow Document State',
  WORKFLOW_WORKFLOW_STATE = 'Workflow State',
  WORKFLOW_WORKFLOW_TRANSITION = 'Workflow Transition',
  WORKFLOW_WORKFLOW = 'Workflow',

  // banking
  BANKING_BANK_ENTITY = 'Bank Entity',
  BANKING_INTERNAL_BANK_ACCOUNT = 'Internal Bank Account',
  BANKING_BANK_ACCOUNT_NUMBER = 'Bank Account Number',
  BANKING_ACH_TRANSFER = 'ACH Transfer',
  BANKING_ACCOUNT_TRANSFER = 'Account Transfer',
  BANKING_CHECK_TRANSFER = 'Check Transfer',
  BANKING_WIRE_TRANSFER = 'Wire Transfer',
  BANKING_PENDING_BANK_TRANSACTION = 'Pending Bank Transaction',
  BANKING_DECLINED_BANK_TRANSACTION = 'Declined Bank Transaction',
  BANKING_SETTLED_BANK_TRANSACTION = 'Settled Bank Transaction',
  BANKING_CARD = 'Card',
}

export enum DocStatus {
  Draft = 0,
  Submitted = 1,
  Cancelled = 2,
}

export interface DocType extends BaseDocument {
  // This is always 'DocType'.
  doctype: string;
  // ID of the doc type.
  name: string;
  description: string;
  search_fields: string;
  issingle: number;
  is_tree: number;
  istable: number;
  editable_grid: number;
  track_changes: number;
  module: string;
  autoname: string;
  naming_rule: string;
  title_field: string;
  timeline_field: string;
  sort_field: string;
  sort_order: string;
  read_only: number;
  in_create: number;
  allow_copy: number;
  allow_rename: number;
  allow_import: number;
  hide_toolbar: number;
  track_seen: number;
  max_attachments: number;
  document_type: string;
  icon: string;
  engine: string;
  is_submittable: number;
  show_name_in_global_search: number;
  custom: number;
  beta: number;
  has_web_view: number;
  allow_guest_to_view: number;
  email_append_to: number;
  show_title_field_in_link: number;
  migration_hash: string;
  translated_doctype: number;
  quick_entry: number;
  track_views: number;
  is_virtual: number;
  allow_events_in_timeline: number;
  allow_auto_repeat: number;
  make_attachments_public: number;
  show_preview_popup: number;
  index_web_pages_for_search: number;
  fields: DocField[];
  permissions: DocPermission[];
  actions: any[];
  links: any[];
  states: any[];
}

export interface Dashboard {
  heatmap: boolean;
  heatmap_message: string;
  fieldname: string;
  transactions: Transaction[];
  non_standard_fieldnames: any;
  internal_links: any;
}

/**
 * Example value:
 * ```json
 * {
 *   "label": "Purchase",
 *   "items": [
 *     "Purchase Order",
 *     "Purchase Receipt",
 *     "Purchase Invoice"
 *   ]
 * }
 * ```
 */
export interface Transaction {
  label: string;
  items: string[];
}

export interface Templates {
  project_dashboard: string;
}

export interface DocField extends BaseDocument {
  // This is always 'Doc Field'.
  doctype: string;
  // ID of the field.
  name: string;
  // Field index.
  parent: string;
  parentfield: string;
  parenttype: string;
  fieldname: string;
  label: string;
  fieldtype: DocFieldType;
  options: string;
  search_index: number;
  show_dashboard: number;
  hidden: number;
  set_only_once: number;
  allow_in_quick_entry: number;
  print_hide: number;
  report_hide: number;
  reqd: number;
  bold: number;
  in_global_search: number;
  collapsible: number;
  unique: number;
  no_copy: number;
  allow_on_submit: number;
  show_preview_popup: number;
  permlevel: number;
  ignore_user_permissions: number;
  columns: number;
  in_list_view: number;
  fetch_if_empty: number;
  in_filter: number;
  remember_last_selected_value: number;
  ignore_xss_filter: number;
  print_hide_if_no_value: number;
  allow_bulk_edit: number;
  in_standard_filter: number;
  in_preview: number;
  read_only: boolean;
  length: number;
  translatable: number;
  hide_border: number;
  hide_days: number;
  hide_seconds: number;
  non_negative: number;
  is_virtual: number;
  fields: any[];
  permissions: any[];
  actions: any[];
  links: any[];
  states: any[];
  search_fields: string[];
  is_custom_field?: any;
  linked_document_type: string;
  oldfieldtype: string;
  oldfieldname: string;
  default: string;
  description: string;
}

export type DocFieldType =
  | 'Data'
  | 'Link'
  | 'Dynamic Link'
  | 'Check'
  | 'Select'
  | 'Table'
  | 'Attach'
  | 'Attach Image'
  | 'Text Editor'
  | 'Date'
  | 'Date and Time'
  | 'Datetime'
  | 'DateRange'
  | 'Barcode'
  | 'Button'
  | 'Code'
  | 'Color'
  | 'Column Break'
  | 'Currency'
  | 'Float'
  | 'Geolocation'
  | 'HTML'
  | 'Image'
  | 'Int'
  | 'Small Text'
  | 'Long Text'
  | 'Text'
  | 'Markdown Editor'
  | 'Password'
  | 'Percent'
  | 'Rating'
  | 'Read Only'
  | 'Section Break'
  | 'Signature'
  | 'Table MultiSelect'
  | 'Time'
  | 'Duration'
  | 'JSON'
  // Used in bank reconciliation action form
  | 'LinkedPaymentsTable';

export interface DocPermission extends BaseDocument {
  doctype: string;
  name: string;
  docstatus: DocStatus;
  parent: string;
  parentfield: string;
  parenttype: string;
  idx: number;
  permlevel: number;
  role: string;
  read: number;
  write: number;
  create: number;
  submit: number;
  cancel: number;
  delete: number;
  amend: number;
  report: number;
  export: number;
  import: number;
  share: number;
  print: number;
  email: number;
  if_owner: number;
  select: number;
  set_user_permissions: number;
  fields: any[];
  permissions: any[];
  actions: any[];
  links: any[];
  states: any[];
}

export interface Company extends BaseDocument {
  name: string;
  owner: string;
  creation: string;
  parent: string;
  parenttype: string;
  parentfield: string;
  parent_company: string;
  country: string;
  monthly_sales_target: string;
  total_monthly_sales: string;
  credit_limit: string;
  company_logo: string;
  default_currency: string;
}

export interface JournalEntry extends BaseDocument {
  title: string;
  name: string;
  cheque_no: string;
}

export interface FiscalYear extends BaseDocument {
  name: string;
  year: string;
  disabled: number;
  is_short_year: number;
  year_start_date: string;
  year_end_date: string;
  auto_created: number;
  companies: any[];
}

export interface Budget extends BaseDocument {
  name: string;
  budget_against: string;
  company: string;
  cost_center: string;
  fiscal_year: string;
  project?: any;
  monthly_distribution?: any;
  amended_from?: any;
  applicable_on_material_request: number;
  action_if_annual_budget_exceeded_on_mr: string;
  action_if_accumulated_monthly_budget_exceeded_on_mr: string;
  applicable_on_purchase_order: number;
  action_if_annual_budget_exceeded_on_po: string;
  action_if_accumulated_monthly_budget_exceeded_on_po: string;
  applicable_on_booking_actual_expenses: number;
  action_if_annual_budget_exceeded: string;
  action_if_accumulated_monthly_budget_exceeded: string;
}

export interface BankTransaction extends BaseDocument {
  name: string;
  naming_series: string;
  date: string;
  status: string;
  bank_account: string;
  company: string;
  deposit: number;
  withdrawal: number;
  currency: string;
  description: string;
  reference_number?: any;
  transaction_id: string;
  allocated_amount: number;
  amended_from?: any;
  unallocated_amount: number;
  party_type?: any;
  party?: any;
}

export interface BankAccount extends BaseDocument {
  name: string;
  budget_against: string;
  company: string;
  cost_center: string;
  project?: any;
  fiscal_year: string;
  monthly_distribution?: any;
  amended_from?: any;
  applicable_on_material_request: number;
  action_if_annual_budget_exceeded_on_mr: string;
  action_if_accumulated_monthly_budget_exceeded_on_mr: string;
  applicable_on_purchase_order: number;
  action_if_annual_budget_exceeded_on_po: string;
  action_if_accumulated_monthly_budget_exceeded_on_po: string;
  applicable_on_booking_actual_expenses: number;
  action_if_annual_budget_exceeded: string;
  action_if_accumulated_monthly_budget_exceeded: string;
}

export interface SalesInvoice extends BaseDocument {
  name: string;
  title: string;
  naming_series: string;
  customer: string;
  customer_name: string;
  tax_id?: any;
  pos_profile?: any;
  is_pos: number;
  is_consolidated: number;
  is_return: number;
  is_debit_note: number;
  update_billed_amount_in_sales_order: number;
  company: string;
  company_tax_id?: any;
  posting_date: string;
  posting_time: string;
  set_posting_time: number;
  due_date: string;
  return_against?: any;
  amended_from?: any;
  project?: any;
  cost_center: string;
  po_no: string;
  po_date?: any;
  customer_address?: any;
  address_display?: any;
  contact_person?: any;
  contact_display?: any;
  contact_mobile?: any;
  contact_email?: any;
  territory: string;
  shipping_address_name: string;
  shipping_address?: any;
  company_address: string;
  company_address_display: string;
  dispatch_address_name?: any;
  dispatch_address?: any;
  currency: string;
  conversion_rate: number;
  selling_price_list: string;
  price_list_currency: string;
  plc_conversion_rate: number;
  ignore_pricing_rule: number;
  set_warehouse?: any;
  set_target_warehouse?: any;
  update_stock: number;
  scan_barcode?: any;
  total_billing_amount: number;
  total_billing_hours: number;
  total_qty: number;
  base_total: number;
  base_net_total: number;
  total_net_weight: number;
  total: number;
  net_total: number;
  taxes_and_charges: string;
  shipping_rule?: any;
  tax_category: string;
  other_charges_calculation: string;
  base_total_taxes_and_charges: number;
  total_taxes_and_charges: number;
  loyalty_points: number;
  loyalty_amount: number;
  redeem_loyalty_points: number;
  loyalty_program?: any;
  loyalty_redemption_account?: any;
  loyalty_redemption_cost_center?: any;
  apply_discount_on: string;
  is_cash_or_non_trade_discount: number;
  base_discount_amount: number;
  additional_discount_account?: any;
  additional_discount_percentage: number;
  discount_amount: number;
  base_grand_total: number;
  base_rounding_adjustment: number;
  base_rounded_total: number;
  base_in_words: string;
  grand_total: number;
  rounding_adjustment: number;
  rounded_total: number;
  in_words: string;
  total_advance: number;
  outstanding_amount: number;
  disable_rounded_total: number;
  write_off_amount: number;
  base_write_off_amount: number;
  write_off_outstanding_amount_automatically: number;
  write_off_account?: any;
  write_off_cost_center?: any;
  allocate_advances_automatically: number;
  ignore_default_payment_terms_template: number;
  payment_terms_template?: any;
  cash_bank_account?: any;
  base_paid_amount: number;
  paid_amount: number;
  base_change_amount: number;
  change_amount: number;
  account_for_change_amount?: any;
  tc_name?: any;
  terms?: any;
  letter_head?: any;
  group_same_items: number;
  select_print_heading?: any;
  language: string;
  status: string;
  inter_company_invoice_reference?: any;
  represents_company: string;
  customer_group: string;
  campaign?: any;
  is_internal_customer: number;
  is_discounted: number;
  source?: any;
  debit_to: string;
  party_account_currency: string;
  is_opening: string;
  unrealized_profit_loss_account?: any;
  remarks: string;
  sales_partner?: any;
  amount_eligible_for_commission: number;
  commission_rate: number;
  total_commission: number;
  from_date: string;
  to_date: string;
  auto_repeat?: any;
  against_income_account: string;
  exempt_from_sales_tax: number;
  items: SalesInvoiceItem[];
}

export interface SalesInvoiceItem extends BaseDocument {
  name: string;
  item_code: string;
  item_name: string;
  description: string;
  item_group: string;
  image: string;
  qty: number;
  stock_uom: string;
  uom: string;
  conversion_factor: number;
  stock_qty: number;
  price_list_rate: number;
  base_price_list_rate: number;
  margin_type: string;
  margin_rate_or_amount: number;
  rate_with_margin: number;
  discount_percentage: number;
  discount_amount: number;
  base_rate_with_margin: number;
  rate: number;
  amount: number;
  base_rate: number;
  base_amount: number;
  stock_uom_rate: number;
  is_free_item: number;
  grant_commission: number;
  net_rate: number;
  net_amount: number;
  base_net_rate: number;
  base_net_amount: number;
  delivered_by_supplier: number;
  income_account: string;
  is_fixed_asset: number;
  expense_account: string;
  enable_deferred_revenue: number;
  weight_per_unit: number;
  total_weight: number;
  incoming_rate: number;
  allow_zero_valuation_rate: number;
  item_tax_rate: string;
  actual_batch_qty: number;
  actual_qty: number;
  delivered_qty: number;
  cost_center: string;
  page_break: number;
}

export interface Customer extends BaseDocument {
  name: string;
  naming_series: string;
  salutation?: any;
  customer_name: string;
  gender?: any;
  default_bank_account?: any;
  tax_id?: any;
  tax_category?: any;
  tax_withholding_category?: any;
  lead_name?: any;
  opportunity_name?: any;
  image?: any;
  customer_group: string;
  customer_type: string;
  territory: string;
  account_manager?: any;
  so_required: number;
  dn_required: number;
  is_internal_customer: number;
  represents_company: string;
  disabled: number;
  default_currency?: any;
  default_price_list?: any;
  customer_primary_contact?: any;
  mobile_no?: any;
  email_id?: any;
  customer_primary_address?: any;
  primary_address?: any;
  payment_terms?: any;
  customer_details?: any;
  market_segment?: any;
  industry?: any;
  website?: any;
  language: string;
  is_frozen: number;
  loyalty_program?: any;
  loyalty_program_tier?: any;
  default_sales_partner?: any;
  default_commission_rate: number;
  customer_pos_id?: any;
  exempt_from_sales_tax: number;
}

export interface PurchaseInvoice extends BaseDocument {
  name: string;
  title: string;
  naming_series: string;
  supplier: string;
  supplier_name: string;
  due_date: string;
  company: string;
  posting_date: string;
  posting_time: string;
  set_posting_time: number;
  is_paid: number;
  is_return: number;
  apply_tds: number;
  currency: string;
  conversion_rate: number;
  buying_price_list: string;
  price_list_currency: string;
  plc_conversion_rate: number;
  ignore_pricing_rule: number;
  is_subcontracted: number;
  update_stock: number;
  total_qty: number;
  base_total: number;
  base_net_total: number;
  total_net_weight: number;
  total: number;
  net_total: number;
  tax_category: string;
  taxes_and_charges: string;
  base_taxes_and_charges_added: number;
  base_taxes_and_charges_deducted: number;
  base_total_taxes_and_charges: number;
  taxes_and_charges_added: number;
  taxes_and_charges_deducted: number;
  total_taxes_and_charges: number;
  apply_discount_on: string;
  base_discount_amount: number;
  additional_discount_percentage: number;
  discount_amount: number;
  base_grand_total: number;
  base_rounding_adjustment: number;
  base_rounded_total: number;
  base_in_words: string;
  grand_total: number;
  rounding_adjustment: number;
  rounded_total: number;
  in_words: string;
  total_advance: number;
  outstanding_amount: number;
  disable_rounded_total: number;
  paid_amount: number;
  base_paid_amount: number;
  write_off_amount: number;
  base_write_off_amount: number;
  allocate_advances_automatically: number;
  ignore_default_payment_terms_template: number;
  group_same_items: number;
  language: string;
  on_hold: number;
  status: string;
  represents_company: string;
  is_internal_supplier: number;
  credit_to: string;
  party_account_currency: string;
  is_opening: string;
  against_expense_account: string;
  remarks: string;
  per_received: number;
  is_old_subcontracting_flow: number;
  supplied_items: any[];
  tax_withheld_vouchers: any[];
  advance_tax: any[];
  payment_schedule: PaymentSchedule[];
  items: PurchaseInvoiceItem[];
  pricing_rules: any[];
  taxes: any[];
  advances: any[];
}

export interface PaymentSchedule extends BaseDocument {
  name: string;
  due_date: string;
  invoice_portion: number;
  discount: number;
  payment_amount: number;
  outstanding: number;
  paid_amount: number;
  discounted_amount: number;
  base_payment_amount: number;
}

export interface PurchaseInvoiceItem extends BaseDocument {
  name: string;
  item_code: string;
  item_name: string;
  description: string;
  item_group: string;
  image: string;
  received_qty: number;
  qty: number;
  rejected_qty: number;
  uom: string;
  conversion_factor: number;
  stock_uom: string;
  stock_qty: number;
  price_list_rate: number;
  base_price_list_rate: number;
  margin_type: string;
  margin_rate_or_amount: number;
  rate_with_margin: number;
  discount_percentage: number;
  discount_amount: number;
  base_rate_with_margin: number;
  rate: number;
  amount: number;
  base_rate: number;
  base_amount: number;
  stock_uom_rate: number;
  is_free_item: number;
  net_rate: number;
  net_amount: number;
  base_net_rate: number;
  base_net_amount: number;
  valuation_rate: number;
  item_tax_amount: number;
  landed_cost_voucher_amount: number;
  rm_supp_cost: number;
  warehouse: string;
  expense_account: string;
  is_fixed_asset: number;
  enable_deferred_expense: number;
  allow_zero_valuation_rate: number;
  item_tax_rate: string;
  include_exploded_items: number;
  weight_per_unit: number;
  total_weight: number;
  cost_center: string;
  page_break: number;
}

export interface Supplier extends BaseDocument {
  name: string;
  naming_series: string;
  supplier_name: string;
  country: string;
  tax_id: string;
  irs_1099: number;
  supplier_group: string;
  supplier_type: string;
  allow_purchase_invoice_creation_without_purchase_order: number;
  allow_purchase_invoice_creation_without_purchase_receipt: number;
  is_internal_supplier: number;
  represents_company: string;
  disabled: number;
  is_transporter: number;
  warn_rfqs: number;
  warn_pos: number;
  prevent_rfqs: number;
  prevent_pos: number;
  on_hold: number;
  hold_type: string;
  language: string;
  is_frozen: number;
  accounts: any[];
  companies: any[];
}

export interface SubscriptionInvoice extends BaseDocument {
  name: string;
  document_type: string;
  invoice: string;
}

export interface SubscriptionPlanDetail extends BaseDocument {
  name: string;
  plan: string;
  qty: number;
}

export interface Subscription extends BaseDocument {
  name: string;
  party_type: string;
  party: string;
  company: string;
  status: string;
  start_date: string;
  end_date: string;
  follow_calendar_months: number;
  generate_new_invoices_past_due_date: number;
  current_invoice_start: string;
  current_invoice_end: string;
  days_until_due: number;
  cancel_at_period_end: number;
  generate_invoice_at_period_start: number;
  apply_additional_discount: string;
  additional_discount_percentage: number;
  additional_discount_amount: number;
  submit_invoice: number;
  cost_center: string;
  invoices: SubscriptionInvoice[];
  plans: SubscriptionPlanDetail[];
}

export interface SubscriptionPlan extends BaseDocument {
  name: string;
  plan_name: string;
  currency: string;
  item: string;
  price_determination: string;
  cost: number;
  billing_interval: string;
  billing_interval_count: number;
}

export interface PaymentEntry extends BaseDocument {
  name: string;
  naming_series: string;
  payment_type: string;
  payment_order_status: string;
  posting_date: string;
  company: string;
  mode_of_payment: string;
  party_type: string;
  party: string;
  party_name: string;
  party_balance: number;
  paid_from: string;
  paid_from_account_type: string;
  paid_from_account_currency: string;
  paid_from_account_balance: number;
  paid_to: string;
  paid_to_account_type: string;
  paid_to_account_currency: string;
  paid_to_account_balance: number;
  paid_amount: number;
  paid_amount_after_tax: number;
  source_exchange_rate: number;
  base_paid_amount: number;
  base_paid_amount_after_tax: number;
  received_amount: number;
  received_amount_after_tax: number;
  target_exchange_rate: number;
  base_received_amount: number;
  base_received_amount_after_tax: number;
  total_allocated_amount: number;
  base_total_allocated_amount: number;
  unallocated_amount: number;
  difference_amount: number;
  apply_tax_withholding_amount: number;
  base_total_taxes_and_charges: number;
  total_taxes_and_charges: number;
  status: string;
  custom_remarks: number;
  remarks: string;
  title: string;
  deductions: any[];
  taxes: any[];
  references: PaymentEntryReference[];
  __onload: PaymentEntryOnload;
}

export interface PaymentEntryReference extends BaseDocument {
  name: string;
  reference_doctype: string;
  reference_name: string;
  due_date: string;
  total_amount: number;
  outstanding_amount: number;
  allocated_amount: number;
  exchange_rate: number;
  exchange_gain_loss: number;
}

export interface PaymentEntryOnload {
  make_payment_via_journal_entry: number;
}

export interface Item extends BaseDocument {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  naming_series: string;
  item_code: string;
  item_name: string;
  item_group: string;
  stock_uom: string;
  disabled: number;
  allow_alternative_item: number;
  is_stock_item: number;
  has_variants: number;
  include_item_in_manufacturing: number;
  opening_stock: number;
  valuation_rate: number;
  standard_rate: number;
  is_fixed_asset: number;
  auto_create_assets: number;
  is_grouped_asset: number;
  over_delivery_receipt_allowance: number;
  over_billing_allowance: number;
  description: string;
  shelf_life_in_days: number;
  end_of_life: string;
  default_material_request_type: string;
  valuation_method: string;
  weight_per_unit: number;
  allow_negative_stock: number;
  has_batch_no: number;
  create_new_batch: number;
  has_expiry_date: number;
  retain_sample: number;
  sample_quantity: number;
  has_serial_no: number;
  variant_based_on: string;
  min_order_qty: number;
  safety_stock: number;
  is_purchase_item: number;
  lead_time_days: number;
  last_purchase_rate: number;
  is_customer_provided_item: number;
  delivered_by_supplier: number;
  enable_deferred_expense: number;
  no_of_months_exp: number;
  grant_commission: number;
  is_sales_item: number;
  max_discount: number;
  enable_deferred_revenue: number;
  no_of_months: number;
  inspection_required_before_purchase: number;
  inspection_required_before_delivery: number;
  is_sub_contracted_item: number;
  customer_code: string;
  published_in_website: number;
  total_projected_qty: number;
  doctype: string;
  barcodes: any[];
  attributes: any[];
  uoms: UomConversionDetail[];
  supplier_items: any[];
  customer_items: any[];
  item_defaults: ItemDefault[];
  reorder_levels: any[];
  taxes: any[];
  __onload: ItemOnload;
}

export interface UomConversionDetail extends BaseDocument {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  uom: string;
  conversion_factor: number;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

export interface ItemDefault extends BaseDocument {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  company: string;
  default_warehouse: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

export interface ItemOnload {
  stock_exists: number;
  asset_naming_series: string;
}

export interface ListViewSettings extends BaseDocument {
  doctype: string;
  name: string;
  disable_count: number;
  disable_sidebar_stats: number;
  disable_auto_refresh: number;
  // e.g. "8:.
  total_fields: string;
  /**
   * Json array of fields encoded as string.
   * e.g.
   * ```json
   * [
   *   {"fieldname":"customer_name","label":"Customer Name"},
   *   {"fieldname":"status_field","label":"Status"},
   *   {"fieldname":"customer_group","label":"Customer Group"},
   *   {"fieldname":"territory","label":"Territory"}
   * ]
   * ```
   */
  fields: string;
}
