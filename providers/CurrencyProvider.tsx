"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getJpyRate } from "../src/lib/api";

type Currency = "USD" | "JPY";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  rate: number | undefined;
  formatPrice: (priceUsd: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const { data: rate } = useQuery({
    queryKey: ["jpyRate"],
    queryFn: () => getJpyRate(),
    staleTime: 1000 * 60 * 60,
  });

  const formatPrice = (priceUsd: number) => {
    if (currency === "JPY") {
      if (!rate) return "Loading...";

      const priceJpy = priceUsd / rate;
      return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(priceJpy);
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(priceUsd);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, rate, formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context)
    throw new Error("useCurrency must be used within a CurrencyProvider");
  return context;
};
