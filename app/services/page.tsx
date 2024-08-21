import { title } from "@/components/primitives";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="w-full ">
      <h1 className={title()}>Services</h1>
      <Services />
    </div>
  );
}
