import { Coin, CoinCapAsset, CoinHistory, HistoryResponse } from "./coin";

const BASE_URL = "https://api.coincap.io/v2";

export const getCoinList = async (
  offset: number = 0,
  limit: number = 20
): Promise<Coin[]> => {
  const response = await fetch(
    `${BASE_URL}/assets?offset=${offset}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coins");
  }

  const json = await response.json();
  const assets: CoinCapAsset[] = json.data;

  return assets.map((asset) => ({
    id: asset.id,
    rank: parseInt(asset.rank),
    symbol: asset.symbol,
    name: asset.name,
    priceUsd: parseFloat(asset.priceUsd),
    changePercent24Hr: parseFloat(asset.changePercent24Hr),
    marketCapUsd: parseFloat(asset.marketCapUsd),
    imageUrl: `https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`,
  }));
};

export const getCoinDetail = async (id: string): Promise<Coin> => {
  const response = await fetch(`${BASE_URL}/assets/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch coin detail: ${id}`);
  }

  const json = await response.json();
  const asset: CoinCapAsset = json.data;

  return {
    id: asset.id,
    rank: parseInt(asset.rank),
    symbol: asset.symbol,
    name: asset.name,
    priceUsd: parseFloat(asset.priceUsd),
    changePercent24Hr: parseFloat(asset.changePercent24Hr),
    marketCapUsd: parseFloat(asset.marketCapUsd),
    imageUrl: `https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`,
  };
};

export const getCoinHistory = async (
  id: string,
  interval: string = "d1"
): Promise<CoinHistory[]> => {
  const response = await fetch(
    `${BASE_URL}/assets/${id}/history?interval=${interval}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch coin history: ${id}`);
  }

  const json = await response.json();

  return json.data.map((item: HistoryResponse) => ({
    price: parseFloat(item.price),
    time: item.time,
    date: item.date,
  }));
};

export const getJpyRate = async (): Promise<number> => {
  const response = await fetch(`${BASE_URL}/rates/japanese-yen`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch JPY rate");
  }

  const json = await response.json();
  return parseFloat(json.data.rateUsd);
};
