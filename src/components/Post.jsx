import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { noticiasData } from '../data/noticiasData.js';

const Post = () => {
  const { id } = useParams();
  const post = noticiasData.find(noticia => noticia.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Inicio
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-900 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Inicio
          </Link>
        </div>

        {/* Post content */}
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.categoria}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {post.titulo}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="mr-4">{formatDate(post.fecha)}</span>
              <span>By {post.autor}</span>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.descripcion}
            </p>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {post.contenido.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Post;