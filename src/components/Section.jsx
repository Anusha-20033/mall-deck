import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ id, title, children, dark = false }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const animation = gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-[80vh] scroll-mt-24 px-6 md:px-20 py-16 md:py-20 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
          {title}
        </h2>

        {/* Content */}
        <div className="text-lg leading-relaxed">
          {children}
        </div>

      </div>
    </section>
  );
}