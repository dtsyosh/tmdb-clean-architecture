import { CreateAccountUseCase } from "@/data/usecases/create-account";
import { Controller } from "@/presentation/contracts";
import { SignupController } from "@/presentation/controllers/signup";
import MongoAccountRepository from "../../infra/repositories/mongo/account-repository";

export const makeSignupController = (): Controller => {
  // const repository = new MemoryAccountRepository();
  const mongoRepository = new MongoAccountRepository()
  const createAccountUseCase = new CreateAccountUseCase(mongoRepository);
  const signupController = new SignupController(createAccountUseCase);

  return signupController;
}
