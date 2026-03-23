import {
  Activity,
  Bandage,
  ClipboardList,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export const clinicHighlights = [
  {
    title: 'Patient-Centered Care',
    description:
      'We focus on clear communication, compassionate care, and practical treatment options for every patient.',
    icon: HeartPulse,
  },
  {
    title: 'Clinic + Pharmacy Access',
    description:
      'From consultation to medicine access, patients can navigate care more conveniently in one digital experience.',
    icon: Pill,
  },
  {
    title: 'Reliable and Trusted Care',
    description:
      'We provide consistent, dependable service you can trust for your health and well-being.',
    icon: ShieldCheck,
  },
];

export const services = [
  {
    title: 'General Consultation',
    description:
      'Assessment, guidance, and treatment planning for common health concerns and routine medical needs.',
    icon: Stethoscope,
  },
  {
    title: 'Preventive Care',
    description:
      'Health monitoring and early intervention support focused on long-term wellness and prevention.',
    icon: Activity,
  },
  {
    title: 'Minor Procedures',
    description:
      'Basic outpatient procedures delivered with attention to patient comfort and clinical safety.',
    icon: Bandage,
  },
  {
    title: 'Laboratory Request Assistance',
    description:
      'Support for diagnostics coordination and result interpretation in context with your consultation.',
    icon: Microscope,
  },
  {
    title: 'Vaccination and Basic Care',
    description:
      'Routine care support including health guidance, follow-ups, and selected preventive services.',
    icon: Syringe,
  },
  {
    title: 'Family and Community Care',
    description:
      'Accessible care options for individuals, families, and patients seeking practical healthcare support.',
    icon: Users,
  },
];

export const products = [
  {
    name: 'Pain Relief & Fever Medicines',
    category: 'Over-the-Counter',
    description:
      'Common over-the-counter options often used for fever, headaches, and mild body pain support.',
    price: 'Available on inquiry',
  },
  {
    name: 'Cold, Cough, and Allergy Support',
    category: 'Over-the-Counter',
    description:
      'A dedicated category for symptom management products often requested for seasonal and daily relief.',
    price: 'Available on inquiry',
  },
  {
    name: 'Vitamins and Wellness Essentials',
    category: 'Wellness',
    description:
      'Nutritional support products for daily supplementation and general wellness maintenance.',
    price: 'Available on inquiry',
  },
  {
    name: 'Prescription Fulfillment Requests',
    category: 'Pharmacy Service',
    description:
      'Patients can inquire about medicine availability through the pharmacy section before visiting.',
    price: 'Varies by prescription',
  },
  {
    name: 'First Aid and Wound Care',
    category: 'Healthcare Supplies',
    description:
      'A category for clinic-safe essentials such as dressings, antiseptics, and basic wound support items.',
    price: 'Available on inquiry',
  },
  {
    name: 'Clinic-Recommended Health Essentials',
    category: 'Health Support',
    description:
      'A curated category for practical daily-use products commonly aligned with patient care needs.',
    price: 'Available on inquiry',
  },
];

export const whyChooseUs = [
  'Professional and trustworthy care you can rely on.',
  'Patient-focused services designed for your needs.',
  'Easy access to medicines and healthcare support.',
  'Simple and convenient way to connect with our clinic.',
];

export const aboutPoints = [
  {
    title: 'Know Where to Start',
    description:
      'Clear sections help you find the right service immediately.',
    icon: ClipboardList,
  },
  {
    title: 'Reach Us Without Hassle',
    description:
      'Contact details and inquiries are easy to access.',
    icon: HeartPulse,
  },
  {
    title: 'Browse What’s Available',
    description:
      'See medicines and products without confusion.',
    icon: Pill,
  },
];