import Contact from "@/components/Contact";
import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <Contact />
    </div>
  );
}
