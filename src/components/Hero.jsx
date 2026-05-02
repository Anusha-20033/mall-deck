import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white"
      >

        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Not Just a Mall <br />
          <span className="font-normal">A Global Destination</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          A world-leading retail ecosystem combining luxury brands, entertainment,
          dining, and cultural experiences.
        </p>

        {/* ✅ FIXED BUTTON */}
        <div className="mt-10">
          <button
          onClick={scrollToExperience}
          className="px-8 py-3 bg-white text-black rounded-full">
            Explore Experience
            </button>
        </div>

        <p className="mt-8 text-sm text-gray-400 animate-pulse">
          Scroll to explore ↓
        </p>

      </div>
    </section>
  );
}