import { Injectable } from '@nestjs/common';

import RiotAPI, { getUrl } from "../_riot-api";

@Injectable()
export class SummonerService {
  async byPUUID(puuid: string) {
    const url = getUrl('EUW1', `lol/summoner/v4/summoners/by-puuid/${puuid}`);
    const request = new RiotAPI(url);

    const result = await request.get();
    return result.data;
  }
}
