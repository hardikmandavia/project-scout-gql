import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { SpectatorService } from './spectator.service';
import { Spectator } from '../entities/spectator.entity';

@Resolver(() => Spectator)
export class SpectatorResolver {
  constructor(private readonly spectatorService: SpectatorService) {}

  @Query(() => Spectator, { name: 'spectator' })
  getActive(@Args('puuid', { type: () => ID }) puuid: string) {
    return this.spectatorService.bySummoner(puuid);
  }
}
