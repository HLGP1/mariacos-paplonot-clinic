import Link from 'next/link';

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="section-space pt-0">
      <div className="container-main">
        <div className="overflow-hidden rounded-[2rem] bg-clinic-400 px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base text-white/80">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href={primaryHref} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-clinic-800 transition hover:bg-slate-100">
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}