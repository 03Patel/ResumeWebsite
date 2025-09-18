import React from "react";

const skills = ["HTML", "CSS3", "Responsive Design", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"];

function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
