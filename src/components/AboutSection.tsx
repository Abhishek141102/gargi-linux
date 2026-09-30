import React from "react";
import { ArrowRight, Eye, Lightbulb, LockKeyhole, Network, ServerCog, Target } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
}) => (
  <section className="bg-white">
    <div className="bg-[#2c2028] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-300">
          About the company
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Gargi Linux Access Pvt. Ltd.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-300">
          A technology partner helping organizations build software, improve operations, and make the most of connected systems.
        </p>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: ServerCog,
            title: "Custom software",
            text: "Software solutions shaped around the way your teams work.",
          },
          {
            icon: LockKeyhole,
            title: "Controlled access",
            text: "Cloud and security practices designed to help protect your digital operations.",
          },
          {
            icon: Network,
            title: "Connected operations",
            text: "Practical integrations help your tools, data, and teams work together.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-xl border border-stone-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md"
          >
            <Icon className="mx-auto h-7 w-7 text-brand-700" />
            <h2 className="mt-5 text-xl font-bold text-stone-900">{title}</h2>
            <p className="mt-2 leading-6 text-stone-600">{text}</p>
          </article>
        ))}
      </div>
      <section className="mt-16" aria-labelledby="vision-mission-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-700">What guides us</p>
          <h2 id="vision-mission-heading" className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-4xl">Vision &amp; Mission</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md sm:p-9">
            <Eye className="mx-auto h-8 w-8 text-brand-700" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-stone-900">Our Vision</h3>
            <p className="mt-3 leading-7 text-stone-600">To help businesses use thoughtful, dependable technology to make progress and create lasting value.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md sm:p-9">
            <Target className="mx-auto h-8 w-8 text-brand-700" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-stone-900">Our Mission</h3>
            <p className="mt-3 leading-7 text-stone-600">To understand each client&apos;s needs and deliver practical software, cloud, security, and AI solutions with care and clear communication.</p>
          </article>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="our-process-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-brand-700">How we work</p>
          <h2 id="our-process-heading" className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-stone-600">A clear, collaborative path from your first idea to ongoing improvement.</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Lightbulb, title: "Discover", text: "We learn about your goals, users, workflows, and constraints." },
            { icon: Target, title: "Plan", text: "We agree on the right scope, priorities, and a practical roadmap." },
            { icon: ServerCog, title: "Build", text: "We develop and refine the solution with regular feedback." },
            { icon: Network, title: "Support & improve", text: "We help launch, review results, and plan what comes next." },
          ].map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="rounded-xl border border-stone-200 bg-[#fbf7f3] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">{String(index + 1).padStart(2, "0")}</span>
              <Icon className="mx-auto mt-4 h-6 w-6 text-brand-700" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-12 rounded-2xl bg-[#fbf7f3] p-8 text-center sm:p-10">
        <h2 className="text-2xl font-extrabold text-stone-900">
          A straightforward approach to useful technology
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-stone-600">
          Every organization has different workflows, customers, and growth goals.
          Gargi works with you to understand your needs, clarify priorities, and build software and technology solutions that fit your operations.
        </p>
        <button
          onClick={onOpenContact}
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
);








