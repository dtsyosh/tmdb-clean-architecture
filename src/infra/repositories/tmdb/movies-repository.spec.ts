import { TMDBClient } from '@/infra/external';
import { TMDBMoviesRepository } from '@/infra/repositories/tmdb';

const makeSut = () => {
  const sut = new TMDBMoviesRepository(TMDBClient);

  return { sut };
}

describe('TMDB Movies repository', () => {
  it('Should return a movie with id provided', async () => {
    const { sut } = makeSut();

    const response = await sut.getMovieById(500);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toBe(500);
  })
})
