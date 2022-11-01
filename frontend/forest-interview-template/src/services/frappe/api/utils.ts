import { remoteMethodCall } from '@/services/frappe/rpc';
import type { GetPdfRequest } from '@/services/frappe';

export async function getPdf(request: GetPdfRequest): Promise<any> {
  return remoteMethodCall({
    method: 'frappe.utils.print_format.download_pdf',
    mutating: false,
    responseType: 'blob',
    request,
  });
}
