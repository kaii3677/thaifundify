'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Financial() {
  const router = useRouter();

  const handleFinancial = () => {
    router.push("/financialdetails"); // Navigate to the desired route
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">

      {/* Hero Banner */}
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block text-blue-400">Decentralized</span>
                <span className="block">Financial Aid Platform</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Transparent, secure, and accessible financial assistance through blockchain technology
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Available Financial Aid Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <ProjectCard
            title="Education Grant Pool"
            status="Active"
            statusClass="bg-blue-500/20 text-blue-300"
            description="Supporting students in Web3 development and blockchain studies with educational grants."
            totalPool="500,000 USDC"
            applications="125/200"
            progress={62.5}
            onApply={handleFinancial}
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Startup Funding"
            status="New"
            statusClass="bg-green-500/20 text-green-300"
            description="Early-stage funding for innovative Web3 startups and DeFi projects."
            totalPool="1,000,000 USDC"
            applications="45/100"
            progress={45}
            onApply={handleFinancial}
          />

          {/* Project Card 3 */}
          <ProjectCard
            title="Research Grant"
            status="Closing Soon"
            statusClass="bg-yellow-500/20 text-yellow-300"
            description="Funding for blockchain research and development in emerging technologies."
            totalPool="750,000 USDC"
            applications="85/100"
            progress={85}
            onApply={handleFinancial}
          />
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  status: string;
  statusClass: string;
  description: string;
  totalPool: string;
  applications: string;
  progress: number;
  onApply: () => void; // Add a prop type for the click handler
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  statusClass,
  description,
  totalPool,
  applications,
  progress,
  onApply, // Destructure the `onApply` prop
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusClass}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Total Pool</span>
          <span className="text-blue-300">{totalPool}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Applications</span>
          <span className="text-blue-300">{applications}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <button
        onClick={onApply} // Use the `onApply` prop here
        className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
};
