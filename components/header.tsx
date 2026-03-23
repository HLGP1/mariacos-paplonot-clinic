'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/data';
import { Brand } from '@/components/brand';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between gap-6">
        <Brand />

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  active ? 'bg-brand-50 text-clinic-700' : 'text-muted hover:bg-slate-50 hover:text-ink'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="button-primary">
            Book an Inquiry
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-main flex flex-col gap-2 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    active ? 'bg-brand-50 text-brand-800' : 'text-muted hover:bg-slate-50 hover:text-ink'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="button-primary mt-2" onClick={() => setOpen(false)}>
              Book an Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}