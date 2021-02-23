import { SearchMovieByTermUseCase } from "../../data/usecases/search-movie-by-term";
import { Controller, HttpRequest, HttpResponse } from "../contracts";
import { ok } from "../helpers";

export class SearchMovieByTermController implements Controller {
  constructor(
    private readonly usecase: SearchMovieByTermUseCase
  ) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const movies = await this.usecase.perform(request.query.term);

    return ok(movies);
  }
}