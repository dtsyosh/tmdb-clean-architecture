import request from 'supertest';
import app from '../../src/main/config/app';

describe('GET /api/movies', () => {
  it('Should return a list of movies when term is provided', async () => {
    const term = 'Fast & Furious'

    const response = await request(app)
      .get('/api/movies')
      .query({ term });

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('title');
  });

  it('Should return a badRequest when term is not provided in query', async () => {
    const response = await request(app).get(`/api/movies`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
