import Koa, { Context } from 'koa';
import KoaRouter from 'koa-router';

import { readdirSync } from 'fs';

export const setupRoutes = (app: Koa): void => {
  const router = new KoaRouter({ prefix: '/api' });

  readdirSync(`${__dirname}/../routes`).map(async (filename) => {
    (await import(`../routes/${filename}`)).default(router);
  });

  app.use(router.routes());

  app.use((ctx: Context) => {
    ctx.status = 404;
    ctx.body = {
      error: 'Route not found.',
      message: 'Available routes are on /docs endpoint'
    };
  });
};
