import { Account } from '@/domain/entities';

export interface AccountRepository {
  create: (data: Account) => Promise<Account>;
  findAll: () => Promise<Account[]>;
  findOne: (id: number) => Promise<Account | undefined>;
  findOneByEmail: (email: string) => Promise<Account | undefined>;
}
