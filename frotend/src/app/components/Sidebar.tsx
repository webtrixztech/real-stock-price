import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: "🏠" },
  { name: "Portfolio", icon: "💼" },
  { name: "Markets", icon: "🌐" },
  { name: "News", icon: "📰" },
  { name: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col sticky top-0">
      {/* Logo / Title */}
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold text-white">Stock Dashboard</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = active === item.name;
            return (
              <li
                key={item.name}
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setActive(item.name)}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / User Info */}
      <div className="px-6 py-4 border-t border-gray-700 mt-auto">
        <p className="text-sm text-gray-400">Logged in as</p>
        <p className="font-medium mb-3">User Name</p>
        <button className="flex items-center w-full text-gray-200 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-200">
          <span className="mr-2">🚪</span> Logout
        </button>
      </div>
    </aside>
  );
}
