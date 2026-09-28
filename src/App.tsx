import React, { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PageRoute } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ServiceDetail } from "./components/ServiceDetail";
import { IndustryDetail } from "./components/IndustryDetail";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/Terms&Conditions";
import { Blogs } from "./components/Blogs";
import { BlogDetail } from "./components/BlogDetails";
import { Opportunities } from "./components/Opportunities";
import { ScrollReveal } from "./components/ScrollReveal";

export default function App() {
  
  const getInitialRoute = (): PageRoute => {
    const hash = window.location.hash.toLowerCase();

    if (hash.includes("#/services/")) return "service-detail";
    if (hash.includes("#/about")) return "about";
    if (hash.includes("#/contact")) return "contact";
    if (hash.includes("#/industries/")) return "industry-detail";
    if (hash.startsWith("#/privacy-policy")) return "privacy-policy";
    if (hash.startsWith("#/terms-&-conditions")) return "terms-&-conditions";
    if (hash.startsWith("#/blogs/")) return "blog-detail";
    if (hash.startsWith("#/blog-detail")) return "blog-detail";
    if (hash.startsWith("#/blogs")) return "blogs";
    if (hash.startsWith("#/opportunities")) return "opportunities";

    return "home";
  };

  const getInitialServiceSlug = (): string | null => {
    const hash = window.location.hash.toLowerCase();
    const match = hash.match(/#\/services\/([^?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const getInitialIndustrySlug = (): string | null => {
    const hash = window.location.hash.toLowerCase();
    const match = hash.match(/#\/industries\/([^?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const getInitialBlogSlug = (): string | null => {
    const match = window.location.hash.toLowerCase().match(/#\/blogs\/([^?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute());
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(
    getInitialServiceSlug(),
  );
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<
    string | null
  >(getInitialIndustrySlug());
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(getInitialBlogSlug());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pageTransitionKey = [currentPage, selectedServiceSlug ?? "", selectedIndustrySlug ?? "", selectedBlogSlug ?? ""].join(":");

  
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
      setSelectedServiceSlug(getInitialServiceSlug());
      setSelectedIndustrySlug(getInitialIndustrySlug());
      setSelectedBlogSlug(getInitialBlogSlug());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const scrollToTopInstantly = () => {
    const html = document.documentElement;
    const body = document.body;

    // Temporarily disable any global CSS scroll-behavior: smooth.
    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    html.scrollTop = 0;
    body.scrollTop = 0;

    // Restore the original styles after the scroll is completed.
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    });
  };

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    scrollToTopInstantly();

    
    const hash = page === "home" ? "#/" : `#/${page}`;

    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
  };

  const handleServiceNavigate = (slug: string) => {
    setSelectedServiceSlug(slug);
    setCurrentPage("service-detail");
    const hash = `#/services/${slug}`;
    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
    scrollToTopInstantly();
  };

  const handleIndustryNavigate = (slug: string) => {
    setSelectedIndustrySlug(slug);
    setCurrentPage("industry-detail");
    const hash = `#/industries/${slug}`;
    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
    scrollToTopInstantly();
  };

  
  const handleBlogNavigate = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentPage("blog-detail");
    const hash = `#/blogs/${slug}`;
    if (window.location.hash !== hash) window.history.pushState({}, "", hash);
    scrollToTopInstantly();
  };

  useLayoutEffect(() => {
    scrollToTopInstantly();
  }, [currentPage, selectedServiceSlug, selectedIndustrySlug, selectedBlogSlug]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-200 selection:text-slate-900">
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsConsultationOpen(true)}
        onServiceNavigate={handleServiceNavigate}
        onIndustryNavigate={handleIndustryNavigate}
      />

      {/* Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageTransitionKey}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
          >
            <ScrollReveal>
            {currentPage === "home" && (
              <>
                <HeroSection
                  onNavigate={handleNavigate}
                  onOpenContact={() => setIsConsultationOpen(true)}
                  onServiceNavigate={handleServiceNavigate}
                />
              </>
            )}

            {currentPage === "service-detail" && selectedServiceSlug && (
              <ServiceDetail
                key={selectedServiceSlug}
                slug={selectedServiceSlug}
                onOpenContact={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === "industry-detail" && selectedIndustrySlug && (
              <IndustryDetail
                key={selectedIndustrySlug}
                slug={selectedIndustrySlug}
                onOpenContact={() => setIsConsultationOpen(true)}
              />
            )}

            {currentPage === "about" && (
              <AboutSection onOpenContact={() => setIsConsultationOpen(true)} />
            )}

            {currentPage === "contact" && <ContactSection />}

            {currentPage === "privacy-policy" && <PrivacyPolicy />}

            {currentPage === "terms-&-conditions" && <TermsOfUse />}

            {currentPage === "blogs" && <Blogs onNavigate={handleNavigate} onBlogNavigate={handleBlogNavigate} />}

            {currentPage === "blog-detail" && (
              <BlogDetail slug={selectedBlogSlug ?? ""} onNavigate={handleNavigate} onBlogNavigate={handleBlogNavigate} />
            )}

            {currentPage === "opportunities" && (
              <Opportunities onNavigate={handleNavigate} />
            )}
            </ScrollReveal>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Dark Theme Footer */}
      <Footer
        onNavigate={handleNavigate}
        onServiceNavigate={handleServiceNavigate}
        onOpenContact={() => setIsConsultationOpen(true)}
        onIndustryNavigate={handleIndustryNavigate}
      />

      {/* Interactive Consultation / Let's Talk Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
