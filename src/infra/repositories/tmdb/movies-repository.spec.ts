import { TMDBClient } from '@/infra/external';
import { TMDBMoviesRepository } from '@/infra/repositories/tmdb';

const makeSut = () => {
  const sut = new TMDBMoviesRepository(TMDBClient);

  return { sut };
}

describe('TMDB Movies repository', () => {

  it('Should return a movie with id provided', async () => {
    const { sut } = makeSut();

    const id = 500;

    const response = await sut.getMovieById(id);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toBe(id);
  })

  it('Should return a list of movies with query string provided', async () => {
    const { sut } = makeSut();

    const search = "Kong vs Godzilla";

    const response = await sut.getMovie(search);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('results');
  })
})
