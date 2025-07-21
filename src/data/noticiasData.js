
// Data structure for noticias (news) in the application
export const noticiasData = [
  {
    id: 1,
    titulo: "Fase 1 - Informacion Inicial del Proyecto",
    descripcion: "Creamos una plataforma para centralizar y democratizar el acceso al material académico en la Universidad Nacional Experimental del Táchira (UNET), fortaleciendo la organización educativa y la conectividad entre estudiantes, docentes y departamentos.",
    contenido: "En el marco de nuestro compromiso con el desarrollo rural integral, hemos iniciado un ambicioso proyecto que busca fortalecer las comunidades campesinas colombianas. Este programa integra aspectos de agricultura sostenible, justicia social y fortalecimiento de la fe comunitaria. A través de talleres de capacitación técnica, apoyo espiritual y promoción de los derechos humanos, estamos trabajando de la mano con más de 200 familias rurales en diferentes regiones del país. Los resultados han sido alentadores: incremento del 40% en la productividad agrícola, fortalecimiento de las organizaciones comunitarias y renovación de la esperanza en territorios que han sido históricamente marginados.",
    imagen: "/src/assets/fase1.jpg",
    fecha: "2025-07-01",
    autor: "Carlos Serrano",
    categoria: "Sistemas de Informacion I",
    tags: ["tecnologia", "sistema", "informacion","BaseDeDato","UNET"],
    destacado: true,
    link: "/noticias/1"
  },
  {
    id: 2,
    titulo: "El Secretariado Nacional de Pastoral Social - Cáritas Colombiana participó en AGROEXPO 2024",
    descripcion: "Participación destacada en la feria agropecuaria más importante del país, promoviendo el desarrollo rural sostenible y la soberanía alimentaria.",
    contenido: "Durante cuatro días, nuestro equipo participó activamente en AGROEXPO 2024, la feria agropecuaria más importante de Colombia. En nuestro stand institucional, pudimos compartir con miles de visitantes los proyectos de desarrollo rural que adelantamos en todo el territorio nacional. Presentamos iniciativas innovadoras en agricultura sostenible, programas de soberanía alimentaria y proyectos de fortalecimiento organizativo campesino. La participación incluyó conferencias sobre 'Pastoral Social y Desarrollo Rural', talleres prácticos de agricultura ecológica y espacios de diálogo sobre políticas públicas para el campo. Este evento nos permitió establecer nuevas alianzas estratégicas con organizaciones internacionales y entidades gubernamentales para ampliar el impacto de nuestros programas.",
    imagen: "/src/assets/banner2.jpg",
    fecha: "2024-01-10",
    autor: "Equipo Comunicaciones",
    categoria: "Eventos",
    tags: ["agroexpo", "agricultura", "soberanía alimentaria", "desarrollo rural"],
    destacado: true,
    link: "/noticias/2"
  },
];

// Funciones para acceder a los datos
export const getNoticiasDestacadas = () => {
  return noticiasData.filter(noticia => noticia.destacado);
};

export const getNoticiasByCategoria = (categoria) => {
  return noticiasData.filter(noticia => noticia.categoria === categoria);
};

export const getNoticiaById = (id) => {
  return noticiasData.find(noticia => noticia.id === parseInt(id));
};

export const getCategorias = () => {
  const categorias = [...new Set(noticiasData.map(noticia => noticia.categoria))];
  return categorias;
};

export const getNoticiasRecientes = (limite = 6) => {
  return noticiasData
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, limite);
};

export const searchNoticias = (termino) => {
  const terminoLower = termino.toLowerCase();
  return noticiasData.filter(noticia => 
    noticia.titulo.toLowerCase().includes(terminoLower) ||
    noticia.descripcion.toLowerCase().includes(terminoLower) ||
    noticia.contenido.toLowerCase().includes(terminoLower) ||
    noticia.tags.some(tag => tag.toLowerCase().includes(terminoLower))
  );
};