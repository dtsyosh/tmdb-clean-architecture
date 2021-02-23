import { CreateAccount } from "@/domain/usecases/create-account";
import { Account } from "@/domain/entities";
import { AccountRepository } from "@/data/contracts/account-repository";

export class CreateAccountUseCase implements CreateAccount {
  constructor(
    private readonly accountRepository: AccountRepository
  ) { }


  async perform(account: Account): Promise<Account> {
    return await this.accountRepository.create(account);
  }

}