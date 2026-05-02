import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const animation = gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
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
      id="why"  
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-20"
    >
      <div className="max-w-5xl text-center space-y-6">

        <h2 className="text-5xl md:text-6xl font-light tracking-wide">
          Why Dubai Mall
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Dubai Mall is not just a retail destination — it is a{" "}
          <span className="text-white font-medium">
            global commercial ecosystem
          </span>.
        </p>

        <p className="text-gray-400 max-w-3xl mx-auto">
          It operates as a <span className="text-white font-medium">
          city within a city</span>.
        </p>

        <h3 className="text-2xl md:text-3xl font-light pt-8">
          If your brand belongs on the global stage — this is where it begins.
        </h3>

      </div>
    </section>
  );
};

export default Why;