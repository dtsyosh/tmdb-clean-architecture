import { MissingParamError } from '../errors';
import { IHttpResponse, HttpResponseParams } from '../helpers/http-response';

type HttpRequest = {
  email: String,
  password: String,
  passwordConfirmation: String
}

class SignupController {
  httpResponse: IHttpResponse;

  constructor(httpResponse: IHttpResponse) {
    this.httpResponse = httpResponse;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponseParams> {
    if (!httpRequest.email) {
      return this.httpResponse.badRequest(new MissingParamError('email'));
    }

    if (!httpRequest.password) {
      return this.httpResponse.badRequest(new MissingParamError('password'));
    }

    if (!httpRequest.passwordConfirmation) {
      return this.httpResponse.badRequest(new MissingParamError('passwordConfirmation'));
    }

    return this.httpResponse.created({
      accessToken: 'ok',
    });
  }
}

export default SignupController;
