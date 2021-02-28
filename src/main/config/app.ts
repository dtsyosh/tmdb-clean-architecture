import { config } from 'dotenv';
import { setupRoutes } from './routes';
import Koa from 'koa';
import { setupMiddlewares } from './middlewares';

config();

const app = new Koa();

setupMiddlewares(app);
setupRoutes(app);

export default app;