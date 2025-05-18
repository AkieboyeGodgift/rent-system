"use client";

import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501183638714-1f0a2f52a94d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentImgIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentImgIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-16">
        {/* Image stack */}
        <div
          onClick={() => openModal()}
          className="w-full md:w-1/2 cursor-pointer relative flex justify-center items-center"
          aria-label="Open image gallery"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Property preview ${i + 1}`}
              className={`absolute rounded shadow-lg object-cover w-40 h-40 md:w-48 md:h-48 border-4 border-white transition-transform duration-300
                ${i === 0 ? "z-50 translate-x-0" : ""}
                ${i === 1 ? "z-40 -translate-x-8 -translate-y-4" : ""}
                ${i === 2 ? "z-30 -translate-x-16 -translate-y-8" : ""}
                ${i === 3 ? "z-20 -translate-x-24 -translate-y-12" : ""}
                ${i === 4 ? "z-10 -translate-x-32 -translate-y-16" : ""}
              `}
              style={{ filter: "grayscale(100%)" }}
            />
          ))}
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            At Black & White Realty, we are dedicated to helping you find the perfect property that suits your lifestyle and budget. 
            With years of experience in the real estate market, our expert agents provide personalized service to make your home buying or selling experience seamless.
          </p>
          <p className="text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Whether you're looking for a cozy apartment, a spacious family home, or an investment property, our team is here to guide you every step of the way.
          </p>
        </div>
      </div>

      {isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={closeModal} // clicking overlay closes modal
    role="dialog"
    aria-modal="true"
    aria-label="Image gallery modal"
  >
    <div
      className="relative max-w-4xl w-full mx-4"
      onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal content
    >
      <button
        onClick={closeModal} // close modal when clicking button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400"
        aria-label="Close gallery"
        type="button"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={images[currentImgIndex]}
        alt={`Property large view ${currentImgIndex + 1}`}
        className="rounded max-h-[80vh] w-full object-contain"
        style={{ filter: "grayscale(100%)" }}
      />

      {/* Navigation buttons here */}
    </div>
  </div>
)}

    </section>
  );
};

export default About;
