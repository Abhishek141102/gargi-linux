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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Hero */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#292a2d] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-400">
            Contact Gargi Linux Access
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s talk
            <span className="block text-lime-400">Linux, together.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
            Share what you need help with and our team can get the
            conversation started. The contact details below are sample
            placeholders.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Office information */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="lg:col-span-5"
          >
            <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Get In Touch With Our Team
            </h2>

            <div className="mt-8 space-y-6 text-sm text-slate-700">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="mt-1 leading-6">
                    3rd Floor, Kanchwala Avenue, Above Viju&apos;s Dabeli,
                    <br />
                    Thatte Nagar Marg, College Road,
                    <br />
                    Nashik, Maharashtra 422005
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <a
                    href="tel:+910000000000"
                    className="mt-1 inline-block hover:text-lime-700"
                  >
                    +91 00000 00000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="mt-1 inline-block hover:text-lime-700"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-700">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Open Hours</h3>
                  <p className="mt-1 leading-6">
                    Mon &ndash; Sat
                    <br />
                    09:30 AM &ndash; 08:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Preview */}
            <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm">
              <iframe
                title="Map showing College Road, Nashik"
                src="https://maps.google.com/maps?q=3rd%20Floor%2C%20Kanchwala%20Avenue%2C%20Thatte%20Nagar%20Marg%2C%20College%20Road%2C%20Nashik%2C%20Maharashtra%20422005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-48 w-full border-0 sm:h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="h-full lg:col-span-7"
          >
            <div className="flex h-full min-h-[595px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-1 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-lime-500" />
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Thank You!
                  </h2>
                  <p className="mt-2 max-w-md text-slate-600">
                    This demo form is not connected to an email service yet. Connect a delivery service to receive enquiries.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-md bg-lime-400 px-5 py-2.5 text-sm font-bold text-[#242629] transition hover:bg-lime-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-center text-2xl font-extrabold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-center text-sm text-slate-600">
                    Share a few details and we&apos;ll get back to you.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-1 flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Your Name *
                        </label>
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          placeholder="Enter your name"
                          className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Your Email *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="Enter your email"
                          className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Mobile Number *
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Enter your mobile number"
                          className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Service Interest / Subject *
                        </label>
                        <select
                          required
                          name="subject"
                          defaultValue=""
                          className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal text-slate-700 outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option>Linux server setup</option>
                          <option>Linux access management</option>
                          <option>Security and maintenance</option>
                          <option>Technical support</option>
                          <option>Other enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Message *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project or requirement..."
                        className="mt-1.5 w-full min-h-[145px] resize-y rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mx-auto flex items-center justify-center gap-2 rounded-md bg-lime-400 px-8 py-3 text-sm font-bold text-[#242629] transition hover:bg-lime-300"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
