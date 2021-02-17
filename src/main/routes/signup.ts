
import { adaptRoute } from '@/main/adapters/express-router';
import { makeSignupController } from '@/main/factories';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/accounts', adaptRoute(makeSignupController()));
}