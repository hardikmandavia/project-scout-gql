import { Module } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { SummonerResolver } from './summoner.resolver';

@Module({
  providers: [SummonerResolver, SummonerService],
})
export class SummonerModule {}
