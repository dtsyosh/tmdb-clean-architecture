
import { adaptRoute } from '@/main/adapters/express-router';
import { makeSearchByTermController } from '@/main/factories';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/movies', adaptRoute(makeSearchByTermController()));
}