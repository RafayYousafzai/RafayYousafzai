import { BlogsCard } from "@/components/BlogsCard";
import Contact from "@/components/Contact";
import { ExpandableCard } from "@/components/ExpandableCard";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingCards from "@/components/PricingCards";
import { title } from "@/components/primitives";

export default function Page() {
  return (
    <div className="w-full mb-20">
      <Hero />
      <FeaturesSection />
      <h1 className={title()}>Blogs</h1>
      <BlogsCard />
      <h1 className={title()}>My Work</h1>
      <ExpandableCard />
      <h1 className={title()}>Contact</h1>
      <Contact />
      <PricingCards />
      <Services />
    </div>
  );
}
