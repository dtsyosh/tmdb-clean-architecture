import { badRequest, serverError, ok, forbidden, created } from '@/presentation/helpers'
import { MissingParamError } from '@/presentation/errors';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/contracts';
import { CreateAccount } from '@/domain/usecases/create-account';
import { Account } from '@/domain/entities';

class SignupController implements Controller {

  constructor(
    private readonly usecase: CreateAccount
  ) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { email, password, passwordConfirmation } = request.body;

    if (!email) {
      return badRequest(new MissingParamError('email'));
    }

    if (!password) {
      return badRequest(new MissingParamError('password'));
    }

    if (!passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'));
    }

    const userData = {
      email,
      password
    }

    const account: Account = await this.usecase.perform(userData)

    return created(account);
  }
}

export namespace SignupController {
  export type Request = {
    email: string
    password: string
    passwordConfirmation: string
  }
}

export default SignupController;
