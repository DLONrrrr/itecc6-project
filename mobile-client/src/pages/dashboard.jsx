import { useState } from "react";
import { FiSearch, FiEdit, FiTrash, FiDroplet, FiHome } from "react-icons/fi";

export default function Dashboard() {
  const [view, setView] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const samplePlants = [
    {
      _id: 1,
      name: "Aloe Vera",
      species: "Succulent",
      lastWatered: "2025-07-15",
      sunlight: "Indirect",
      nextWatering: "2025-07-22",
    },
    {
      _id: 2,
      name: "Peace Lily",
      species: "Flowering",
      lastWatered: "2025-07-14",
      sunlight: "Shade",
      nextWatering: "2025-07-20",
    },
  ];

  const filteredPlants = samplePlants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-6 bg-white min-h-screen text-sm">
      <nav className="flex flex-col gap-2 mb-4">
        <button
          onClick={() => setView("dashboard")}
          className={`flex items-center gap-2 ${
            view === "dashboard" ? "text-green-600" : "text-gray-600"
          }`}
        >
          <FiHome /> Dashboard
        </button>
        <button
          onClick={() => setView("reminders")}
          className={`flex items-center gap-2 ${
            view === "reminders" ? "text-green-600" : "text-gray-600"
          }`}
        >
          <FiDroplet /> Watering Reminders
        </button>
      </nav>

      {view === "dashboard" && (
        <>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-l"
            />
            <button className="p-2 bg-green-500 text-white rounded-r">
              <FiSearch />
            </button>
          </div>

          <ul className="space-y-3">
            {filteredPlants.map((plant) => (
              <li
                key={plant._id}
                className="p-4 border rounded flex flex-col gap-1 bg-gray-50"
              >
                <div className="font-semibold">🌱 {plant.name}</div>
                <div className="text-xs text-gray-500">🍃 {plant.species}</div>
                <div className="text-xs">💧 Last: {plant.lastWatered}</div>
                <div className="text-xs">☀️ Sunlight: {plant.sunlight}</div>
                <div className="text-xs">📅 Next: {plant.nextWatering}</div>
                <div className="flex gap-2 mt-2">
                  <button className="text-blue-600">
                    <FiEdit />
                  </button>
                  <button className="text-red-600">
                    <FiTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="w-full bg-green-600 text-white py-2 rounded">
              ➕ Add New Plant
            </button>
          </div>
        </>
      )}

      {view === "reminders" && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">💧 Water Today</h2>
          <ul className="space-y-3">
            {samplePlants.map((plant) => (
              <li
                key={plant._id}
                className="p-3 border rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{plant.name}</p>
                  <p className="text-gray-500 text-xs">
                    Next: {plant.nextWatering}
                  </p>
                </div>
                <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  Mark as Watered
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
