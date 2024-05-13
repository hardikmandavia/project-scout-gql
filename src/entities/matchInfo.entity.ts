import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

import { MatchParticipant } from './matchParticipant.entity'
import { Team } from './team.entity';

@ObjectType()
export class MatchInfo {
  @Field(() => String)
  endOfGameResult: string;

  @Field(() => Float)
  gameCreation: number;

  @Field(() => Int)
  gameDuration: number;

  @Field(() => Float)
  gameEndTimestamp: number;

  @Field(() => Float)
  gameId: number;

  @Field(() => String)
  gameMode: string;

  @Field(() => String)
  gameName: string;

  @Field(() => [MatchParticipant])
  participants: MatchParticipant;

  @Field(() => String)
  platformId: string;

  @Field(() => Int)
  queueId: number;

  @Field(() => [Team])
  teams: Team[];
}
