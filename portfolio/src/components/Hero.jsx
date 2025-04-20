import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 text-center" id="home">
      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center mb-8 shadow-lg">
        {/* Profile image placeholder */}
        <span className="text-6xl text-white font-bold select-none">JK</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
        Hi, I'm <span className="text-indigo-400">Jayesh Kakhani</span>
      </h2>
      <div className="text-2xl md:text-4xl font-semibold text-indigo-200 mb-4 animate-pulse">
        Full Stack Developer
      </div>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        I build modern, scalable web applications with robust backends and stunning frontends. I love solving problems and bringing ideas to life with code.
      </p>
      <a href="#projects" className="inline-block px-12 py-4 bg-indigo-600 text-white text-lg font-semibold rounded shadow hover:bg-indigo-700 transition-all duration-200">
        View Projects
      </a>
    </section>
  );
}
