import { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash, FiDroplet, FiHome } from "react-icons/fi";

export default function Dashboard() {
  const [view, setView] = useState("dashboard");
  const [plants, setPlants] = useState([]);
  const today = new Date();

  // ✅ Fetch plant data from backend
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const res = await fetch("http://localhost:5000");
      const data = await res.json();
      setPlants(data);
    } catch (err) {
      console.error("Error fetching plants:", err);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');


  // 💧 Filter for reminders
  const wateringReminders = plants.filter((plant) => {
    const nextDate = new Date(plant.nextWatering);
    return nextDate <= today;
  });

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this plant?")) return;

  try {
    const res = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setPlants(plants.filter((p) => p._id !== id));
      alert("✅ Plant deleted");
    } else {
      alert("❌ Failed to delete");
    }
  } catch (err) {
    console.error("Delete error:", err);
    alert("❌ Server error");
  }
};
  const [editingPlant, setEditingPlant] = useState(null);
  const startEditing = (plant) => {
    setEditingPlant(plant);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/${editingPlant._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPlant),
      });

      if (res.ok) {
        const updated = await res.json();
        setPlants((prev) =>
          prev.map((p) => (p._id === updated._id ? updated : p))
        );
        setEditingPlant(null);
        alert("✅ Plant updated!");
      } else {
        alert("❌ Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("❌ Server error while updating");
    }
  };



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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  <th className="p-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
  {plants
  .filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.species.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((plant, index) => (

    <tr key={plant._id}>
      <td className="p-4 border">{plant.name}</td>
      <td className="p-4 border">{plant.species}</td>
      <td className="p-4 border">{plant.lastWatered}</td>
      <td className="p-4 border">{plant.sunlight}</td>
      <td className="p-4 border">{plant.nextWatering}</td>
      <td className="p-4 border">
        <button
          onClick={() => startEditing(plant)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FiEdit />
        </button>
        <button
          onClick={() => handleDelete(plant._id)}
          className="text-red-600 hover:text-red-800"
        >
          <FiTrash />
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setView("add")}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                ➕ Add New Plant
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

      {/* Add Plant View */}
      {view === "add" && (
        <div className="w-full max-w-md mt-10">
          <h2 className="text-2xl font-bold mb-4">➕ Add New Plant</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                species: e.target.species.value,
                lastWatered: e.target.lastWatered.value,
                nextWatering: e.target.nextWatering.value,
                sunlight: e.target.sunlight.value,
              };

              try {
                const response = await fetch("http://localhost:5000", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });

                if (response.ok) {
                  alert("✅ Plant added successfully!");
                  await fetchPlants(); // Refresh list
                  setView("dashboard"); // Return to dashboard
                } else {
                  const error = await response.json();
                  alert("❌ Error: " + error.message);
                }
              } catch (err) {
                alert("❌ Failed to connect to server.");
              }
            }}
            className="space-y-4"
          >
            <input name="name" placeholder="Plant Name" className="w-full p-2 border rounded" required />
            <input name="species" placeholder="Species" className="w-full p-2 border rounded" required />
            <input name="lastWatered" type="date" className="w-full p-2 border rounded" required />
            <input name="nextWatering" type="date" className="w-full p-2 border rounded" required />
            <select name="sunlight" className="w-full p-2 border rounded" required>
              <option value="">Sunlight Requirement</option>
              <option value="Sunny">Sunny</option>
              <option value="Indirect">Indirect</option>
              <option value="Shade">Shade</option>
            </select>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Add Plant
            </button>
          </form>
        </div>
      )}

      {editingPlant && (
  <div className="p-4 bg-gray-100 mt-6 rounded shadow">
    <h3 className="text-lg font-bold mb-2">Edit Plant</h3>
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Name"
        value={editingPlant.name}
        onChange={(e) =>
          setEditingPlant({ ...editingPlant, name: e.target.value })
        }
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Species"
        value={editingPlant.species}
        onChange={(e) =>
          setEditingPlant({ ...editingPlant, species: e.target.value })
        }
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Sunlight"
        value={editingPlant.sunlight}
        onChange={(e) =>
          setEditingPlant({ ...editingPlant, sunlight: e.target.value })
        }
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="date"
        placeholder="Last Watered"
        value={editingPlant.lastWatered}
        onChange={(e) =>
          setEditingPlant({ ...editingPlant, lastWatered: e.target.value })
        }
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="date"
        placeholder="Next Watering"
        value={editingPlant.nextWatering}
        onChange={(e) =>
          setEditingPlant({ ...editingPlant, nextWatering: e.target.value })
        }
        className="border p-2 rounded mb-2 w-full"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setEditingPlant(null)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  );
}
