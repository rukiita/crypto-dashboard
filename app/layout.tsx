import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
