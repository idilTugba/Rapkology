import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import { DataProvider } from "@/context/DataContext";
import type { RapPostCollection } from "@/lib/types";
import { fetchPosts } from "@/lib/data";

const sairaSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

const sairaCond = Saira_Condensed({
  variable: "--font-saira-cond",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Dünya rap trendlerini konuşuyoruz.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialData = await fetchPosts();
  return (
    <html lang="en">
      <body className={`${sairaSans.variable} ${sairaCond.variable} antialiased`}>
        <Header />
        <DataProvider<RapPostCollection> initialData={initialData}>{children}</DataProvider>
      </body>
    </html>
  );
}
