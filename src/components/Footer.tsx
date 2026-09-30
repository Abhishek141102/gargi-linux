import React from "react";
import { PageRoute } from "../types";
import { COMPANY_SERVICES } from "../data/servicesData";
import { INDUSTRIES } from "../data/industriesData";

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onServiceNavigate: (slug: string) => void;
  onOpenContact: () => void;
  onIndustryNavigate: (slug: string) => void;
}

const linkClass =
  "block w-full text-left hover:text-blue-300 transition-colors cursor-pointer";
const headingClass =
  "text-xs font-bold uppercase tracking-wider text-blue-300 mb-3";

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onServiceNavigate,
  onOpenContact,
  onIndustryNavigate,
}) => {
  return (
    <footer
      id="global-footer"
      className="text-white border-t border-white/10"
      style={{ backgroundColor: "#10243a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-[repeat(14,minmax(0,1fr))] lg:gap-x-8">
          {/* Column 1: Logo & Mission Statement */}
          <div className="space-y-3 lg:col-span-2">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center cursor-pointer group"
            >
              <img
                src={`${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/"}assets/gargi_linux.png`}
                alt="Gargi Linux Access Pvt. Ltd."
                className="h-24 w-26 object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Custom software, cloud engineering, and security solutions for
              businesses.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Services</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {COMPANY_SERVICES.map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => onServiceNavigate(service.slug)}
                    className={linkClass}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Industries</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {INDUSTRIES.map((industry) => (
                <li key={industry.slug}>
                  <button onClick={() => onIndustryNavigate(industry.slug)} className={linkClass}>
                    {industry.navLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4: Company */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className={linkClass}
                >
                  About Us
                </button>
              </li>
              
              <li>
                <button onClick={onOpenContact} className={linkClass}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Resources</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              
              <li>
                <button
                  onClick={() => onNavigate("blogs")}
                  className={linkClass}
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("privacy-policy")}
                  className={linkClass}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("terms-&-conditions")}
                  className={linkClass}
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 6: Office Info */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Office Info</h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="text-slate-300 font-semibold mb-1">Address</p>
                <p className="leading-5">
                  C.S. No. 333/32, Trimbakeshwar, Trimbak,<br />Nashik, Maharashtra, India, 422212
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Mobile</p>
                <a
                  href="tel:+919689973967"
                  className="hover:text-blue-300 transition-colors"
                >
                  +91 96899 73967
                </a>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Email</p>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-blue-300 transition-colors break-words"
                >
                  contact@example.com{" "}
                </a>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Open Hours</p>
                <p className="leading-5">
                  Mon &ndash; Sat
                  <br />
                  09:30 AM &ndash; 08:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-8 border-t border-blue-400/20 pt-5 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Gargi Linux Access Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};











