import { useCurrency } from "@/providers/CurrencyProvider";
import { Coin } from "@/src/lib/coin";

interface CoinCardProps {
  coin: Coin;
  isSelected: boolean;
  onClick: () => void;
}

export default function CoinCard({ coin, isSelected, onClick }: CoinCardProps) {
  const { formatPrice } = useCurrency();

  // 変動率の色を決定
  const priceColorClass =
    coin.changePercent24Hr > 0
      ? "text-green-500"
      : coin.changePercent24Hr < 0
      ? "text-red-500"
      : "text-gray-500";

  return (
    <button
      onClick={onClick}
      className={`
        w-full h-full flex items-center justify-between p-4 rounded-xl shadow-md transition-all border-2
        ${
          isSelected
            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
            : "border-transparent bg-white hover:shadow-lg hover:border-gray-200"
        }
      `}
    >
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
    </button>
  );
}
