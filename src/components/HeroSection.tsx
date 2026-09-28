import React from "react";
import { ArrowRight, CheckCheck, MessageSquareQuote, ServerCog, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import { PageRoute } from "../types";
import { motion } from "motion/react";
import { LINUX_SERVICES } from "../data/linuxServicesData";

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
  onServiceNavigate: (slug: string) => void;
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
}) => (
  <>
    <section
      id="home-hero-section"
      className="relative overflow-hidden bg-[#13243a] text-white"
    >
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute -right-20 -top-28 h-[34rem] w-[34rem] rounded-full border border-blue-400/40" />
        <div className="absolute right-[-5rem] top-[-13rem] h-[34rem] w-[34rem] rounded-full border border-blue-400/30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> Linux &
            infrastructure services
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl">
            Your Linux systems,
            <br />
            <span className="text-blue-300">connected and secure.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Gargi Linux Access helps businesses manage Linux environments with
            reliable infrastructure, controlled access, and responsive technical
            support.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-700"
            >
              Talk to our team <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="rounded-md border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              About Gargi Linux Access
            </button>
          </div>
        </motion.div>
        <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-[#10243a]/90 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-7 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-auto font-mono text-xs text-slate-500">
              secure-session
            </span>
          </div>
          <div className="space-y-4 font-mono text-sm">
            <p className="text-slate-500"># infrastructure, made dependable</p>
            <p>
              <span className="text-blue-300">$</span>{" "}
              <span className="text-slate-200">systemctl status</span>{" "}
              <span className="text-white">your-services</span>
            </p>
            <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 p-4 text-blue-300">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-600" />
              Systems ready. Access controlled.
            </div>
            <p className="text-slate-400">
              <span className="text-blue-300">$</span> focus on your business
              <span className="animate-pulse text-blue-300">_</span>
            </p>
          </div>
          <div className="absolute -bottom-4 -right-3 rounded-lg border border-white/10 bg-[#1b3554] px-4 py-3 text-xs text-slate-300 shadow-xl">
            Built around Linux. Designed for confidence.
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-blue-700">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Linux expertise for the systems your business depends on.
          </h2>
          <p className="mt-4 text-slate-600">
            From setup and access management to day-to-day support, get
            practical help across your Linux environment.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {LINUX_SERVICES.map((service) => (
            <button
              key={service.slug}
              onClick={() => onServiceNavigate(service.slug)}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                <ServerCog className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 leading-6 text-slate-600">{service.summary}</p>
              <span className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-800">
                View service{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#f8fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-blue-700">Why choose us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Linux support that keeps things clear and practical.</h2>
          <p className="mt-4 text-slate-600">A thoughtful support partner helps your team make confident decisions about the systems it depends on.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Security minded", text: "We keep access, permissions, and system safety in view." },
            { icon: UsersRound, title: "People first", text: "Clear conversations and useful guidance for your team." },
            { icon: Wrench, title: "Practical solutions", text: "Recommendations shaped around your environment and needs." },
            { icon: CheckCheck, title: "Careful follow through", text: "Documented next steps help keep work understandable." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-800"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-center font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-center text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#13243a] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-blue-300">
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
              <MessageSquareQuote className="h-7 w-7 text-blue-300" />
              <blockquote className="mt-5 text-lg leading-7 text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {testimonial.role} · Placeholder attribution
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="framework" className="bg-[#f8fafc] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-blue-700">
            A dependable partner
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Clear communication. Careful access. Reliable operations.
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Tell us about your infrastructure and support needs. We’ll help you
            find a straightforward next step.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="shrink-0 rounded-md bg-[#13243a] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Get in touch <ArrowRight className="ml-2 inline h-4 w-4" />
        </button>
      </div>
    </section>
  </>
);
