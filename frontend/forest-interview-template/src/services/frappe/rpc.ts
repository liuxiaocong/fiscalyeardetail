import type { ResponseType } from 'axios';
import { request } from '@@/exports';
import _ from 'lodash';

interface RemoteMethodCallRequest {
  method: string;
  /* The framework will automatically call frappe.db.commit(). */
  mutating: boolean;
  request?: Record<string, any>;
  responseType?: ResponseType;
}

/**
 * This method should be internal to `services/frappe`.
 */
export async function remoteMethodCall<R>({
  request: params,
  mutating,
  method,
  responseType = 'json',
}: RemoteMethodCallRequest): Promise<R> {
  const encodedParams = encodeRpcParams(params);
  let responseBody: any;
  if (mutating) {
    responseBody = await request(`/api/method/${method}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      responseType,
      data: encodedParams,
    });
  } else {
    responseBody = await request(`/api/method/${method}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      responseType,
      params: { ...encodedParams, _: Date.now() },
    });
  }
  if (responseType === 'json') {
    if (!_.isObject(responseBody)) {
      return Promise.reject('Invalid response body');
    }
    return extractRpcMessage(responseBody);
  }
  return responseBody;
}

function encodeRpcParams(params: Record<string, any> | undefined): any {
  if (!params) {
    return undefined;
  }
  const encodedParams = { ...params };
  for (const key of Object.keys(params)) {
    const value = params[key];
    if (!!value && (typeof value === 'object' || Array.isArray(value))) {
      encodedParams[key] = JSON.stringify(value);
    }
  }
  return encodedParams;
}

function extractRpcMessage(response: any): any {
  if (response.exception) {
    throw Error(response.exception);
  }
  if (response.message) {
    return response.message;
  }
  if (response.data) {
    return response.data;
  }
  return response;
}
