import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');

export const setupMiddlewares = async (app: Express) => {

  if (process.env.NODE_ENV === 'local') {
    const morgan = require('morgan');

    app.use(morgan('tiny'));
  }
  app.use(express.json());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

}