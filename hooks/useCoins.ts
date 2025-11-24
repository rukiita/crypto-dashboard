import { useQuery } from "@tanstack/react-query";
import { getCoinList } from "@/src/lib/api";

export const useCoins = () => {
  return useQuery({
    queryKey: ["coins"],
    queryFn: () => getCoinList(),
    staleTime: 1000 * 600 * 5,
  });
};
