import React from "react";
import { PageRoute } from "../types";
import { LINUX_SERVICES } from "../data/linuxServicesData";

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onServiceNavigate: (slug: string) => void;
  onOpenContact: () => void;
  onIndustryNavigate?: (slug: string) => void;
}

const linkClass =
  "block w-full text-left hover:text-blue-300 transition-colors cursor-pointer";
const headingClass =
  "text-xs font-bold uppercase tracking-wider text-blue-300 mb-3";

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onServiceNavigate,
  onOpenContact,
}) => {
  return (
    <footer
      id="global-footer"
      className="text-white border-t border-white/10"
      style={{ backgroundColor: "#10243a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
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
              Linux infrastructure, secure access, and technical support for
              business systems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md border border-blue-400/25 bg-blue-400/10 hover:bg-blue-600 text-blue-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md border border-blue-400/25 bg-blue-400/10 hover:bg-blue-600 text-blue-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                f
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-md border border-blue-400/25 bg-blue-400/10 hover:bg-blue-600 text-blue-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.003L2 22l5.11-1.32A9.958 9.958 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.163a8.14 8.14 0 01-4.146-1.135l-.297-.176-3.03.783.808-2.955-.193-.303A8.14 8.14 0 013.837 12c0-4.507 3.657-8.163 8.164-8.163S20.163 7.493 20.163 12 16.508 20.163 12.001 20.163z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Linux Services */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Linux Services</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {LINUX_SERVICES.map((service) => (
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

          {/* Column 3: Company */}
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
                <button
                  onClick={() => onNavigate("opportunities")}
                  className={linkClass}
                >
                  Careers
                </button>
              </li>
              
              <li>
                <button onClick={onOpenContact} className={linkClass}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Resources</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenContact} className={linkClass}>
                  Technical Support
                </button>
              </li>
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

          {/* Column 5: Office Info */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Office Info</h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="text-slate-300 font-semibold mb-1">Address</p>
                <p className="leading-5">
                  3rd Floor, Kanchwala Avenue, Above Viju&apos;s Dabeli,
                  <br />
                  Thatte Nagar Marg, College Road, Nashik, Maharashtra 422005
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Mobile</p>
                <a
                  href="tel:+910000000000"
                  className="hover:text-blue-300 transition-colors"
                >
                  +91 00000 00000{" "}
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
            © {new Date().getFullYear()} Gargi Linux Access Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
