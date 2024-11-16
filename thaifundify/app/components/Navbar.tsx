"use client"; // Mark this file as a client component

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook to get the current path

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <header className="sticky-navbar bg-[#0B4D1E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Menu Icon */}
        <Menu className="w-6 h-6" />
        
        {/* Navbar Links */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/mainpage"
            className={pathname === '/mainpage' ? 'active' : 'hover:text-gray-200'}
          >
            Home
          </Link>
          <Link
            href="/donation"
            className={pathname === '/donation' ? 'active' : 'hover:text-gray-200'}
          >
            Donation
          </Link>
          <Link
            href="/financial-aids"
            className={pathname === '/financial-aids' ? 'active' : 'hover:text-gray-200'}
          >
            Financial Aids
          </Link>
          <Link
            href="/voting"
            className={pathname === '/voting' ? 'active' : 'hover:text-gray-200'}
          >
            Voting
          </Link>

          {/* User Access Button */}
          <button className="border-2 border-white text-white hover:bg-white/10 px-4 py-2 rounded-md">
            User Access
          </button>
        </nav>
      </div>
    </header>
  );
}
