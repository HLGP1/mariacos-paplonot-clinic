import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    // ✅ SEND EMAIL
    await resend.emails.send({
      from: 'Mariacos Clinic <onboarding@resend.dev>', // ok for testing
      to: ['mcpclinicph@gmail.com'], // 🔥 CHANGE if needed
      subject: subject || 'New Inquiry',
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // ✅ OPTIONAL: AUTO-REPLY TO USER
    await resend.emails.send({
      from: 'Mariacos Clinic <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your inquiry',
      html: `
        <p>Hi ${name},</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <p>Thank you,<br/>Mariacos-Paplonot Clinic</p>
      `,
    });

    // ✅ KEEP YOUR ORIGINAL LOG
    console.log('CONTACT FORM:', parsed.data);

    return NextResponse.json({ message: 'Message sent successfully' });

  } catch (e: any) {
    console.error('CONTACT ERROR:', e);

    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}