import { Pill } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  price: string;
}

export function ProductCard({ name, category, description, price }: ProductCardProps) {
  return (
    <article className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-pharmacy-100 px-3 py-1 text-xs font-semibold text-pharmacy-700">
            {category}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-ink">{name}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Pill className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm sm:text-base">{description}</p>
      <div className="mt-5 border-t border-slate-200 pt-4">
        <p className="text-sm font-semibold text-ink">{price}</p>
      </div>
    </article>
  );
}