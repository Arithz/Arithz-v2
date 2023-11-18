import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@components/general/Sidebar/Sidebar";
import RightSidebar from "@components/general/RightSidebar/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Owned by @harithfathiz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <Sidebar />
        <RightSidebar/>
        {children}
      </body>
    </html>
  );
}
