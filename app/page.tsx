import { BlogsCard } from "@/components/BlogsCard";
import Contact from "@/components/Contact";
import { ExpandableCard } from "@/components/ExpandableCard";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { title } from "@/components/primitives";
// import BackgroundEffect from "@/components/background_effect/BackgroundEffect";

export default function Page() {
  return (
    <div className="w-full lg-20">
      {/* <div className="hidden md:block">
        <BackgroundEffect />
      </div> */}
      <Hero />
      <h1 className={title()}>Services</h1>
      <Services />
      <h1 className={title()}>My Work</h1>
      <br />
      <br />
      <br />
      <br />

      <ExpandableCard />
      <br />
      <br />
      <br />
      <br />
      <h1 className={title()}>Blogs</h1>
      <BlogsCard />
      <br />
      <br />
      <br />
      <br />

      <h1 className={title()}>Contact</h1>
      <Contact />
      {/* <PricingCards /> */}
    </div>
  );
}
