import React from "react";
import { ArrowRight, CheckCheck, MessageSquareQuote, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import { PageRoute } from "../types";
import { motion } from "motion/react";
import { COMPANY_SERVICES } from "../data/servicesData";
import { INDUSTRIES } from "../data/industriesData";

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
  onServiceNavigate: (slug: string) => void;
  onIndustryNavigate: (slug: string) => void;
}

const sampleTestimonials = [
  {
    quote:
      "The support helped our team get a clearer view of our Linux setup and the steps needed to keep it organized.",
    author: "Sample client",
    role: "IT Operations",
  },
  {
    quote:
      "We appreciated having technical guidance explained in a practical way that our team could act on.",
    author: "Sample client",
    role: "Infrastructure Team",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
  onServiceNavigate,
  onIndustryNavigate,
}) => {
  const [selectedIndustrySlug, setSelectedIndustrySlug] = React.useState(INDUSTRIES[0]?.slug ?? "");
  const selectedIndustry = INDUSTRIES.find((industry) => industry.slug === selectedIndustrySlug) ?? INDUSTRIES[0];
  return (
  <>
    <section
      id="home-hero-section"
      className="relative isolate overflow-hidden bg-[#fbf7f3] text-stone-900"
    >
      <div className="pointer-events-none absolute -right-32 -top-44 h-[34rem] w-[34rem] rounded-full border border-brand-300/30 sm:-right-20 sm:-top-56 sm:h-[46rem] sm:w-[46rem]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-12 top-8 h-3 w-3 rounded-full bg-brand-500/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-32">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-300/60 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-brand-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-600" />
            Software &amp; digital services
          </p>
          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-[-.055em] text-stone-950 sm:text-7xl lg:text-[5.75rem]">
            Technology built
            <span className="mt-2 block font-medium tracking-[-.045em] text-brand-700">
              for your next step.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Gargi Linux Access helps businesses solve operational challenges with
            custom software, connected systems, and practical technology
            solutions.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 font-bold text-white shadow-md shadow-brand-900/10 transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg"
            >
              Talk to our team <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="rounded-md border border-stone-300 bg-white/60 px-6 py-3.5 font-semibold text-stone-800 transition hover:border-brand-400 hover:bg-white hover:text-brand-800"
            >
              About Gargi Linux Access
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-stone-200 bg-white/85 shadow-xl shadow-stone-900/5 backdrop-blur-sm sm:mt-16"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3.5 sm:px-7">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            </div>
            <span className="font-mono text-xs tracking-wide text-stone-500">
              secure-session
            </span>
          </div>
          <div className="grid gap-5 px-5 py-6 text-center sm:grid-cols-3 sm:gap-0 sm:px-7 sm:py-7">
            <div className="sm:border-r sm:border-stone-200 sm:px-5">
              <p className="font-mono text-xs text-stone-500">
                # software, built around your business
              </p>
              <p className="mt-2 font-mono text-sm text-stone-700">
                <span className="font-bold text-brand-700">$</span> systemctl status business-systems
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:border-r sm:border-stone-200 sm:px-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
                <span className="h-2 w-2 rounded-full bg-brand-600" />
                Solutions ready. Work connected.
              </p>
            </div>
            <div className="flex items-center justify-center font-mono text-sm text-stone-600 sm:px-5">
              <span className="font-bold text-brand-700">$</span>
              <span className="ml-2">focus on your business</span>
              <span className="ml-1 animate-pulse text-brand-700">_</span>
            </div>
          </div>
          <div className="border-t border-stone-200 px-5 py-3 text-center text-xs font-medium tracking-wide text-stone-600 sm:px-7">
            Built around your needs. Designed to grow.
          </div>
        </motion.div>
      </div>
    </section>
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div className="text-center lg:sticky lg:top-32 lg:self-start lg:text-left">
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[.18em] text-brand-700">
              What we do
            </p>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:mx-0 lg:text-5xl">
              Technology solutions shaped around your business.
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-7 text-stone-600 lg:mx-0">
              From custom software to cloud engineering, get connected solutions for the way your business works.
            </p>
            <div className="mx-auto mt-8 flex w-fit items-center gap-4 border-t border-stone-200 pt-5 lg:mx-0">
              <span className="text-4xl font-semibold tracking-tight text-brand-700">{String(COMPANY_SERVICES.length).padStart(2, "0")}</span>
              <span className="max-w-24 text-left text-xs font-semibold uppercase leading-5 tracking-[.12em] text-stone-500">Ways we help your business</span>
            </div>
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {COMPANY_SERVICES.map((service, index) => (
              <button
                key={service.slug}
                onClick={() => onServiceNavigate(service.slug)}
                className="group w-full py-5 text-left transition-colors hover:bg-[#fbf7f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:py-6"
              >
                <span className="grid grid-cols-[2rem_minmax(0,1fr)_1.25rem] items-start gap-3 sm:grid-cols-[3rem_minmax(0,1fr)_2rem] sm:items-center sm:gap-4">
                  <span className="pt-1 font-mono text-xs text-brand-600 sm:text-sm">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-lg font-bold tracking-tight text-stone-900 transition-colors group-hover:text-brand-800 sm:text-xl">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600 sm:text-base">
                      {service.summary}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 self-center text-brand-700 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section id="industries" className="bg-[#fbf7f3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-700">Industries we serve</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">Technology shaped around your industry.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-600">Explore the sectors we support. Select an industry to see how we can help its teams and operations.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="flex items-center">
            <div className="w-full border-y border-stone-300">
              {INDUSTRIES.map((industry, index) => {
                const isSelected = industry.slug === selectedIndustrySlug;
                return (
                  <button
                    key={industry.slug}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedIndustrySlug(industry.slug)}
                    className={`group flex w-full items-center gap-4 border-b border-stone-200 py-4 text-left transition last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 ${isSelected ? "text-brand-800" : "text-stone-600 hover:text-stone-900"}`}
                  >
                    <span className={`w-8 font-mono text-xs ${isSelected ? "text-brand-700" : "text-stone-400"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={`flex-1 text-sm font-semibold sm:text-base ${isSelected ? "text-stone-950" : ""}`}>{industry.navLabel}</span>
                    <ArrowRight className={`h-4 w-4 transition-all ${isSelected ? "translate-x-0 text-brand-700" : "-translate-x-1 text-stone-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          {selectedIndustry && (
            <article key={selectedIndustry.slug} className="relative isolate min-h-[22rem] overflow-hidden rounded-3xl bg-[#2c2028] p-7 text-white shadow-xl shadow-stone-900/10 sm:p-10 lg:min-h-[29rem] lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border border-brand-300/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-8 top-10 -z-10 h-52 w-52 rounded-full border border-brand-300/20" aria-hidden="true" />
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-brand-300">
                <span>Industry</span><span className="h-px w-8 bg-brand-400/70" /><span>{String(INDUSTRIES.findIndex((industry) => industry.slug === selectedIndustry.slug) + 1).padStart(2, "0")} / {String(INDUSTRIES.length).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-12 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl lg:mt-16">{selectedIndustry.navLabel}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">{selectedIndustry.lead}</p>
              <button type="button" onClick={() => onIndustryNavigate(selectedIndustry.slug)} className="group mt-8 inline-flex items-center gap-2 rounded-md bg-brand-500 px-5 py-3 font-bold text-white transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2028]">
                Explore {selectedIndustry.navLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <span className="pointer-events-none absolute bottom-5 right-7 select-none font-serif text-[7rem] font-bold leading-none text-white/[.04] sm:text-[9rem]" aria-hidden="true">{String(INDUSTRIES.findIndex((industry) => industry.slug === selectedIndustry.slug) + 1).padStart(2, "0")}</span>
            </article>
          )}
        </div>
      </div>
    </section>
    <section className="bg-[#fbf7f3] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-700">Why choose us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">Thoughtful technology, delivered with clarity.</h2>
          <p className="mt-4 text-stone-600">A thoughtful technology partner helps your team make confident decisions and move work forward.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Security minded", text: "We keep access, permissions, and system safety in view." },
            { icon: UsersRound, title: "People first", text: "Clear conversations and useful guidance for your team." },
            { icon: Wrench, title: "Practical solutions", text: "Recommendations shaped around your environment and needs." },
            { icon: CheckCheck, title: "Careful follow through", text: "Documented next steps help keep work understandable." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100 text-brand-800"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-center font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-center text-sm leading-6 text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#2c2028] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-300">
              Client feedback
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What working with us could feel like.
            </h2>
          </div>
          
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {sampleTestimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <MessageSquareQuote className="h-7 w-7 text-brand-300" />
              <blockquote className="mt-5 text-lg leading-7 text-stone-200">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-stone-400">
                  {testimonial.role} | Placeholder attribution
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="framework" className="bg-[#fbf7f3] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-700">
            A dependable partner
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-stone-900 sm:text-3xl">
            Clear communication. Careful access. Reliable operations.
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600">
            Tell us about your project and technology needs. We'll help you find a straightforward next step.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="shrink-0 rounded-md bg-[#2c2028] px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Get in touch <ArrowRight className="ml-2 inline h-4 w-4" />
        </button>
      </div>
    </section>
  </>
  );
};
