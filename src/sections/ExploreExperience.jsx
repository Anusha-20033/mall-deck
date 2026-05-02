import { useEffect, useState } from "react";

import exp1 from "../assets/images/exp1.jpg";
import exp2 from "../assets/images/exp2.jpg";
import exp3 from "../assets/images/exp3.jpg";
import exp4 from "../assets/images/exp4.jpg";
import exp5 from "../assets/images/exp5.jpg";

export default function ExploreExperience() {
  const images = [exp1, exp2, exp3, exp4, exp5];
  const [active, setActive] = useState(0);

  // Auto slider (every 4s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >

      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-light text-center mb-10 tracking-wide">
        Explore Experience
      </h2>

      {/* Main Image (Luxury Fade Effect) */}
      <div className="relative flex justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="experience"
            className={`absolute w-full max-w-5xl h-[500px] object-cover rounded-xl shadow-2xl transition-all duration-1000 ease-in-out ${
              index === active
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        {/* Spacer to keep height */}
        <div className="h-[500px]" />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition ${
              active === index ? "bg-white scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto text-lg leading-relaxed">
        A curated journey through luxury retail, immersive entertainment,
        global dining, and world-class attractions — designed to showcase
        Dubai Mall as a global destination ecosystem.
      </p>

    </section>
  );
}