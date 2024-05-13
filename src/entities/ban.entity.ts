import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class Ban {
  @Field(() => Int)
  championId: number;

  @Field(() => Int, { nullable: true })
  teamId: number;

  @Field(() => Int)
  pickTurn: number;
}
