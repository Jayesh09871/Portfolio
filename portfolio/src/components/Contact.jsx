import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4" id="contact">
      <h3 className="text-3xl font-bold text-white mb-8">Contact</h3>
      <p className="text-gray-300 mb-8 text-lg">Want to connect or work together? Fill out the form below or reach out via social links!</p>
      <form className="bg-gray-800 rounded-lg p-8 shadow mb-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-200 font-semibold">Name</label>
          <input id="name" name="name" type="text" className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Your Name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-200 font-semibold">Email</label>
          <input id="email" name="email" type="email" className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="you@email.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-200 font-semibold">Message</label>
          <textarea id="message" name="message" rows={4} className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="How can I help you?" required />
        </div>
        <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded hover:bg-indigo-700 transition">Send Message</button>
      </form>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="mailto:jayesh.kakhani@email.com" className="text-indigo-400 hover:underline">jayesh.kakhani@email.com</a>
        <a href="https://www.linkedin.com/in/jayesh-kakhani-3153682a5/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/Jayesh09871" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">GitHub</a>
      </div>
    </section>
  );
}
