"use client";
import SearchCoinBar from "./SearchCoinBar";
import ToggleCurrency from "./ToggleCurrency";

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <ToggleCurrency />
        <SearchCoinBar />
      </nav>
    </header>
  );
}
