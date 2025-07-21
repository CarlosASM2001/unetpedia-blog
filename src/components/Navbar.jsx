import { useState } from "react";
import {Menu, X} from 'lucide-react';
import logo from "../assets/Logounetpedia.png";
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

return (
    <nav className="sticky top-0 z-50 bg-black shadow-lg">
        <div className="container px-4 mx-auto relative text-[14px]">
            <div className="flex justify-center items-center py-4">
                <div className="flex items-center justify-center w-full gap-8">
                    <img src={logo} alt="Logo" className="h-15 w-30" />
                    <ul className="hidden lg:flex space-x-12 items-center">
                        <li><Link to="/" className="text-white hover:text-blue-900 font-medium">Inicio</Link></li>
                        <li><Link to="/about" className="text-white hover:text-blue-900 font-medium">Sobre Nosotros</Link></li>
                    </ul>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end absolute right-4 top-4">
                    <button 
                        onClick={toggleMobileDrawer} 
                        className="text-white hover:text-blue-900 focus:outline-none">
                        {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="absolute top-16 left-0 w-full bg-black shadow-lg z-50 border border-gray-200/50">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><Link to="/" className="text-white hover:text-blue-900 font-medium">Inicio</Link></li>
                        <li><Link to="/about" className="text-white hover:text-blue-900 font-medium">Sobre Nosotros</Link></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
);
}

export default Navbar;