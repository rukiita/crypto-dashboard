"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCurrency } from "@/providers/CurrencyProvider";
import { useCoinHistory } from "@/hooks/useCoinHistory";

interface MarketsChartProps {
  coinId: string;
}

export default function MarketsChart({ coinId }: MarketsChartProps) {
  const { data: history = [], isLoading } = useCoinHistory(coinId);
  const { currency, rate, formatPrice } = useCurrency();

  const chartData = history.map((item) => {
    const price =
      currency === "JPY" && rate ? item.priceUsd / rate : item.priceUsd;
    return {
      date: new Date(item.time).toLocaleDateString(), // X軸用: 日付文字列
      price: price, // Y軸用: 数値
      originalPrice: item.priceUsd, // Tooltip用(念のため)
    };
  });

  if (isLoading)
    return (
      <div className="h-64 flex items-center justify-center">
        Loading Chart...
      </div>
    );
  if (history.length === 0)
    return <div className="h-64 flex items-center justify-center">No Data</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-4 capitalize">
        {coinId} Price Chart ({currency})
      </h2>

      {/* グラフエリア: 高さを指定しないとRechartsは表示されない */}
      <div className="h-[400px] w-[700px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" minTickGap={30} tick={{ fontSize: 12 }} />

            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={(val) => {
                return new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(val);
              }}
              tick={{ fontSize: 12 }}
              width={60}
            />

            {/* ホバー時のツールチップ */}
            <Tooltip
              formatter={(value: number) => [
                new Intl.NumberFormat(currency === "JPY" ? "ja-JP" : "en-US", {
                  style: "currency",
                  currency: currency,
                }).format(value),
                "Price",
              ]}
              labelStyle={{ color: "#333" }}
            />

            {/* 折れ線本体 */}
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
