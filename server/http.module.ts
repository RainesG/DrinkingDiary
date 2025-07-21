// server/http.js (for use in Mini Program, using wx.request)

import { handleApiError, showErrorToast } from '@/utils/error.module';
import { BuildUrlType, RequestParamsType } from './type';

const SERVICE_URLS = {
  cocktail: 'https://cocktail-backend.vercel.app/api/cocktails',
};

const URL_MODIFIERS = {
  addAuthToUrl: (url: string, token: string | null) => {
    if (token && url.includes('')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}key=${token}`;
    }
    return url;
  },
  addCacheBuster: (url: string) => {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}_t=${Date.now()}`;
  },
  addUserId: (url: string, userId: string) => {
    if (userId && url.includes('/users/')) {
      return url.replace('/users/', `/users/${userId}/`);
    }
    return url;
  },
};

function getCurrentConfig() {
  return { timeout: 20000, retryAttempts: 3 };
}

function buildUrl({
  service,
  payload,
  options = { userId: '', cacheBuster: false },
}: BuildUrlType): string {
  const { userId, cacheBuster } = options;
  let url = SERVICE_URLS[service] + (payload ? `?${payload}` : '');
  if (userId) url = URL_MODIFIERS.addUserId(url, userId);
  if (cacheBuster) url = URL_MODIFIERS.addCacheBuster(url);
  return url;
}

function wxRequestPromisified({
  url,
  method = 'GET',
  data = {},
  header = {},
  timeout = 20000,
}: RequestParamsType) {
  return new Promise((resolve, reject) => {
    console.log('data:', data);
    console.log('header:', header);
    wx.showLoading({ title: '' });
    wx.request({
      url,
      method,
      data,
      header,
      timeout,
      success: res => {
        console.log(res, 'log res');
        // Simulate axios-like response
        if (res.statusCode !== 200) {
          const appError = handleApiError(res?.data);
          showErrorToast(appError);
          reject(appError);
        } else {
          resolve({
            data: res.data,
            status: res.statusCode,
            headers: res.header,
            config: { url, method, data, header },
          });
        }
        wx.hideLoading();
      },
      fail: err => {
        const appError = handleApiError(err);
        showErrorToast(appError);
        wx.hideLoading();
      },
    });
  });
}

function getAuthToken() {
  // Implement your token retrieval logic here if needed
  return null;
}

function generateRequestId() {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Enhanced HTTP client methods with URL building
const httpClient = {
  get: ({
    service,
    payload,
    options,
  }: BuildUrlType): Promise<{ data: any }> => {
    const url = buildUrl({ service, payload, options });
    const token = getAuthToken();
    const finalUrl = URL_MODIFIERS.addAuthToUrl(url, token);
    const header = {
      'X-Request-ID': generateRequestId(),
    };
    return wxRequestPromisified({
      url: finalUrl,
      method: 'GET',
      header,
      timeout: getCurrentConfig().timeout,
    } as RequestParamsType) as unknown as Promise<{ data: any }>;
  },

  post: ({
    service,
    payload,
    data,
    options,
  }: BuildUrlType & RequestParamsType) => {
    const url = buildUrl({ service, payload, options });
    const token = getAuthToken();
    const finalUrl = URL_MODIFIERS.addAuthToUrl(url, token);
    const header = {
      'Content-Type': 'application/json',
      'X-Request-ID': generateRequestId(),
    };
    return wxRequestPromisified({
      url: finalUrl,
      method: 'POST',
      data,
      header,
      timeout: getCurrentConfig().timeout,
    });
  },

  put: ({
    service,
    payload,
    data,
    options,
  }: BuildUrlType & RequestParamsType) => {
    const url = buildUrl({ service, payload, options });
    const token = getAuthToken();
    const finalUrl = URL_MODIFIERS.addAuthToUrl(url, token);
    const header = {
      'Content-Type': 'application/json',
      'X-Request-ID': generateRequestId(),
    };
    return wxRequestPromisified({
      url: finalUrl,
      method: 'PUT',
      data,
      header,
      timeout: getCurrentConfig().timeout,
    });
  },

  buildUrl,
  getConfig: getCurrentConfig,
};

export { httpClient, buildUrl, getCurrentConfig, URL_MODIFIERS, SERVICE_URLS };
