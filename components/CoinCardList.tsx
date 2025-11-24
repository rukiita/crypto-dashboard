import React, { Dispatch, SetStateAction } from "react";
import CoinCard from "./CoinCard";
import { Coin } from "@/src/lib/coin";

interface CoinCardListProps {
  coinList: Coin[];
  onSelectCoin: Dispatch<SetStateAction<string>>;
}

export default function CoinCardList({
  coinList,
  onSelectCoin,
}: CoinCardListProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-stretch">
        {coinList.map((coin) => (
          <button key={coin.id} onClick={() => onSelectCoin(coin.id)}>
            <CoinCard coin={coin} />
          </button>
        ))}
      </div>
    </>
  );
}
