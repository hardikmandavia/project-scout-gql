import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Banned {
  @Field(() => Int)
  championId: number;

  @Field(() => Int)
  teamId: number;

  @Field(() => Int)
  pickTurn: number;
}
