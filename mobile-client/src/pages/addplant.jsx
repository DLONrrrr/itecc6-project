export default function AddPlantForm() {
  return (
    <div className="px-4 pt-6 pb-12">
      <form className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4 text-center text-green-700">
          Add a New Plant
        </h2>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Plant Name</label>
          <input
            type="text"
            placeholder="Enter plant name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Species</label>
          <input
            type="text"
            placeholder="Enter species"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">
            Watering Frequency (days)
          </label>
          <input
            type="number"
            placeholder="e.g. 7"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Last Watered</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Sunlight</label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Next Watering Date
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="w-full bg-gray-300 text-sm py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-green-600 text-white text-sm py-2 rounded-md hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
