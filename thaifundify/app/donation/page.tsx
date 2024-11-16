'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Donation() {
  const router = useRouter();

  const donationCategories = [
    { id: 1, src: '/d1.png', alt: 'Category 1', title: 'Tabung Harapan Malaysia' },
    { id: 2, src: '/d11.png', alt: 'Category 2', title: 'eBelia' },
    { id: 3, src: '/d2.png', alt: 'Category 3', title: 'Food Aid Foundation' },
  ];

  const handleGridItemClick = (id: number) => {
    router.push(`/donationdetails`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#151E30' }}>
      {/* Image Box */}
      <div className="w-full relative">
        <Image
          src="/donationBBB.png"
          alt="Donation Banner"
          width={1700}
          height={200}
          objectFit="contain"
        />
      </div>

      {/* Donation Categories Grid */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 text-white">
          Urgent Fundraising
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {donationCategories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center space-y-4 cursor-pointer"
              onClick={() => handleGridItemClick(item.id)}
            >
              {/* Image */}
              <div className="relative w-full h-[178px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Textbox below image */}
              <div className="bg-[#D8F9FF] text-[#151E30] px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:bg-[#A7D8F7] w-64 mx-auto text-center">
                <h3 className="text-sm font-semibold text-[#151E30]">{item.title}</h3>
            </div>

            </div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-6 text-white">317,918 +</h2>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white">
            People From Around the World Donated
          </h2>
        </div>
      </div>
    </div>
  );
}
