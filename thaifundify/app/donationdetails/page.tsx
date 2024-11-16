'use client';

import { Button } from "@/app/components/ui/Button";
import { Users } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Image and Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 aspect-square rounded-lg" />
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">Title of the Project</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>Donation closed by 11 Nov 2025</span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>67,289 donators</span>
                </span>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="flex justify-center">
            <Button
              className="bg-black hover:bg-black/90 text-white px-8 py-6 rounded-full text-lg"
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
  )
}