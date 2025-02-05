"use client";
import { Bell, Bookmark, MessageSquare, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Leaderboard");

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo et nom du site */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
        <h1 className="text-lg font-semibold">ECOM AFRICA PRO VIP</h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        {["Home", "Courses", "Events", "Members", "Leaderboard"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`text-gray-600 hover:text-black px-3 py-1 rounded-md transition ${
              activeTab === item ? "bg-gray-200 text-black font-semibold" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Barre de recherche et icônes */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full text-sm focus:ring-2 focus:ring-gray-300 outline-none"
          />
        </div>
        <Bell
          className="text-gray-600 hover:text-black cursor-pointer"
          size={22}
        />
        <MessageSquare
          className="text-gray-600 hover:text-black cursor-pointer"
          size={22}
        />
        <Bookmark
          className="text-gray-600 hover:text-black cursor-pointer"
          size={22}
        />
        <div className="h-8 w-8 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-semibold cursor-pointer">
          AM
        </div>
      </div>
    </header>
  );
};
export default Header;
