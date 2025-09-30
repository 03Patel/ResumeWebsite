import React from "react";

const projects = [
  {
    title: "MagicPin – Food Discovery App",
    tech: "React, Node.js, Express, MongoDB, JWT",
    desc: "Location-based food discovery app with cart system, authentication & API integration.",
    link: "https://hellboy-798k.onrender.com/", // Replace with your real link
    github: "https://github.com/03Patel/MagicPin", // Replace with repo link
  },
  {
    title: "Cartify – E-Commerce Platform",
    tech: "MERN, JWT, bcrypt, TailwindCSS",
    desc: "Full-stack e-commerce with authentication, cart & order management.",
    link: "https://hellcart.onrender.com", // Replace with your real link
    github: "https://github.com/03Patel/Cartify", // Replace with repo link
  },
  {
    title: "GreenCart – Grocery App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "Grocery shopping app with filtering, cart & checkout system.",
    link: "https://cartfrontends.onrender.com/", // Replace with your real link
    github: "https://github.com/03Patel/GreenCart", // Replace with repo link
  },
    {
    title: "Voting App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "It will used for voting by taking the name of person",
    link: "https://votingfrontend-s6sq.onrender.com", // Replace with your real link
    github: "https://github.com/03Patel/Voting", // Replace with repo link
  },
    {
    title: "MiniHelpdesh App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "It is basically help desh were you can register your problem and admin will fixed it",
    link: "https://minihelpdesk.onrender.com/", // Replace with your real link
    github: "https://github.com/03Patel/MiniHelpDesk", // Replace with repo link
  },
    {
    title: "Payroll Management App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "It will maintain the salary of the people ",
    link: "https://frinend.onrender.com/", // Replace with your real link
    github: "https://github.com/03Patel/Payroll", // Replace with repo link
  },
    {
    title: "Referral App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "Basically it show all the refferrals and jobs the are posted",
    link: "https://frontendw-1pr5.onrender.com/", // Replace with your real link
    github: "https://github.com/03Patel/Referrals", // Replace with repo link
  },
    {
    title: "HomePage App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "It is the HomePage or landing page ",
    link: "https://homepage-6k9r.onrender.com", // Replace with your real link
    github: "https://github.com/03Patel/HomePage", // Replace with repo link
  },
    {
    title: "Notes App",
    tech: "MERN, JWT, MongoDB Atlas",
    desc: "IN this used Otp to login and add your notes ",
    link: "https://frontendnotes-vn2x.onrender.com", // Replace with your real link
    github: "https://github.com/03Patel/Notes", // Replace with repo link
  },
    
  
];

function Projects() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{proj.tech}</p>
              <p className="mt-4">{proj.desc}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
