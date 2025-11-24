"use client";
import CoinCardList from "@/components/CoinCardList";
import MarketsChart from "@/components/MarketsChart";
import { useCoins } from "@/hooks/useCoins";
import { useState } from "react";

export default function Home() {
  const [selectedCoinId, setSelectedCoinId] = useState<string>("bitcoin");
  const { data: coinList, isLoading, error } = useCoins();

  if (isLoading) return <div className="p-4">Loading Coins...</div>;
  if (error || !coinList || coinList.length === 0)
    return <div className="p-4 text-red-500">Failed to load data</div>;

  return (
    <>
      <MarketsChart coinId={selectedCoinId} />
      <CoinCardList coinList={coinList} onSelectCoin={setSelectedCoinId} />
    </>
  );
}
