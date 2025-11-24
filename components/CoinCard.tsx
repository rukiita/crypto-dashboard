import { useCurrency } from "@/providers/CurrencyProvider";
import { Coin } from "@/src/lib/coin";

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  const { formatPrice } = useCurrency();

  // 変動率の色を決定
  const priceColorClass =
    coin.changePercent24Hr > 0
      ? "text-green-500"
      : coin.changePercent24Hr < 0
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all w-full border border-gray-100">
      <div className="flex items-center space-x-3">
        <img
          src={coin.imageUrl}
          alt={coin.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-bold text-lg text-gray-800">{coin.symbol}</p>
          <p className="text-sm text-gray-500">{coin.name}</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="font-extrabold text-xl text-gray-900 font-mono">
          {formatPrice(coin.priceUsd)}
        </p>

        <p className={`text-sm font-medium ${priceColorClass}`}>
          {coin.changePercent24Hr > 0 ? "+" : ""}
          {coin.changePercent24Hr.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
