import { Express, Request, Response, Router } from 'express';

import { readdirSync } from 'fs';

export const setupRoutes = (app: Express): void => {
  const router = Router();

  app.use('/api', router);

  app.get('*', (req: Request, res: Response) => {
    res.status(404).json({
      error: 'Route not found.',
      message: 'Available routes are on /docs endpoint'
    });
  });

  readdirSync(`${__dirname}/../routes`).map(async filename => {
    (await import(`../routes/${filename}`)).default(router)
  });
}