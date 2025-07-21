import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiCheckSquare, FiFeather, FiActivity, FiMonitor, FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between bg-green-800 text-white p-4">
                <div className="text-lg font-bold">PlantCare</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}>
                <div className="p-4 text-lg font-bold hidden md:block">PlantCare</div>
                <nav className="mt-10">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-300" onClick={() => setIsOpen(false)}>
                                <FiHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-300" onClick={() => setIsOpen(false)}>
                                <FiMonitor className="mr-2" /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/caresched" className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-300" onClick={() => setIsOpen(false)}>
                                <FiCheckSquare className="mr-2" /> Care Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to="/addplant" className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-300" onClick={() => setIsOpen(false)}>
                                <FiFeather className="mr-2" /> Add Plant
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay when sidebar is open on mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
}
