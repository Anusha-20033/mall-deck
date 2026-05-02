export default function CTA() {
  return (
    <section className="bg-black text-white py-32 px-6 text-center">

      <h2 className="text-4xl md:text-6xl font-light tracking-wide">
        Step Into the Future of Retail
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
        Dubai Mall is more than a destination — it is a global platform where
        brands grow, experiences scale, and audiences converge.
      </p>

      <div className="mt-10">

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="px-8 py-4 rounded-full bg-white text-black font-medium transition hover:scale-105 hover:shadow-lg"
        >
          Contact Us
        </button>

      </div>

      <p className="mt-6 text-sm text-gray-500">
        Leasing • Sponsorship • Events • Partnerships
      </p>

    </section>
  );
}