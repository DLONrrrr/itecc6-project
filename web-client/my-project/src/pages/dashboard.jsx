import { FiSearch } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center p-8 bg-white min-h-screen">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-2xl mb-6">
        <input
          type="text"
          placeholder="Search plants..."
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button className="p-2 bg-green-500 text-white rounded-r">
          <FiSearch />
        </button>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl overflow-x-auto mt-10">
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border">🌱 Plant Name</th>
              <th className="p-4 border">🍃 Species</th>
              <th className="p-4 border">💧 Last Watered</th>
              <th className="p-4 border">☀️ Sunlight Requirement</th>
              <th className="p-4 border">📅 Next Watering Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border">Aloe Vera</td>
              <td className="p-4 border">Succulent</td>
              <td className="p-4 border">80%</td>
              <td className="p-4 border">Sunny</td>
              <td className="p-4 border">May 15</td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
