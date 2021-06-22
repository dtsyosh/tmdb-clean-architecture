import { AccountRepository } from '../../../data/contracts/account-repository';
import { Account } from '../../../domain/entities';
import AccountModel from './models/account';

export default class MongoAccountRepository implements AccountRepository {
  findAll: () => Promise<Account[]>;
  findOne: (id: number) => Promise<Account>;

  async findOneByEmail(email: string): Promise<Account | undefined> {
    return AccountModel.findOne({
      email
    })
  };

  async create(payload: Account): Promise<Account> {
    const { email, password } = payload;
    return AccountModel.create({
      email,
      password
    });
  }
}
