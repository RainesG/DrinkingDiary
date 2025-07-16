export type ServiceType = 'recipe';

export type BuildUrlType = {
  service: ServiceType;
  payload: any;
  options?: { userId: string; cacheBuster: boolean };
};

export type RequestParamsType = {
  url: string;
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'OPTIONS'
    | 'HEAD'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined;
  data: any;
  header: any;
  timeout: number;
};
