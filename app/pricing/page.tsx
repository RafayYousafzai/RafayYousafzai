import { title } from "@/components/primitives";
import PricingCards from "@/components/PricingCards";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Choose Your Plan</h1>
      <PricingCards />
    </div>
  );
}
