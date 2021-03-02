import { Controller } from "@/presentation/contracts";
import { MemoryAccountRepository } from "@/infra/repositories/cache";
import { SignupController } from "@/presentation/controllers/signup";
import { CreateAccountUseCase } from "@/data/usecases/create-account";

export const makeSignupController = (): Controller => {
  const repository = new MemoryAccountRepository();
  const createAccountUseCase = new CreateAccountUseCase(repository);
  const signupController = new SignupController(createAccountUseCase);

  return signupController;
}
