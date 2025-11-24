export interface CoinCapAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface Coin {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
  marketCapUsd: number;
  imageUrl: string;
}

export interface CoinHistory {
  priceUsd: number;
  time: number;
  date: string;
}

export interface HistoryResponse {
  price: string;
  time: number;
  date: string;
}
