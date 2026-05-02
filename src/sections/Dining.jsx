import Section from "../components/Section";

export default function Dining() {
  return (
    <Section title="Dining & Lifestyle">

      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        Dubai Mall offers a curated collection of world-class dining experiences,
        from global fine dining brands to casual luxury lifestyle spaces.
      </p>

      <div className="mt-8 space-y-3 text-gray-700">

        <p>• Over 200+ international dining options</p>
        <p>• Michelin-level chefs & luxury restaurant brands</p>
        <p>• Waterfront dining experiences with Burj Khalifa views</p>
        <p>• Lifestyle cafés, lounges & experiential food concepts</p>

      </div>

      <div className="mt-10">
        <p className="text-xl font-light">
          Dining here is not just consumption — it is a global lifestyle experience.
        </p>
      </div>

    </Section>
  );
}