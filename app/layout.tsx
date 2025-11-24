"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
