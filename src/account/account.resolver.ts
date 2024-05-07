import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => Account, { name: 'account' })
  get(
    @Args('name', { type: () => String }) name: string,
    @Args('tag', { type: () => String }) tag: string,
  ) {
    return this.accountService.byRiotId(name, tag);
  }
}
