import { Controller, HttpRequest } from '@/presentation/contracts';
import { Context } from 'koa';

export const adaptRoute = (controller: Controller) => {
  return async (ctx: Context) => {
    const { request: { body }, query, headers, params } = ctx;

    const request: HttpRequest = {
      body,
      query,
      headers,
      params
    };

    const httpResponse = await controller.handle(request);

    ctx.status = httpResponse.statusCode;
    ctx.body = httpResponse.body
  }
}