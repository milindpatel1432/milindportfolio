import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Section, { SectionHeading } from '../../layouts/Section';
import { contactInfo } from '../../utils/data';
import { staggerContainer, fadeUp, fadeRight, viewportOnce } from '../../utils/animations';
import { cn } from '../../utils/cn';

const iconMap = { mail: Mail, phone: Phone, 'map-pin': MapPin };

const socialLinks = [
  { href: 'https://github.com/milindpatel1432', Icon: FiGithub, label: 'GitHub', color: 'hover:text-white' },
  { href: 'https://www.linkedin.com/in/milind-patel2803/', Icon: FiLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'https://instagram.com/its_milind_28', Icon: FiInstagram, label: 'Instagram', color: 'hover:text-pink-400' },
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please provide your name';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';

    if (!form.email.trim()) e.email = 'Please provide your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';

    if (!form.phone.trim()) e.phone = 'Please provide your phone number';
    else if (form.phone.trim().length < 10) e.phone = 'Phone number must be at least 10 digits';

    if (!form.message.trim()) e.message = 'Please tell me brief details about your project';
    else if (form.message.trim().length < 10) e.message = 'Please enter a meaningful message (at least 10 characters)';

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Only allow numbers (0-9)
      const numericValue = value.replace(/\D/g, '').slice(0, 15);
      setForm((f) => ({ ...f, phone: numericValue }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '876c7f8c-6ebd-49b5-bd65-08e33c5bc455',
          from_name: 'Milind Portfolio Contact Form',
          subject: form.subject && form.subject.trim()
            ? `Portfolio: ${form.subject.trim()}`
            : `New Portfolio Message from ${form.name.trim()}`,
          replyto: form.email.trim(),
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          botcheck: false,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <Section id="contact" label="Contact section">
      {/* Heading with Client-Focused Strong CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <SectionHeading
          eyebrow="Start A Conversation"
          title={<>Have an idea? Let's turn it into a<br /><span className="text-gradient-violet">modern digital experience.</span></>}
          subtitle="Ready to build your next full-stack web application or discuss a project? Fill out the form below or reach out directly."
          center
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

        {/* ── Left — Contact Details & Direct Outreach ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          {/* Info Cards */}
          <motion.div variants={fadeUp} className="space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => {
              const Icon = iconMap[icon] ?? Mail;
              const content = (
                <div className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
                    <Icon size={20} className="text-violet-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} aria-label={`${label}: ${value}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
              Connect Across Networks
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'p-3 rounded-xl glass border border-white/[0.06] text-white/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 hover:border-white/15 hover:-translate-y-0.5',
                    color
                  )}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability box */}
          <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <p className="text-sm font-semibold text-emerald-400">Open for Client Projects</p>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Available for full-stack development, frontend design implementation, and technical consulting. Expected response time within 24 hours.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right — Project Inquiry Form ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-card rounded-3xl p-8 space-y-5 border border-white/[0.08]"
            aria-label="Project inquiry form"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-violet-400" />
              <h3 className="text-lg font-outfit font-bold text-white">Send A Message</h3>
            </div>

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                id="contact-name"
                label="Your Name"
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <FormField
                id="contact-email"
                label="Your Email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>

            {/* Phone + Subject row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                id="contact-phone"
                label="Phone Number"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Numbers"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                required
              />
              <FormField
                id="contact-subject"
                label="Project Scope / Subject"
                name="subject"
                type="select"
                placeholder="Select Project Scope"
                options={['Custom Website', 'WordPress', 'React', 'Portfolio']}
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <FormField
              id="contact-message"
              label="Project Details"
              name="message"
              type="textarea"
              placeholder="Briefly describe your goals, budget timeline, or project requirements..."
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              required
              rows={5}
            />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={status === 'idle' ? { scale: 1.01, y: -2 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              className={cn(
                'w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
                status === 'success'
                  ? 'bg-emerald-600/20 border border-emerald-500/30 text-emerald-400'
                  : status === 'loading'
                    ? 'bg-violet-600/50 text-white/70 cursor-wait'
                    : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40'
              )}
              aria-label={
                status === 'loading'
                  ? 'Sending message...'
                  : status === 'success'
                    ? 'Message sent successfully'
                    : 'Send project inquiry'
              }
            >
              {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
              {status === 'success' && <CheckCircle2 size={18} />}
              {status === 'idle' && <Send size={18} />}
              {status === 'loading' && 'Sending Inquiry...'}
              {status === 'success' && 'Inquiry Sent Successfully!'}
              {status === 'idle' && 'Send Project Inquiry'}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}

/** Reusable form field */
function FormField({ id, label, name, type, placeholder, value, onChange, error, required, rows, inputMode, pattern, options }) {
  const inputClasses = cn(
    'w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 transition-all duration-200 focus:outline-none focus:ring-1',
    error
      ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/30'
      : 'border-white/[0.08] focus:border-violet-500/50 focus:ring-violet-500/20 hover:border-white/15'
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-white/60">
        {label}
        {required && <span className="text-violet-400 ml-1" aria-hidden="true">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={cn(inputClasses, 'resize-none')}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={cn(
            inputClasses,
            'cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba%28255%2C255%2C255%2C0.3%29%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat pr-10',
            !value ? 'text-white/25' : 'text-white'
          )}
        >
          <option value="" disabled className="bg-[#0f0f17] text-white/40">
            {placeholder || 'Select Option'}
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0f0f17] text-white py-2">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          inputMode={inputMode}
          pattern={pattern}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={inputClasses}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}
