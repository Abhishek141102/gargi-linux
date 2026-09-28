import React from "react";
import { ArrowRight, LockKeyhole, Network, ServerCog } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
}) => (
  <section className="bg-white">
    <div className="bg-[#13243a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-300">
          About the company
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Gargi Linux Access Pvt. Ltd.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          A Linux-focused technology partner helping organizations manage
          infrastructure, access, and the systems behind their day-to-day
          operations.
        </p>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: ServerCog,
            title: "Linux infrastructure",
            text: "Support for the Linux environments your teams and services rely on.",
          },
          {
            icon: LockKeyhole,
            title: "Controlled access",
            text: "Thoughtful access practices help protect systems and keep work moving.",
          },
          {
            icon: Network,
            title: "Connected operations",
            text: "Practical guidance to keep servers, services, and people working together.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-xl border border-slate-200 p-7 text-center"
          >
            <Icon className="mx-auto h-7 w-7 text-blue-700" />
            <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-2 leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-[#f8fafc] p-8 text-center sm:p-10">
        <h2 className="text-2xl font-extrabold text-slate-900">
          A straightforward approach to dependable systems
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
          Every organization has different infrastructure and support needs.
          Gargi works with you to understand the environment, clarify
          priorities, and provide practical Linux expertise that fits your
          operations.
        </p>
        <button
          onClick={onOpenContact}
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
);
