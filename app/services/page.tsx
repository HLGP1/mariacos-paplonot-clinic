import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Healthcare services tailored to your needs."
        description="Explore the range of care available at Mariacos-Paplonot Clinic."
      />

      <section className="section-space bg-white">
        <div className="container-main grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}