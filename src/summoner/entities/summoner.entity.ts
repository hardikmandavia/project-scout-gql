import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Summoner {
  @Field(() => ID)
  id: String;

  @Field(() => String)
  accountId: String;

  @Field(() => String)
  puuid: String;

  @Field(() => Int)
  profileIconId: number;

  @Field(() => Int)
  summonerLevel: 465;
}
