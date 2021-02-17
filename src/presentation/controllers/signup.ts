import { badRequest, serverError, ok, forbidden, created } from '@/presentation/helpers'
import MissingParamError from '@/presentation/errors/missing-param-error';
import { HttpResponse } from '@/presentation/protocols';

class SignupController {

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

    return created({
      accessToken: 'ok',
    });
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
