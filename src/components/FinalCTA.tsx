'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { MessageCircle, Mail, Phone, Calendar, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'Retail / Local Shop',
    challenges: '',
    requestAudit: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.challenges.trim()) {
      setStatus('error');
      setResponseMsg('Please fill in your name, email, and tell us a bit about what you want to simplify.');
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message || 'Your inquiry has been received! We will be in touch shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: 'Retail / Local Shop',
          challenges: '',
          requestAudit: true,
        });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to submit form. Please contact us on WhatsApp directly.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Network connection issue. Please message us on WhatsApp or email directly.');
    }
  };

  return (
    <section id="contact" className="section-wrapper bg-[#FAF4EB] border-t border-[#2E1F1B]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Booking */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-5">
              Let&apos;s make running your business easier.
            </h2>
            <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed mb-8">
              Tell us what&apos;s slowing you down. We&apos;ll help you identify practical next steps — whether that&apos;s a fresh website, automated WhatsApp inquiries, or a custom order tool.
            </p>

            {/* Quick Contact Buttons */}
            <div className="space-y-3 mb-8">
              {/* WhatsApp direct button */}
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl hover:border-[#E3A23C] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9B8C83] block">
                      Quickest Response
                    </span>
                    <span className="text-sm font-bold text-[#2E1F1B] group-hover:text-[#E3A23C] transition-colors">
                      Chat on WhatsApp: {SITE_CONFIG.contact.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9B8C83] group-hover:text-[#E3A23C] group-hover:translate-x-1 transition-all" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center justify-between p-4 bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl hover:border-[#E3A23C] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 text-[#2E1F1B] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9B8C83] block">
                      Email Directly
                    </span>
                    <span className="text-sm font-bold text-[#2E1F1B] group-hover:text-[#E3A23C] transition-colors">
                      {SITE_CONFIG.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9B8C83] group-hover:text-[#E3A23C] group-hover:translate-x-1 transition-all" />
              </a>

              {/* Phone call */}
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="flex items-center justify-between p-4 bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl hover:border-[#E3A23C] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 text-[#2E1F1B] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9B8C83] block">
                      Phone Inquiry
                    </span>
                    <span className="text-sm font-bold text-[#2E1F1B] group-hover:text-[#E3A23C] transition-colors">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9B8C83] group-hover:text-[#E3A23C] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Free 20-min Checkup Callout */}
            <div className="bg-[#2E1F1B] text-[#F6EBDD] rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-[#E3A23C]">
                <Calendar className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Zero Obligation
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-[#F6EBDD] mb-2">
                Free 20-Minute Business Check-up
              </h3>
              <p className="text-xs sm:text-sm text-[#EBD7B7] leading-relaxed mb-4">
                We&apos;ll spend 20 minutes reviewing how you currently take orders, manage inquiries, or present your business online, and share 3 practical ways to simplify it.
              </p>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#E3A23C] hover:bg-[#cb8f31] text-[#2E1F1B] px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Book 20-Min Check-up</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form & Free Audit Offer */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-3xl p-7 sm:p-10 shadow-sm">
            <h3 className="text-2xl font-heading font-semibold text-[#2E1F1B] mb-2">
              Send an inquiry or request your free audit
            </h3>
            <p className="text-xs sm:text-sm text-[#6A5B53] mb-8">
              Fill out this form and we&apos;ll reply with honest recommendations tailored to your business within 1 business day.
            </p>

            {status === 'success' ? (
              <div className="bg-[#FAF4EB] border border-[#E3A23C] rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#E3A23C] mx-auto mb-4" />
                <h4 className="text-xl font-heading font-bold text-[#2E1F1B] mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-sm text-[#6A5B53] mb-6">
                  {responseMsg}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-wider bg-[#2E1F1B] text-[#F6EBDD] px-6 py-2.5 rounded-full hover:bg-[#E3A23C] hover:text-[#2E1F1B] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] placeholder-[#9B8C83] focus:bg-white focus:border-[#E3A23C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] placeholder-[#9B8C83] focus:bg-white focus:border-[#E3A23C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                      Phone or WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] placeholder-[#9B8C83] focus:bg-white focus:border-[#E3A23C] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                      Business Name & Location
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Patel Healthcare, Indore"
                      className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] placeholder-[#9B8C83] focus:bg-white focus:border-[#E3A23C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                    Business Category
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] focus:bg-white focus:border-[#E3A23C] transition-colors"
                  >
                    <option value="Retail / Local Shop">Retail / Local Shop</option>
                    <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                    <option value="Consultant / Professional">Consultant / Professional</option>
                    <option value="Restaurant / Food Service">Restaurant / Food Service</option>
                    <option value="Freelancer / Creator">Freelancer / Creator</option>
                    <option value="Wholesale / Exports">Wholesale / Exports</option>
                    <option value="Other Small Business">Other Small Business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenges" className="block text-xs font-bold text-[#2E1F1B] mb-1.5">
                    What is slowing you down or what would you like to build? *
                  </label>
                  <textarea
                    id="challenges"
                    rows={4}
                    required
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                    placeholder="Describe how you currently handle orders/customers, what takes too much time, or the kind of website/tool you need..."
                    className="w-full px-4 py-3 rounded-xl border border-[#2E1F1B]/15 bg-[#FAF4EB] text-sm text-[#2E1F1B] placeholder-[#9B8C83] focus:bg-white focus:border-[#E3A23C] transition-colors resize-y"
                  />
                </div>

                {/* Free 3-Point Audit Checkbox */}
                <div className="bg-[#FAF4EB] p-4 rounded-xl border border-[#2E1F1B]/10">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestAudit}
                      onChange={(e) => setFormData({ ...formData, requestAudit: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#E3A23C] focus:ring-[#E3A23C] border-[#2E1F1B]/20"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#2E1F1B] block">
                        Include free 3-point digital workflow audit
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#6A5B53] block">
                        Oakins will analyze your business presence and suggest 3 practical improvements you can make right away.
                      </span>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2E1F1B] hover:bg-[#E3A23C] text-[#F6EBDD] hover:text-[#2E1F1B] font-bold text-sm py-4 px-8 rounded-full transition-colors duration-200 shadow-md cursor-pointer disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting your inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry & Request Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#9B8C83] text-center">
                  We respect your privacy. No spam, sales calls, or sharing your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
