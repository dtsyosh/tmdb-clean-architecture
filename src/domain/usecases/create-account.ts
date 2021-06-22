import { Account } from '@/domain/entities';

export interface CreateAccount {
  perform: (account: Account) => Promise<Account>;
}
