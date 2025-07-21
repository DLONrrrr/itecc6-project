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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Care Schedule</h1>
      <p className="text-gray-600 mb-4">
        Here is the schedule of your upcoming plant care tasks.
      </p>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Plant</th>
            <th className="py-2 px-4 border-b text-left">Task</th>
            <th className="py-2 px-4 border-b text-left">Date</th>
            <th className="py-2 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {careTasks.map((task, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-left">{task.plant}</td>
              <td className="py-2 px-4 border-b text-left">{task.task}</td>
              <td className="py-2 px-4 border-b text-left">{task.date}</td>
              <td className="py-2 px-4 border-b text-left">
                {!task.logged ? (
                  <button
                    onClick={() => handleLogWatering(index)}
                    className="text-blue-600 hover:underline"
                  >
                    Log Watering
                  </button>
                ) : (
                  <span className="text-green-600 font-semibold">Watered</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
