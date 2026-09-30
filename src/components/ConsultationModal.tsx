import React, { useState } from "react";
import { motion } from "motion/react";
import { X, CheckCircle2, Send, Calendar } from "lucide-react";
import { COMPANY_SERVICES } from "../data/servicesData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGoal?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultGoal = "Custom Software Development",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    goal: defaultGoal,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  if (!isOpen) return null;
  const update = (key: keyof typeof formData, value: string) =>
    setFormData((current) => ({ ...current, [key]: value }));
  const fieldClass =
    "w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-200";
  const labelClass = "mb-1.5 block text-xs font-semibold text-stone-700";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-stone-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between bg-[#2c2028] p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <h3 id="consultation-title" className="text-lg font-bold">
                Talk with Gargi
              </h3>
              <p className="text-xs text-stone-300">
                Tell us about the technology your business needs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close form"
            className="rounded-md p-1 text-stone-300 transition hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">
                Thanks for getting in touch
              </h4>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-stone-600">
                Thanks, {formData.name || "there"}. Your message has been
                recorded in this page. Connect the form to Gargi&apos;s email
                or enquiry system to receive submissions.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  Your name *
                  <input
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
                <label className={labelClass}>
                  Work email *
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  Phone (optional)
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
                <label className={labelClass}>
                  Organization (optional)
                  <input
                    autoComplete="organization"
                    placeholder="Company or organization"
                    value={formData.company}
                    onChange={(event) => update("company", event.target.value)}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
              </div>
              <label className={labelClass}>
                What do you need help with?
                <select
                  value={formData.goal}
                  onChange={(event) => update("goal", event.target.value)}
                  className={`${fieldClass} mt-1.5`}
                >
                  {COMPANY_SERVICES.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                  <option>Other</option>
                </select>
              </label>
              <label className={labelClass}>
                Tell us a little more
                <textarea
                  rows={3}
                  placeholder="Tell us about your project, goals, and what you need help with..."
                  value={formData.message}
                  onChange={(event) => update("message", event.target.value)}
                  className={`${fieldClass} mt-1.5 resize-y`}
                />
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                <Send className="h-4 w-4" />
                <span>Send enquiry</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};




