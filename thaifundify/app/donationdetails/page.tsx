'use client';

import { Button } from "@/app/components/ui/Button";
import { Users } from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#D8F9FF] via-[#D8F9FF] to-[#EFE0FF] animate-gradient-bg">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Image and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Larger gap between image and text */}
            {/* Image Box with rounded edges */}
            <div className="relative flex justify-center items-center">
              <Image
                src="/d1.png" // Replace with your actual image path
                alt="Project Image"
                width={900} // Set the width to match the image size
                height={500} // Set the height to match the image size
                className="object-cover rounded-md" // Ensures the image fills its container and maintains aspect ratio
              />
            </div>

            {/* Textbox beside the image */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">Tabung Harapan Malaysia Campaign</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>Donation closed by 11 Nov 2025</span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>67,289 donators</span>
                </span>
              </div>

              {/* Justified text */}
              <p className="text-gray-600 text-justify">
                Join us in supporting the nation's growth and development through the Tabung Harapan Malaysia. Donations and voluntary contributions are now made easier and more accessible with the option to contribute through cryptocurrency. By channeling your donation to the Accountant General of Malaysia via crypto, you are directly supporting government initiatives aimed at fostering a better, more prosperous Malaysia. 
                Every contribution counts, no matter the size. Your generosity will help fund vital national programs, infrastructure projects, and social welfare efforts, making a meaningful impact on the lives of Malaysians. 

                <strong> Donate Now and be a part of shaping the future of Malaysia with your support!</strong> {/* Make the last sentence bold */}
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="flex justify-center">
            <Button
              className="bg-[#162F2F] hover:bg-[#162F2F]/90 text-white px-6 py-3 rounded-full text-lg"
            >
              Donate Now
            </Button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full px-8 py-2"
            >
              Back Home
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-2"
            >
              Explore More Projects
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Project Donation Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
