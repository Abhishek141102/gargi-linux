import React, { useState, useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  ChevronRight,
  Filter,
  ArrowRight,
  Quote,
  Check,
  Calendar,
  Sparkles,
  Search,
  ExternalLink,
} from "lucide-react";
import { PageRoute, ProjectCard } from "../types";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "../data/mockData";

const PROJECT_IMAGES: Record<string, string> = {
  "capernaum-erp": "capernaum_home.png",
  "focus-coaching-erp": "focus_home.jpeg",
  "rejos-logistics-crm": "rejos_home.png",
  "irasa-ecommerce": "irasa_home.png",
  "intern-management-system": "ims_home.png",
  "crm-training-management": "crm_home.png",
  "powerbi-courses-platform": "powerbi_home.png",
  "ims-mobile-app": "ims_mobile_app.png",
  "crm-mobile-app": "crm_mobile_home.png",
  "medical-coding-assessment": "medical_coding.jpeg",
  "training-assessment-platform": "training_assessment.jpg",
  "amazon-reviews-ai": "amazon_customer.jpeg",
  "startup-funding-predictor": "startup_fund.png",
};

interface OurWorkPortfolioProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
  selectedGoalFilter?: string;
  selectedIndustryFilter?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

export const OurWorkPortfolio: React.FC<OurWorkPortfolioProps> = ({
  onNavigate,
  onOpenContact,
  onSelectProject,
  selectedGoalFilter = "All Goals",
  selectedIndustryFilter = "All Industries",
}) => {
  const [goalFilter, setGoalFilter] = useState<string>(
  selectedGoalFilter || "All Goals"
);

const [industryFilter, setIndustryFilter] = useState<string>(
  selectedIndustryFilter || "All Industries"
);

const [serviceFilter, setServiceFilter] = useState<string>("All Services");
  const [showMore, setShowMore] = useState(false);

  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleTestimonialScroll = () => {
    const el = testimonialScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveTestimonial(index);
  };

  const scrollToTestimonial = (index: number) => {
    const el = testimonialScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  // Filter options
  const goalOptions = ["All Goals", "Automate", "Scale"];
  const industryOptions = [
    "All Industries",
    "Capernaum Solutions",
    "Focus Coaching Classes",
    "Rejos Transport",
    "Irasa Perfumes",
    "Educational Institutions",
    "TechnoKraft Solutions",
    "Training Institute",
    "Sales & Institute Teams",
    "Medical Training",
    "Corporate Training",
    "E-Commerce Analytics",
    "Venture Ecosystem",
  ];
  const serviceOptions = [
    "All Services",
    "Custom ERP Development",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "AI & Machine Learning",
  ];

  // Filtering logic
  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchGoal =
      goalFilter === "All Goals" ||
      proj.goal.toLowerCase() === goalFilter.toLowerCase();
    const matchIndustry =
      industryFilter === "All Industries" ||
      proj.industry.toLowerCase().includes(industryFilter.toLowerCase()) ||
      industryFilter.toLowerCase().includes(proj.industry.toLowerCase());
    const matchService =
      serviceFilter === "All Services" ||
      proj.service.toLowerCase() === serviceFilter.toLowerCase();
    return matchGoal && matchIndustry && matchService;
  });

  const handleCaseStudyClick = (projectId: string) => {
    onSelectProject?.(projectId);
    onNavigate("case-study");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="our-work-page" className="bg-white min-h-screen">
      {/* Header & Breadcrumb */}
      <motion.div
        className="border-b border-slate-200 bg-slate-50/50"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium mb-4">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-semibold">Our Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Real stories. Real impact. See how we help businesses transform and
            grow.
          </p>

          {/* Filter Toolbar matching screenshot */}
          <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
            {/* Goal Filter */}
            <div className="flex-1 min-w-[170px]">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Goal
              </label>
              <select
                id="filter-goal-select"
                value={goalFilter}
                onChange={(e) => setGoalFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {goalOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div className="flex-1 min-w-[170px]">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Industry
              </label>
              <select
                id="filter-industry-select"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {industryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Filter */}
            <div className="flex-1 min-w-[170px]">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Service
              </label>
              <select
                id="filter-service-select"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset / Filter Button */}
            <div className="self-end">
              <button
                id="filter-apply-btn"
                onClick={() => {
                  setGoalFilter("All Goals");
                  setIndustryFilter("All Industries");
                  setServiceFilter("All Services");
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Filter className="w-4 h-4" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Grid (3x2 Layout) */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-lg font-semibold text-slate-700">
              No case studies match the selected filters.
            </p>
            <button
              onClick={() => {
                setGoalFilter("All Goals");
                setIndustryFilter("All Industries");
                setServiceFilter("All Services");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                whileHover={{ y: -4, scale: 1.012 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                onClick={() => handleCaseStudyClick(project.id)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400/80 flex flex-col justify-between cursor-pointer"
              >
                {/* Top Image Banner with Category Pill */}
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <motion.img
                      src={`${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/"}assets/${PROJECT_IMAGES[project.id]}`}
                      alt={project.title}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-xs text-white text-xs font-semibold rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* 2 Core Metric Callouts */}
                    <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-2xl font-black text-blue-600 block tracking-tight">
                          {project.metric1.value}
                        </span>
                        <span className="text-xs font-medium text-slate-500 block mt-0.5">
                          {project.metric1.label}
                        </span>
                      </div>
                      <div>
                        <span className="text-2xl font-black text-blue-600 block tracking-tight">
                          {project.metric2.value}
                        </span>
                        <span className="text-xs font-medium text-slate-500 block mt-0.5">
                          {project.metric2.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Link "View Case Study →" */}
                <div className="px-6 pb-6 pt-2">
                  <div className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Testimonials Section (Dark Navy Background) */}
      <motion.section
        id="testimonials-section"
        className="bg-[#0B0F19] text-white py-20 border-y border-slate-800"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Our Valued Clients Say About TechnoKraft
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Partnerships built on trust. Results that speak.
            </p>
          </div>

          {/* Testimonial Cards: horizontal scroll-snap on mobile, grid on desktop */}
          <div
            ref={testimonialScrollRef}
            onScroll={handleTestimonialScroll}
            className="flex md:grid md:grid-cols-2 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
          >
            {TESTIMONIALS.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                whileHover={{ y: -5 }}
                className="w-full md:w-auto shrink-0 snap-center bg-slate-900/90 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <Quote className="w-10 h-10 text-blue-500/30 mb-4" />
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 pt-4 border-t border-slate-800/80">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-blue-500">
                    {item.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot Pagination Indicator — mobile only, tied to actual scroll position */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeTestimonial === idx
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA Banner (White rounded container) */}
      <motion.section
        className="py-20 bg-slate-100/70"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                Let&apos;s discuss how we can help you achieve your next
                milestone.
              </p>

              <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
                <button
                  id="cta-schedule-consultation-btn"
                  onClick={onOpenContact}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
                <button
                  id="cta-explore-work-btn"
                  onClick={() => onNavigate("our-work")}
                  className="px-6 py-3.5 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-lg transition-all cursor-pointer"
                >
                  Explore Our Work
                </button>
              </div>
            </div>

            {/* Enterprise Dashboard & Team Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white border border-slate-700 shadow-2xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold">
                      TechnoKraft Platform
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-medium">
                    Verified ROI
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      Target Efficiency
                    </span>
                    <span className="text-xs font-bold text-blue-400">
                      +45%
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      Deployment Velocity
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      3x Faster
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      Cloud Cost Savings
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      -32%
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
