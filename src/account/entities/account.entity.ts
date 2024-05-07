import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => ID)
  puuid: string;

  @Field(() => String)
  gameName: string;

  @Field(() => String)
  tagLine: string;
}
