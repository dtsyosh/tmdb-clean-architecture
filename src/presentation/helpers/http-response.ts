import {
  BAD_REQUEST_CODE, CREATED_CODE, OK_CODE, SERVER_ERROR_CODE,
} from './http-status-code';

export type HttpResponseParams = {
  statusCode: number,
  body: any
}

export interface IHttpResponse {
  response: HttpResponseParams
  badRequest(error: Error): HttpResponseParams
  serverError(): HttpResponseParams
  ok(body: any): HttpResponseParams
  created(body: any): HttpResponseParams
}

export default class HttpResponse implements IHttpResponse {
  response: HttpResponseParams

  constructor() {
    this.response = {
      statusCode: 400,
      body: undefined,
    };
  }

  badRequest(error: Error): HttpResponseParams {
    this.response = {
      statusCode: BAD_REQUEST_CODE,
      body: error,
    };

    return this.response;
  }

  serverError(): HttpResponseParams {
    this.response = {
      statusCode: SERVER_ERROR_CODE,
      body: '',
    };

    return this.response;
  }

  ok(body: any): HttpResponseParams {
    this.response = {
      statusCode: OK_CODE,
      body,
    };

    return this.response;
  }

  created(body: any): HttpResponseParams {
    this.response = {
      statusCode: CREATED_CODE,
      body,
    };

    return this.response;
  }
}
