"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import React from "react";
import { CurrencyProvider } from "@/providers/CurrencyProvider";

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
            <Header />
            <div className="flex">
              <Sidebar />

              <button onClick={() => setIsOpen(!isOpen)}>{`${
                isOpen ? "Close" : "Open"
              } the devtools panel`}</button>
              {isOpen && (
                <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />
              )}
              <main>{children}</main>
            </div>
          </CurrencyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
