import Section from "../components/Section";
import VideoBlock from "../components/VideoBlock";

export default function Retail() {
  return (
    <Section id="retail" title="Retail Ecosystem">

      {/* Video Story Block */}
      <VideoBlock
        src="/videos/retail.mp4"
        title="A Global Retail Powerhouse"
        description="Flagship stores, luxury brands, and immersive retail experiences under one destination."
      />

      {/* Description */}
      <p className="mt-10 text-lg text-gray-600 leading-relaxed max-w-3xl">
        Dubai Mall is one of the world’s most influential retail destinations,
        attracting global brands, flagship stores, and high-value consumer traffic
        at an unmatched scale.
      </p>

      {/* Key Points */}
      <div className="mt-8 space-y-3 text-gray-700">

        <p>• 1,200+ retail outlets across categories</p>
        <p>• Flagship stores for global luxury brands</p>
        <p>• High-volume international visitor traffic</p>
        <p>• Immersive retail environments and brand activations</p>

      </div>

      {/* Closing Statement */}
      <div className="mt-10">
        <p className="text-xl font-light">
          Retail here is not transactional — it is experiential at global scale.
        </p>
      </div>

    </Section>
  );
}