export default function PortfolioHeader() {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow rounded-2xl">
      
      {/* Left: Title and Subtitle */}
      <div>
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-gray-800">Portfolio test</h1>
          {/* Dropdown arrow */}
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mt-1">Today's Gain</p>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-3">
        <button className="text-gray-700 font-medium px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
          Feedback
        </button>
        <button className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded hover:bg-gray-200">
          + Add Symbol
        </button>
        <button className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded hover:bg-gray-200">
          Edit Portfolio
        </button>
        <button className="bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded hover:bg-gray-200">
          Manage Alerts
        </button>
      </div>
    </div>
  );
}
