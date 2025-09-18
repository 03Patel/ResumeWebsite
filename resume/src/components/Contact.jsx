import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
      <div className="text-center space-y-4">
        <p>Email: <a href="mailto:ganeshjipatel108@gmail.com" className="text-blue-600">ganeshjipatel108@gmail.com</a></p>
        <p>Phone: <a href="tel:+918840535562" className="text-blue-600">+91-8840535562</a></p>
        <p>Location: Kushinagar, India</p>
      </div>
    </section>
  );
}

export default Contact;
