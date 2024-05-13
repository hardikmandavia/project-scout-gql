import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Participant } from './participant.entity';

@ObjectType()
export class MatchParticipant extends Participant {  
  @Field(() => Int)
  assists: number;

  @Field(() => String)
  championName: string;

  @Field(() => Int)
  deaths: number;

  @Field(() => String)
  lane: string;

  @Field(() => Int)
  kills: number;

  @Field(() => Int)
  participantId: number;

  @Field(() => String)
  riotIdGameName: string;

  @Field(() => String)
  riotIdTagline: string;

  @Field(() => String)
  role: string;

  @Field(() => String)
  summonerName: string;

  @Field(() => String)
  teamPosition: string;

  @Field(() => Boolean)
  win: boolean;
}
