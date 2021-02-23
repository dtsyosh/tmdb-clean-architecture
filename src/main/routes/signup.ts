
import { adaptRoute } from '@/main/adapters/express-router';
import { makeSignupController } from '@/main/factories';
import { Router } from 'express';

export const route = {
  method: 'POST',
  path: '/accounts'
}

export default (router: Router): void => {
  router.post(route.path, adaptRoute(makeSignupController()));
}