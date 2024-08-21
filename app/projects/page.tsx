import { ExpandableCard } from "@/components/ExpandableCard";
import { title } from "@/components/primitives";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Projects</h1>
      <section className="w-full my-8">
        <ExpandableCard />
      </section>
    </div>
  );
}
