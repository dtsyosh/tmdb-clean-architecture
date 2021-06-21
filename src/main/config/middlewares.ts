import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import YAML from 'yamljs';
import { koaSwagger } from 'koa2-swagger-ui';

const swaggerDocument = YAML.load('./swagger.yaml');

export const setupMiddlewares = async (app: Koa) => {
  if (process.env.NODE_ENV === 'local') {
    app.use(logger());
  }
  app.use(json());

  app.use(
    koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: { spec: swaggerDocument }
    })
  );
};
