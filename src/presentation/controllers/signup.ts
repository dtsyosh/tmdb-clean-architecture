import {
  badRequest,
  serverError,
  ok,
  forbidden,
  created
} from '@/presentation/helpers';
import { MissingParamError } from '@/presentation/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/contracts';
import { CreateAccount } from '@/domain/usecases/create-account';
import { Account } from '@/domain/entities';

export class SignupController implements Controller {
  constructor(private readonly usecase: CreateAccount) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { email, password, passwordConfirmation } = request.body;

    if (!email || !password) {
      const field = !request.body.email ? 'email' : 'password';
      return badRequest(new MissingParamError(field));
    }

    if (!passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'));
    }

    const userData = {
      email,
      password
    };

    return created(await this.usecase.perform(userData));
  }
}
