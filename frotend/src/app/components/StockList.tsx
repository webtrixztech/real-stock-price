interface StockItem {
  symbol: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
}

interface StockListProps {
  stocks: StockItem[];
}

export default function StockList({ stocks }: StockListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Stocks</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Symbol</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Price</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Change</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Change %</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">High</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Low</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Open</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Prev Close</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((s, idx) => {
              const isHighReached = s.currentPrice >= s.high;
              const isLowReached = s.currentPrice <= s.low;

              return (
                <tr
                  key={idx}
                  className={`border-b hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 font-semibold">{s.symbol}</td>
                  <td className="py-3 px-4">${s.currentPrice.toFixed(2)}</td>

                  {/* Change value */}
                  <td
                    className={`py-3 px-4 font-semibold ${
                      s.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {s.change >= 0 ? "▲" : "▼"} ${Math.abs(s.change).toFixed(2)}
                  </td>

                  {/* Change percentage */}
                  <td
                    className={`py-3 px-4 font-bold ${
                      s.changePercent >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {s.changePercent >= 0 ? "▲" : "▼"} {Math.abs(s.changePercent).toFixed(2)}%
                  </td>

                  {/* High with arrow */}
                  <td className="py-3 px-4 font-semibold text-gray-500">
                    ${s.high.toFixed(2)}{" "}
                    <span
                      className={isHighReached ? "text-green-600" : "text-gray-400"}
                    >
                      ↑
                    </span>
                  </td>

                  {/* Low with arrow */}
                  <td className="py-3 px-4 font-semibold text-gray-500">
                    ${s.low.toFixed(2)}{" "}
                    <span
                      className={isLowReached ? "text-red-600" : "text-gray-400"}
                    >
                      ↓
                    </span>
                  </td>

                  <td className="py-3 px-4">${s.open.toFixed(2)}</td>
                  <td className="py-3 px-4">${s.previousClose.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
