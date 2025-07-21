export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white px-4 py-6">
      <main className="flex-1">
        <h2 className="text-center text-2xl font-bold border-b pb-2 mb-6">
          Plant Care Tracker
        </h2>

        <p className="text-center font-medium text-base mb-8">
          Track and Care For Your Plants Seamlessly
        </p>

        <div className="flex flex-col items-center space-y-6">
          {/* Humidity */}
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-full w-32 h-32 text-center shadow-sm">
            <div className="text-2xl mb-1">💧</div>
            <div className="text-sm">Humidity</div>
            <div className="font-semibold text-base">10%</div>
          </div>

          {/* Button */}
          <button className="w-full max-w-[200px] bg-green-500 text-white py-2 rounded-md text-sm hover:bg-green-600 transition">
            Get Started
          </button>

          {/* Atmosphere */}
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-full w-32 h-32 text-center shadow-sm">
            <div className="text-2xl mb-1">☀️</div>
            <div className="text-sm">Atmosphere</div>
            <div className="font-semibold text-base">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}
