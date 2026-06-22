import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CalendarDays, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'
import Button from './Button'

type FormState = { name: string; org: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

const EMPTY_FORM: FormState = { name: '', org: '', email: '', message: '' }

const inputClass =
  'w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-white ' +
  'placeholder:text-slate-600 focus:outline-none focus:border-brand-yellow/60 ' +
  'transition-colors duration-200'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // If no endpoint is configured, open a pre-filled mailto link
    if (!SITE.contact.formEndpoint) {
      const subject = encodeURIComponent(`311-live inquiry — ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\n\n${form.message}`,
      )
      window.location.href = `mailto:${SITE.contact.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(SITE.contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm(EMPTY_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" className="border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* ── Left: header + meta links ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              {SITE.contact.sectionTitle}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {SITE.contact.body}
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${SITE.contact.email}`}
              className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-yellow transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-yellow/40 transition-colors">
                <Mail size={15} />
              </span>
              {SITE.contact.email}
            </a>

            {/* Calendar / appointment */}
            <a
              href={SITE.contact.appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-yellow transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-yellow/40 transition-colors">
                <CalendarDays size={15} />
              </span>
              {SITE.contact.appointmentLabel}
            </a>
          </div>

          {/* Fallback mailto CTA when endpoint is missing */}
          {!SITE.contact.formEndpoint && (
            <p className="text-xs text-slate-600">
              Submitting the form will open your email client.{' '}
              <a href={`mailto:${SITE.contact.email}`} className="text-slate-400 hover:text-brand-yellow underline">
                Email directly
              </a>
              {' '}if you prefer.
            </p>
          )}
        </motion.div>

        {/* ── Right: contact form ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
              <CheckCircle size={40} className="text-green-400" />
              <p className="text-lg font-semibold text-white">Message received</p>
              <p className="text-sm text-slate-400">We'll follow up soon.</p>
              <button
                className="text-xs text-slate-500 hover:text-slate-300 mt-2 underline"
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5" htmlFor="org">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    value={form.org}
                    onChange={handleChange}
                    placeholder="Agency / institution"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@organization.gov"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest — pilot exploration, research collaboration, or demo access."
                  className={[inputClass, 'resize-none'].join(' ')}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={14} />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                label={status === 'sending' ? 'Sending…' : 'Send message'}
                type="submit"
                variant="primary"
                size="md"
                disabled={status === 'sending'}
                icon={<Send size={14} />}
                className="mt-1"
              />
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
