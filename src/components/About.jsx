import React from 'react';
import bannerImg from '../assets/banner.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conoce más sobre nuestra misión, visión y el equipo detrás de esta plataforma educativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unet Pedia nace como una iniciativa académica pensada por y para estudiantes de la 
                Universidad Nacional Experimental del Táchira (UNET), con el propósito de facilitar el acceso al material académico, 
                mejorar la organización de los recursos educativos y apoyar la formación de calidad.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Identificamos una necesidad real en la comunidad estudiantil: la dispersión del contenido académico, 
                la falta de centralización de los pensum y la poca visibilidad de las preparadurías. Esta plataforma es 
                nuestra respuesta tecnológica a ese desafío.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro proyecto representa un espacio colaborativo donde estudiantes, docentes y preparadores pueden compartir 
                conocimientos, acceder a documentos relevantes y mantenerse conectados con la vida académica universitaria.
              </p>
            </div>
            <div>
              <img
                src={bannerImg}
                alt="Our team"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Mision</h2>
              <p className="text-gray-600 leading-relaxed">
                Crear una plataforma digital académica donde el conocimiento esté al alcance de todos los estudiantes de la UNET, 
                promoviendo la organización, accesibilidad y colaboración en el entorno universitario.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Contenido Académico Organizado</h3>
              <p className="text-gray-600">
                Aseguramos que todo el material esté clasificado por carrera, semestre y asignatura, 
                manteniendo estándares de calidad y estructura para una mejor experiencia de aprendizaje.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidad Estudiantil Activa</h3>
              <p className="text-gray-600">
                Promovemos la participación de estudiantes y preparadores como actores clave en la generación, 
                carga y revisión del contenido disponible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Educación Abierta y Conectada</h3>
              <p className="text-gray-600">
                Fomentamos una cultura de aprendizaje continuo mediante el acceso libre a recursos,
                información institucional y herramientas de consulta modernas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;