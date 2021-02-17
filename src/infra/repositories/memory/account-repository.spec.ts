import { MemoryAccountRepository } from '@/infra/repositories/memory';

const makeSut = () => {
  const sut = new MemoryAccountRepository();
  return {
    sut
  };
}

describe('In memory account repository', () => {
  it('should return a list of accounts', async () => {
    const { sut } = makeSut();

    const accounts = await sut.findAll();

    expect(accounts).toHaveLength(4);
  });
})
