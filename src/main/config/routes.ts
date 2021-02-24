import { Express, Request, Response, Router } from 'express';

import { readdirSync } from 'fs';

export const setupRoutes = (app: Express): void => {
  const router = Router();

  app.use('/api', router);

  app.get('*', (req: Request, res: Response) => {
    res.status(404).json({
      message: 'Route not found.'
    });
  });

  readdirSync(`${__dirname}/../routes`).map(async filename => {

    if (process.env.NODE_ENV === 'local') {
      const { route } = await import(`../routes/${filename}`);
      console.log(`${route.method} /api${route.path}`);
    }

    (await import(`../routes/${filename}`)).default(router)
  });
}