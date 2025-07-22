import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
            <div className="text-gray-700 leading-relaxed text-lg markdonw-content">
              <ReactMarkDown
                remarkPlugins={[remarkGfm]} 
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-8">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-5">{children}</h3>,
                  p: ({children}) => <p className="mb-g leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                  li: ({children}) => <li className="ml-4">{children}</li>,
                  blockquote: ({children}) => 
                    <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 mb-6 bg-gray-50 py-2">
                      {children}
                    </blockquote>,

                  code: ({inline,children}) => 
                    inline
                    ? <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
                    : <pre className="block bg-gray-100 text-gray-800 p-4 text-sm font-mono rounded-lg overflow-x-auto mb-6">
                        <code>{children}</code>
                      </pre>,
                  pre: ({children}) => 
                    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                      <code>{children}</code>
                    </pre>,
                  a: ({href, children}) => <a className='text-blue-600 hover:underline' href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                  img: ({src, alt}) => <img src={src} alt={alt} className="rounded-lg shadow-md mb-6 w-auto h-auto" />,
                  table: ({children}) => <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mb-6">{children}</table>,
                  th: ({children}) => <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">{children}</th>,
                  td: ({children}) => <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{children}</td>,
                  strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>,
                  em: ({children}) => <em className="italic text-gray-600">{children}</em>,
                  hr: () => <hr className="my-8 border-gray-200" />
                }}
                >
                {post.contenido}
              </ReactMarkDown> 
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