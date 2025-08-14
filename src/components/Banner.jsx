import React from "react";
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';
import bannerImg from '../assets/banner.png';

function Banner() {
  return (
    <div
      className="relative m-3 py-32 px-4 sm:px-6 lg:px-8 text-white bg-local bg-center rounded-2xl shadow-2xl overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `
          linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.85) 30%, rgba(88,28,135,0.8) 70%, rgba(15,23,42,0.9) 100%),
          url('${bannerImg}')
        `
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 border border-purple-400/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-blue-400/30 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              UnetPedia
            </span>
            <span className="block text-3xl md:text-4xl font-normal text-purple-200 mt-2">
              Blog Académico Universitario
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Descubre artículos, investigaciones y recursos académicos que transforman la experiencia universitaria. 
            <span className="block mt-2 text-purple-300 font-medium">
              Tu fuente de conocimiento académico actualizado.
            </span>
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <BookOpen className="w-8 h-8 text-purple-300 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-purple-200 text-sm">Artículos Publicados</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-blue-200 text-sm">Estudiantes Activos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 text-green-300 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-green-200 text-sm">Satisfacción</div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
            <span>Explorar Artículos</span>
            <ArrowRight size={20} />
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50">
            Únete a la Comunidad
          </button>
        </div>

        {/* Featured announcement */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 max-w-2xl mx-auto">
          <p className="text-purple-200 text-sm mb-2">🎉 ¡Nuevo!</p>
          <p className="text-white font-medium">
            Serie especial: "Investigación e Innovación 2024" - Descubre los proyectos más destacados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;