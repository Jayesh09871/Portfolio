import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Redux", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Netlify", "Figma", "Jest"]
  }
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4" id="skills">
      <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow">
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">{skill.category}</h4>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
