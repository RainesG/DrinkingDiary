export type BuildUrlType = {
  url: string;
  payload?: any;
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
