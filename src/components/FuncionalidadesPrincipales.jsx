import React from 'react';
import { Search, Database, Filter } from 'lucide-react';

const FuncionalidadesPrincipales = () => {
  const features = [
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Gestión de Material Académico",
      description: "Sube y organiza recursos académicos. Carga archivos PDF, documentos e información rápidamente, organizados por materias, niveles y categorías para un fácil acceso desde una interfaz clara y organizada.",
      points: [
        "Sube y organiza recursos académicos",
        "Carga archivos PDF, documentos e información rápidamente",
        "Organizados por materias, niveles y categorías",
        "Descarga múltiple desde una interfaz clara y organizada"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Información Universitaria",
      description: "Accede a datos clave de la universidad. Explora el portal de cada carrera, obtén información sobre profesores académicos y consulta horarios y detalles de grado durante cada uno toda lugar.",
      points: [
        "Accede a datos clave de la universidad",
        "Explora el portal de cada carrera",
        "Obtén información sobre profesores académicos",
        "Consulta horarios y detalles de grado durante cada uno toda lugar"
      ]
    },
    {
      icon: <Filter className="w-12 h-12 text-blue-600" />,
      title: "Búsqueda y Filtrado Avanzado",
      description: "Encuentra rápidamente lo que necesitas. Utiliza filtros por carrera, asignatura, tipo de documento. Busca según descarga según el material de forma rápida y precisa.",
      points: [
        "Encuentra rápidamente lo que necesitas",
        "Utiliza filtros por carrera, asignatura, tipo de documento",
        "Busca según descarga según el material",
        "Material de forma rápida y precisa"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-navy-900 p-4 rounded-full">
              <Search className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Funcionalidades
            <br />
            <span className="text-navy-900">Principales</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-navy-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-navy-900 to-blue-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesPrincipales;