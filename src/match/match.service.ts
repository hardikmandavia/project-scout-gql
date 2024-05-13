import { Injectable } from '@nestjs/common';

import RiotAPI, { getUrl } from "../_riot-api";

@Injectable()
export class MatchService {
  async getListByPUUID(puuid: string, count: number = 5) {
    const url = getUrl('europe', `lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}`);
    const request = new RiotAPI(url);

    const result = await request.get();
    return result.data;
  }

  async getById(id: string) {
    const url = getUrl('europe', `lol/match/v5/matches/${id}`);
    const request = new RiotAPI(url);

    const result = await request.get();
    return result.data;
  }
}
