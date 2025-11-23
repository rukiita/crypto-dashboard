import CoinCard from "@/components/CoinCard";
import MarketsChart from "@/components/MarketsChart";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      {
        //map
        <Link href="/:id">
          <CoinCard />
        </Link>
      }
    </>
  );
}
