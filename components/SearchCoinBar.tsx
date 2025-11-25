"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchCoin } from "@/hooks/useSearchCoin";
import { useCoinSelection } from "@/providers/SelectedCoinProvider ";
import { useState } from "react";

export default function SearchCoinBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [debounsedValue] = useDebounce(input, 1000);
  const { selectedCoinId, setSelectedCoinId } = useCoinSelection();
  const {
    data: searchedCoins,
    isLoading,
    error,
  } = useSearchCoin(debounsedValue);
  console.log("searchedCoins", searchedCoins);
  console.log("debouncedValue", debounsedValue);
  console.log("input", input);

  const handleBlur = () => {
    setOpen(false);
  };

  const handleSelectCoin = (coinId: string) => {};

  return (
    <Command className="overflow-visible bg-muted" shouldFilter={false}>
      <CommandInput
        value={input}
        onValueChange={(text) => {
          if (!open) {
            setOpen(true);
          }
          setInput(text);
        }}
        onBlur={handleBlur}
        placeholder="Type a command or search..."
      />
      {open && (
        <div className="relative">
          <CommandList className="absolute bg-background w-full">
            {!isLoading && searchedCoins?.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            {!isLoading &&
              searchedCoins &&
              searchedCoins.length > 0 &&
              searchedCoins.map((coin) => (
                <CommandItem
                  key={coin.id}
                  onSelect={() => handleSelectCoin(coin.id)}
                >
                  <div className="flex items-center gap-2 w-full">
                    {coin.imageUrl && (
                      <img
                        src={coin.imageUrl}
                        alt=""
                        className="w-5 h-5 rounded-full"
                      />
                    )}
                    <span className="text-gray-500 text-xs ml-auto ">
                      {coin.symbol}
                    </span>
                  </div>
                </CommandItem>
              ))}
          </CommandList>
        </div>
      )}
    </Command>
  );
}
