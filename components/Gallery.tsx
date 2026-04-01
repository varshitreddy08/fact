"use client";

import Image from "next/image";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <Image
              src={src}
              alt="gallery"
              width={300}
              height={300}
              className="hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}