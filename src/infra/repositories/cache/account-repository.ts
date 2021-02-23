import { AccountRepository } from "@/data/contracts/account-repository";
import { Account } from "@/domain/entities";
import memoryAccounts from './accounts.json';

export class MemoryAccountRepository implements AccountRepository {
  public accounts: Account[]

  constructor() {
    this.accounts = memoryAccounts;
  }
  findOne: (id: number) => Promise<Account>;

  async findAll(): Promise<Account[]> {
    return this.accounts;
  };

  async create(data: Account): Promise<Account> {
    const lastAccount: Account = this.accounts.slice(-1)[0];

    const newAccount = {
      ...data,
    };

    this.accounts = [...this.accounts, newAccount];

    return newAccount;
  };

  async findOneByEmail(email: string): Promise<Account> {
    return this.accounts.find(account => account.email === email);
  };
}