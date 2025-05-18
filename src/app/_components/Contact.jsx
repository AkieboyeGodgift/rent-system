"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submit
    setSubmitted(true);

    // Here you can add your actual form submission logic, e.g. API call
  };

  return (
    <section className="bg-white text-black py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

      {submitted ? (
        <p className="text-center text-lg font-medium text-gray-700">
          Thank you for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-black bg-white text-black rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-black bg-white text-black rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-black bg-white text-black rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="+1 234 567 890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-black bg-white text-black rounded px-4 py-2 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
