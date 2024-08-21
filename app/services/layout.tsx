export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10 w-full">
      <div className="inline-block text-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
