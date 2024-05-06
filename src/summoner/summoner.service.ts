import { Injectable } from '@nestjs/common';

import RiotAPI, { BASE_URL } from "../_riot-api";

@Injectable()
export class SummonerService {
  async byPUUID(puuid: string) {
    const url = `${BASE_URL}lol/summoner/v4/summoners/by-puuid/${puuid}`;
    const request = new RiotAPI(url);

    const result = await request.get();
    console.log(result.data)
    return result.data;
  }
}
