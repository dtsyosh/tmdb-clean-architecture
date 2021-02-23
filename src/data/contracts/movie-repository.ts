export interface MovieRepository {
  getMovieById: (id: number) => Promise<any>
  getMovieByTerm: (term: string) => Promise<any>
}