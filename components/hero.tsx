import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock3, ShieldCheck, Stethoscope, Pill } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  return (
    <section className="overflow-hidden bg-hero-grid">
      <div className="container-main grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        
        {/* LEFT SIDE */}
        <Reveal>
          <div>
            <span className="eyebrow">Trusted Care, Modern Access</span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Trusted healthcare from{' '}
              <span className="text-clinic-700">Mariacos-Paplonot Clinic</span>, with reliable pharmacy support from{' '}
              <span className="text-pharmacy-700">Double Base Pharmacy</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg">
              A simple and trusted way for patients to explore services, ask questions, and access the care they need.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Schedule an Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link href="/products" className="button-secondary">
                Browse Pharmacy Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-muted" />
                Professional and trustworthy
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-muted" />
                Patient-focused care
              </div>
              <div className="flex items-center gap-2">
                <Pill className="h-4 w-4 text-muted" />
                Easy access to medicines
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal delay={0.1}>
          <div className="card-surface relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[url('/images/clinic-pattern.svg')] opacity-50" />

            <div className="relative space-y-6">
              
              {/* TOP INFO */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-black/80">
                  Now Serving Patients with a Simpler, More Convenient Way to Access Care.
                </p>
              </div>

              {/* CARDS */}
              <div className="grid gap-4 items-stretch">

                {/* CLINIC HOURS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-clinic-100 p-3 text-clinic-700">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-ink">Clinic Hours</h3>
                      <p className="text-sm">8:00am-5:00pm</p>
                      <p className="text-sm">Monday-Saturday</p>
                    </div>
                  </div>
                </div>

                {/* PHARMACY CARD (FIXED) */}
                <Link href="/products" className="block">
                  <div className="flex items-center gap-4 rounded-2xl border border-pharmacy-200 bg-white p-5 transition hover:shadow-md hover:border-pharmacy-400">
                    
                    {/* LOGO */}
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src="/pharmacy-logo.jpg"
                        alt="Double Base Pharmacy"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="font-semibold text-ink">Pharmacy Services</h3>
                      <p className="text-sm text-muted">
                        Browse available products with ease.
                      </p>
                    </div>

                  </div>
                </Link>

              </div>

              {/* CONTACT */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-ink">Primary Contact</p>
                <p className="mt-2 text-sm">Phone Number: {siteConfig.contact.phone}</p>
                <p className="text-sm">Email: {siteConfig.contact.email}</p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}