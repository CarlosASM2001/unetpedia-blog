import React from 'react';
import { Calendar, User, ArrowRight, Bookmark, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedArticles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "El futuro de la inteligencia artificial en la educación universitaria",
      excerpt: "Exploramos cómo la IA está transformando la experiencia educativa, desde la personalización del aprendizaje hasta la automatización de procesos administrativos.",
      author: "Dr. María González",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-15",
      readTime: "8 min",
      views: 2340,
      category: "Tecnología",
      categoryColor: "bg-blue-500",
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Metodologías innovadoras de investigación científica",
      excerpt: "Nuevos enfoques metodológicos que están revolucionando la forma en que conducimos investigación en el ámbito universitario.",
      author: "Dr. Carlos Ruiz",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-12",
      readTime: "6 min",
      views: 1890,
      category: "Investigación",
      categoryColor: "bg-purple-500",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Sostenibilidad y campus universitarios del futuro",
      excerpt: "Cómo las universidades están liderando el cambio hacia un futuro más sostenible a través de iniciativas innovadoras.",
      author: "Dra. Ana Martín",
      authorImage: "/api/placeholder/40/40",
      date: "2024-01-10",
      readTime: "5 min",
      views: 1567,
      category: "Sostenibilidad",
      categoryColor: "bg-green-500",
      image: "/api/placeholder/400/200"
    }
  ];

  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1);

  return (
    <div className="space-y-8">
      {/* Featured Article Hero */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/3">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className={`inline-block ${mainArticle.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {mainArticle.category}
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 p-8 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ Artículo Destacado
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              {mainArticle.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {mainArticle.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center mb-6 space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <img 
                  src={mainArticle.authorImage} 
                  alt={mainArticle.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{mainArticle.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{new Date(mainArticle.date).toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Eye size={14} className="mr-1" />
                <span>{mainArticle.views} vistas</span>
              </div>
            </div>

            <Link 
              to={`/noticias/${mainArticle.id}`}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:shadow-lg"
            >
              Leer artículo completo
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Featured Articles */}
      <div className="grid md:grid-cols-2 gap-6">
        {sideArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-block ${article.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {article.category}
                </span>
              </div>
              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                <Bookmark size={16} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-purple-600 transition-colors duration-200">
                <Link to={`/noticias/${article.id}`}>
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {article.excerpt.substring(0, 120)}...
              </p>
              
              {/* Article Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <img 
                    src={article.authorImage} 
                    alt={article.author}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>{article.readTime}</span>
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1" />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>

              <Link 
                to={`/noticias/${article.id}`}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
              >
                Leer más
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;