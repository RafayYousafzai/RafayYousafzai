import { title } from "@/components/primitives";
import PricingCards from "@/components/PricingCards";

export default function PricingPage() {
  return (
    <div className="pb-20">
      <h1 className={title()}>Choose Your Plan</h1>
      <PricingCards />
    </div>
  );
}
