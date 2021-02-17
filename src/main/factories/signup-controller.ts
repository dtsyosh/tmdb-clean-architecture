import { Controller } from "@/presentation/contracts";
import { MemoryAccountRepository } from "@/infra/repositories/cache";
import SignupController from "@/presentation/controllers/signup";

export const makeSignupController = (): Controller => {
  const repository = new MemoryAccountRepository();
  const signupController = new SignupController(repository);

  return signupController;
}
