import Coingecko from "@coingecko/coingecko-typescript";
import gekoClient from "../gekoClient";

export const getCoinMarket = async (coin: string) => {
  const price = await gekoClient.simple.price
    .get(
      {
        vs_currencies: "usd",
        ids: coin,
      },
      {
        timeout: 5 * 1000,
      }
    )
    .catch(async (err) => {
      if (err instanceof Coingecko.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    });

  console.log(price);
};
