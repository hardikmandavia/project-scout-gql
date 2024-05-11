import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Summoner {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  accountId: string;

  @Field(() => ID)
  puuid: string;

  @Field(() => Int)
  profileIconId: number;

  @Field(() => Int)
  summonerLevel: number;
}
