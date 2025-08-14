import { useState } from "react";
import {Menu, X, Search, Bookmark, Archive, Tag} from 'lucide-react';
import logo from "../assets/Logounetpedia.png";
import { Link } from 'react-router-dom';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-purple-500/20 shadow-xl">
        <div className="container px-4 mx-auto relative">
            <div className="flex justify-between items-center py-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="UnetPedia Logo" className="h-12 w-auto transition-transform hover:scale-105" />
                    <div className="hidden sm:block">
                        <h1 className="text-white font-bold text-xl">UnetPedia</h1>
                        <p className="text-purple-300 text-xs">Blog Académico</p>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-8 items-center">
                        <li>
                            <Link to="/" className="text-white hover:text-purple-300 font-medium transition-colors duration-200 flex items-center space-x-1">
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/categorias" className="text-white hover:text-purple-300 font-medium transition-colors duration-200 flex items-center space-x-1">
                                <Tag size={16} />
                                <span>Categorías</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/archivo" className="text-white hover:text-purple-300 font-medium transition-colors duration-200 flex items-center space-x-1">
                                <Archive size={16} />
                                <span>Archivo</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                                Sobre Nosotros
                            </Link>
                        </li>
                    </ul>
                    
                    {/* Search Button */}
                    <button className="bg-purple-600/30 hover:bg-purple-600/50 text-white px-4 py-2 rounded-full transition-all duration-200 flex items-center space-x-2 border border-purple-500/30">
                        <Search size={16} />
                        <span className="hidden xl:inline">Buscar</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button 
                        onClick={toggleMobileDrawer} 
                        className="text-white hover:text-purple-300 focus:outline-none p-2 rounded-lg hover:bg-purple-600/30 transition-all duration-200">
                        {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {mobileDrawerOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-900/95 to-purple-900/95 backdrop-blur-lg border-t border-purple-500/20 shadow-2xl">
                    <div className="px-4 py-6 space-y-4">
                        <Link 
                            to="/" 
                            className="block text-white hover:text-purple-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-600/20 transition-all duration-200"
                            onClick={() => setMobileDrawerOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link 
                            to="/categorias" 
                            className="block text-white hover:text-purple-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-600/20 transition-all duration-200 flex items-center space-x-2"
                            onClick={() => setMobileDrawerOpen(false)}
                        >
                            <Tag size={16} />
                            <span>Categorías</span>
                        </Link>
                        <Link 
                            to="/archivo" 
                            className="block text-white hover:text-purple-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-600/20 transition-all duration-200 flex items-center space-x-2"
                            onClick={() => setMobileDrawerOpen(false)}
                        >
                            <Archive size={16} />
                            <span>Archivo</span>
                        </Link>
                        <Link 
                            to="/about" 
                            className="block text-white hover:text-purple-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-600/20 transition-all duration-200"
                            onClick={() => setMobileDrawerOpen(false)}
                        >
                            Sobre Nosotros
                        </Link>
                        <button className="w-full bg-purple-600/30 hover:bg-purple-600/50 text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-purple-500/30">
                            <Search size={16} />
                            <span>Buscar en el blog</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    </nav>
);
}

export default Navbar;