import React from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "Information We Collect",
    items: [
      "Details you choose to share if you contact Gargi Linux Access through an available communication channel.",
      "The website enquiry and consultation forms currently demonstrate the user interface only; submissions are not sent to Gargi Linux Access through this website.",
      "The website hosting provider may process basic technical request data needed to deliver and secure the website. The exact logs and retention depend on the hosting provider.",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "To respond to enquiries received through operational communication channels.",
      "To operate, maintain, and protect the website.",
      "To follow up on communications you have initiated, where appropriate.",
    ],
  },
];

export const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
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
            Gargi Linux Access Pvt. Ltd. (&quot;Gargi Linux Access&quot;,
            &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your
            privacy. This Privacy Policy explains how we collect, use, store,
            and share information when you visit our website or contact us.
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
              Cookies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              This website does not currently use advertising or analytics cookies. Blog pages use URL routes for navigation.
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
              Data Security
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              We take reasonable measures to protect information against
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100%
              secure.
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
              Our website may contain links to third-party websites (for example
              social media). We are not responsible for the privacy practices of
              those websites.
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
              Contact Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
              If you have questions about this Privacy Policy, contact us at{" "}
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

