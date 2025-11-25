import React, { Dispatch, SetStateAction } from "react";
import CoinCard from "./CoinCard";
import { Coin } from "@/src/lib/coin";

interface CoinCardListProps {
  coinList: Coin[];
  onSelectCoin: Dispatch<SetStateAction<string | null>>;
  onPageChange: Dispatch<SetStateAction<number>>;
  currentPage: number;
  selectedCoinId: string;
}

export default function CoinCardList({
  coinList,
  onSelectCoin,
  onPageChange,
  currentPage,
  selectedCoinId,
}: CoinCardListProps) {
  return (
    <>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          &larr; Prev
        </button>
        <span className="font-medium">Page {currentPage}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next &rarr;
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 items-stretch">
        {coinList.map((coin) => (
          // <button key={coin.id} onClick={() => onSelectCoin(coin.id)}>
          <CoinCard
            key={coin.id}
            coin={coin}
            isSelected={coin.id == selectedCoinId}
            onClick={() => onSelectCoin(coin.id)}
          />
          // </button>
        ))}
      </div>
    </>
  );
}
