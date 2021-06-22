import { Movie } from '@/domain/entities/movie';

export interface MovieRepository {
  getMovieById: (id: number) => Promise<Movie>;
  getMovieByTerm: (term: string) => Promise<Movie[]>;
}
