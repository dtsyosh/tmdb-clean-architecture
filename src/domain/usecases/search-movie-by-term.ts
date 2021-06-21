import { Movie } from '../entities/movie';

export interface SearchMovieByTerm {
  perform: (term: string) => Promise<Movie[]>;
}
