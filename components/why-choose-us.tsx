import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { whyChooseUs } from '@/lib/data';

export function WhyChooseUs() {
  return (
    <section className="section-space bg-white">
      <div className="container-main grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="For patients who value quality care, convenience, and trust."
            description="We make it easy to access healthcare services, connect with our clinic, and find the medicines you need without confusion or delay."
          />
        </Reveal>

        <div className="grid gap-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="card-surface flex items-start gap-4 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-700" />
                <p className="text-sm sm:text-base">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}