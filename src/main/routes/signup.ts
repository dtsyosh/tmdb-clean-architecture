import { adaptRoute } from '@/main/adapters/koa-router';
import { makeSignupController } from '@/main/factories';
import Router from 'koa-router';

export default (router: Router): void => {
  router.post('/accounts', adaptRoute(makeSignupController()));
};
