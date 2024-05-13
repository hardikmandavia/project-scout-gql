import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MatchMetadata {
  @Field(() => String)
  dataVersion: string;

  @Field(() => String)
  matchId: string;

  @Field(() => [String])
  participants: string[];
}
