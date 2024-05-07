import { Injectable } from '@nestjs/common';

import RiotAPI, { getUrl } from "../_riot-api";

@Injectable()
export class AccountService {

  async byRiotId(name: string, tag: string) {
    const url = getUrl("europe", `riot/account/v1/accounts/by-riot-id/${name}/${tag}`);
    const request = new RiotAPI(url);

    const result = await request.get();
    return result.data;
  }
}
