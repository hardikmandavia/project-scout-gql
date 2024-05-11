import { Injectable } from '@nestjs/common';

import RiotAPI, { getUrl } from "../_riot-api";

@Injectable()
export class SpectatorService {
  async bySummoner(puuid: string) {
    const url = getUrl('EUW1', `lol/spectator/v5/active-games/by-summoner/${puuid}`);
    const request = new RiotAPI(url);

    const result = await request.get();
    return result.data;
  }
}
