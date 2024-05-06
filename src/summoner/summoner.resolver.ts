import { Resolver, Query, Args, ID  } from '@nestjs/graphql';
import { SummonerService } from './summoner.service';
import { Summoner } from './entities/summoner.entity';

const MY_PUUID = "X3uGC4e_mr5vdWj22V5WAdF_ZZvV85-QXqBn1muxnqFrh_8T_9eKIsojvTXh8kP1Cu3l1nahrlJa1w";

@Resolver(() => Summoner)
export class SummonerResolver {
  constructor(private readonly summonerService: SummonerService) {}

  @Query(() => Summoner, { name: 'summoner' })
  get() {
    return this.summonerService.byPUUID(MY_PUUID);
  }
}
