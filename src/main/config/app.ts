import { config } from 'dotenv';
import { setupRoutes } from './routes';
import express from 'express';

config();

const app = express();
app.use(express.json());
setupRoutes(app);

export default app;