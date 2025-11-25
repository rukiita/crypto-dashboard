"use client";
import CoinCardList from "@/components/CoinCardList";
import MarketsChart from "@/components/MarketsChart";
import { useCoins } from "@/hooks/useCoins";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: coinList, isLoading, error } = useCoins(currentPage);
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);

  if (isLoading) return <div className="p-4">Loading Coins...</div>;
  if (error || !coinList || coinList.length === 0)
    return <div className="p-4 text-red-500">Failed to load data</div>;

  const activeCoinId = selectedCoinId ?? coinList?.[0]?.id;
  return (
    <>
      <MarketsChart coinId={activeCoinId} />
      <CoinCardList
        coinList={coinList}
        onSelectCoin={setSelectedCoinId}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
        selectedCoinId={activeCoinId}
      />
    </>
  );
}
