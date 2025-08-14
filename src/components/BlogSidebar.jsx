import React from 'react';
import { Calendar, Tag, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSidebar = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Nuevas metodologías de investigación en ciencias",
      date: "2024-01-15",
      category: "Investigación"
    },
    {
      id: 2,
      title: "Inteligencia Artificial en la educación superior",
      date: "2024-01-12",
      category: "Tecnología"
    },
    {
      id: 3,
      title: "Estrategias de estudio efectivas para universitarios",
      date: "2024-01-10",
      category: "Educación"
    },
    {
      id: 4,
      title: "El futuro de las bibliotecas digitales",
      date: "2024-01-08",
      category: "Digital"
    }
  ];

  const categories = [
    { name: "Investigación", count: 45, color: "bg-purple-500" },
    { name: "Tecnología", count: 38, color: "bg-blue-500" },
    { name: "Educación", count: 52, color: "bg-green-500" },
    { name: "Digital", count: 29, color: "bg-indigo-500" },
    { name: "Ciencias", count: 41, color: "bg-pink-500" },
    { name: "Innovación", count: 33, color: "bg-orange-500" }
  ];

  const popularTags = [
    "universidad", "investigación", "estudiantes", "tecnología", "educación",
    "ciencia", "innovación", "digital", "académico", "aprendizaje"
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
          Buscar en el Blog
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="¿Qué quieres aprender hoy?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-purple-600" />
          Artículos Recientes
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="group">
              <Link 
                to={`/noticias/${post.id}`}
                className="block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
              >
                <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-200 leading-tight mb-2">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('es-ES', { 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link 
          to="/archivo" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mt-4 transition-colors duration-200"
        >
          Ver todos los artículos <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-purple-600" />
          Categorías
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/categoria/${category.name.toLowerCase()}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                  {category.name}
                </span>
              </div>
              <span className="bg-gray-100 group-hover:bg-purple-100 text-gray-600 group-hover:text-purple-700 px-2 py-1 rounded-full text-sm transition-colors duration-200">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Etiquetas Populares
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              to={`/tag/${tag}`}
              className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-2 rounded-full text-sm transition-colors duration-200 hover:shadow-md"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Suscríbete al Newsletter
        </h3>
        <p className="text-purple-100 mb-4 text-sm">
          Recibe los mejores artículos académicos directamente en tu correo.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="tu-email@universidad.edu"
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:ring-opacity-50 outline-none"
          />
          <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Suscribirse
          </button>
        </div>
        <p className="text-xs text-purple-200 mt-3">
          No spam. Solo contenido académico de calidad.
        </p>
      </div>
    </div>
  );
};

export default BlogSidebar;