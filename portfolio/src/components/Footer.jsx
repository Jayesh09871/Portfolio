import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-16 border-t border-gray-800 bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-gray-400">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Jayesh Kakhani. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/Jayesh09871" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">GitHub</a>
          <a href="https://www.linkedin.com/in/jayesh-kakhani-3153682a5/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
