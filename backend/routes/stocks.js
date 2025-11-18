const express = require("express");
const { getStockQuote, getStockNews } = require("../services/stockService");

const router = express.Router();

const STOCKS = ["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN"];

router.get("/", async (req, res) => {
  try {
    const stockData = await Promise.all(
      STOCKS.map((s) => getStockQuote(s))
    );

    const newsData = await Promise.all(
      STOCKS.map((s) => getStockNews(s))
    );

    const combinedNews = newsData
      .flat()
      .sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

    res.json({
      success: true,
      stocks: stockData.filter(Boolean),
      news: combinedNews,
    });

  } catch (err) {
    console.error("Route Error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
