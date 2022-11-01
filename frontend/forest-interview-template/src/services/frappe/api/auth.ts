import { remoteMethodCall } from '@/services/frappe/rpc';
import type { LoginRequest } from '@/services/frappe';

/**
 * https://frappeframework.com/docs/v14/user/en/guides/integration/rest_api/simple_authentication.
 */
export async function getLoggedInUser(): Promise<string> {
  return remoteMethodCall({ method: 'frappe.auth.get_logged_user', mutating: false });
}

export async function login(request: LoginRequest): Promise<string> {
  return remoteMethodCall({ method: 'login', mutating: true, request });
}

export async function logout(): Promise<string> {
  return remoteMethodCall({ method: 'logout', mutating: true });
}
