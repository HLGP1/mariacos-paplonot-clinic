import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutPoints } from '@/lib/data';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

export function AboutPreview() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-main grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="About the Practice"
            title="Trusted care, centered around every patient."
            description="Mariacos-Paplonot Clinic is committed to providing reliable, accessible, and patient-focused healthcare. From consultations to medication support, we ensure a seamless experience designed for your comfort and well-being."
          />
          <div className="mt-8">
            <Link href="/about" className="button-primary">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.08}>
                <div className="card-surface p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{point.title}</h3>
                      <p className="mt-2 text-sm sm:text-base">{point.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}