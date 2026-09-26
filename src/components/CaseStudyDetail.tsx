import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageRoute } from "../types";

interface CaseStudyDetailProps {
  projectId?: string | null;
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  onNavigate,
  onOpenContact,
}) => (
  <main className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-4 py-16">
    <div className="max-w-xl text-center">
      <p className="text-sm font-bold uppercase tracking-[.18em] text-lime-700">
        Gargi Linux Access
      </p>
      <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
        Case studies coming soon
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Verified project details will be published here when available.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => onNavigate("our-work")}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Our Work
        </button>
        <button
          type="button"
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-lime-300"
        >
          Contact us <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </main>
);

