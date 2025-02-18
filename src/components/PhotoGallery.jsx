import React from "react";

const photos = [
  "/images/10.jpeg",
  "/images/9.jpeg",
  "/images/8.jpeg",
  "/images/7.jpeg",
  "/images/6.jpeg",
  "/images/5.jpeg",
  "/images/4.jpeg",
  "/images/3.jpeg",
  "/images/2.jpeg",
  "/images/1.jpeg",
];

const PhotoGallery = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-pink-600">
        Some Precious Memories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            className="w-full h-48 sm:h-72 object-contain rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
