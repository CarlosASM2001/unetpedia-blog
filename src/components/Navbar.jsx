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
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="hidden md:block">
                        <h1 className="text-white font-bold text-lg tracking-wide">UnetPedia</h1>
                        <p className="text-blue-300 text-xs">Plataforma Académica</p>
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
                        <Link to="/blog" className="flex items-center space-x-2 text-white hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-gray-800/50">
                            <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/recursos" className="flex items-center space-x-2 text-white hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-gray-800/50">
                            <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Recursos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center space-x-2 text-white hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg hover:bg-gray-800/50">
                            <Users className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Sobre Nosotros</span>
                        </Link>
                    </li>
                    <li className="pl-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Buscar..."
                                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 w-48 focus:w-56"
                            />
                        </div>
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
                            <Link to="/blog" className="flex items-center space-x-3 text-white hover:text-blue-400 font-medium p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                <FileText className="w-5 h-5" />
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recursos" className="flex items-center space-x-3 text-white hover:text-blue-400 font-medium p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                <BookOpen className="w-5 h-5" />
                                <span>Recursos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="flex items-center space-x-3 text-white hover:text-blue-400 font-medium p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                                <Users className="w-5 h-5" />
                                <span>Sobre Nosotros</span>
                            </Link>
                        </li>
                        <li className="pt-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input 
                                    type="text" 
                                    placeholder="Buscar en UnetPedia..."
                                    className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
);
}

export default Navbar;