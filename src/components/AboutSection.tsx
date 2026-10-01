import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Eye, Lightbulb, LockKeyhole, Network, ServerCog, Target, X } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discover",
    text: "We learn about your goals, users, workflows, and constraints.",
    headline: "Start with a clear understanding of your needs.",
    details: "We listen to your team and learn how your business works today, so the solution starts with the right problem and the people it needs to serve.",
    help: ["Understand your goals and users", "Review current workflows and tools", "Identify constraints and opportunities", "Agree on what success should look like"],
  },
  {
    icon: Target,
    title: "Plan",
    text: "We agree on the right scope, priorities, and a practical roadmap.",
    headline: "Turn the right priorities into a practical plan.",
    details: "We shape discovery into a clear roadmap, aligning scope, technical choices, milestones, and expectations before development begins.",
    help: ["Define scope and priorities", "Choose a suitable technical approach", "Set milestones and responsibilities", "Plan for security and future growth"],
  },
  {
    icon: ServerCog,
    title: "Build",
    text: "We develop and refine the solution with regular feedback.",
    headline: "Build a useful solution, step by step.",
    details: "We deliver in focused stages, sharing progress and inviting feedback as we develop and refine the solution around your requirements.",
    help: ["Develop software around your workflows", "Share progress through regular reviews", "Test quality, usability, and reliability", "Adjust based on your team's feedback"],
  },
  {
    icon: Network,
    title: "Support & improve",
    text: "We help launch, review results, and plan what comes next.",
    headline: "Keep your solution working as your needs change.",
    details: "We support the transition into everyday use, help your team get comfortable, and plan sensible improvements as your business evolves.",
    help: ["Prepare for launch and handover", "Help your team use the solution", "Maintain and troubleshoot systems", "Identify useful next improvements"],
  },
];

type ProcessStep = (typeof processSteps)[number];
interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [selectedProcess, setSelectedProcess] = useState<ProcessStep | null>(null);

  useEffect(() => {
    if (!selectedProcess) return;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProcess(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [selectedProcess]);

  return (
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
          { icon: ServerCog, title: "Custom software", text: "Software solutions shaped around the way your teams work." },
          { icon: LockKeyhole, title: "Controlled access", text: "Cloud and security practices designed to help protect your digital operations." },
          { icon: Network, title: "Connected operations", text: "Practical integrations help your tools, data, and teams work together." },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-xl border border-stone-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
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
          {processSteps.map(({ icon: Icon, title, text, ...step }, index) => (
            <button
              key={title}
              type="button"
              onClick={() => setSelectedProcess({ icon: Icon, title, text, ...step })}
              aria-label={`Learn more about ${title}`}
              className="group rounded-xl border border-stone-200 bg-[#fbf7f3] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">{String(index + 1).padStart(2, "0")}</span>
              <Icon className="mx-auto mt-4 h-6 w-6 text-brand-700" aria-hidden="true" />
              <span className="mt-3 block font-bold text-stone-900">{title}</span>
              <span className="mt-2 block text-sm leading-6 text-stone-600">{text}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl bg-[#fbf7f3] p-8 text-center sm:p-10">
        <h2 className="text-2xl font-extrabold text-stone-900">A straightforward approach to useful technology</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-stone-600">
          Every organization has different workflows, customers, and growth goals.
          Gargi works with you to understand your needs, clarify priorities, and build software and technology solutions that fit your operations.
        </p>
        <button onClick={onOpenContact} className="mx-auto mt-7 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700">
          Start a conversation <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>

    {selectedProcess && createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-stone-950/70 p-3 backdrop-blur-sm sm:p-6"
        onClick={() => setSelectedProcess(null)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="process-dialog-title"
          aria-describedby="process-dialog-description"
          className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col items-center rounded-t-3xl bg-[#2c2028] px-5 py-5 text-center text-white sm:py-6">
            <button
              type="button"
              onClick={() => setSelectedProcess(null)}
              aria-label="Close process details"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-lg">
              <selectedProcess.icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-3 text-sm font-bold text-brand-300">Our approach</p>
            <h2 id="process-dialog-title" className="mt-1 text-2xl font-extrabold sm:text-3xl">{selectedProcess.title}</h2>
          </div>

          <div className="px-4 py-4 sm:px-7 sm:py-5">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-xl font-extrabold leading-tight text-stone-900 sm:text-2xl">{selectedProcess.headline}</h3>
              <p id="process-dialog-description" className="mt-2 text-sm leading-6 text-stone-600 sm:text-base">{selectedProcess.details}</p>
            </div>

            <h3 className="mt-4 text-center text-lg font-extrabold text-stone-900">How We Can Help</h3>
            <ul className="mx-auto mt-3 grid max-w-2xl grid-cols-2 gap-2">
              {(selectedProcess.help ?? []).map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl border border-stone-200 bg-[#fbf7f3] px-2.5 py-2.5 text-left text-xs font-medium leading-5 text-stone-700 sm:px-3 sm:text-sm">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-700" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>,
      document.body,
    )}
  </section>
  );
};
