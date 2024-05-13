import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';

import { Ban } from './ban.entity';
import { Participant } from "./participant.entity";

@ObjectType()
export class Spectator {
  @Field(() => Float)
  gameId: number;

  @Field(() => Int)
  mapId: number;

  @Field(() => String)
  gameMode: string;

  @Field(() => String)
  gameType: string;

  @Field(() => Int)
  gameQueueConfigId: number;

  @Field(() => [Participant])
  participants: Participant[];

  @Field(() => String)
  platformId: string;

  @Field(() => [Ban])
  bannedChampions: Ban[];

  @Field(() => Int)
  gameStartTime: number;

  @Field(() => Int)
  gameLength: number;
}
