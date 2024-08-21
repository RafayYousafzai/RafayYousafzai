export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2 w-full">
      <div className="inline-block   text-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
