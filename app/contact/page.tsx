import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our clinic"
        description="Reach out with your questions and our team will assist you as soon as possible."
      />

      <section className="section-space bg-white">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm">Phone: {siteConfig.contact.phone}</p>
            <p className="text-sm">Email: {siteConfig.contact.email}</p>
            <p className="text-sm">Address: {siteConfig.contact.address}</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}