import { config } from 'dotenv';
import Koa from 'koa';
import { setupDatabase } from './database';
import { setupMiddlewares } from './middlewares';
import { setupRoutes } from './routes';

config();

const app = new Koa();

(async () => {
  await setupDatabase();
  await setupMiddlewares(app);
  await setupRoutes(app);
})()


export default app;
