import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSummonerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
