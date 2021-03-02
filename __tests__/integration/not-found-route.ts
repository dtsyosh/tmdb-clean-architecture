import app from '@/main/server';
import supertest, { SuperTest, Test } from 'supertest';

let request: SuperTest<Test>;

beforeAll(() => {
  request = supertest(app);
});

afterAll(async () => {
  await app.close();
});

describe('GET /any/route', () => {
  it('Should return a 404 not found', async () => {
    const response = await request
      .get('/any/route');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });
});
