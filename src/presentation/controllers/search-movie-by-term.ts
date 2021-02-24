import { SearchMovieByTermUseCase } from "../../data/usecases/search-movie-by-term";
import { Controller, HttpRequest, HttpResponse } from "../contracts";
import { MissingParamError } from "../errors";
import { badRequest, ok } from "../helpers";

export class SearchMovieByTermController implements Controller {
  constructor(
    private readonly usecase: SearchMovieByTermUseCase
  ) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { term } = request.query;

    if (!term) {
      return badRequest(new MissingParamError('term'));
    }

    const movies = await this.usecase.perform(term);

    return ok(movies);
  }
}