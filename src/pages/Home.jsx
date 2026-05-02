import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Luxury from "../sections/Luxury";
import Dining from "../sections/Dining";
import Entertainment from "../sections/Entertainment";
import Events from "../sections/Events";
import CTA from "../components/CTA";
import Contact from "../sections/Contact";
import ExploreExperience from "../sections/ExploreExperience";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Story Flow */}
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
      <Contact />
      <ExploreExperience />

      {/* Final Conversion */}
      <CTA />

    </main>
  );
}