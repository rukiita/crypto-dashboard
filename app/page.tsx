"use client";
import CoinCardList from "@/components/CoinCardList";
import MarketsChart from "@/components/MarketsChart";
import { getCoinList } from "@/src/lib/api";
import { Coin } from "@/src/lib/coin";
import { useEffect, useState } from "react";

export default function Home() {
  const [coinList, setCoinList] = useState<Coin[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState<string>("bitcoin");
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await getCoinList();
        setCoinList(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      console.log("fetchCoin");
    };
    fetchCoins();
  }, []);

  return (
    <>
      <MarketsChart coinId={selectedCoinId} />
      <CoinCardList coinList={coinList} onSelectCoin={setSelectedCoinId} />
    </>
  );
}
