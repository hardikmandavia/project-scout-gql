import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Perks {
  @Field(() => Int)
  perkStyle: number;

  @Field(() => Int)
  perkSubStyle: number;

  @Field(() => [Int])
  perkIds: number[];
}
