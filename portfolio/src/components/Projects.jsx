import React from "react";

const projects = [
  {
    title: "RealEstate",
    description: "A modern real estate platform to search, view, and list properties with interactive maps and filters.",
    link: "https://realestate-mocha-eight.vercel.app/",
    image: "https://placehold.co/400x200/191e2b/fff?text=RealEstate",
    tags: ["Next.js", "MongoDB", "Tailwind"]
  },
  {
    title: "Auction App",
    description: "A real-time auction platform enabling users to bid, list items, and track auctions live.",
    link: "https://next-bid-euwb.vercel.app/",
    image: "https://placehold.co/400x200/191e2b/fff?text=Auction+App",
    tags: ["Next.js", "Socket.io", "MongoDB"]
  },
  {
    title: "E-commerce Platform",
    description: "A full stack e-commerce application with user authentication, product management, and payment integration.",
    link: "https://e-commerce-platform-lime.vercel.app/",
    image: "https://placehold.co/400x200/191e2b/fff?text=E-commerce",
    tags: ["React", "Node.js", "Express", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4" id="projects">
      <h3 className="text-3xl font-bold text-white mb-10">Projects</h3>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center mb-4" />
            <div className="flex-1 flex flex-col p-6">
              <h4 className="text-2xl font-semibold text-indigo-300 mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-indigo-700 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="mt-auto inline-block text-indigo-400 hover:underline font-semibold">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
