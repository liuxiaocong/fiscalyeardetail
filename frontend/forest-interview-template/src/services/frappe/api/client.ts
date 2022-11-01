/**
 * This File is ported from the [Python
 * client](https://github.com/frappe/frappe-client/blob/master/frappeclient/frappeclient.py) and
 * [.Net client](https://github.com/yemikudaisi/FrappeRestClient.Net) and [Open API
 * collection](https://app.swaggerhub.com/apis/alyf.de/ERPNext/13#/Example%20DocTypes/post_api_resource_Timesheet).
 *
 * Learn about the API
 * [here](https://frappeframework.com/docs/v14/user/en/guides/integration/rest_api/listing_documents).
 */
import { remoteMethodCall } from '@/services/frappe/rpc';
import type {
  BaseDocument,
  BulkCreateDocumentRequest,
  BulkUpdateDocumentRequest,
  CancelDocumentRequest,
  CountDocumentRequest,
  CreateDocumentRequest,
  DeleteDocumentRequest,
  GetDocumentFieldValueRequest,
  GetDocumentRequest,
  ListDocumentRequest,
  RenameDocumentRequest,
  SetDocumentFieldValueRequest,
  SubmitDocumentRequest,
  UpdateDocumentRequest,
} from '@/services/frappe';
import type { GetHtmlRequest } from '@/services/frappe';

export async function listDocuments(request: ListDocumentRequest): Promise<BaseDocument[]> {
  return remoteMethodCall({
    method: 'frappe.client.get_list',
    request,
    mutating: false,
  });
}

export async function countDocuments(request: CountDocumentRequest): Promise<number> {
  return remoteMethodCall({
    method: 'frappe.client.get_count',
    request,
    mutating: false,
  });
}

export async function createDocument(request: CreateDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.insert',
    mutating: true,
    request,
  });
}

export async function bulkCreateDocuments(request: BulkCreateDocumentRequest): Promise<unknown> {
  return remoteMethodCall({
    method: 'frappe.client.insert_many',
    request,
    mutating: true,
  });
}

export async function updateDocument(request: UpdateDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.save',
    request,
    mutating: true,
  });
}

export async function bulkUpdateDocuments(request: BulkUpdateDocumentRequest): Promise<any> {
  return remoteMethodCall({
    method: 'frappe.client.bulk_update',
    request,
    mutating: true,
  });
}

export async function deleteDocument(request: DeleteDocumentRequest): Promise<any> {
  return remoteMethodCall({
    method: 'frappe.client.delete',
    mutating: true,
    request,
  });
}

export async function submitDocument(request: SubmitDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.submit',
    mutating: true,
    request,
  });
}

export async function getDocumentFieldValue(
  request: GetDocumentFieldValueRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.get_value',
    mutating: false,
    request,
  });
}

export async function setDocumentFieldValue(
  request: SetDocumentFieldValueRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.set_value',
    request,
    mutating: true,
  });
}

export async function cancelDocument(request: CancelDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.cancel',
    request,
    mutating: true,
  });
}

export async function getDocument(request: GetDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.get',
    request,
    mutating: false,
  });
}

export async function renameDocument(request: RenameDocumentRequest): Promise<BaseDocument> {
  return remoteMethodCall({
    method: 'frappe.client.rename_doc',
    request,
    mutating: true,
  });
}

export async function getHtml(request: GetHtmlRequest): Promise<any> {
  return remoteMethodCall({
    method: 'frappe.client.frappe.www.printview.get_html_and_style',
    mutating: false,
    responseType: 'blob',
    request,
  });
}
