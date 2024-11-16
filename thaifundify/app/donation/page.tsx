'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Donation() {
  const router = useRouter();

  const donationCategories = [
    { id: 1, src: '/d1.png', alt: 'Category 1' },
    { id: 2, src: '/d11.png', alt: 'Category 2' },
    { id: 3, src: '/d2.png', alt: 'Category 3' },
  ];

  const handleGridItemClick = (id: number) => {
    router.push(`/donationdetails`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <div className="w-full h-16 bg-black text-white flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold">Donation Platform</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Image Box */}
      <div className="w-full relative">
        <Image
          src="/donationB.png"
          alt="Donation Banner"
          width={1500} // Adjust the width based on your image's aspect ratio
          height={200} // Adjust the height based on your image's aspect ratio
          objectFit="contain" // Ensures the whole image fits without cropping
        />
      </div>

      {/* Donation Categories Grid */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6">Urgent Fundraising</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {donationCategories.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center"
              onClick={() => handleGridItemClick(item.id)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1500}
                height={1500}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-6">317,918 +</h2>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">People From Around the World Donated</h2>

        </div>
      </div>
    </div>
  );
}
