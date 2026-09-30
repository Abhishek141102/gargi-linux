import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";
import { industryBySlug } from "../data/industriesData";

interface IndustryDetailProps {
  slug: string;
  onOpenContact: () => void;
}

export const IndustryDetail: React.FC<IndustryDetailProps> = ({
  slug,
  onOpenContact,
}) => {
  const industry = industryBySlug(slug);

  if (!industry) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900">
            Industry Not Found
          </h1>
          <p className="mt-3 text-stone-600">
            The requested industry page could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        className="bg-[#251d23] text-white py-16 sm:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {industry.eyebrow && (
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-400 uppercase mb-4">
                {industry.eyebrow}
              </p>
            )}
            <p className="text-sm font-semibold text-brand-400 mb-3">
              Gargi Linux Access
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {industry.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-stone-300 leading-8 max-w-4xl">
              {industry.lead}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <main>
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro callout */}
            {industry.introTitle && industry.intro && (
              <motion.div
                className="rounded-2xl bg-stone-50 border-t-4 border-brand-600 p-6 text-center sm:p-8 mb-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {industry.introTitle}
                </h2>
                <p className="mt-3 text-stone-600 leading-7">
                  {industry.intro}
                </p>
              </motion.div>
            )}

            {/* Capability cards */}
            {industry.cards && industry.cards.length > 0 && (
              <section>
                {industry.sectionTitle && (
                  <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-7">
                    {industry.sectionTitle}
                  </h2>
                )}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {industry.cards.map((card) => (
                    <motion.article
                      key={card.title}
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.45 },
                        },
                      }}
                      whileHover={{ y: -5 }}
                      className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <CheckCircle2 className="mx-auto mb-3 h-7 w-7 text-brand-600" />
                        <div>
                          <h3 className="text-lg font-bold text-stone-900">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm text-stone-600 leading-6">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}

            {/* Challenges we solve */}
            {industry.challenges && industry.challenges.length > 0 && (
              <section className="mt-14">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-7">
                  Common Challenges We Solve
                </h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {industry.challenges.map((item) => (
                    <motion.article
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.45 },
                        },
                      }}
                      whileHover={{ y: -5 }}
                      className="rounded-xl bg-stone-50 border border-stone-200 p-6 text-center"
                    >
                      <AlertCircle className="mx-auto mb-3 h-7 w-7 text-brand-600" />
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-stone-600 leading-6">
                        {item.description}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}

            {/* Case studies */}
            {industry.caseStudies && industry.caseStudies.length > 0 && (
              <section className="mt-14">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-7">
                  Systems We Have Delivered in This Sector
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {industry.caseStudies.map((item) => (
                    <motion.article
                      key={item.title}
                      className="rounded-xl border border-stone-200 p-6 bg-white text-center shadow-sm"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45 }}
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="font-bold text-stone-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600 leading-6">
                        {item.description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {/* Tech stack */}
            {industry.techStack && industry.techStack.length > 0 && (
              <section className="mt-14">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-7">
                  Technology & Integrations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.techStack.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-stone-50 border border-stone-200 p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                      <span className="text-sm font-medium text-stone-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {industry.faqs && industry.faqs.length > 0 && (
              <motion.section
                className="mt-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-stone-900 mb-7">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {industry.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-stone-200 bg-white"
                    >
                      <summary className="list-none cursor-pointer px-5 py-4 font-semibold text-stone-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <ChevronDown className="w-5 h-5 shrink-0 text-stone-500 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-stone-600 leading-7">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </motion.section>
            )}

            {/* CTA */}
            {industry.ctaTitle && (
              <motion.section
                className="mt-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl bg-stone-50 border border-stone-200 text-center p-7 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                    {industry.ctaTitle}
                  </h2>
                  {industry.ctaText && (
                    <p className="mt-3 text-stone-600">{industry.ctaText}</p>
                  )}
                  <button
                    onClick={onOpenContact}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 transition-colors"
                  >
                    {industry.ctaButton || "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.section>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};



