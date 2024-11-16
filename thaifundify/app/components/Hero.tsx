import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";
import Link from "next/link";
import Image from 'next/image';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#0B4D1E] text-white">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-end space-x-6">
          <Link href="/our-service" className="hover:text-gray-200">
            Our Service
          </Link>
          <Link href="/contact-us" className="hover:text-gray-200">
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
      {/* login Banner */}
        <div className="w-full h-50 mb-12 relative">
          <Image
            src="/loginB2.png"
            alt="Login Banner"
            layout="responsive" // Ensures the image is responsive
            width={1550} // Set a base width for the image
            height={360} // Set a base height for the image
            priority // Ensures faster loading for above-the-fold images
          />
        </div>

        {/* Connect Wallet Button */}
        <div className="flex justify-center mb-12">
        <Button
          className="bg-[#0B4D1E] hover:bg-[#0B4D1E]/90 text-white px-8 py-6 text-lg rounded-full"
        >
          Connect Wallet
        </Button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donation Card */}
          <Card className="bg-gray-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-full aspect-square mb-4 rounded-lg relative">
          <Image
            src="/donation.png" 
            alt="Donation"
            layout="fill"            
            objectFit="cover"        
            className="rounded-lg"   
          />
        </div>
              <h3 className="font-semibold text-lg mb-2">Donation</h3>
              <p className="text-sm text-gray-600">
                Support operational initiatives through secure and transparent tracking
              </p>
            </CardContent>
          </Card>

          {/* Financial Aids Card */}
            <Card className="bg-gray-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-full aspect-square mb-4 rounded-lg relative">
                  <Image
                    src="/financialaids.png" // Replace with your actual image path
                    alt="Financial Aids"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Financial Aids</h3>
                <p className="text-sm text-gray-600">
                  Apply for and receive financial assistance for various programs
                </p>
              </CardContent>
            </Card>

          {/* Voting Card */}
          <Card className="bg-gray-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-full aspect-square mb-4 rounded-lg relative">
                <Image
                  src="/voting.png" // Replace with your actual image path
                  alt="Voting"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Voting</h3>
              <p className="text-sm text-gray-600">
                Participate in decision-making processes through secure online voting
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B4D1E] text-white mt-16">
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
