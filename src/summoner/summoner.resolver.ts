import { Resolver, Query, Args, ID  } from '@nestjs/graphql';
import { SummonerService } from './summoner.service';
import { Summoner } from '../entities/summoner.entity';

@Resolver(() => Summoner)
export class SummonerResolver {
  constructor(private readonly summonerService: SummonerService) {}

  @Query(() => Summoner, { name: 'summoner' })
  get(@Args('puuid', { type: () => ID}) puuid: string) {
    return this.summonerService.byPUUID(puuid);
  }
}
