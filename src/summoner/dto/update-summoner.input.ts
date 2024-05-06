import { CreateSummonerInput } from './create-summoner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSummonerInput extends PartialType(CreateSummonerInput) {
  @Field(() => Int)
  id: number;
}
