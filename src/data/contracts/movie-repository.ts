export interface MovieRepository {
  getMovieById: (id: number) => Promise<any>
  getMovie: (qs: string) => Promise<any>
}