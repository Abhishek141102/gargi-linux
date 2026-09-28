import React from "react";
import { ArrowRight, CheckCircle2, ServerCog } from "lucide-react";
import { motion } from "motion/react";
import { companyServiceBySlug } from "../data/servicesData";

interface ServiceDetailProps {
  slug: string;
  onOpenContact: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  slug,
  onOpenContact,
}) => {
  const service = companyServiceBySlug(slug);

  if (!service)
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Service Not Found
          </h1>
          <p className="mt-3 text-slate-600">
            Please choose a service from the Our Services menu.
          </p>
        </div>
      </section>
    );

  return (
    <div className="bg-white">
      <motion.section
        className="bg-[#13243a] py-16 text-white sm:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.18em] text-blue-300">
            <ServerCog className="h-4 w-4" /> Our Services
          </p>
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {service.summary}
          </p>
        </div>
      </motion.section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-blue-700">
              Service overview
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              A solution shaped around your business
            </h2>
            <p className="mt-5 leading-7 text-slate-600">{service.overview}</p>
            
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              How we can help
            </h2>
            <ul className="mt-6 space-y-4">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenContact}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Discuss this service <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


