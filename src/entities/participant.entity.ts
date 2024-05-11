import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { Perks } from "./perks.entity";

@ObjectType()
export class Participant {
  @Field(() => ID)
  puuid: string;

  @Field(() => Int)
  teamId: number;

  @Field(() => Int)
  spell1Id: number;

  @Field(() => Int)
  spell2Id: number;

  @Field(() => Int)
  championId: number;

  @Field(() => Int)
  profileIconId: number;

  @Field(() => String)
  riotId: string;

  @Field(() => Boolean)
  bot: boolean;

  @Field(() => ID)
  summonerId: string;

  @Field(() => Perks)
  persk: Perks;
}

// {
//             "puuid": "Hcpygjj77ExjoitfDNfJJWx0Q0s8HPztP7y5cYPE2dNRQnpI8ktF-tNw_Xwp6xB9vdLchI8TZJqUug",
//             "teamId": 100,
//             "spell1Id": 4,
//             "spell2Id": 3,
//             "championId": 236,
//             "profileIconId": 5284,
//             "riotId": "bot plaything#EUW",
//             "bot": false,
//             "summonerId": "YfaQT49u9e6mFQSCVjOJgApGnXF33f5UWlZO_uAH73q8YVw",
//             "gameCustomizationObjects": [],
//             "perks": {
//                 "perkIds": [
//                     8005,
//                     8009,
//                     9103,
//                     8014,
//                     8304,
//                     8345,
//                     5005,
//                     5008,
//                     5011
//                 ],
//                 "perkStyle": 8000,
//                 "perkSubStyle": 8300
//             }
//         },
//       {
//           "puuid": "IWqCVL7ZPIjcWqxqKqHD1dzkQB6VdIVt1FoFZTWknXhwUJa5aKvkU1UcQiizJZ-SZoDeB_eN4QhWMQ",
//           "teamId": 200,
//           "spell1Id": 4,
//           "spell2Id": 11,
//           "championId": 876,
//           "profileIconId": 5990,
//           "riotId": "INT Nord#EUW",
//           "bot": false,
//           "summonerId": "bK2-dFB0LgukGPU_UzFHUenSzSbYLOqUHS4kVUIKTjcVnPGg",
//           "gameCustomizationObjects": [],
//           "perks": {
//               "perkIds": [
//                   8128,
//                   8143,
//                   8138,
//                   8135,
//                   8234,
//                   8232,
//                   5008,
//                   5008,
//                   5001
//               ],
//               "perkStyle": 8100,
//               "perkSubStyle": 8200
//           }
//       },
