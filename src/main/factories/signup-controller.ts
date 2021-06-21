import { CreateAccountUseCase } from "@/data/usecases/create-account";
import { MemoryAccountRepository } from "@/infra/repositories/cache";
import { Controller } from "@/presentation/contracts";
import { SignupController } from "@/presentation/controllers/signup";

export const makeSignupController = (): Controller => {
  const repository = new MemoryAccountRepository();
  const createAccountUseCase = new CreateAccountUseCase(repository);
  const signupController = new SignupController(createAccountUseCase);

  return signupController;
}
