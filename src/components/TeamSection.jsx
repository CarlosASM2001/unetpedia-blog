import React from 'react';
import { Linkedin, Github, Mail, MapPin, Award, Users } from 'lucide-react';
import carlosProfile from '../assets/carlosprofile.jpg';
import santiagoProfile from '../assets/santiagoprofile.jpg';
import yosmelProfile from '../assets/yosmelprofile.jpg';
import jesusProfile from '../assets/jesusprofile.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Carlos Alfredo Serrano Molina",
      role: "Desarrollador",
      description: "Estudiante de Ingenieria en Informatica",
      image: carlosProfile,
      skills: ["React", "Node.js", "Tailwind CSS","Flutter"],
      social: {
        linkedin: "https://ve.linkedin.com/",
        github: "https://github.com/CarlosASM2001",
        email: "carlosalfredo.serranomolina@unet.edu.ve"
      },
      location: "San Cristobal, Venezuela",
      experience: "2+ años"
    },
    {
      id: 2,
      name: "Santiago Andres Gutierrez Prato",
      role: "Desarrollador",
      description: "Estudiante de Ingenieria en Informatica",
      image: santiagoProfile,
      skills: ["Frontend", "Flutter", "API Design", "Firebase"],
      social: {
        linkedin: "https://ve.linkedin.com/",
        github: "https://github.com/gsantiago735",
        email: "santiago.gutierrez@unet.edu.ve"
      },
      location: "San Cristobal, Venezuela",
      experience: "3+ años"
    },
    {
      id: 3,
      name: "Yosmel Jose Vaca Mendez",
      role: "Desarrollador",
      description: "Estudiante de Ingenieria en Informatica",
      image: yosmelProfile, 
      skills: ["Figma", "SQL", "User Research"],
      social: {
        linkedin: "https://ve.linkedin.com/",
        github: "https://github.com/",
        email: "yosmel.vaca@unet.edu.ve"
      },
      location: "Chile",
      experience: "1+ años"
    },
    {
      id: 4,
      name: "Jesus Abraham Sanchez Ortiz",
      role: "Desarrollador",
      description: "Estudiante de Ingenieria en informatica",
      image: jesusProfile,
      skills: ["Frontend", "Flutter", "React"],
      social: {
        linkedin: "https://ve.linkedin.com/",
        github: "https://github.com/Abrahamjaso18",
        email: "jesusabraham.sanchez@unet.edu.ve"
      },
      location: "San Cristobal, Venezuela",
      experience: "2+ años"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "4+", label: "Miembros del Equipo" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Años de Experiencia Combinada" },
    { icon: <MapPin className="w-6 h-6" />, number: "4", label: "Ciudades Representadas" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-slate-800 p-4 rounded-full">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conoce a Nuestro
            <br />
            <span className="text-slate-800">Equipo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un grupo apasionado de estudiantes dedicados a transformar la educación digital 
            a través de tecnología innovadora y experiencias de usuario excepcionales.
          </p>
        </div>

        {/* Stats 
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3 text-slate-800">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>*/}

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-slate-200 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=300&background=1e293b&color=ffffff&bold=true`;
                      }}
                    />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-slate-800 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location & Experience */}
                
                <div className="text-center mb-4 space-y-1">
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {member.experience} de experiencia
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-full bg-gradient-to-r from-slate-800 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres formar parte del equipo?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Siempre estamos buscando talento apasionado que quiera contribuir 
              a la transformación de la educación digital en Venezuela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:carlosalfredo.serranomolina@unet.edu.ve"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contáctanos
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-slate-800 transition-colors duration-200"
              >
                Conoce Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;