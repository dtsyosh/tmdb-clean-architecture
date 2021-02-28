import { Controller, HttpRequest } from '@/presentation/contracts';
import { Context } from 'koa';

export const adaptRoute = (controller: Controller) => {
  return async (ctx: Context) => {
    const { body, query, headers } = ctx;

    const request: HttpRequest = {
      body,
      query,
      headers
    };

    const httpResponse = await controller.handle(request);

    ctx.status = httpResponse.statusCode;
    ctx.body = httpResponse.body
  }
}