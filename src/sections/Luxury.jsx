import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Luxury() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const images = [
    "/images/l1.jpg",
    "/images/l2.jpg",
    "/images/l3.jpg",
  ];

  return (
    <section
      id="luxury"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/images/luxury.jpg"
          className="w-full h-full object-cover"
          alt="Luxury"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative text-center text-white px-6 max-w-4xl">

        <h2 className="text-5xl md:text-6xl font-light">
          Luxury Redefined
        </h2>

        <p className="mt-6 text-gray-300">
          A world of premium brands, exclusivity, and global luxury experiences.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Explore Luxury
        </button>

        {/* IMAGE GRID (IN-BLOCK REVEAL) */}
        {open && (
          <div className="mt-10 grid md:grid-cols-3 gap-5 animate-fadeIn">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-64 w-full object-cover rounded-xl hover:scale-105 transition"
                alt="luxury"
              />
            ))}

          </div>
        )}

        {/* CLOSE BUTTON */}
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="mt-6 text-sm text-gray-300 underline"
          >
            Hide Luxury Collection
          </button>
        )}

      </div>
    </section>
  );
}