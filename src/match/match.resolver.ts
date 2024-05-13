import { Resolver, Query, Args, Int, ID } from "@nestjs/graphql";
import { MatchService } from "./match.service";
import { Match } from "../entities/match.entity";

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}

  @Query(() => [String], { name: "matchIds" })
  index(
    @Args("puuid", { type: () => ID }) puuid: string,
    @Args("count", { defaultValue: 5, type: () => Int }) count?: number
  ) {
    return this.matchService.getListByPUUID(puuid, count);
  }

  @Query(() => Match, { name: "match" })
  get(@Args("id", { type: () => ID }) id: string) {
    return this.matchService.getById(id);
  }
}
