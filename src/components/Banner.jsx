import React from "react";

function Banner() {
  return (
    <div className="relative m-3 py-40 px-4 sm:px-6 lg:px-8 text-white
      bg-[url(src/assets/banner7.jpg)] bg-local bg-cover bg-center rounded-2xl"
      style={{
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(100deg,rgba(30, 58, 138, 0.8) 0%, rgba(30, 58, 138, 0.8) 49%, rgba(30, 58, 138, 0.8) 100%)"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover insights, stories, and knowledge from our community of writers and experts.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600
          py-3 px-8 rounded-md text-black font-semibold transition-all duration-300 transform hover:scale-105">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Banner;