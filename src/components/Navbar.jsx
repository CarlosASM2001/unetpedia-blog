import { useState } from "react";
import {Menu, X, Search, BookOpen, Users, FileText, Home} from 'lucide-react';
import logo from "../assets/Logounetpedia.png";
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl border-b border-gray-800">
        <div className="container px-4 mx-auto relative text-[14px]">
            <div className="flex justify-between items-center py-4">
                {/* Logo Section with enhanced styling */}
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <img src={logo} alt="UnetPedia Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>

                {/* Enhanced Navigation Menu */}
                <ul className="hidden lg:flex space-x-6 items-center">
                    <li>
                        <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-gray-800/50">
                            <Home className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center space-x-2 text-white hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-gray-800/50">
                            <Users className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Sobre Nosotros</span>
                        </Link>
                    </li>
                    
                </ul>

                {/* Enhanced Mobile Menu Button */}
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button 
                        onClick={toggleMobileDrawer} 
                        className="text-white hover:text-blue-400 focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-all duration-300">
                        {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            {mobileDrawerOpen && (
                <div className="absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-black shadow-2xl z-50 border-t border-gray-800 backdrop-blur-sm">
                    <ul className="flex flex-col space-y-2 p-6">
                        <li>
                            <Link to="/" className="flex items-center space-x-3 text-white hover:text-blue-400 font-medium p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                <Home className="w-5 h-5" />
                                <span>Inicio</span>
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="/about" className="flex items-center space-x-3 text-white hover:text-blue-400 font-medium p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                <Users className="w-5 h-5" />
                                <span>Sobre Nosotros</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            )}
        </div>
    </nav>
);
}

export default Navbar;