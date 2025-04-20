import React from "react";

export default function Header() {
  return (
    <header className="w-full py-6 mb-12 border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-white">Jayesh Kakhani</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          <a href="https://www.linkedin.com/in/jayesh-kakhani-3153682a5/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition">LinkedIn</a>
          <a href="https://github.com/Jayesh09871" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
