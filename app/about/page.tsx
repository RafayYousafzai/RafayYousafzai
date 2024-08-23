import { title } from "@/components/primitives";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function ServicesPage() {
  return (
    <div className="w-full ">
      <h1 className={title()}>About</h1>
      <Services />
      <TechStack />
    </div>
  );
}
