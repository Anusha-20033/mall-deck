import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact & Partnerships" dark>

      {/* Intro */}
      <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
        Connect with Dubai Mall’s commercial team for leasing opportunities,
        brand partnerships, sponsorships, and global event collaborations.
      </p>

      {/* Info Grid */}
      <div className="mt-10 grid md:grid-cols-3 gap-8">

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-medium mb-2">Leasing</h3>
          <p className="text-gray-400 text-sm">
            Retail spaces, flagship stores, and pop-up opportunities.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-medium mb-2">Sponsorship</h3>
          <p className="text-gray-400 text-sm">
            Brand activations, campaigns, and global visibility programs.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-medium mb-2">Events</h3>
          <p className="text-gray-400 text-sm">
            Concerts, exhibitions, fashion shows, and corporate events.
          </p>
        </div>

      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">

        <button
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          onClick={() =>
            window.location.href = "mailto:contact@dubaimall.com"
          }
        >
          Email Us
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Response within 24–48 hours
        </p>

      </div>

    </Section>
  );
}