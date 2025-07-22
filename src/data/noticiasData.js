import fase1Img from '../assets/fase1.jpg';
import principalImg from '../assets/principal.png';
import mycoursesImg from '../assets/Mycourses.png';
import editaccountImg from '../assets/editaccount.png';
import downloadImg from '../assets/download.png';
import mockup1Img from '../assets/mockup1.png';
import logoImg from '../assets/logo.png';
import figmaPostImg from '../assets/figma-post.jpg';
import fase2Img from '../assets/post3cover.jpg';
import diagrampost3 from '../assets/diagrampost3.png';



// Data structure for noticias (news) in the application
export const noticiasData = [
  {
    id: 1,
    titulo: "Fase 1 - Informacion Inicial del Proyecto",
    descripcion: "Creamos una plataforma para centralizar y democratizar el acceso al material académico en la Universidad Nacional Experimental del Táchira (UNET), fortaleciendo la organización educativa y la conectividad entre estudiantes, docentes y departamentos.",
    contenido: `# Objetivo General
Desarrollar una plataforma digital llamada Unet Pedia que centralice y facilite el acceso al material académico 
de la Universidad Nacional Experimental del Táchira (UNET), permitiendo a estudiantes y docentes gestionar, consultar y 
compartir recursos educativos de forma eficiente, organizada y accesible.

# Objetivos Específicos
* 📂 Gestionar el material académico por carrera, semestre y asignatura, asegurando su correcta organización jerárquica.
* 📈 Optimizar el proceso de distribución de contenidos educativos dentro del entorno universitario.
* 🔍 Facilitar la búsqueda y descarga de recursos mediante filtros avanzados y un sistema de búsqueda inteligente.
* 🏫 Proveer información institucional sobre las carreras, sus respectivos pensum, departamentos y preparadurías.

# Mision y Vision
## Misión
Crear una solución tecnológica enfocada en mejorar el acceso al conocimiento dentro del ámbito universitario, 
mediante una plataforma intuitiva que permita la gestión estructurada del contenido académico, adaptada a las necesidades 
de estudiantes y docentes de la UNET.

## Visión
Convertirse en una herramienta de referencia académica en el entorno universitario, 
contribuyendo al fortalecimiento de la cultura del conocimiento compartido, la organización institucional y la 
transformación digital de los procesos educativos.

# Planteamiento del problema

Actualmente, los estudiantes universitarios enfrentan dificultades para acceder a material académico especifico y organizado. 
La distribución de apuntes, guías o contenidos educativos suele depender de canales informales, como grupos de mensajería 
o plataformas dispersas, lo que genera pérdida de información, redundancias y desorganización. Además, la información sobre 
horarios de preparadurías, departamentos o pensum no siempre está disponible de manera clara o centralizada. Esta situación 
afecta la eficiencia del proceso de aprendizaje y limita la equidad en el acceso a los recursos. Unet Pedia surge como una respuesta 
integral a esta problemática.


`,
    imagen: fase1Img,
    fecha: "2025-07-02",
    autor: "Carlos Serrano",
    categoria: "Sistemas de Informacion I",
    tags: ["tecnologia", "sistema", "informacion","BaseDeDato","UNET"],
    destacado: true,
    link: "/noticias/1"
  },
  {
    id: 2,
    titulo: "Desarrollo de Prototipo con Figma",
    descripcion: "Desarrollamos un prototipo interactivo de alta fidelidad utilizando Figma, que incluye navegación, interacciones y diseño responsivo. Este prototipo servirá como base para la implementación del sistema.",
    contenido: `# Diseno UI/UX con Figma
El diseno incorpora una paleta de colores oscuros con acentos en blanco y azul, 
en el cual se utiliza una tipografia sencilla y legible, combinada con botones redondeados y una estructura de navegacion uniforme

Los elementos de la interfaz se distribuyen de manera que se optimiza la experiencia del usuario, 
permitiendo un acceso rapido y ordenado a las funciones claves

## 🧠 Proyect

![Pantalla Principal](${principalImg})

> **Bienvenida personalizada y acceso directo a funcionalidades clave**
>
> - **Materiales**: Encuentra el contenido de tus cursos.
> - **Conseguir Tutor**: Encuentra apoyo para tus dudas.
> - **Calcula Tu Nota**: Herramienta para calcular tu promedio final.

## 📚 My Courses

![Mis Cursos](${mycoursesImg})

> **Interfaz de búsqueda y exploración de materias**
>
> - Búsqueda por materia
> - Visualización por curso (ej. Matemática I)
> - Acceso rápido a guías:
>   - Guía de una Variable Real
>   - Guía de Funciones
>   - Guía de Derivadas
>   - Tabla de Derivadas Definidas

## 👤 Profile

![Perfil de Usuario](${editaccountImg})

> **Pantalla de edición de perfil del usuario**
>
> - Foto del usuario con opción de actualizar
> - Nombre: Santiago  
> - Apellido: Gutiérrez  
> - Email: santiago@africacena.com  
>


## ⬇️ Download

![Descarga de Materiales](${downloadImg})

> **Confirmación para descarga de material**
>
> - Pregunta: ¿Estás seguro de querer descargar el archivo?
> - El archivo se guardará en la carpeta de descargas
>

Para el diseño de Unet Pedia, se tomaron como referencia diversas plataformas digitales reconocidas por su claridad visual, 
organización estructurada y experiencia de usuario fluida. Entre los principales referentes utilizados destacan:

* Notion y Google Drive: por su enfoque minimalista y su sistema jerárquico de organización de contenidos.
* Khan Academy y Coursera: por la forma en que presentan recursos educativos de manera accesible y filtrable por asignatura.
* Duolingo: por su diseño amigable y adaptable a dispositivos móviles, con una navegación intuitiva.
* Figma Community: se consultaron plantillas y sistemas UI modernos publicados por diseñadores educativos y académicos.

Estas plataformas sirvieron como base para definir aspectos como la paleta de colores, la distribución de la información, 
el uso de íconos representativos y la navegación centrada en el usuario. La meta fue construir una interfaz moderna que se sienta 
familiar, confiable y funcional para el entorno universitario.

# Etapas de Diseno

## Investigación e inspiración
Se analizaron plataformas académicas modernas y aplicaciones educativas para definir una interfaz atractiva, 
intuitiva y funcional. Se priorizó la accesibilidad y la organización jerárquica del contenido.

## Wireframes y prototipos
Se elaboraron bocetos en baja fidelidad para definir la distribución de elementos. Posteriormente, 
se desarrollaron prototipos en Figma con una estructura clara y navegación fluida.

## Diseño visual
Se aplicó una paleta de colores oscuros con acentos en blanco y azul, tipografía legible y botones redondeados. 
Todo el diseño se centró en facilitar la lectura y la interacción desde dispositivos móviles.

## Pruebas internas y ajustes
El prototipo fue revisado por miembros del equipo y compañeros para recoger sugerencias. 
Se realizaron mejoras en el contraste, espaciado y disposición de secciones para una mejor experiencia de usuario.

![Prototipo Interactivo](${mockup1Img})

# Decision del Logo
![Logo Unet Pedia](${logoImg})

El logo de Unet Pedia está inspirado en el emblema institucional de la UNET, integrando líneas geométricas que representan la tecnología, el conocimiento estructurado y la conexión académica.

Se optó por un diseño en blanco sobre fondo oscuro para mantener coherencia con el estilo visual de la app y destacar en interfaces digitales.

La forma circular del emblema transmite unidad y centralización de la información, valores fundamentales del proyecto.
Este logo busca generar identidad visual fuerte, profesional y fácil de reconocer para los estudiantes de la universidad.


`,
    imagen: figmaPostImg,
    fecha: "2024-07-11",
    autor: "Carlos Serrano",
    categoria: "Multimedia I",
    tags: ["Figma", "Diseño", "UX/UI", "Prototipado"],
    destacado: true,
    link: "/noticias/2"
  },

  {
    id: 3,
    titulo: "Técnicas de levantamiento de informacion aplicadas al proyecto UnetPedia",
    descripcion: "En este post, exploramos las técnicas de levantamiento de información utilizadas en el desarrollo del proyecto UnetPedia, incluyendo entrevistas, encuestas y análisis de sistemas existentes.",
    contenido: `
# Tecnicas de levantamiento de informacion

## 📌 Fase de Análisis de Requerimientos
> **"La recolección de requisitos es el proceso de identificar, documentar y analizar las necesidades y 
expectativas de los interesados en un proyecto"**  
> *Fuente: [pmoinformatica.com](https://pmoinformatica.com)*

En el ciclo de vida de un proyecto de sistemas, esta fase es clave para:
- Identificar necesidades de usuarios
- Documentar funcionalidades del sistema
- Garantizar comprensión común entre stakeholders

**Referencia bibliográfica:**  
Capítulos 5 y 6 de Whitten y Bentley:
- Capítulo 5: Técnicas de exploración de hechos
- Capítulo 6: Modelado de requerimientos con casos de uso  

---

## 🔍 Técnicas Seleccionadas para el Proyecto UNETPEDIA

### 1. 🎤 Entrevistas (Levantamiento de Información)
**Definición:**  
> *"La entrevista es de gran utilidad para obtener información cualitativa [...] un intento sistemático de recoger 
información de otra persona"*  
> *Guerra et al., [SG.com.mx](https://sg.com.mx)*

#### 🔧 Implementación Práctica:
| Etapa | Detalle | Recomendación |
|-------|---------|---------------|
| **Preparación** | Investigar contexto institucional | Revisar documentos y procesos actuales |
| **Participantes** | Enfoque 1. Directivos/Coordinadores 2. Personal operativo | Priorizar por conocimiento del proceso |
| **Ejecución** | Preguntas abiertas<br>Duración controlada (2-3 hrs) | Grabar sesiones (con consentimiento) |

**Requerimientos identificables:**
- Tipos de documentos admitidos
- Permisos y roles de usuario
- Flujos de trabajo actuales
- Expectativas de usuarios

---

### 2. 📊 Modelado con Casos de Uso
**Definición:**  
Técnica orientada a objetos que describe interacciones entre actores externos y el sistema.

#### 🎭 Actores Identificados:
Porcentaje de Interacción con el Sistema
- "Estudiantes" : 35
- "Administradores" : 20

### 🔄 Casos de Uso Principales:

1. Buscar/Subir/Consultar material (Estudiante)
2. Validar contenido (Administrador)
3. Gestionar metadatos (Sistema)

---

### 💡 Beneficios Combinados    
    
![Diagrama de Casos de Uso](${diagrampost3})

### Ventajas:

> - 🎯 Precisión: Información directa de usuarios reales
> - 🏗️ Estructura: Modelado claro de funcionalidades
> - 🔄 Trazabilidad: Requerimientos → Diseño → Implementación

**Conclusión**: Esta combinación garantiza que el concepto de gestión de materiales 
académicos se traduzca efectivamente en un sistema funcional y alineado con las necesidades institucionales de la UNET.
    
    
    
    
    
    
    
    `,
    imagen: fase2Img,
    fecha: "2024-07-21",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Figma", "Prototipo", "UX/UI"], 
    destacado: true,
    link: "/noticias/3" 
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