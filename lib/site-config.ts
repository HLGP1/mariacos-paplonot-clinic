export const siteConfig = {
  siteName: 'Mariacos-Paplonot Clinic',
  pharmacyName: 'Double Base Pharmacy',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'A professional clinic website for Mariacos-Paplonot Clinic with a dedicated Double Base Pharmacy products section, built for accessible healthcare information, consultation inquiries, and medicine browsing.',
  contact: {
    phone: '+63 917 143 9775',
    email: 'mpclinphar@gmail.com',
    address: 'Labutan Building, 2nd Floor (just across Tiong San LTB), La Trinidad, Philippines, 2601',
    contactReceiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'mpclinphar@gmail.com',
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100064104067440',
  },
  hours: [
    'Monday to Saturday: 8:00 AM – 5:00 PM',
    'Sunday: Closed',
  ],
};