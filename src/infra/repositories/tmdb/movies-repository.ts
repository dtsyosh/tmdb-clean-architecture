import { AxiosInstance } from "axios";
import { MovieRepository } from "@/data/contracts/movie-repository";
import { Movie } from "@/domain/entities/movie";

export class TMDBMoviesRepository implements MovieRepository {
  private readonly TMDB_IMAGE_BASE = process.env.TMDB_IMAGE_BASE;
  constructor(
    private readonly httpClient: AxiosInstance
  ) { }

  async getMovieById(id: number): Promise<any> {
    return this.httpClient.get(`/movie/${id}`);
  }

  async getMovieByTerm(term: string): Promise<Movie[]> {
    const response = await this.httpClient.get('/search/movie', {
      params: {
        query: term
      }
    });

    const { results } = response.data;

    return results.map(movie => ({
      title: movie.original_title,
      adult: movie.adult,
      overview: movie.overview,
      poster: this.TMDB_IMAGE_BASE + movie.poster_path
    }));
  }
}