"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearchCoin } from "@/hooks/useSearchCoin";
import { useState } from "react";

export default function SearchCoinBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { data: searchedCoin, isLoading, error } = useSearchCoin(input);

  const handleBlur = () => {
    setOpen(false);
  };

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
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandList>
        </div>
      )}
    </Command>
  );
}
