import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiCheckSquare, FiFeather, FiActivity, FiMonitor } from 'react-icons/fi';

export default function Sidebar() {
    return (
        <div className="flex flex-col w-64 h-screen bg-green-800 text-white">
            <div className=" p-4 text-lg font-bold"></div>
            <nav className="flex-grow">
                <ul className="mt-10 space-y-2">
                    <li>
                        <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded hover:scale-95 transition duration-300 ease-in-out">
                            <FiHome className="mr-2" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded hover:scale-95 transition duration-300">
                            <FiMonitor className="mr-2" /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/caresched" className="flex items-center p-2 hover:bg-gray-700 rounded hover:scale-95 transition duration-300">
                            <FiCheckSquare className="mr-2" />Care Schedule
                        </Link>
                    </li>
                    <li>
                        <Link to="/addplant" className="flex items-center p-2 hover:bg-gray-700 rounded hover:scale-95 transition duration-300">
                            <FiFeather className="mr-2" />Add Plant
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}