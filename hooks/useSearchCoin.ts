import { useQuery } from "@tanstack/react-query";
import { getSearchedCoins } from "@/src/lib/api";

export const useSearchCoin = (query: string) => {
  return useQuery({
    queryKey: ["searchedCoins", query],
    queryFn: () => getSearchedCoins(query),
    enabled: !!query, //Prevent the API call when the query is empty.
    staleTime: 1000 * 60,
  });
};
