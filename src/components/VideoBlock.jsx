import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoBlock({ src, title, description }) {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden"
    >
      {/* Video */}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      {(title || description) && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

          {title && (
            <h3 className="text-3xl md:text-4xl font-light">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-4 text-gray-200 max-w-xl">
              {description}
            </p>
          )}

        </div>
      )}
    </div>
  );
}