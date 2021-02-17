import { AccountRepository } from "@/data/contracts/account-repository";
import memoryAccounts from './accounts.json';
import { AccountModel } from "@/data/models";

export class MemoryAccountRepository implements AccountRepository {
  private accounts: Array<AccountModel>

  constructor() {
    this.accounts = memoryAccounts;
  }

  async findAll(): Promise<AccountModel[]> {
    return this.accounts;
  };

  async create(data: Omit<AccountModel, 'id'>): Promise<AccountModel> {
    return this.makeAccount(data);
  };

  async findOne(id: number): Promise<AccountModel> {
    return this.accounts.find(account => account.id === id);
  }

  async findOneByEmail(email: string): Promise<AccountModel> {
    return this.accounts.find(account => account.email === email);
  };

  private makeAccount(data: Omit<AccountModel, 'id'>): AccountModel {
    const lastAccount: AccountModel = this.accounts.slice(-1)[0];

    return {
      ...data,
      id: lastAccount.id + 1
    };
  }
}