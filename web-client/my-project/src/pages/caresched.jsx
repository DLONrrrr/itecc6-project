export default function CareSchedule() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Care Schedule</h1>
            <p className="text-gray-600 mb-4">Here is the schedule of your upcoming plant care tasks.</p>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Plant</th>
                        <th className="py-2 px-4 border-b text-left">Task</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b text-left">Aloe Vera</td>
                        <td className="py-2 px-4 border-b text-left">Watering</td>
                        <td className="py-2 px-4 border-b text-left">May 8, 2025</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b text-left">Snake Plant</td>
                        <td className="py-2 px-4 border-b text-left">Fertilizing</td>
                        <td className="py-2 px-4 border-b text-left">May 12, 2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
