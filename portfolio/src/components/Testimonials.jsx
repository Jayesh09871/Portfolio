import React from "react";

const testimonials = [
  {
    name: "Amit Shah",
    text: "Jayesh is a highly skilled developer who always delivers quality work on time. His attention to detail and passion for coding are unmatched!",
    role: "Project Manager, TechCorp"
  },
  {
    name: "Priya Desai",
    text: "Working with Jayesh was a fantastic experience. He communicates clearly and brings creative solutions to every problem.",
    role: "Lead Designer, Creatives Inc."
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="testimonials">
      <h3 className="text-2xl font-bold text-white mb-8">Testimonials</h3>
      <div className="space-y-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="text-gray-200 italic mb-4">"{t.text}"</p>
            <div className="text-indigo-300 font-semibold">{t.name}</div>
            <div className="text-gray-400 text-sm">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
