import React, { useState } from "react";
import { Menu, X, ChevronRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { PageRoute } from "../types";
import { AnimatePresence, motion } from "motion/react";
import { LINUX_SERVICES } from "../data/linuxServicesData";

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
  onServiceNavigate: (slug: string) => void;
  onIndustryNavigate: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
  onServiceNavigate,
  onIndustryNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null,
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const isDark = true;

  const navLinks = [
    { label: "Home", page: "home" as PageRoute },
    {
      label: "Linux Services",
      page: "home" as PageRoute,
      hash: "#services",
      dropdown: LINUX_SERVICES.map((service) => service.title),
    },
    { label: "Careers", page: "opportunities" as PageRoute },
    { label: "About", page: "about" as PageRoute },
    { label: "Blog", page: "blogs" as PageRoute },
    { label: "Contact Us", page: "contact" as PageRoute },
  ];

  const handleLinkClick = (item: {
    label: string;
    page: PageRoute;
    hash?: string;
  }) => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);

    // Navigate to the page first
    onNavigate(item.page);

    // Scroll to section after home page is rendered
    if (item.hash) {
      setTimeout(() => {
        if (!item.hash) return;

        const el = document.querySelector(item.hash);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isDark
          ? "bg-[#292a2d] text-white border-b border-white/10 shadow-md"
          : "bg-[#292a2d] text-white border-b border-white/10 shadow-xs"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-23 flex items-center justify-between"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Gargi Linux Access logo */}
        <motion.div
          id="nav-brand-logo"
          onClick={() => onNavigate("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center cursor-pointer group select-none"
        >
          <img
            src={`${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/"}assets/gargi_linux.png`}
            alt="Gargi Linux Access Pvt. Ltd."
            className="h-24 w-26 object-contain"
          />
        </motion.div>

        {/* Center: Desktop Navigation Links */}
        <motion.nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center space-x-7"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {navLinks.map((item) => {
            const isActive =
              (item.page === currentPage && !item.hash) ||
              (item.label === "Linux Services" && currentPage === "service-detail") ||
              (item.page === "our-work" &&
                currentPage === "case-study" &&
                item.label === "Our Work");

            if ("dropdown" in item && item.dropdown) {
              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button
                    id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-1.5 ${
                      isDark
                        ? isActive
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white"
                        : isActive
                          ? "text-lime-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {openDesktopDropdown === item.label && (
                    <div className={`absolute top-full left-0 pt-3 w-56 z-50`}>
                      <div
                        className={`rounded-lg shadow-xl border overflow-hidden ${
                          isDark
                            ? "bg-[#0B0F19] border-slate-800"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        {(item.dropdown as Array<string | { label: string; slug: string }>).map((sub) => {
                          const isIndustry = item.label === "Industries";
                          const subLabel = isIndustry
                            ? (sub as { label: string; slug: string }).label
                            : (sub as string);
                          const subKey = isIndustry
                            ? (sub as { label: string; slug: string }).slug
                            : (sub as string);
                          return (
                            <button
                              key={subKey}
                              onClick={() => {
                                setOpenDesktopDropdown(null);
                                if (isIndustry) {
                                  onIndustryNavigate(
                                    (sub as { label: string; slug: string })
                                      .slug,
                                  );
                                } else {
                                  onServiceNavigate(
                                    LINUX_SERVICES.find((service) => service.title === sub)?.slug ?? "",
                                  );
                                }
                                setMobileMenuOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                                isDark
                                  ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              {subLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            }

            return (
              <motion.button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleLinkClick(item)}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: "easeOut" },
                  },
                }}
                className={`text-sm font-medium transition-colors cursor-pointer py-1.5 ${
                  isDark
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                    : isActive
                      ? "text-lime-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Right: CTA Button "Let's Talk" */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            id="nav-cta-talk-btn"
            onClick={onOpenContact}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-5 py-2.5 rounded-md bg-lime-400 hover:bg-lime-300 text-[#242629] font-semibold text-sm transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Get in touch</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <motion.button
            id="mobile-menu-toggle-btn"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${
              isDark
                ? "text-slate-300 hover:bg-slate-800"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`lg:hidden px-4 pt-2 pb-6 border-b overflow-hidden ${
              isDark
                ? "bg-[#0B0F19] border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <motion.div
              className="flex flex-col space-y-3 pt-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.08,
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {navLinks.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  const isOpen = openMobileDropdown === item.label;
                  return (
                    <motion.div
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.3, ease: "easeOut" },
                        },
                      }}
                    >
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(isOpen ? null : item.label)
                        }
                        className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isDark
                            ? "hover:bg-slate-800 text-slate-200"
                            : "hover:bg-slate-100 text-slate-800"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pl-4 flex flex-col space-y-1 mt-1">
                          {(item.dropdown as Array<string | { label: string; slug: string }>).map((sub) => {
                            const isIndustry = item.label === "Industries";
                            const subLabel = isIndustry
                              ? (sub as { label: string; slug: string }).label
                              : (sub as string);
                            const subKey = isIndustry
                              ? (sub as { label: string; slug: string }).slug
                              : (sub as string);
                            return (
                              <button
                                key={subKey}
                                onClick={() => {
                                  if (isIndustry) {
                                    onIndustryNavigate(
                                      (sub as { label: string; slug: string })
                                        .slug,
                                    );
                                  } else {
                                    onServiceNavigate(
                                      LINUX_SERVICES.find((service) => service.title === sub)?.slug ?? "",
                                    );
                                  }
                                  setMobileMenuOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                  isDark
                                    ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    : "text-slate-600 hover:bg-slate-100"
                                }`}
                              >
                                {subLabel}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  );
                }

                return (
                  <motion.button
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" },
                      },
                    }}
                    onClick={() => handleLinkClick(item)}
                    className={`text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isDark
                        ? "hover:bg-slate-800 text-slate-200"
                        : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              <div className="pt-2">
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                  className="w-full py-3 rounded-md bg-lime-400 text-[#242629] font-semibold text-center text-sm shadow-sm"
                >
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
