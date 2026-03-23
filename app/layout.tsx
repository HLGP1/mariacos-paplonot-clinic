import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site-config';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.siteName,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}