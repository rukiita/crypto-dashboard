import React from "react";
import { Line, LineChart } from "recharts";

interface MarketsChart {
  coinId: string;
}

export default function MarketsChart({ coinId }: MarketsChart) {
  return (
    <>
      <div>{coinId}</div>
    </>
  );
}
