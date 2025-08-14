import React from 'react';
import Banner from './Banner';
import NoticiasDestacados from './NoticiasDestacados';
import FuncionalidadesPrincipales from './FuncionalidadesPrincipales';
import TeamSection from './TeamSection';
import { getNoticiasDestacadas } from '../data/noticiasData.js';
import { Calendar, BookOpen, Users, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const noticias = getNoticiasDestacadas();
  const totalPosts = noticias.length;
  const recentPosts = noticias.slice(0, 3);

  return (
    <div>
      <Banner />
      
      {/* Blog Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Centro de Conocimiento UnetPedia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre recursos académicos, guías de desarrollo y las últimas actualizaciones del proyecto UnetPedia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{totalPosts}</h3>
              <p className="text-gray-600">Artículos Publicados</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-600">Carreras Cubiertas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Recursos Disponibles</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">2024</h3>
              <p className="text-gray-600">Año de Lanzamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Últimas Publicaciones</h2>
            <Link 
              to="/blog" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              <span>Ver todos los artículos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.imagen} 
                    alt={post.titulo}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.categoria || 'Desarrollo'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.fechaPublicacion).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min lectura</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.titulo}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.descripcion}
                  </p>
                  <Link 
                    to={`/post/${post.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                  >
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FuncionalidadesPrincipales />
      <NoticiasDestacados />
      <TeamSection />
    </div>
  );
};

export default Home;