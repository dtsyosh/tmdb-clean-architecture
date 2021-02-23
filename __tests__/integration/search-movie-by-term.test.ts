import { TMDBMoviesRepository } from '../../src/infra/repositories/tmdb';
import { SearchMovieByTermController } from '../../src/presentation/controllers';
import { SearchMovieByTermUseCase } from '../../src/data/usecases';
import { TMDBClient } from '../../src/infra/external';

const makeSut = () => {
  const movieRepository = new TMDBMoviesRepository(TMDBClient);
  const usecase = new SearchMovieByTermUseCase(movieRepository);
  const sut = new SearchMovieByTermController(usecase);

  return {
    sut
  };
}

describe('Search movie by term', () => {
  it('Should return 200 when term is provided', async () => {
    const { sut } = makeSut();

    const httpRequest = {
      query: {
        term: 'kong vs godzilla'
      }
    }

    const response = await sut.handle(httpRequest);


    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toHaveProperty('title');
  })
});
