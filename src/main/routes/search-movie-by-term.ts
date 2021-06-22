import { adaptRoute } from '@/main/adapters/koa-router';
import { makeSearchByTermController } from '@/main/factories';
import Router from 'koa-router';

export default (router: Router): void => {
  router.get('/movies', adaptRoute(makeSearchByTermController()));
};
