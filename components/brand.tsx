import Link from 'next/link';
import Image from 'next/image';

export function Brand() {
  return (
    <Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Mariacos-Paplonot Clinic home"
>
  <div className="relative h-10 w-10 overflow-hidden rounded-2xl shadow-soft">
    <Image
      src="/logo.png"
      alt="Mariacos-Paplonot Clinic Logo"
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="leading-tight">
    <span className="block text-sm font-bold text-ink">
      Mariacos-Paplonot Clinic
    </span>
    <span className="block text-xs text-muted">
      and Double Base Pharmacy
    </span>
  </div>
</Link>
  );
}