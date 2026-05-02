import Section from "../components/Section";
import VideoBlock from "../components/VideoBlock";

export default function Entertainment() {
  return (
    <Section title="Entertainment & Attractions">

      {/* Video Hero Block */}
      <VideoBlock
        src="/videos/entertainment.mp4"
        title="A World of Immersive Experiences"
        description="From record-breaking attractions to world-class aquariums and immersive entertainment zones."
      />

      {/* Description */}
      <p className="mt-10 text-lg text-gray-600 leading-relaxed max-w-3xl">
        Dubai Mall is a global entertainment destination offering experiences
        that go far beyond traditional retail environments.
      </p>

      {/* Key Highlights */}
      <div className="mt-8 space-y-3 text-gray-700">

        <p>• Dubai Aquarium & Underwater Zoo</p>
        <p>• VR parks and immersive gaming experiences</p>
        <p>• Indoor attractions for all age groups</p>
        <p>• Year-round family entertainment ecosystem</p>

      </div>

      {/* Closing Statement */}
      <div className="mt-10">
        <p className="text-xl font-light">
          Entertainment here is not an add-on — it is a core destination experience.
        </p>
      </div>

    </Section>
  );
}