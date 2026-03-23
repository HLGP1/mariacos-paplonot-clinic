import Link from 'next/link';
import { Brand } from '@/components/brand';
import { navLinks } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-main grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Brand />
          <p className="max-w-md text-sm">
            Mariacos-Paplonot Clinic, with the support of Double Base Pharmacy, delivering reliable care and easy access to medicines.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5">
        <div className="container-main flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mariacos-Paplonot Clinic and Double Base Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}