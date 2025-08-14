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
import blockpersonas from '../assets/personascover.jpg';
import blockdatos from '../assets/datoscover.avif';
import der from '../assets/DER.png';
import blockactividades from '../assets/actividadescover.jpg';
import subirmaterial from '../assets/subirmaterial.png';
import diagramsecuen from '../assets/diagramasecuencia.png';
import blockred from '../assets/redcover.jpg';
import blocktecnologia from '../assets/tecnologiacover.jpg';
import tiposinfocover from '../assets/tiposinfocover.jpg';
import dfdcover from '../assets/dfdcover.jpg';
import dfd0 from '../assets/contexto0.png';
import dfd1 from '../assets/contexto1.png';
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
    fecha: "2025-07-11",
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
    fecha: "2025-07-21",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "Levantamiento de informacion", "UNET"], 
    destacado: true,
    link: "/noticias/3" 
  },
  {
    id: 4,
    titulo: "Bloques Esenciales del Proyecto UnetPedia: Personas",
    descripcion: "Exploramos el bloque de Personas en el proyecto UnetPedia, que define los roles y responsabilidades de los usuarios clave involucrados en el sistema.",
    contenido: `
# Bloques Esenciales de un Sistema de Información Académico  

## 👥 **1. Personas: El Corazón del Sistema**  

El componente humano es el **pilar fundamental** de cualquier sistema de información. Define quiénes interactúan con él, sus motivaciones y expectativas.  

Según **Whitten y Bentley**, los participantes se clasifican en categorías según su perspectiva e intereses. En **UnetPedia**, estos roles se definen explícitamente:  

### 🔹 **Usuarios del Sistema**  
- **Estudiantes y Docentes**: Su principal preocupación es:  
  - ✅ **Funcionalidad**  
  - ✅ **Facilidad de aprendizaje**  
  - ✅ **Experiencia de usuario intuitiva**  
- En *UnetPedia*, se enfocan en:  
  - 📂 **Acceso eficiente a materiales**  
  - 🔍 **Búsqueda robusta**  
  - 🗂 **Organización clara del contenido**  

### 🔹 **Propietarios del Sistema**  
- **Administradores**: Aunque no se nombran explícitamente, su rol es **estratégico**.  
  - 💰 **Gestión de costos y beneficios**  
  - 🔐 **Control y seguridad del sistema**  

### 🔹 **Diseñadores y Constructores**  
- **Equipo de desarrollo**: Su enfoque es **técnico**.  
  - 🛠 **Tecnologías utilizadas**: Flutter + Firebase  
  - ⚙️ **Detalles de implementación**  

---  

## 🔐 **1.1 Estructura de Roles y Permisos**  

| Rol | Permisos | Responsabilidades |  
|------|----------|-------------------|  
| **🎓 Usuario Registrado (Estudiante)** | ✏️ **Escritura** (subir material) | Contribuir activamente al ecosistema académico |  
| **👑 Administrador** | 🗂 **CRUD total** (contenido + usuarios) | Moderación, seguridad y gestión del sistema |  

### 🚀 **Mejora Propuesta: Rol de Moderador**  
Para un modelo **más robusto y escalable**, se sugiere:  
- **📌 Moderador de Contenido** (Docentes/Jefes de Departamento):  
  - ✅ **Aprobar/Rechazar material**  
  - ✏️ **Editar contenido en su especialidad**  
  - *Basado en la metodología de Whitten y Bentley, que destaca la importancia de usuarios con experiencia en el dominio.*  

    `,
    imagen: blockpersonas,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "BloquesEsenciales", "UNET", "Personas"], 
    destacado: true,
    link: "/noticias/4" 
  },
  {
    id: 5,
    titulo: "Bloques Esenciales del Proyecto UnetPedia: Datos",
    descripcion: "Exploramos el bloque de Datos en el proyecto UnetPedia, que define la estructura y organización de la información académica dentro del sistema.",
    contenido: `
# 📚 Bloques Esenciales del Sistema

## 2. Datos
La información es el corazón de cualquier sistema.  
En este caso, el **modelo de datos** está diseñado para garantizar que la información sea **no redundante**, **flexible** y **adaptable** a las necesidades futuras.  

Un diseño sólido asegura que la plataforma crezca de forma ordenada, manteniendo la integridad y coherencia de la información.

---

## 2.1 🗂 Entidades Fundamentales

### 👤 Usuario
Almacena la información de todas las personas que interactúan con la plataforma: **estudiantes**, **docentes** y **administradores**.

- **id_usuario** *(PK)* → Identificador único.  
- **nombre** → Nombre completo.  
- **correo** → Correo electrónico (inicio de sesión).  
- **contraseña** → Clave de acceso.  
- **rol** → Define permisos *(Estudiante, Docente, Administrador)*.  
- **descripción** → Carrera a la que pertenece (si es estudiante).  

---

### 🎓 Carrera
Contiene información sobre las carreras que ofrece la universidad.

- **id_carrera** *(PK)* → Código único.  
- **nombre_carrera** → Nombre oficial.  
- **descripcion** → Información general.  

---

### 🏛 Departamento
Guarda la información de los departamentos académicos.

- **id_departamento** *(PK)* → Identificador único.  
- **nombre_departamento** → Nombre del departamento.  
- **contacto** → Información de contacto.  

---

### 📖 Asignaturas
Representa cada materia que forma parte del pensum.

- **id_asignatura** *(PK)* → Código único.  
- **nombre_asignatura** → Nombre oficial de la asignatura.  

---

### 👨‍🏫 Preparaduría
Registra datos sobre las tutorías o preparadurías disponibles.

- **id_preparaduría** *(PK)* → Identificador único.  
- **horario** → Horario de atención.  
- **lugar** → Ubicación.  
- **preparador** → Nombre del estudiante a cargo.  

---

### 📂 Material Académico
Entidad central del proyecto, almacena los recursos educativos.

- **id_material** *(PK)* → Identificador único.  
- **nombre_archivo** → Nombre del documento.  
- **tipo_archivo** → Ejemplo: PDF, DOCX, guía, apunte.  
- **fecha_subida** → Fecha de carga.  
- **url_descarga** → Enlace para descarga *(Firebase Storage)*.  

---

## 2.2 🔗 Relaciones entre Entidades

- **Usuario → Material Académico** *(1:N)*  
  Un usuario (docente o estudiante) puede subir múltiples materiales, pero cada recurso pertenece a un solo usuario.

- **Carrera → Asignaturas** *(1:N)*  
  Una carrera agrupa varias asignaturas, pero cada asignatura pertenece a una única carrera.

- **Asignatura → Material Académico** *(1:N)*  
  Una asignatura puede tener muchos materiales asociados, pero cada material corresponde a una sola asignatura.

- **Carrera → Departamento** *(1:1)*  
  Cada carrera depende de un único departamento académico.

- **Asignatura → Preparadurías** *(1:N)*  
  Una asignatura puede ofrecer varias preparadurías, pero cada una pertenece a una sola asignatura.

---
![Diagrama Entidad-Relación](${der})
💡 **Conclusión:**  
Un modelo de datos bien estructurado es como la columna vertebral del sistema: invisible para el usuario, pero esencial para que todo funcione sin errores y pueda evolucionar en el futuro.

    
    `,
    imagen: blockdatos,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "BloquesEsenciales", "UNET", "Datos"],
    destacado: true,
    link: "/noticias/5"
  },
  {
    id: 6,
    titulo: "Bloques Esenciales del Proyecto UnetPedia: Actividades",
    descripcion: "Exploramos el bloque de Actividades en el proyecto UnetPedia, que define lo que el sistema hace. Utilizando el modelado de casos de uso, se pueden traducir las características deseadas en procesos formales y centrados en el usuario.",
    contenido: `
# ⚙️ Bloques Esenciales: Actividades - El Motor del Sistema

## 🌟 3. Actividades: Donde la Magia Ocurre

> *"Los sistemas no valen por su tecnología, sino por lo que permiten hacer"*  
> Este componente define **las acciones concretas** que transforman datos en valor educativo.

### 📌 Metodología
Basado en el modelado de casos de uso de **Whitten y Bentley** (Cap. 6), convertimos características en **procesos centrados en el usuario**.

---
## 3.1 🎯 Modelado de Casos de Uso
Las funcionalidades propuestas se transforman en **casos de uso formales**, siguiendo la metodología del **Capítulo 6 de Whitten y Bentley**, tal como establece el proyecto.

### 📌 Casos de Uso Clave
- **Gestión de Material:** Subir Material, Visualizar Material, Descargar Material, Moderar Material.  
- **Búsqueda:** Buscar Recurso Académico.  
- **Autenticación:** Registrar Usuario, Iniciar Sesión, Gestionar Perfil.  

---

### 📜 Narrativa de Caso de Uso: *"Subir Material"*
**Actores:**  
- 👤 Usuario Registrado  
- 🛡 Administrador  

**Disparador:**  
El usuario selecciona la opción para subir un nuevo archivo.

**Precondiciones:**  
- El usuario debe estar autenticado en el sistema.

**Curso Típico de Eventos:**  
1. El usuario selecciona un archivo de su dispositivo.  
2. El sistema presenta un formulario para ingresar metadatos *(título, descripción)*.  
3. El usuario completa los metadatos y confirma la subida.  
4. El sistema valida el tipo de archivo y los metadatos.  
5. El sistema carga el archivo a **Firebase Storage**.  

**Cursos Alternativos:**  
- ❌ Si el tipo de archivo no es válido, el sistema muestra un error.  
- ⚠ Si la carga falla, el sistema informa al usuario y permite reintentar.  

![diagrama-subir-material](${subirmaterial})

---

## 3.2 🔄 Análisis del Flujo de Procesos de Negocio
El **modelado de procesos** (Capítulo 8 de Whitten y Bentley) permite visualizar cómo los casos de uso se conectan para alcanzar un **objetivo de negocio más amplio**.

**Flujo:**
1. **Entrada:** Un **Usuario Registrado** inicia el caso de uso *Subir Material*.  
2. **Proceso del Sistema:** El sistema almacena el archivo y sus metadatos.  
3. **Proceso Humano:** Un **Administrador** es notificado y revisa el material.  
4. **Decisión:** El Administrador aprueba o rechaza la sumisión.  
5. **Proceso del Sistema:** El material aprobado se registra en la base de datos.  
6. **Salida:** El material aparece en los resultados de búsqueda para todos los usuarios.

![diagrama-secuencia](${diagramsecuen})

---

💡 **Conclusión:**  
Los casos de uso y su modelado de procesos aseguran que cada acción en el sistema tenga un flujo claro, predecible y controlado, garantizando la calidad y confiabilidad de la plataforma.

    `,
    imagen: blockactividades,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "BloquesEsenciales", "UNET", "Actividades"],
    destacado: true,
    link: "/noticias/6"
  },
  {
    id: 7,
    titulo: "Bloques Esenciales del Proyecto UnetPedia: Redes",
    descripcion: "Exploramos el bloque de Redes en el proyecto UnetPedia, que define la infraestructura tecnológica y las conexiones necesarias para el funcionamiento del sistema.",
    contenido: `
# 🌐 Bloques Esenciales del Sistema

## 4️⃣ Redes
Este componente analiza la **arquitectura del sistema como una red distribuida**, mostrando cómo sus partes se **comunican e interactúan** a través de la infraestructura de red.

---

## 4.1 🖥 Arquitectura de Sistema Distribuido
**UnetPedia** es un ejemplo claro de **arquitectura cliente/servidor**, implementada bajo el modelo **Backend-as-a-Service (BaaS)**, siguiendo lo descrito en el **Capítulo 11 de Whitten y Bentley**.

### 🧩 Componentes Clave

- **📱 Cliente (Client)**  
  - Aplicación móvil desarrollada en **Flutter**.  
  - Ejecutada en el dispositivo del usuario.  
  - Encargada de:  
    - **Capa de Presentación** → Interfaz de usuario.  
    - **Capa de Lógica de Presentación** → Manejo de entradas y formato de datos para visualización.  

- **☁ Servidor (Server)**  
  - Plataforma **Firebase** como backend.  
  - Gestiona:  
    - **Capa de Lógica de Aplicación** → *Cloud Functions*.  
    - **Capa de Manipulación de Datos** → SDK de **Firestore**.  
    - **Capa de Datos** → Base de datos **Firestore** y **Cloud Storage**.

- **🌍 Red de Comunicación**  
  - Conexión a través de **Internet pública**.  
  - Comunicación segura mediante **HTTPS**.  
  - Llamadas API gestionadas por los **SDK de Firebase**.

---

## 4.2 🔄 Flujo de Datos en la Red
Ejemplo: **Búsqueda de material académico**  

1. El usuario introduce un término de búsqueda en la app **Flutter** *(Cliente)*.  
2. La app construye una consulta usando el **SDK de Firebase**.  
3. El **SDK** envía una solicitud API segura (**HTTPS**) a **Firestore** *(Servidor)*.  
4. **Firestore** procesa la consulta y retorna los documentos coincidentes.  
5. La app **Flutter** recibe los datos y actualiza la interfaz para mostrar los resultados.

---

### 📌 Características de esta Arquitectura
- **Separación clara de responsabilidades**  
  - El **cliente** gestiona la presentación y la interacción.  
  - El **servidor** gestiona la lógica, manipulación y almacenamiento de datos.  

- **Abstracción de complejidad**  
  - El **SDK de Firebase** maneja autenticación, solicitudes de red, serialización de datos y manejo de errores.  

- **Eficiencia y escalabilidad**  
  - El modelo cliente-servidor con **BaaS** permite un desarrollo rápido y mantenimiento simplificado.

---

💡 **Conclusión:**  
El uso de Firebase como **BaaS** potencia el desarrollo, proporcionando un puente eficiente y seguro entre cliente y servidor, mientras que el **SDK** encapsula toda la complejidad de la red, permitiendo que el desarrollador se

    
    `,
    imagen: blockred,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "BloquesEsenciales", "UNET", "Redes"],
    destacado: true,
    link: "/noticias/7"
  },
  {
    id: 8,
    titulo: "Bloques Esenciales del Proyecto UnetPedia: Tecnologia",
    descripcion: "Exploramos el bloque de Tecnología en el proyecto UnetPedia, que define las herramientas y plataformas utilizadas para desarrollar y mantener el sistema.",
    contenido: `
# 💻 Bloques Esenciales del Sistema

## 5️⃣ Tecnología
Este componente describe las **tecnologías específicas** elegidas para el proyecto, justificando su selección en función de los **objetivos del sistema** y las **mejores prácticas de la industria**.

---

## 5.1 ⚙️ Análisis de la Pila Tecnológica

### 🎨 Frontend → Flutter & Dart
- **Elección estratégica** para desarrollo **multiplataforma**.  
- Una sola base de código → ejecución en **iOS** y **Android**.  
- **Ventajas principales:**
  - Reducción significativa de tiempo y costo de desarrollo.
  - Interfaces modernas y fluidas.
  - Amplio soporte de paquetes y librerías.

---

### ☁ Backend → Firebase
Firebase no es un servicio único, sino un **conjunto de herramientas integradas** que forman un **Backend-as-a-Service (BaaS)** completo.

#### 🔑 Servicios clave para UnetPedia:
- **Firebase Authentication** → Autenticación segura, lista para usar.  
- **Firestore** → Base de datos **NoSQL**, escalable y en tiempo real para datos estructurados.  
- **Firebase Storage** → Almacenamiento de archivos grandes y no estructurados.  

---

## 5.2 🚀 Sinergia Estratégica y Arquitectura Serverless

- **Integración perfecta** → Tanto **Flutter** como **Firebase** son respaldados por **Google**, lo que garantiza compatibilidad, optimización y soporte oficial.  
- **Modelo BaaS + Serverless**:
  - Sin necesidad de aprovisionar, gestionar o mantener servidores.
  - Escalabilidad automática.
  - Seguridad y alta disponibilidad gestionadas por Firebase.
- **Beneficio principal** → Reducción drástica de la sobrecarga operativa, permitiendo al equipo enfocarse en la **experiencia del usuario** y la **funcionalidad del sistema**.

---

💡 **Conclusión:**  
La combinación de **Flutter** y **Firebase** no solo agiliza el desarrollo, sino que crea un ecosistema de trabajo **eficiente, escalable y seguro**, perfecto para una aplicación académica como **UnetPedia**.

    
    `,
    imagen: blocktecnologia,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tecnicas", "BloquesEsenciales", "UNET", "Tecnologia"],
    destacado: true,
    link: "/noticias/8"
  },
  {
    id: 9,
    titulo: "Tipos de Sistemas de Información en UnetPedia: Un Híbrido Inteligente",
    descripcion: "Exploramos los tipos de sistemas de información utilizados en UnetPedia, destacando su enfoque híbrido que combina características de sistemas transaccionales y analíticos.",
    contenido: `
    
# 📚 Tipos de Sistemas de Información en **UnetPedia**

UnetPedia es más que una simple plataforma: combina varias tipologías de **Sistemas de Información** para brindar una experiencia completa a la comunidad universitaria.  
A continuación, exploramos cómo se integra dentro de **tres categorías clave**.

---

## 🧠 1. Sistemas para Trabajadores del Conocimiento (STO)  
Los estudiantes son, en esencia, **trabajadores del conocimiento**:  
su labor es crear, gestionar y asimilar información para potenciar su formación académica.

🎯 **Misión del Proyecto:**  
- **Mejorar el acceso al conocimiento**  
- **Fortalecer la cultura del conocimiento compartido**

💡 **Cómo lo hace:**  
- Funciona como un **repositorio digital** para recursos educativos.
- Centraliza y organiza documentos académicos para un acceso rápido y ordenado.

---

## 🗂 2. Sistemas de Automatización de Oficinas (SAO)  
UnetPedia no solo gestiona conocimiento, también **administra el flujo de documentos digitales** en un entorno colaborativo.  

📌 **Ejemplos de automatización:**  
- Gestión de archivos en la nube.  
- Organización de carpetas y materiales por categorías.
- Colaboración en tiempo real entre usuarios.

---

## ⚙ 3. Sistema de Procesamiento de Operaciones (SPO)  
Aunque su objetivo es el conocimiento, **su funcionamiento diario se basa en transacciones** discretas y repetitivas.

🔄 **Operaciones principales:**  
- Registrar usuario.  
- Iniciar sesión.  
- Subir material.  
- Descargar material.

🛠 **Tecnología utilizada:**  
UnetPedia emplea **Firebase** para:  
- Capturar y almacenar operaciones en tiempo real.  
- Guardar metadatos en **Firestore**.  
- Almacenar archivos en **Firebase Storage**.

---

## 🔗 Integración entre Sistemas
UnetPedia es un **sistema híbrido**:  
- **STO** en su **propósito**: gestionar y compartir conocimiento.  
- **SPO** en su **operativa**: ejecutar y procesar transacciones.  
- **SAO** como soporte para la organización documental.

✨ El resultado: una solución integral que **combina objetivos académicos con eficiencia tecnológica**, optimizando el acceso, gestión y distribución del conocimiento para estudiantes y docentes.

---
✍ **Conclusión:**  
UnetPedia no es solo tecnología, es una herramienta para **fortalecer la comunidad universitaria**, uniendo el **saber** con la **eficiencia**.


    
    `,
    imagen: tiposinfocover,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Tipos de Sistemas", "UNET", " Híbrido"],
    destacado: true,
    link: "/noticias/9"
  },

  {
    id: 10,
    titulo: "Modelado de Procesos – Diagramas de Flujo de Datos (DFD)",
    descripcion: "Exploramos el modelado de procesos en UnetPedia utilizando Diagramas de Flujo de Datos (DFD), que representan gráficamente cómo fluye la información dentro del sistema.",
    contenido: `
    
# 🔄 Modelado de Procesos – Diagramas de Flujo de Datos (DFD)

---

## 📌 1. ¿Qué es un DFD?

Un **Diagrama de Flujo de Datos (DFD)** representa cómo la información **fluye** dentro de un sistema y cómo se procesa.  

**Elementos clave:**
- ✅ **Procesos** → *Rectángulos redondeados* que transforman datos.
- ➡️ **Flujos de datos** → *Flechas* que indican movimiento de información.
- 🗄 **Almacenes de datos** → *Rectángulos abiertos* donde se guardan datos.
- 🧍 **Entidades externas** → *Cuadrados* que interactúan con el sistema.

**Niveles de DFD:**
- **Nivel 0 (Contexto):** visión global del sistema como un solo proceso.
- **Nivel 1:** descompone el proceso único en subprocessos más detallados.

---

## 🗺 2. DFD Nivel 0 – Contexto de **UnetPedia**

![Diagrama DFD Nivel 0](${dfd0})

**📤 Entidades externas:**
- **Usuario** → Envía peticiones como búsqueda, consulta o subida de contenido.

**⚙️ Proceso principal:**
- **UNetPedia** → Recibe las solicitudes del usuario y responde según los datos almacenados.

**🗂 Almacenes de datos:**
- **Repositorio de Material Académico:** PDFs, enlaces, documentos, aportes colaborativos.
- **Catálogo Institucional:** Información sobre carreras, pensum, preparadurías.



---

## 🧩 3. DFD Nivel 1 – Desglose de “UNetPedia”

En este nivel, el proceso principal se divide en **cuatro subprocessos**:

![Diagrama DFD Nivel 1](${dfd1})

---

### 🔐 1. Validar Usuario
**Entradas:**
- Credenciales de inicio de sesión (correo, contraseña) o token.

**Salidas:**
- Usuario validado → acceso a funcionalidades.
- Rechazo con mensaje de error.

**Técnicas:**
- Autenticación **JWT**.
- Verificación en base de datos de usuarios.

---

### 📥 2. Gestionar Petición
**Flujos internos:**
- **Búsqueda:** palabra clave + filtros.
- **Subida:** archivo + metadatos.
- **Consulta:** vista previa y detalle del recurso.

**Actividades:**
- Validación de parámetros.
- Formateo de consultas.
- Preprocesamiento de datos.

---

### 🗃 3. Acceso a Almacenes
**Interacciones:**
- **Repositorio de Material Académico:** CRUD (crear, leer, actualizar, eliminar).
- **Catálogo Institucional:** lectura de carreras, asignaturas y pensum.

**Técnicas:**
- Llamadas a **API REST**.
- Uso de **ORM**.
- Consultas SQL parametrizadas.

---

### 📤 4. Responder Usuario
**Acciones:**
- Devolver lista de resultados paginada.
- Mostrar “sin resultados”.
- Confirmar subida exitosa.
- Mostrar errores de validación.

**Salidas:**
- **JSON** para consumo API.
- Vistas HTML o **widgets Flutter** para interfaz visual.

---

💡 **Conclusión:**  
El modelado DFD en **UnetPedia** ofrece una visión clara del recorrido de la información, desde que un usuario envía una solicitud hasta que recibe la respuesta final, garantizando **organización, eficiencia y seguridad**.

    
    `,
    imagen: dfdcover,
    fecha: "2025-08-13",
    categoria: "Sistemas de informacion I",
    autor: "Carlos Serrano",
    tags: ["Sistema de Informacion", "Modelado de Procesos", "DFD", "UNET"],
    destacado: true,
    link: "/noticias/10"
  }




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