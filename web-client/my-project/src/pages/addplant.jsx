export default function AddPlant() {
    return (
        <div className="p-8 mt-10">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Add a New Plant</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Plant Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter plant name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Species</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter species"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Watering Frequency (days)</label>
                        <input
                            type="number"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="e.g., 7"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Watered</label>
                        <input
                            type="date"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sunlight</label>
                        <select
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Select sunlight needs</option>
                            <option value="Full Sun">Full Sun</option>
                            <option value="Partial Sun">Partial Sun</option>
                            <option value="Shade">Shade</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Next Watering Date</label>
                        <input
                            type="date"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
