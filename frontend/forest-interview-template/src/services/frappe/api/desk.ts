import { remoteMethodCall } from '@/services/frappe/rpc';
import type {
  AccountTreeNode,
  GetDocInfoRequest,
  GetDocInfoResponse,
  GetDocRequest,
  GetDocResponse,
  GetDocTypeRequest,
  GetDocTypeResponse,
  GetListViewSettingsRequest,
  GetListViewSettingsResponse,
  GetReportViewCountRequest,
  GetReportViewCountResponse,
  GetReportViewRequest,
  GetReportViewResponse,
  GetTreeViewNodesRequest,
  RemoveAttachmentRequest,
  RunQueryReportRequest,
  RunQueryReportResponse,
  SaveDocsRequest,
  SaveDocsResponse,
  SearchLinkRequest,
  SearchLinkResponse,
} from '@/services/frappe';

export async function getDocType(request: GetDocTypeRequest): Promise<GetDocTypeResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.form.load.getdoctype',
    mutating: false,
    request,
  });
}

export async function getDoc(request: GetDocRequest): Promise<GetDocResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.form.load.getdoc',
    mutating: false,
    request,
  });
}

export async function getDocInfo(request: GetDocInfoRequest): Promise<GetDocInfoResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.form.load.get_docinfo',
    mutating: false,
    request,
  });
}

export async function removeAttachment(request: RemoveAttachmentRequest): Promise<void> {
  return remoteMethodCall({
    method: 'frappe.desk.form.utils.remove_attach',
    mutating: true,
    request,
  });
}

export async function saveDocs(request: SaveDocsRequest): Promise<SaveDocsResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.form.save.savedocs',
    mutating: true,
    request,
  });
}

export async function getReportView(request: GetReportViewRequest): Promise<GetReportViewResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.reportview.get',
    mutating: true,
    request,
  });
}

export async function getReportViewCount(
  request: GetReportViewCountRequest,
): Promise<GetReportViewCountResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.reportview.get_count',
    mutating: false,
    request,
  });
}

export async function getListViewSettings(
  request: GetListViewSettingsRequest,
): Promise<GetListViewSettingsResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.listview.get_list_settings',
    mutating: false,
    request,
  });
}

export async function runQueryReport(
  request: RunQueryReportRequest,
): Promise<RunQueryReportResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.query_report.run',
    mutating: false,
    request,
  });
}

export async function searchLink(request: SearchLinkRequest): Promise<SearchLinkResponse> {
  return remoteMethodCall({
    method: 'frappe.desk.search.search_link',
    mutating: false,
    request,
  });
}

export async function getTreeViewNodes(
  request: GetTreeViewNodesRequest,
): Promise<AccountTreeNode[]> {
  return remoteMethodCall({
    method: 'frappe.desk.treeview.get_all_nodes',
    mutating: false,
    request,
  });
}
