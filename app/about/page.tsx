import { PageHero } from '@/components/page-hero';
import { aboutPoints } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Care you can trust, service you can rely on."
        description="At Mariacos-Paplonot Clinic, we prioritize your comfort, clarity, and access to quality healthcare every step of the way."
      />

      <section className="section-space bg-white">
        <div className="container-main grid gap-6 md:grid-cols-2">
          {aboutPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="card-surface p-6">
                <Icon className="h-6 w-6 text-brand-700" />
                <h3 className="mt-4 font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm">{point.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}