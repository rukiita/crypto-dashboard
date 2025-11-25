"use client";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import React from "react";
import { CurrencyProvider } from "@/providers/CurrencyProvider";
import { SelectedCoinProvider } from "@/providers/SelectedCoinProvider ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <CurrencyProvider>
            <SelectedCoinProvider>
              <Header />
              <main>{children}</main>
            </SelectedCoinProvider>
          </CurrencyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
