import { Controller } from "@/presentation/contracts";
import { TMDBMoviesRepository } from "@/infra/repositories/tmdb";
import { TMDBClient } from "@/infra/external";
import { SearchMovieByTermUseCase } from "../../data/usecases";
import { SearchMovieByTermController } from "../../presentation/controllers";

export const makeSearchByTermController = (): Controller => {
  const repository = new TMDBMoviesRepository(TMDBClient);
  const searchMovieByTermUseCase = new SearchMovieByTermUseCase(repository);
  const searchMovieByTermController = new SearchMovieByTermController(searchMovieByTermUseCase);

  return searchMovieByTermController;
}
