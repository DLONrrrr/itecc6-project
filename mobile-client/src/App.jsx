import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './pages/dashboard.jsx';
import Home from './pages/home.jsx';
import CareSchedule from './pages/caresched.jsx';
import AddPlant from './pages/addplant.jsx';

export default function App(){
    return (
        <BrowserRouter>
        <div className="flex">
            <Sidebar />
            <main className= "flex-grow p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/" element={<Dashboard />} />
                    <Route path="/addplant" element={<AddPlant />} />
                    <Route path="/caresched" element={<CareSchedule />} />
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    )
}
