export default function Home() {
  return (
    <div className="flex h-screen">
      
      <main className="flex-1 p-8">
        <h2 className=" flex items-center justify-center text-3xl font-bold border-b-2 pb-2 mb-8">Plant Care Tracker</h2>
        <p className="font-bold flex items-center justify-center text-lg mb-12 mt-50">Track and Care For Your Plants Seamlessly</p>

        <div className="flex items-center justify-center space-x-8 ">
          
          <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-full w-40 h-40 text-center">
            <div className="text-2xl mb-2">💧</div>
            <div>Humidity</div>
            <div className="font-bold text-lg">10%</div>
          </div>

          
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
            Get Started
          </button>

          
          <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-full w-40 h-40 text-center">
            <div className="text-2xl mb-2">☀️</div>
            <div>Atmosphere</div>
            <div className="font-bold text-lg">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

