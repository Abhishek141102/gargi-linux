import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Laptop,
  Lightbulb,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Upload,
} from "lucide-react";
import { PageRoute } from "../types";

interface OpportunitiesProps {
  onNavigate: (page: PageRoute) => void;
}

const openPositions = [
  {
    title: "Linux Support Engineer",
    location: "Nashik, Maharashtra · Hybrid",
    type: "Full-time",
    description:
      "Help customers keep Linux environments reliable through system administration, troubleshooting, maintenance, and clear technical guidance.",
  },
  {
    title: "Junior DevOps Engineer",
    location: "Nashik, Maharashtra · Hybrid",
    type: "Full-time",
    description:
      "Support Linux infrastructure and deployment workflows while learning automation, cloud operations, monitoring, and DevOps practices.",
  },
  {
    title: "Linux Administration Intern",
    location: "Nashik, Maharashtra · Hybrid",
    type: "Internship",
    description:
      "Build practical experience with Linux systems, user access, server checks, documentation, and guided infrastructure projects.",
  },
];

const workBenefits = [
  {
    icon: BookOpen,
    title: "Learning & Growth",
    description:
      "Build practical skills with mentoring, hands-on work, and room to grow your technical career.",
  },
  {
    icon: Laptop,
    title: "Flexible Work",
    description:
      "Collaborate with the team through a flexible hybrid approach designed around focused work.",
  },
  {
    icon: Lightbulb,
    title: "Open-Source Focus",
    description:
      "Work with Linux and open-source tools that help make business infrastructure dependable.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description:
      "Share ideas, learn from one another, and solve customer challenges as a close-knit team.",
  },
];

const perks = [
  { icon: HeartPulse, label: "Health Insurance" },
  { icon: Laptop, label: "Hybrid Work" },
  { icon: Clock3, label: "Flexible Hours" },
  { icon: ShieldCheck, label: "Certification Support" },
];

export const Opportunities: React.FC<OpportunitiesProps> = ({ onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToApplication = (role = "") => {
    if (role) setSelectedRole(role);
    document.getElementById("apply-now")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputClassName =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-600 focus:ring-2 focus:ring-lime-200";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-[#292a2d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-400">
              Careers
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Join the Gargi Linux Team
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
              Help businesses build secure, dependable Linux systems. Join a team
              that values practical learning, open-source technology, and thoughtful support.
            </p>
            <button
              type="button"
              onClick={() => scrollToApplication()}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-bold text-[#242629] transition hover:bg-lime-300"
            >
              Explore opportunities <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-700">
              Why Work With Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Grow your skills. Make a difference.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Do meaningful infrastructure work while learning alongside a team
              that cares about reliable service and sharing knowledge.
            </p>
          </header>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workBenefits.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-lime-50 text-lime-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-700">
              Open Positions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Find your next opportunity
            </h2>
          </header>

          {openPositions.length > 0 ? (
            <div className="mt-10 space-y-4">
              {openPositions.map((position) => (
                <article
                  key={position.title}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7"
                >
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-bold text-lime-800">
                        {position.type}
                      </span>
                    </div>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" /> {position.location}
                    </p>
                    <p className="mt-3 leading-6 text-slate-600">{position.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToApplication(position.title)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-[#242629] transition hover:bg-lime-300 sm:self-center"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-lime-600" />
              <p className="mt-4 text-lg font-bold text-slate-900">
                No open positions right now — send us your resume
              </p>
              <button
                type="button"
                onClick={() => scrollToApplication("Other")}
                className="mt-5 inline-flex items-center gap-2 font-bold text-lime-800 hover:text-lime-900"
              >
                Send a general application <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Perks */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-700">
              Perks & Benefits
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Support for doing your best work
            </h2>
          </header>
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
            {perks.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-50 text-lime-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-slate-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General application */}
      <section id="apply-now" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-9 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-lime-600" />
                <h2 className="mt-5 text-3xl font-extrabold text-slate-900">Thank You!</h2>
                <p className="mt-3 max-w-lg leading-7 text-slate-600">
                  Thanks for your interest in joining Gargi Linux Access. This demo
                  form is not connected to an application inbox yet.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-lime-400 px-5 py-3 font-bold text-[#242629] transition hover:bg-lime-300"
                >
                  Send another application
                </button>
              </div>
            ) : (
              <>
                <header className="text-center">
                  <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-700">
                    General Application
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Tell us about yourself
                  </h2>
                  <p className="mt-3 text-slate-600">
                    Interested in a role or have a different skill set? We’d like to hear from you.
                  </p>
                </header>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="career-name" className="text-sm font-semibold text-slate-700">Name *</label>
                      <input id="career-name" name="name" autoComplete="name" required className={inputClassName} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="career-email" className="text-sm font-semibold text-slate-700">Email *</label>
                      <input id="career-email" name="email" type="email" autoComplete="email" required className={inputClassName} placeholder="you@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="career-role" className="text-sm font-semibold text-slate-700">Role Interested In *</label>
                    <select
                      id="career-role"
                      name="role"
                      value={selectedRole}
                      onChange={(event) => setSelectedRole(event.target.value)}
                      required
                      className={inputClassName}
                    >
                      <option value="" disabled>Select a position</option>
                      {openPositions.map((position) => (
                        <option key={position.title} value={position.title}>{position.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="career-resume" className="text-sm font-semibold text-slate-700">Resume *</label>
                    <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-4 transition hover:border-lime-600">
                      <Upload className="h-5 w-5 shrink-0 text-lime-700" />
                      <span className="text-sm text-slate-600">Choose your resume (PDF, DOC, or DOCX)</span>
                      <input id="career-resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className="sr-only" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="career-message" className="text-sm font-semibold text-slate-700">Message *</label>
                    <textarea id="career-message" name="message" rows={5} required className={inputClassName} placeholder="Tell us about your experience and what you’re looking for." />
                  </div>

                  <button
                    type="submit"
                    className="mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-lime-400 px-7 py-3 font-bold text-[#242629] transition hover:bg-lime-300"
                  >
                    Send Application <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs leading-5 text-slate-500">
                    This form is a preview and does not send or store application data yet.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#292a2d] px-4 py-10 text-center text-white sm:px-6">
        <p className="text-slate-300">Want to learn more about Gargi Linux Access?</p>
        <button
          type="button"
          onClick={() => onNavigate("about")}
          className="mt-3 inline-flex items-center gap-2 font-bold text-lime-300 transition hover:text-lime-200"
        >
          Meet the company <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
};
