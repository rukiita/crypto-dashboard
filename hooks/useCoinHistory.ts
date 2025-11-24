import { useQuery } from "@tanstack/react-query";
import { getCoinHistory } from "@/src/lib/api";
import { CoinHistory } from "@/src/lib/coin";

export const useCoinHistory = (coinId: string) => {
  return useQuery<CoinHistory[]>({
    queryKey: ["coinHistory", coinId],
    queryFn: () => getCoinHistory(coinId, "d1"),
    staleTime: 1000 * 600 * 5,
  });
};
