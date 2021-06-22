import { CreateAccount } from '@/domain/usecases/create-account';
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '@/presentation/contracts';
import { MissingParamError } from '@/presentation/errors';
import {
  badRequest, created
} from '@/presentation/helpers';

export class SignupController implements Controller {
  constructor(private readonly usecase: CreateAccount) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { email, password, passwordConfirmation }: Partial<{ email: string; password: string; passwordConfirmation: string}> = request.body;

    if (!email || !password) {
      const field = !request.body.email ? 'email' : 'password';
      return badRequest(new MissingParamError(field));
    }

    if (!passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'));
    }

    const userData = {
      email,
      password,
      profiles: []
    };

    return created(await this.usecase.perform(userData));
  }
}
