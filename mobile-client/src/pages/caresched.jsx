import { useState } from "react";

export default function CareSchedule() {
  const [careTasks, setCareTasks] = useState([
    { plant: "Aloe Vera", task: "Watering", date: "May 8, 2025", logged: false },
    { plant: "Snake Plant", task: "Fertilizing", date: "May 12, 2025", logged: false },
    { plant: "Peace Lily", task: "Watering", date: "May 15, 2025", logged: false },
  ]);

  const handleLogWatering = (index) => {
    const updatedTasks = [...careTasks];
    updatedTasks[index].logged = true;
    setCareTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-center">Care Schedule</h1>
      <p className="text-gray-600 text-center mb-6 text-sm">
        Track and manage upcoming care tasks for your plants.
      </p>

      <div className="space-y-4">
        {careTasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="mb-1">
              <span className="font-semibold">🌱 Plant:</span>{" "}
              <span className="text-gray-800">{task.plant}</span>
            </div>
            <div className="mb-1">
              <span className="font-semibold">🛠️ Task:</span>{" "}
              <span className="text-gray-800">{task.task}</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold">📅 Date:</span>{" "}
              <span className="text-gray-800">{task.date}</span>
            </div>

            {!task.logged ? (
              <button
                onClick={() => handleLogWatering(index)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2 hover:bg-blue-600 transition"
              >
                Log {task.task}
              </button>
            ) : (
              <div className="text-green-600 font-semibold text-center mt-2">
                ✅ Completed
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
