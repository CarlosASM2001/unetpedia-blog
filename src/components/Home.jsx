import React from 'react';
import Banner from './Banner';
import NoticiasDestacados from './NoticiasDestacados';
import FuncionalidadesPrincipales from './FuncionalidadesPrincipales';
import TeamSection from './TeamSection';
import BlogSidebar from './BlogSidebar';
import FeaturedArticles from './FeaturedArticles';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Banner />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Takes 3/4 of the width on large screens */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Articles Section */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Artículos Destacados
                </h2>
                <p className="text-gray-600 text-lg">
                  Descubre las últimas investigaciones y novedades del mundo académico universitario
                </p>
              </div>
              <FeaturedArticles />
            </section>

            {/* Latest News Section */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Últimas Noticias
                </h2>
                <p className="text-gray-600 text-lg">
                  Mantente al día con las últimas novedades de la comunidad universitaria
                </p>
              </div>
              <NoticiasDestacados />
            </section>

            {/* Key Features Section */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ¿Por qué UnetPedia?
                </h2>
                <p className="text-gray-600 text-lg">
                  Conoce las funcionalidades que nos convierten en la plataforma académica favorita
                </p>
              </div>
              <FuncionalidadesPrincipales />
            </section>

            {/* Team Section */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nuestro Equipo
                </h2>
                <p className="text-gray-600 text-lg">
                  Conoce a los profesionales que hacen posible esta plataforma educativa
                </p>
              </div>
              <TeamSection />
            </section>
          </div>
          
          {/* Sidebar - Takes 1/4 of the width on large screens */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;