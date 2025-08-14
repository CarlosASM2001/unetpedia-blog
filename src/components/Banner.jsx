import React from "react";
import bannerImg from '../assets/banner.png';
import { ArrowRight, BookOpen, Download, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div
      className="relative m-3 py-32 px-4 sm:px-6 lg:px-8 text-white bg-local bg-center rounded-2xl shadow-xl overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `
          linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.8) 50%, rgba(15,23,42,0.9) 100%),
          url('${bannerImg}')
        `
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Construyendo el futuro del 
            <span className="block text-blue-300 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Aprendizaje Académico
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            UnetPedia es una plataforma digital universitaria que transforma la forma en que se gestiona y comparte el material académico
          </p>
        </div>

        {/* Stats and highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <BookOpen className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Material Centralizado</h3>
            <p className="text-sm opacity-80">Accede a todos los recursos académicos organizados por carrera y materia</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="w-8 h-8 text-green-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Comunidad UNET</h3>
            <p className="text-sm opacity-80">Conecta estudiantes, profesores y departamentos en una sola plataforma</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Download className="w-8 h-8 text-purple-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Descarga Rápida</h3>
            <p className="text-sm opacity-80">Sistema de búsqueda avanzada con filtros inteligentes</p>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/about" 
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Conoce más sobre UnetPedia</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <BookOpen className="w-5 h-5" />
            <span>Explorar Blog</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;