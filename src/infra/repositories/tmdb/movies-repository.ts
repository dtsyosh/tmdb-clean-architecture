import { AxiosInstance } from "axios";
import { MovieRepository } from "@/data/contracts/movie-repository";

export class TMDBMoviesRepository implements MovieRepository {
  constructor(
    private readonly httpClient: AxiosInstance
  ) { }

  async getMovieById(id: number): Promise<any> {
    return this.httpClient.get(`/movie/${id}`);
  }

  async getMovie(qs: string): Promise<any> {
    return this.httpClient.get('/search/movie', {
      params: {
        query: qs
      }
    });
  }
}