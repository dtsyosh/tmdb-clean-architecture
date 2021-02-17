import { badRequest, serverError, ok, forbidden, created } from '@/presentation/helpers'
import { MissingParamError } from '@/presentation/errors';
import { Controller, HttpResponse } from '@/presentation/contracts';
import { CreateAccount } from '@/domain/usecases/create-account';
import { Account } from '@/domain/entities';

class SignupController implements Controller {

  constructor(
    private readonly usecase: CreateAccount
  ) { }

  async handle(request: SignupController.Request): Promise<HttpResponse> {
    if (!request.email) {
      return badRequest(new MissingParamError('email'));
    }

    if (!request.password) {
      return badRequest(new MissingParamError('password'));
    }

    if (!request.passwordConfirmation) {
      return badRequest(new MissingParamError('passwordConfirmation'));
    }

    const userData = {
      email: request.email,
      password: request.password
    }

    const account: Account = await this.usecase.create(userData)

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
