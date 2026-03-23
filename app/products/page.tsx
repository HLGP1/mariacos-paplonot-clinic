import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';

export default function ProductsPage() {
  return (
    <section className="section-space bg-white">
      <div className="container-main">

        {/* HEADER (NOW INSIDE CONTAINER) */}
        <div className="mb-12">
          
          {/* LOGO */}
          <div className="mb-4">
            <div className="relative h-20 w-40">
              <Image
                src="/pharmacy-logo.jpg"
                alt="Double Base Pharmacy"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* HEADING */}
          <SectionHeading
            eyebrow="Double Base Pharmacy"
            title="Browse Pharmacy Products"
            description="Explore available medicine and wellness products."
          />
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
}