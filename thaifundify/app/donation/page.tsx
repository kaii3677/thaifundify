import { Button } from "@/app/components/ui/Button";

export default function Donation() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gray-200 rounded-lg p-8 text-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Contribute to the Society
          </h1>
        </div>

        {/* Donation Categories */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-200 rounded-lg"
              aria-label={`Donation category ${item}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">Your kindness will change the world</p>
          <p className="font-semibold">Donate Now!</p>
        </div>

        {/* Statistics */}
        <div className="text-center space-y-2">
          <div className="text-4xl font-bold">
            3,029,910 <span className="text-gray-600">+</span>
          </div>
          <p className="text-sm text-gray-600">
            People from around the world
            <br />
            donated via our platform
          </p>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center">
          <Button
            className="bg-black hover:bg-black/90 text-white px-8 py-6 rounded-full text-lg"
          >
            Donate Now
          </Button>
        </div>

        {/* Profile Circle */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}