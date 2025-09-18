import React from "react";

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-28 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Ganesh Ji Patel</h1>
      <p className="mt-4 text-xl">Fullstack Developer | MERN | Data Science Enthusiast</p>
      <div className="mt-6 flex space-x-4">
        <a
          href="mailto:ganeshjipatel108@gmail.com"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          Contact Me
        </a>

      </div>
    </section>
  );
}

export default Hero;
