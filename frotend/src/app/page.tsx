"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import StockList from "./components/StockList";
import NewsList from "./components/NewsList";
import PortfolioHeader from "./components/PortfolioHeader";

export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.APIBASEURL}/api/stocks`);
      const data = await res.json();

      setStocks(data?.stocks || []);
      setNews(data?.news || []);
      setLoading(false);
    } catch (err) {
      console.error("Frontend Fetch Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <Sidebar />

      <main className="flex-1 p-8 space-y-8">
        <PortfolioHeader />
        <StockList stocks={stocks} />
        <NewsList news={news} />
      </main>
    </div>
  );
}
