import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
import { koaSwagger } from 'koa2-swagger-ui';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');

export const setupMiddlewares = async (app: Koa) => {
  if (process.env.NODE_ENV === 'local') {
    app.use(logger());
  }
  app.use(bodyParser())
  
  app.use(json());

  app.use(
    koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: { spec: swaggerDocument }
    })
  );
};
