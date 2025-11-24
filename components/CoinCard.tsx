import { Coin } from "@/src/lib/coin";

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="flex">
      <div>
        <img src={coin.imageUrl} alt="" />
        <p>{coin.symbol}</p>
      </div>
      <div>
        <p>{coin.priceUsd}</p>
        <p>{coin.changePercent24Hr}</p>
      </div>
    </div>
  );
}
