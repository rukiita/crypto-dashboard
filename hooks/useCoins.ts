import { useQuery } from "@tanstack/react-query";
import { getCoinList } from "@/src/lib/api";

const ITEMS_PER_PAGE = 20;

export const useCoins = (page: number) => {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  return useQuery({
    queryKey: ["coins", page],
    queryFn: () => getCoinList(offset, ITEMS_PER_PAGE),
    staleTime: 1000 * 600 * 5,
  });
};
