import type {
  BaseDocument,
  DocFieldType,
  DocPermission,
  DocType,
  ListViewSettings,
} from '@/services/frappe/doctype';

/**
 * Examples:
 * - ["Sales Invoice", "name", "=", "John"]
 * - ["Sales Invoice", "name", "!=", "John"]
 * - ["Sales Invoice", "name", "like", "%John%"]
 * - ["Sales Invoice", "name", "not like", "%John%"]
 * - ["Sales Invoice", "name", "in", ["John", "Smith"]]
 * - ["Sales Invoice", "name", "in", ["John", "Smith"]]
 * - ["Sales Invoice", "name", "not in", ["John", "Smith"]]
 * - ["Sales Invoice", "name", "is", "set"]
 * - ["Sales Invoice", "name", "is", "not set"]
 */
export type DocumentListFilter = [string, string, DocumentListFilterOperator, string | string[]];

export type DocumentListFilterOperator =
  | '='
  | '!='
  | 'like'
  | 'not like'
  | 'in'
  | 'not in'
  | 'is'
  | '>'
  | '<'
  | '>='
  | '<='
  | 'Between'
  | 'Timespan'
  | 'descendants of'
  | 'not descendants of'
  | 'ancestors of'
  | 'not ancestors of'
  | 'fiscal year';

/**
 * Examples:
 * - "name desc"
 * - "creation desc"
 * - "modified asc"
 */
export type DocumentListFilterOrderBy = `${string} ${'desc' | 'asc'}`;

/**
 * dict or string for identifying the record. Examples:
 * - "Found8tion"
 * - {"name": "Found8tion"}
 */
export type DocumentInstanceFilter = string | Record<string, string>;

/**
 * Use ['*'] to return all fields.
 */
export type DocumentFieldList = string[];

export interface DocumentRef {
  doctype: string;
  name: string;
}

export interface LoginRequest {
  usr: string;
  pwd: string;
}

export interface ListDocumentRequest {
  doctype: string;
  limit_start: number;
  limit_page_length: number;
  // e.g. ["name","first_name"]
  fields?: string[];
  filters?: DocumentListFilter[];
  orderBy?: DocumentListFilterOrderBy;
}

export interface CountDocumentRequest {
  doctype: string;
  fields?: string[];
  filters?: DocumentListFilter[];
  distinct?: boolean;
}

export interface CreateDocumentRequest {
  doc: BaseDocument;
}

/**
 * Example:
 * [
 *   {
 *     "doctype": "Sales Invoice",
 *     "customer": "Unit 714-8",
 *   },
 *   {
 *     "doctype": "nostrud culpa veniam"
 *   }
 * ]
 */
export interface BulkCreateDocumentRequest {
  docs: BaseDocument[];
}

export interface UpdateDocumentRequest {
  doc: BaseDocument;
}

export interface BulkUpdateDocumentRequest {
  docs: BaseDocument[];
}

export interface GetDocumentRequest {
  doctype: string;
  name: string;
  fields: DocumentFieldList;
  filters: DocumentInstanceFilter;
}

export type DeleteDocumentRequest = DocumentRef;

export type CancelDocumentRequest = DocumentRef;

export interface SubmitDocumentRequest {
  doc: BaseDocument;
}

export interface RenameDocumentRequest {
  doctype: string;
  old_name: string;
  new_name: string;
}

export interface GetDocumentFieldValueRequest {
  doctype: string;
  fieldname?: string;
  filters: DocumentInstanceFilter;
}

export interface SetDocumentFieldValueRequest {
  doctype: string;
  name: string;
  fieldname: string;
  value: any;
}

export interface GetDocTypeRequest {
  doctype: string;
  with_parent: boolean;
}

export interface GetDocTypeResponse {
  docs: DocType[];
}

export interface GetPdfRequest {
  doctype: string;
  name: string;
  format: string;
  no_letterhead: boolean;
}

export interface GetHtmlRequest {
  doc: BaseDocument;
  format: string;
  no_letterhead: boolean;
}

export interface GetAccountBalancesRequest {
  company: string;
  accounts: AccountTreeNode[];
}

export interface AccountBalance {
  account_currency: string;
  balance: number;
  company_currency: string;
  expandable: boolean;
  report_type: string;
  root_type: string;
  value: string;
}

export interface GetBankAccountRequest {
  bank_account: string;
  till_date?: string;
}

export interface GetBankReconciliationLinkedPaymentsRequest {
  bank_transaction_name: string;
  document_types: string[];
}

export interface BankReconciliationReconcileVouchersRequest {
  bank_transaction_name: string;
  vouchers: any[];
}

export interface BankReconciliationReconcileUpdateBankTransactionRequest {
  bank_transaction_name: string;
  reference_number: string;
  party_type: string;
  party: string;
}

export interface BankReconciliationReconcileCreatePaymentEntryRequest
  extends BankReconciliationReconcileUpdateBankTransactionRequest {
  reference_date: string;
  posting_date: string;
  mode_of_payment: string;
  project: string;
  cost_center: string;
}

export interface BankReconciliationReconcileCreateJournalEntryRequest
  extends BankReconciliationReconcileUpdateBankTransactionRequest {
  reference_date: string;
  posting_date: string;
  mode_of_payment: string;
  entry_type: string;
  second_account: string;
}

export interface SearchLinkRequest {
  doctype: string;
  txt?: string;
  reference_doctype?: string;
  ignore_user_permissions?: boolean;
  // e.g. {is_group: 1, company: 'Com'}
  filters?: Record<string, any>;
  [key: string]: any;
}

export interface SearchLinkResponse {
  results: SearchLink[];
}

export interface SearchLink {
  value: string;
  description: string;
}

export interface GetTreeViewNodesRequest {
  doctype: string;
  company: string;
  label: string;
  parent: string;
  is_root: boolean;
  tree_method: string;
}

export interface AccountTreeNode {
  parent: string;
  data: AccountTreeNodeData[];
}

export interface AccountTreeNodeData {
  account_currency: string;
  expandable: boolean;
  report_type: string;
  root_type: string;
  value: string;
}

export type GetDocRequest = DocumentRef;

export interface GetDocResponse {
  docs: BaseDocument[];
}

export type GetDocInfoRequest = DocumentRef;

export interface GetDocInfoResponse {
  docinfo: DocInfo;
}

export interface SaveDocsRequest {
  doc: BaseDocument;
  action: SaveDocsAction;
}

export type SaveDocsAction = 'Save' | 'Submit' | 'Update' | 'Cancel';

export interface SaveDocsResponse {
  docinfo: DocInfo;
  docs: BaseDocument[];
}

export interface DocInfo {
  user_info: any;
  comments: any[];
  shared: any[];
  assignment_logs: any[];
  attachment_logs: any[];
  info_logs: any[];
  like_logs: any[];
  workflow_logs: any[];
  doctype: string;
  name: string;
  attachments: Attachment[];
  communications: any[];
  automated_messages: any[];
  total_comments: number;
  versions: DocVersion[];
  assignments: any[];
  permissions: DocPermission;
  views: any[];
  energy_point_logs: any[];
  additional_timeline_content: any[];
  milestones: any[];
  is_document_followed?: any;
  tags: string;
  document_email?: any;
}

export interface Attachment {
  file_name: string;
  file_url: string;
  is_private: boolean;
  name: string;
}

export interface RemoveAttachmentRequest {
  fid: string;
  dt: string;
  dn: string;
}

export interface DocVersion {
  name: number;
  owner: string;
  creation: string;
  data: string;
}

export interface GetReportViewRequest {
  doctype: string;
  filters?: DocumentListFilter[];
  fields: DocumentFieldList;
  order_by?: DocumentListFilterOrderBy;
  /**
   * e.g. 0.
   */
  start: number | string;
  /**
   * e.g. 20.
   */
  page_length: number;
  /**
   * e.g. 'List'.
   */
  view: string;
  with_comment_count: boolean;
}

export type GetReportViewResponse =
  | []
  | {
      keys: string[];
      values: any[][];
    };

export interface GetReportViewCountRequest {
  doctype: string;
  filters?: DocumentListFilter[];
  fields: DocumentFieldList;
  distinct: boolean;
}

export type GetReportViewCountResponse = number;

export interface GetListViewSettingsRequest {
  doctype: string;
}

export type GetListViewSettingsResponse = ListViewSettings;

export interface RunQueryReportRequest {
  report_name: string;
  filters: QueryReportFilter;
  is_tree?: boolean;
}

export interface QueryReportFilter {
  company: string;
  fiscal_year?: string;
  from_date?: string;
  to_date?: string;
  party_type?: string;
  periodicity?: string;
  period?: string;
  filter_based_on?: string;
  period_start_date?: string;
  period_end_date?: string;
  from_fiscal_year?: string;
  to_fiscal_year?: string;
  budget_against?: string;
  range1?: string;
  range2?: string;
  range3?: string;
  range4?: string;
}

export interface RunQueryReportResponse {
  result: ReportRow[];
  columns: ReportColumn[];
  message?: any;
  chart?: any;
  report_summary?: any;
  skip_total_row: number;
  status?: any;
  execution_time: number;
  add_total_row: number;
}

export interface ReportRow {
  account: string;
  parent_account: string;
  indent: number;
  from_date: string;
  to_date: string;
  currency: string;
  account_name: string;
  opening_debit: number;
  opening_credit: number;
  debit: number;
  credit: number;
  closing_debit: number;
  closing_credit: number;
  has_value: boolean;
  warn_if_negative?: boolean;
}

export interface ReportColumn {
  fieldname: string;
  label: string;
  fieldtype: DocFieldType;
  options: string;
  width: number;
  hidden?: number;
}
