import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const BASE_URL = "https://euw1.api.riotgames.com/";
export const API_KEY = "RGAPI-97fbc4a8-1e5c-4ef2-9cb5-58e60491b292";

export default class Request {
  public readonly targetURL: string;

  protected body: object;

  protected axiosOptions: AxiosRequestConfig;

  constructor(
    targetURL: string,
    body: object = {},
    axiosOptions: AxiosRequestConfig = {}
  ) {
    this.targetURL = targetURL;
    this.body = body;
    this.axiosOptions = {
      ...axiosOptions,
      headers: {
        "X-Riot-Token": API_KEY,
      }
    };
    // requestDebug(`${chalk.italic(this.targetURL)} | ${chalk.bold.green('initialize')}`);
    console.log(`${this.targetURL} | ${"initialize"}`);
  }

  /**
   * @public
   * @async
   *
   * @return Return JSON data as a promise (due to delayed request completion).
   */
  public async get(): Promise<AxiosResponse<unknown>> {
    console.log(
      `${this.targetURL} | ${"GET"} \u00AB ${"query"} %O`,
      this.axiosOptions.params
    );
    return axios.get(this.targetURL, this.axiosOptions);
  }
}
