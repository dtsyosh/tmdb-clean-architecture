import { MissingParamError } from '@/presentation/errors';
import { MemoryAccountRepository } from '@/infra/repositories/cache';
import { CreateAccountUseCase } from '@/data/usecases';
import { SignupController } from '@/presentation/controllers';

const makeSut = () => {
  const repository = new MemoryAccountRepository();
  const createAccountUseCase = new CreateAccountUseCase(repository);
  const sut = new SignupController(createAccountUseCase);

  return { sut };
};

describe('Signup Controller', () => {
  it('Should return 201 if an email, password and passwordConfirmation are provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      }
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(201);
  });

  it('Should return 400 if an email is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: null,
        password: 'any_password',
        passwordConfirmation: null,
      }
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.body).toHaveProperty('error');
  });

  it('Should return 400 if a password is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        passwordConfirmation: null,
      }
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.body).toHaveProperty('error');
  });

  it('Should return 400 if a passwordConfirmation is not provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
      }
    };

    const httpResponse = await sut.handle(httpRequest);

    expect(httpResponse.body).toHaveProperty('error');
  });
});
