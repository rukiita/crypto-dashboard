"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div></div>
      <nav>
        <Link href="/coins"></Link>
        <button>USD/JPY</button>
      </nav>
    </header>
  );
}
