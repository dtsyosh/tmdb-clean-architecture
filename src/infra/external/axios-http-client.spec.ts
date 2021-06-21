import { TMDBClient } from '@/infra/external';
import { config } from 'dotenv';

describe('TMDB Axios client', () => {
  it('Should return a movie with the same id provided', async () => {
    const id = 500;
    const response = await TMDBClient.get(`/movie/${id}`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toBe(500);
  });
});
