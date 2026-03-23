import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { clinicHighlights, services, products } from '@/lib/data';
import { Reveal } from '@/components/reveal';
import { ServiceCard } from '@/components/service-card';
import { ProductCard } from '@/components/product-card';
import { StatsStrip } from '@/components/stats-strip';
import { AboutPreview } from '@/components/about-preview';
import { WhyChooseUs } from '@/components/why-choose-us';
import { CtaBanner } from '@/components/cta-banner';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* STATS */}
      <StatsStrip />

      {/* HIGHLIGHTS */}
      <section className="section-space bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Why Choose Our Clinic"
            title="Modern care, made simple and accessible."
            description="From consultations to pharmacy needs. Everything you need, all in one place."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clinicHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="card-surface h-full p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm sm:text-base">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-space bg-slate-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Clinic Services"
            title="Quickly understand the care and services we offer."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <AboutPreview />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PRODUCTS */}
      <section className="section-space bg-slate-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Double Base Pharmacy"
            title="Browse available pharmacy products"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.name} delay={index * 0.05}>
                <ProductCard {...product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Need medical assistance or product inquiry?"
        description="Contact the clinic for consultations or pharmacy-related concerns."
        primaryLabel="Contact the Clinic"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}