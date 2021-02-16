import HttpResponse from '../helpers/http-response';
import SignupController from './signup';

const makeSut = () => {
  const httpResponse = new HttpResponse();
  const sut = new SignupController(httpResponse);

  return { sut };
};

describe('Signup Controller', () => {
  it('Should return 201 if an email, password and passwordConfirmation are provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password',
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(201);
  });

  it('Should return 400 if an email is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      password: 'any_password',
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  });

  it('Should return 400 if a password is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      email: 'any_email@email.com',
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  });

  it('Should return 400 if a passwordConfirmation is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      email: 'any_email@email.com',
      password: 'any_password',
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  });
});
