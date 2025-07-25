import React from "react";
import bannerImg from '../assets/banner.png';


function Banner() {
  return (
    <div
      className="relative m-3 py-40 px-4 sm:px-6 lg:px-8 text-white bg-local bg-center rounded-2xl shadow-xl"
      style={{
        backgroundSize: "cover",
        backgroundImage: `
          linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.8) 50%, rgba(15,23,42,0.9) 100%),
          url('${bannerImg}')
        `
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Construyendo el futuro del 
          <span className="block text-blue-300">Aprendizaje Académico</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          UnetPedia es una plataforma digital universitaria que transforma la forma en que se gestiona y comparte el material académico
        </p>
      </div>
    </div>
  );
}

export default Banner;