import React from "react";

function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">B.Tech in Computer Science Engineering</h3>
          <p>Buddha Institute of Technology, Gorakhpur | Score: 7.3 CGPA</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Class XII (CBSE) – 80%</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Class X (CBSE) – 74%</h3>
        </div>
      </div>
    </section>
  );
}

export default Education;
