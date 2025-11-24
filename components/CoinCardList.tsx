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
  console.log("coinList", coinList);
  return (
    <>
      {coinList.map((coin) => (
        <button key={coin.id} onClick={() => onSelectCoin}>
          <CoinCard coin={coin} />
        </button>
      ))}
    </>
  );
}
