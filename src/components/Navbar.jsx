import { useState } from "react";
import {Menu, X} from 'lucide-react';
import logo from "../assets/logo-navbar.png";
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container px-4 mx-auto relative text-[14px]">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight text-black font-semibold">Finvest</span>
                </div>
                <ul className="hidden lg:flex ml-auto space-x-12">
                    <li><Link to="/" className="text-black hover:text-blue-900 font-medium">Home</Link></li>
                    <li><Link to="/about" className="text-black hover:text-blue-900 font-medium">About Us</Link></li>
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button 
                        onClick={toggleMobileDrawer} 
                        className="text-black hover:text-blue-900 focus:outline-none">
                        {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 border border-gray-200/50">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><Link to="/" className="text-black hover:text-blue-900 font-medium">Home</Link></li>
                        <li><Link to="/about" className="text-black hover:text-blue-900 font-medium">About Us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;