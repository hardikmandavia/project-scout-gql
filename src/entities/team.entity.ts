import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { Ban } from './ban.entity';

@ObjectType()
export class Team {
  @Field(() => [Ban])
  bans: Ban[];

  @Field(() => Int)
  teamId: number;

  @Field(() => Boolean)
  win: boolean;
}
