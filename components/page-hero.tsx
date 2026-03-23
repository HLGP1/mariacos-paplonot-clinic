interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-slate-50">
      <div className="container-main py-16 md:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg">{description}</p>
      </div>
    </section>
  );
}