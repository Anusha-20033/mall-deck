import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventsModule() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-black text-white px-6 md:px-20"
    >
      <div className="max-w-5xl">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-light">
          Events & Experiences Platform
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Dubai Mall is not only a retail destination — it is a{" "}
          <span className="text-white font-medium">
            global stage for experiences
          </span>.
          From international concerts to luxury brand activations,
          it serves as a high-impact platform for global engagement.
        </p>

        {/* Value Points */}
        <div className="mt-10 space-y-4 text-gray-400">

          <p>• Live concerts & cultural performances</p>
          <p>• Luxury brand activations & product launches</p>
          <p>• International exhibitions & pop-up experiences</p>
          <p>• Corporate events & global conferences</p>

        </div>

        {/* Closing line */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-light">
            Where global brands meet global audiences — in real time.
          </h3>
        </div>

      </div>
    </section>
  );
}