'use client';

import { useRouter } from 'next/navigation';  // Use next/navigation for the router
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";
import { Wallet, ChevronRight } from "lucide-react";
import Image from 'next/image';

export default function Login() {
  const router = useRouter();

  const handleConnectWallet = () => {
    // Correct the path to navigate to the mainpage
    router.push('/mainpage');  // Navigate to the MainPage using the correct route path
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-0 py-0 w-full">
        
        {/* Login Banner */}
        <div className="w-full h-50 mb-12 relative">
          <div className="image-wrapper">
            <Image
              src="/loginB2.jpg"
              alt="Login Banner"
              layout="fill"
              objectFit="cover" // This will crop the image to fit the container while maintaining aspect ratio
              priority
            />
          </div>

          <style jsx>{`
            .image-wrapper {
              max-width: 100%;
              height: 500px; 
              border-radius: 10px;
              overflow: hidden; /* Optional: to prevent image overflow */
              margin-top: -32px;
            }
          `}</style>
        </div>

        {/* Connect Wallet Button */}
        <div className="flex justify-center mb-12">
          <Button
            onClick={handleConnectWallet}
            className="relative group px-8 py-6 rounded-full bg-sky-100 overflow-hidden transition-all duration-300 hover:bg-[#CBFFE6] hover:shadow-lg hover:shadow-[#CBFFE6]"
          >
            {/* Gradient background and hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity" />
            
            {/* Content of the button */}
            <div className="relative flex items-center gap-2">
              {/* Icon */}
              <Wallet className="w-5 h-5 text-sky-600" />
              
              {/* Button text */}
              <span className="text-sky-600 font-semibold">Connect Wallet</span>
              
              {/* Chevron icon that moves on hover */}
              <ChevronRight className="w-5 h-5 text-[#CBFFE6] transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Donation Card */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <Image
                src="/donation.png"
                alt="Donation"
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-80"
              />
              <div className="absolute top-4 right-4 text-blue-500 w-8 h-8">💖</div>
            </div>
            <CardContent>
              <h3 className="text-xl text-white">Transparent Donations</h3>
              <p className="text-slate-300">
                Track your donations and see your impact through blockchain technology
              </p>
            </CardContent>
          </Card>

          {/* Financial Aid Card */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <Image
                src="/financialaids.png"
                alt="Financial Aids"
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-80"
              />
              <div className="absolute top-4 right-4 text-purple-500 w-8 h-8">💰</div>
            </div>
            <CardContent>
              <h3 className="text-xl text-white">Financial Aid</h3>
              <p className="text-slate-300">
                Access or distribute financial aid through smart contracts
              </p>
            </CardContent>
          </Card>

          {/* Voting Card */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="h-48 bg-slate-700 relative">
              <Image
                src="/voting.png"
                alt="Voting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-80"
              />
              <div className="absolute top-4 right-4 text-green-500 w-8 h-8">🗳️</div>
            </div>
            <CardContent>
              <h3 className="text-xl text-white">Community Voting</h3>
              <p className="text-slate-300">
                Participate in governance and help shape platform decisions
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#293849] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p>E-mail: fundify@outlook.com</p>
            <p>Phone: +60-123456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
