import { ObjectType, Field } from '@nestjs/graphql';

import { MatchMetadata } from './matchMetadata.entity';
import { MatchInfo } from './matchInfo.entity';

@ObjectType()
export class Match {
  @Field(() => MatchMetadata)
  metadata: MatchMetadata;

  @Field(() => MatchInfo)
  info: MatchInfo;
}
