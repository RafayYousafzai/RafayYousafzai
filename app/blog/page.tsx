import { BlogsCard } from "@/components/BlogsCard";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <div className="my-20">
        <BlogsCard />
      </div>
    </div>
  );
}
