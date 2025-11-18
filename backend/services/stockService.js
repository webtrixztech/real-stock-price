const axios = require("axios");

const API_KEY = "d4e0uo1r01qmhtc6ip6gd4e0uo1r01qmhtc6ip70"; 
const BASE_URL = "https://finnhub.io/api/v1";

async function getStockQuote(symbol) {
  try {
    const res = await axios.get(`${BASE_URL}/quote`, {
      params: { symbol, token: API_KEY }
    });

    return {
      symbol: symbol,
      currentPrice: res.data.c,
      change: res.data.d,
      changePercent: res.data.dp,
      high: res.data.h,
      low: res.data.l,
      open: res.data.o,
      previousClose: res.data.pc
    };
  } catch (err) {
    console.log("QUOTE ERROR:", symbol, err.message);
    return null;
  }
}

async function getStockNews(symbol) {
  try {
    const res = await axios.get(`${BASE_URL}/company-news`, {
      params: {
        symbol: symbol,
        from: "2024-12-01",
        to: "2025-12-31",
        token: API_KEY
      }
    });

    if (!Array.isArray(res.data)) return [];
    return res.data;
  } catch (err) {
    console.log("NEWS ERROR:", symbol, err.message);
    return [];
  }
}

module.exports = { getStockQuote, getStockNews };
