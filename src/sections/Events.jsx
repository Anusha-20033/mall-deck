import Section from "../components/Section";

export default function Events() {
  return (
    <Section id="events" title="Events & Global Platform">

      {/* Intro */}
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        Dubai Mall serves as a world-class platform for global events,
        brand activations, cultural showcases, and large-scale entertainment experiences.
      </p>

      {/* Key Capabilities */}
      <div className="mt-8 space-y-3 text-gray-700">

        <p>• International concerts and live performances</p>
        <p>• Luxury brand launches and activations</p>
        <p>• Fashion shows, exhibitions, and pop-up experiences</p>
        <p>• Corporate events and global business gatherings</p>

      </div>

      {/* Business Positioning */}
      <div className="mt-10">
        <p className="text-xl font-light leading-relaxed">
          More than a venue — it is a global stage where brands, audiences,
          and experiences converge at scale.
        </p>
      </div>

    </Section>
  );
}