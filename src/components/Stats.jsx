import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { value: "100M+", label: "Annual Visitors" },
  { value: "1200+", label: "Retail Stores" },
  { value: "200+", label: "Dining Experiences" },
];

export default function Stats() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
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
      className="grid md:grid-cols-3 gap-12 text-center py-16"
    >
      {data.map((item, i) => (
        <div key={i} className="space-y-3">

          {/* Number */}
          <h3 className="text-5xl md:text-6xl font-light tracking-wide">
            {item.value}
          </h3>

          {/* Label */}
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            {item.label}
          </p>

        </div>
      ))}
    </div>
  );
}