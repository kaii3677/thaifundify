'use client';

import { Button } from "@/app/components/ui/Button"
import { Card } from "@/app/components/ui/Card"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation';

export default function Mainpage() {
  const router = useRouter();

  const gotodonation = () => {
    // Correct the path to navigate to the mainpage
    router.push('/donation');  // Navigate to the MainPage using the correct route path
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#0B4D1E] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Menu className="w-6 h-6" />
          <nav className="flex items-center space-x-6">
            <Link href="/home" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/donation" className="hover:text-gray-200">
              Donation
            </Link>
            <Link href="/financial-aids" className="hover:text-gray-200">
              Financial Aids
            </Link>
            <Link href="/voting" className="hover:text-gray-200">
              Voting
            </Link>
            <button className="border-2 border-white text-white hover:bg-white/10 px-4 py-2 rounded-md">
                User Access
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 space-y-4 w-full">
        {/* Donation Card */}
        <Card className="bg-gray-200">
          <div onClick ={gotodonation}  className="p-6 flex items-center space-x-6">
            <div className="w-16 h-16 bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Donation</h2>
              <p className="text-gray-600">
                Support government initiatives through secure and transparent donations.
              </p>
            </div>
          </div>
        </Card>

        {/* Financial Aids Card */}
        <Card className="bg-gray-200">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">Financial Aids</h2>
              <p className="text-gray-600">
                Apply for and receive financial assistance for various programs.
              </p>
            </div>
            <div className="w-16 h-16 bg-black shrink-0" />
          </div>
        </Card>

        {/* Vote for Projects Card */}
        <Card className="bg-gray-200">
          <div className="p-6 flex items-center space-x-6">
            <div className="w-16 h-16 bg-black shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Vote for Projects</h2>
              <p className="text-gray-600">
                Participate in decision-making processes through secure online voting.
              </p>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B4D1E] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p>E-mail: fundify@outlook.com</p>
            <p>Phone: +60-123456789</p>
          </div>
        </div>
      </footer>
    </div>
  )
}