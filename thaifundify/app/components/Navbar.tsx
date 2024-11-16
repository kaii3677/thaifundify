"use client"; // Mark this file as a client component

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook to get the current path

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <header className="sticky-navbar bg-gradient-to-r from-[#111A2C] to-[#3A4F68] bg-opacity-90 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Menu Icon */}
        <Menu className="w-6 h-6 text-white" />
        
        {/* Navbar Links */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/mainpage"
            className={`${
              pathname === '/mainpage' ? 'text-[#62A667]-400 font-semibold' : 'hover:text-gray-200'
            } transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            href="/donation"
            className={`${
              pathname === '/donation' ? 'text-[#62A667]-400 font-semibold' : 'hover:text-gray-200'
            } transition-colors duration-300`}
          >
            Donation
          </Link>
          <Link
            href="/financial"
            className={`${
              pathname === '/financial' ? 'text-[#62A667]-400 font-semibold' : 'hover:text-gray-200'
            } transition-colors duration-300`}
          >
            Financial Aids
          </Link>
          <Link
            href="/vote"
            className={`${
              pathname === '/vote' ? 'text-[#62A667]-400 font-semibold' : 'hover:text-gray-200'
            } transition-colors duration-300`}
          >
            Voting
          </Link>

          {/* User Access Button */}
          <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-2 rounded-md transition-all duration-300">
            User Access
          </button>
        </nav>
      </div>
    </header>
  );
}
