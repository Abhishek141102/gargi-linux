import React from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { PageRoute } from "../types";

interface OurWorkPortfolioProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
  selectedGoalFilter?: string;
  selectedIndustryFilter?: string;
}

export const OurWorkPortfolio: React.FC<OurWorkPortfolioProps> = ({
  onNavigate,
  onOpenContact,
}) => (
  <main className="min-h-[70vh] bg-slate-50">
    <section className="bg-[#292a2d] px-4 py-16 text-center text-white sm:px-6 sm:py-20">
      <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-400">
        Gargi Linux Access
      </p>
      <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
        Our Work
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
        Verified Linux infrastructure projects and customer stories will be shared here when they are ready.
      </p>
    </section>
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
      <BriefcaseBusiness className="mx-auto h-10 w-10 text-lime-700" />
      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        Case studies coming soon
      </h2>
      <p className="mt-3 leading-7 text-slate-600">
        Contact our team to discuss Linux server setup, administration, security, or support.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-lime-300"
        >
          Contact our team <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Back to Home
        </button>
      </div>
    </section>
  </main>
);

