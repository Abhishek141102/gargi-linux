import React, { FormEvent, useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_SERVICES } from "../data/servicesData";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-stone-300 bg-[#fbf7f3] px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-200";
const labelClass = "block text-sm font-semibold text-stone-700";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="overflow-hidden bg-white text-stone-900">
      {/* Editorial introduction */}
      <div className="relative border-b border-stone-200 bg-[#fbf7f3]">
        <div
          className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full border border-brand-300/30 sm:-right-24 sm:-top-64 sm:h-[46rem] sm:w-[46rem]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl justify-items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[.2em] text-brand-700">
              Contact Gargi Linux Access
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.045em] text-stone-950 sm:text-6xl lg:text-7xl">
              Let&apos;s talk
              <span className="mt-2 block font-medium tracking-[-.04em] text-brand-700">
                Technology, together.
              </span>
            </h1>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12 }}
            className="mx-auto max-w-lg border-t-2 border-brand-400 pt-5 text-center text-base leading-7 text-stone-600 sm:text-lg sm:leading-8"
          >
            Share what you need help with and our team can get the conversation
            started.
          </motion.div>
        </div>
      </div>

      {/* Contact workspace */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:gap-8">
          {/* Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center px-4 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-600" />
                <h2 className="mt-5 text-2xl font-bold text-stone-900">
                  Thank You!
                </h2>
                <p className="mt-2 max-w-md leading-7 text-stone-600">
                  This demo form is not connected to an email service yet.
                  Connect a delivery service to receive enquiries.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex flex-col items-center gap-3 border-b border-stone-200 pb-6 text-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">
                      Start a conversation
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
                      Send us a message
                    </h2>
                  </div>
                  <p className="mx-auto max-w-md text-sm leading-6 text-stone-500 sm:text-base">
                    Share a few details and we&apos;ll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Your Name *
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        placeholder="Enter your name"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      Your Email *
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      Mobile Number *
                      <input
                        required
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="Enter your mobile number"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      Service Interest / Subject *
                      <select
                        required
                        name="subject"
                        defaultValue=""
                        className={`${fieldClass} text-stone-700`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {COMPANY_SERVICES.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>

                  <label className={labelClass}>
                    Message *
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project or requirement..."
                      className={`${fieldClass} min-h-36 resize-y`}
                    />
                  </label>

                  <button
                    type="submit"
                    className="mx-auto flex w-fit max-w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact details and map */}
          <motion.aside
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col overflow-hidden rounded-3xl bg-[#2c2028] p-6 text-white shadow-xl shadow-stone-900/10 sm:p-8 lg:p-9"
          >
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-brand-300">
                Find us
              </p>
              <h2 className="mt-2 text-2xl font-extrabold">Office information</h2>
            </div>

            <div className="mt-7 divide-y divide-white/10">
              <div className="flex gap-4 py-5 first:pt-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    C.S. No. 333/32, Trimbakeshwar, Trimbak,
                    <br />
                    Nashik, Maharashtra, India, 422212
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <a
                    href="tel:+919689973967"
                    className="mt-1 inline-block text-sm text-stone-300 transition hover:text-brand-300"
                  >
                    +91 96899 73967
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <a
                    href="mailto:atharvadeshmukh525@gmail.com"
                    className="mt-1 inline-block break-all text-sm text-stone-300 transition hover:text-brand-300"
                  >
                    atharvadeshmukh525@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5 last:pb-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Open Hours</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    Mon &ndash; Sat
                    <br />
                    09:30 AM &ndash; 08:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 min-h-56 flex-1 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
              <iframe
                title="Map showing C.S. No. 333/32, Trimbakeshwar, Nashik"
                src="https://maps.google.com/maps?q=C.S.%20No.%20333%2F32%2C%20Trimbakeshwar%2C%20Trimbak%2C%20Nashik%2C%20Maharashtra%2C%20India%2C%20422212&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full border-0 sm:h-64 lg:h-full lg:min-h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
