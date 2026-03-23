'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const isDisabled = useMemo(() => isSubmitting, [isSubmitting]);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (form.phone.trim().length < 7) nextErrors.phone = 'Please enter a valid phone number.';
    if (form.subject.trim().length < 3) nextErrors.subject = 'Please enter a subject.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please enter a more detailed message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    if (!validate()) return;

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your message right now.');
      }

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully. We will get back to you as soon as possible.',
      });
      setForm(initialState);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-ink"
            placeholder="Enter your full name"
            disabled={isDisabled}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-ink"
            placeholder="Enter your email"
            disabled={isDisabled}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-ink"
            placeholder="Enter your phone number"
            disabled={isDisabled}
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-ink"
            placeholder="What is your concern about?"
            disabled={isDisabled}
          />
          {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-ink"
            placeholder="Tell us how we can help you"
            disabled={isDisabled}
          />
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
        </div>
      </div>

      {status.type !== 'idle' && (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-green-200 bg-green-50 text-green-700'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">We respect your privacy and handle inquiries professionally.</p>
        <button type="submit" className="button-primary" disabled={isDisabled}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}