import React from "react";
import { motion } from "motion/react";
import { FileText } from "lucide-react";

const SECTIONS = [
  {
    title: "Use of Website",
    items: [
      "You may use this website for lawful purposes only.",
      "You agree not to misuse the website, attempt unauthorized access, or disrupt its operation.",
    ],
  },
  {
    title: "Enquiries and Consultations",
    items: [
      "The website enquiry forms are currently demonstration interfaces and do not transmit submissions. Contact Gargi through an operational channel when one is provided.",
      "Any pricing, timelines, or deliverables discussed are indicative until confirmed in a written agreement.",
    ],
  },
];

export const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        className="bg-[#13243a] text-white py-16 sm:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm text-slate-400">
              Last updated: September 26, 2026
            </p>
          </motion.div>
        </div>
      </motion.section>

      <main className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-base text-slate-700 leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            These Terms &amp; Conditions (&quot;Terms&quot;) apply to your use of the Gargi Linux Access website. The site provides general company and service information. Service descriptions may be draft content and do not create a service commitment. Any engagement is subject to a separate written agreement.
          </motion.p>

          {SECTIONS.map((section, idx) => (
            <motion.section
              key={section.title}
              className="mt-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm sm:text-base text-slate-600 leading-7"
                  >
                    <span className="text-blue-700 mt-1">â€¢</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}

          <motion.section
            className="mt-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Intellectual Property
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              All content on this website (including text, graphics, logos, and
              design) is owned by Gargi Linux Access or used with permission,
              unless otherwise stated. You may not reproduce or distribute it
              without written consent.
            </p>
          </motion.section>

          <motion.section
            className="mt-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Limitation of Liability
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              We provide this website on an &quot;as is&quot; basis. We do not
              guarantee uninterrupted availability or that the website will be
              free of errors. To the maximum extent permitted by law,
              Gargi Linux Access is not liable for any damages arising from
              your use of the website.
            </p>
          </motion.section>

          <motion.section
            className="mt-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Third-Party Links
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              Links to third-party websites are provided for convenience. We do
              not control or endorse third-party content.
            </p>
          </motion.section>

          <motion.section
            className="mt-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Changes to Terms
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              We may update these Terms occasionally. Any changes will be posted
              on this page.
            </p>
          </motion.section>

          <motion.section
            className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Contact
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:atharvadeshmukh525@gmail.com"
                className="text-blue-700 hover:text-blue-800 font-medium"
              >
                atharvadeshmukh525@gmail.com
              </a>
              .
            </p>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

