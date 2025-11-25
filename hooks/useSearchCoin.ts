import { useQuery } from "@tanstack/react-query";
import { getCoinDetail } from "@/src/lib/api";

export const useSearchCoin = (id: string) => {
  return useQuery({
    queryKey: ["searchCoin"],
    queryFn: () => getCoinDetail(id),
    staleTime: 1000 * 600 * 5,
  });
};
