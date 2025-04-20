import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4" id="about">
      <h3 className="text-3xl font-bold text-white mb-8">About Me</h3>
      <p className="text-gray-300 mb-8 text-xl">
        Hello! I'm Jayesh Kakhani, a passionate full stack developer based in India. I specialize in building high-quality, scalable web applications with a focus on performance and user experience. I love learning new technologies and collaborating with creative teams to bring ideas to life. When I'm not coding, you'll find me exploring new tech trends or mentoring others.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Timeline */}
        <div>
          <h4 className="text-xl font-semibold text-indigo-300 mb-4">Experience</h4>
          <ul className="border-l-2 border-indigo-600 pl-6 space-y-6">
            <li>
              <div className="text-white font-bold">Full Stack Developer</div>
              <div className="text-gray-300">Developed multiple web apps for clients, focusing on MERN stack and modern UI/UX.</div>
            </li>
            <li>
              <div className="text-white font-bold">Web Developer Intern</div>
              <div className="text-gray-400">WebSeeder Technologies | June 2024 – September 2024</div>
              <div className="text-gray-300">Worked on frontend and backend features for SaaS products.</div>
            </li>
          </ul>
        </div>
        {/* Education */}
        <div>
          <h4 className="text-xl font-semibold text-indigo-300 mb-4">Education</h4>
          <ul className="border-l-2 border-indigo-600 pl-6 space-y-6">
            <li>
              <div className="text-white font-bold">Polaris School of Technolgy</div>
              <div className="text-gray-400">2023 - Pursuing</div>
              <div className="text-gray-300">Specializing in web development and software engineering.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
