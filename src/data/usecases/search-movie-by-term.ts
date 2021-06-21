import { Movie } from '@/domain/entities/movie';
import { SearchMovieByTerm } from '@/domain/usecases/search-movie-by-term';
import { MovieRepository } from '@/data/contracts/movie-repository';

export class SearchMovieByTermUseCase implements SearchMovieByTerm {
  constructor(private readonly movieRepository: MovieRepository) {}

  async perform(term: string): Promise<Movie[]> {
    const movies: Movie[] = await this.movieRepository.getMovieByTerm(term);

    return movies;
  }
}
