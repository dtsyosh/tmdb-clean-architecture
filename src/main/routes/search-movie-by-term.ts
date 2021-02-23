
import { adaptRoute } from '@/main/adapters/express-router';
import { makeSearchByTermController } from '@/main/factories';
import { Router } from 'express';

export const route = {
  method: 'GET',
  path: '/movies'
}

export default (router: Router): void => {
  router.get(route.path, adaptRoute(makeSearchByTermController()));
}