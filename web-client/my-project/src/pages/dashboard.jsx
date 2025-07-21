import { useState } from "react";
import { FiSearch, FiEdit, FiTrash, FiDroplet, FiHome } from "react-icons/fi";

const plantData = [
  { name: "Aloe Vera", species: "Succulent", lastWatered: "2025-07-17", nextWatering: "2025-07-21", sunlight: "Sunny" },
  { name: "Snake Plant", species: "Evergreen", lastWatered: "2025-07-18", nextWatering: "2025-07-24", sunlight: "Indirect" },
  { name: "Peace Lily", species: "Flowering", lastWatered: "2025-07-15", nextWatering: "2025-07-20", sunlight: "Shade" },
];

export default function Dashboard() {
  const [view, setView] = useState("dashboard");
  const today = new Date();

  const wateringReminders = plantData.filter((plant) => {
    const nextDate = new Date(plant.nextWatering);
    return nextDate <= today;
  });

  return (
    <div className="flex flex-col items-center p-8 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="w-full max-w-6xl flex justify-start gap-6 mb-8 text-lg font-semibold">
        <button
          className={`flex items-center gap-2 ${view === "dashboard" ? "text-green-600" : "text-gray-600"} hover:text-green-800`}
          onClick={() => setView("dashboard")}
        >
          <FiHome />
          Dashboard
        </button>
        <button
          className={`flex items-center gap-2 ${view === "reminders" ? "text-green-600" : "text-gray-600"} hover:text-green-800`}
          onClick={() => setView("reminders")}
        >
          <FiDroplet />
          Watering Reminders
        </button>
      </nav>

      {/* Dashboard View */}
      {view === "dashboard" && (
        <>
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
                  <th className="p-4 border">☀️ Sunlight</th>
                  <th className="p-4 border">📅 Next Watering</th>
                </tr>
              </thead>
              <tbody>
                {plantData.map((plant, index) => (
                  <tr key={index}>
                    <td className="p-4 border">{plant.name}</td>
                    <td className="p-4 border">{plant.species}</td>
                    <td className="p-4 border">{plant.lastWatered}</td>
                    <td className="p-4 border">{plant.sunlight}</td>
                    <td className="p-4 border">{plant.nextWatering}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <FiEdit />
                Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                <FiTrash />
                Delete
              </button>
            </div>
          </div>
        </>
      )}

      {/* Watering Reminders View */}
      {view === "reminders" && (
        <div className="w-full max-w-3xl mt-10">
          <h2 className="text-2xl font-bold mb-4">💧 Plants to Water Today</h2>
          {wateringReminders.length === 0 ? (
            <p className="text-gray-600">All plants are up to date! 🎉</p>
          ) : (
            <ul className="space-y-4">
              {wateringReminders.map((plant, index) => (
                <li key={index} className="p-4 border rounded shadow flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">{plant.name}</p>
                    <p className="text-sm text-gray-500">Next watering: {plant.nextWatering}</p>
                  </div>
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                    Mark as Watered
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
