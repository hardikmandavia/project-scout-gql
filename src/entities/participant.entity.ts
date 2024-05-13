import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { Perks } from "./perks.entity";

@ObjectType()
export class Participant {
  @Field(() => ID)
  puuid: string;

  @Field(() => Int)
  teamId: number;

  @Field(() => Int)
  spell1Id: number;

  @Field(() => Int)
  spell2Id: number;

  @Field(() => Int)
  championId: number;

  @Field(() => Int)
  profileIconId: number;

  @Field(() => String, { nullable: true })
  riotId: string;

  @Field(() => Boolean)
  bot: boolean;

  @Field(() => ID)
  summonerId: string;

  @Field(() => Perks)
  perks: Perks;
}
