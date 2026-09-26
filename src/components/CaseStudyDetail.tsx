import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet,
  Unplug,
  EyeOff,
  Clock,
  Search,
  Compass,
  Code2,
  Cog,
  BarChart2,
  Sliders,
  Quote,
  TrendingUp,
  Layers,
  ShieldCheck,
  Smartphone,
  Monitor,
} from "lucide-react";
import { PageRoute } from "../types";
import {
  PORTFOLIO_PROJECTS,
  ROADMAP_PHASES,
  TESTIMONIALS,
} from "../data/mockData";

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

type ProjectDetail = {
  title: string;
  subtitle: string;
  industry: string;
  businessType: string;
  engagement: string;
  timeline: string;
  status: string;
  heroLabel: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  impact: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; designation: string };
};

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "capernaum-erp": {
    title: "Capernaum ERP: Streamlining Enterprise Operations",
    subtitle:
      "An integrated ERP solution designed to support operational growth, account orchestration and revenue milestones.",
    industry: "Capernaum Solutions",
    businessType: "Enterprise Business",
    engagement: "Custom ERP Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Enterprise ERP Platform",
    overview:
      "Capernaum ERP brings core business operations into one connected platform, helping teams manage operational activities, coordinate accounts and maintain visibility into business performance.",
    challenge:
      "Capernaum Solutions required a centralized corporate ERP to unify strategic account management, multi-department approval flows, resource tracking, and live executive revenue projections. Disconnected department spreadsheets were causing communication silos and delayed milestone sign-offs.",
    approach:
      "We studied existing operational workflows, identified repetitive tasks and designed a centralized ERP architecture with role-based access, connected modules and structured reporting.",
    solution:
      "The ERP platform connects operational workflows, account management and business reporting into a single digital ecosystem.",
    features: [
      "Centralized enterprise operations dashboard",
      "Account and customer orchestration",
      "Revenue milestone tracking",
      "Role-based access and permissions",
      "Workflow-based operational management",
      "Business reporting and performance visibility",
    ],
    impact: [
      { value: "Centralized", label: "Operational management" },
      { value: "Improved", label: "Account visibility" },
      { value: "Connected", label: "Business workflows" },
      { value: "Scalable", label: "ERP architecture" },
    ],
    testimonial: {
      quote:
        "TechnoKraft delivered an exceptional custom ERP & software solution that streamlined our business operations. The team's depth of technical knowledge and dedication to delivering on time exceeded our expectations.",
      author: "Jobin Joy",
      designation: "Founder & CEO, Capernaum Solutions",
    },
  },

  "focus-coaching-erp": {
    title: "Focus Coaching ERP: Managing Education Operations",
    subtitle:
      "A student management platform covering fee collections, batch attendance, exam analytics and multiple course streams.",
    industry: "Focus Coaching Classes",
    businessType: "Education",
    engagement: "Custom ERP Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Education Management ERP",
    overview:
      "Focus Coaching ERP helps coaching institute teams manage students, batches, fees, attendance and examination information from one platform, supporting 10+ course streams.",
    challenge:
      "Managing dozens of educational batches across 10th SSC, 11th/12th Science (PCM, PCB), CET, and NEET required complex manual tracking of student attendance, installment fee reminders, faculty lecture schedules, and test result analytics. Focus Coaching Classes needed a modern, centralized student management portal to streamline administrative operations.",
    approach:
      "We structured the platform around academic and administrative workflows, creating modules for student management, fees, batches, attendance and analytics.",
    solution:
      "The solution provides an integrated education ERP that connects academic administration with financial and performance tracking.",
    features: [
      "Student admission and profile management",
      "Fee collection and payment tracking",
      "Batch and class management",
      "Student attendance tracking",
      "Exam and performance analytics",
      "Support for 10+ course streams",
    ],
    impact: [
      { value: "10+", label: "Course streams supported" },
      { value: "Centralized", label: "Student records" },
      { value: "Automated", label: "Fee tracking" },
      { value: "Real-time", label: "Academic visibility" },
    ],
    testimonial: {
      quote:
        "Outstanding web and student portal development! TechnoKraft built a responsive learning and exam analytics platform that scaled effortlessly across our batches. Highly professional team.",
      author: "Bhupin Dutta",
      designation: "Academic Director, Focus Coaching Classes",
    },
  },

  "rejos-logistics-crm": {
    title: "Rejos Logistics CRM: Simplifying Freight Operations",
    subtitle:
      "A logistics CRM supporting freight records, driver allocations, rate cards and automated billing workflows.",
    industry: "Rejos Transport",
    businessType: "Logistics & Transportation",
    engagement: "Custom CRM Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Logistics CRM Platform",
    overview:
      "Rejos Logistics CRM manages freight operations and simplifies information flow between transport, driver and billing teams, supporting more than 39,000 Lorry Receipts.",
    challenge:
      "The logistics operation required better control over freight records, driver assignments, rate cards and billing activities while handling a high volume of transactions.",
    approach:
      "We mapped the freight lifecycle from Lorry Receipt creation to driver allocation, rate management and billing around connected operational records.",
    solution:
      "The CRM centralizes freight operations, driver management, rate cards and automated billing into one workflow-driven platform.",
    features: [
      "Lorry Receipt management",
      "Driver allocation and tracking",
      "Transport rate card management",
      "Automated billing workflows",
      "Freight record search and reporting",
      "Centralized logistics operations",
    ],
    impact: [
      { value: "39,000+", label: "Lorry Receipts managed" },
      { value: "Connected", label: "Freight workflows" },
      { value: "Automated", label: "Billing operations" },
      { value: "Centralized", label: "Driver allocation" },
    ],
    testimonial: {
      quote:
        "Their transport tracking CRM and cloud infrastructure integration was seamless. TechnoKraft automated our transport dispatch workflows with 100% reliability and excellent 24/7 support.",
      author: "Amit Verma",
      designation: "Operations Head, Rejos Transport Services",
    },
  },

  "irasa-ecommerce": {
    title: "Irasa E-Commerce: A Luxury Fragrance Experience",
    subtitle:
      "A luxury perfume e-commerce platform with a custom perfume builder, checkout experience and scent discovery.",
    industry: "Irasa Perfumes",
    businessType: "E-Commerce",
    engagement: "Web Application Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Luxury Fragrance E-Commerce",
    overview:
      "Irasa is a luxury fragrance e-commerce experience that helps customers explore scents, customize perfumes and complete purchases through a refined online shopping journey.",
    challenge:
      "Irasa Perfumes required a bespoke luxury e-commerce web platform that stood apart from generic Shopify templates. The client needed an interactive fragrance customizer where users could blend scent notes, a dynamic scent discovery quiz, frictionless checkout with UPI/Cards, and lightning-fast page load speeds on mobile.",
    approach:
      "We focused on product presentation, scent discovery, custom perfume configuration and a streamlined checkout experience.",
    solution:
      "The platform combines an elegant e-commerce interface with product discovery and custom perfume-building functionality.",
    features: [
      "Luxury product catalogue",
      "Custom perfume builder",
      "Scent discovery experience",
      "Product detail pages",
      "Cart and checkout flow",
      "Responsive shopping experience",
    ],
    impact: [
      { value: "Custom", label: "Perfume builder" },
      { value: "Smooth", label: "Checkout journey" },
      { value: "Premium", label: "Brand experience" },
      { value: "Responsive", label: "E-commerce platform" },
    ],
    testimonial: {
      quote:
        "The custom e-commerce web application and UI/UX design crafted by TechnoKraft transformed our customer engagement. Elegant layouts, fast checkouts, and smooth interactions boosted our online sales.",
      author: "Rakesh Shewale",
      designation: "Founder & Brand Head, Irasa Perfumes",
    },
  },
  "intern-management-system": {
    title: "Intern Management System: Connecting Teams and Interns",
    subtitle:
      "An internal management platform with admin and college dashboards, attendance, task records and intern tracking.",
    industry: "TechnoKraft Solutions",
    businessType: "Internal Operations",
    engagement: "Web Application Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Intern Management Platform",
    overview:
      "The Intern Management System supports internal teams and college coordinators in managing interns, attendance, tasks and communication from a centralized platform.",
    challenge:
      "Managing intern attendance, task records, college coordination and support requests manually made it difficult to maintain consistent records.",
    approach:
      "We created separate admin and college-facing dashboards with connected records for attendance, tasks, intern progress and communication.",
    solution:
      "The system centralizes intern operations and provides visibility into attendance, assigned tasks, progress and support communication.",
    features: [
      "Admin dashboard",
      "College dashboard",
      "Punch-in and punch-out attendance",
      "Jira task record integration",
      "Intern progress tracking",
      "Email support and communication",
    ],
    impact: [
      { value: "Centralized", label: "Intern records" },
      { value: "Connected", label: "Admin and college dashboards" },
      { value: "Tracked", label: "Attendance and tasks" },
      { value: "Improved", label: "Operational visibility" },
    ],
    testimonial: {
      quote: "The Intern Management System has streamlined our operations and improved visibility into intern performance.",
      author: "Rahul Makasare",
      designation: "Founder & Director, TechnoKraft Services",
    }
  },
  "crm-training-management": {
    title: "CRM Training Management Platform",
    subtitle:
      "A platform that manages the complete journey from enquiry to admission, fees, certificates and reporting.",
    industry: "Training Institute",
    businessType: "Education & Training",
    engagement: "Custom CRM Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Training CRM Platform",
    overview:
      "The CRM Training Management platform helps training institutes manage enquiries, admissions, student fees, certificate generation and operational reporting through a connected CRM.",
    challenge:
      "Training teams needed a structured way to track prospective students from initial enquiry through admission, payment and course completion.",
    approach:
      "We designed a workflow-based CRM connecting enquiry management, admission processing, fee tracking, certificate generation and reporting.",
    solution:
      "The platform provides a single source of truth for student enquiries, admissions, fees and training operations.",
    features: [
      "Enquiry management",
      "Admission workflow",
      "Student fee tracking",
      "Certificate generation",
      "Follow-up management",
      "Management reporting",
    ],
    impact: [
      { value: "End-to-end", label: "Student journey" },
      { value: "Automated", label: "Certificate generation" },
      { value: "Centralized", label: "Fee information" },
      { value: "Structured", label: "Enquiry follow-ups" },
    ],
    testimonial: {
      quote: "The CRM Training Management Platform has transformed how we manage student journeys and improved our operational efficiency.",
      author: "Arvind Thevar",
      designation: "Founder & Director, TechnoKraft Services",
    }
  },
  "powerbi-courses-platform": {
    title: "Power BI Courses Platform",
    subtitle:
      "A learning platform with live lectures, video materials, progress analytics and automated certificates.",
    industry: "Corporate Training",
    businessType: "Learning & Development",
    engagement: "Web Application Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Learning Analytics Platform",
    overview:
      "The Power BI Courses Platform provides learners with live lectures, video learning materials, progress tracking and course completion certificates.",
    challenge:
      "The training operation needed a digital platform to deliver learning content, track learner progress and simplify course completion management.",
    approach:
      "We combined course content delivery, live learning, progress analytics and certificate automation into a unified learning platform.",
    solution:
      "The platform supports the complete digital learning cycle from lectures and video materials to progress monitoring and certification.",
    features: [
      "Live lecture management",
      "Video learning materials",
      "Course progress tracking",
      "Learner analytics",
      "Course completion tracking",
      "Automatic certificate generation",
    ],
    impact: [
      { value: "Live", label: "Learning delivery" },
      { value: "Automated", label: "Course certificates" },
      { value: "Tracked", label: "Learner progress" },
      { value: "Centralized", label: "Course materials" },
    ],
    testimonial: {
      quote: "The Power BI Courses Platform has revolutionized our training approach and provided valuable insights into learner engagement.",
      author: "Sonali Thevar",
      designation: "Director, TechnoKraft Services",
    }
  },
  "ims-mobile-app": {
    title: "IMS Mobile App",
    subtitle:
      "A mobile application for attendance, task tracking and operational alerts.",
    industry: "TechnoKraft Solutions",
    businessType: "Internal Operations",
    engagement: "Mobile App Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Mobile Operations App",
    overview:
      "The IMS mobile application gives users access to attendance, task tracking and important operational alerts through a convenient mobile experience.",
    challenge:
      "Users needed access to essential attendance and task information without depending entirely on desktop systems.",
    approach:
      "We designed a mobile-first experience focused on quick access, simple interactions and timely operational updates.",
    solution:
      "The mobile app extends the intern management workflow to smartphones, making attendance, tasks and alerts accessible on the go.",
    features: [
      "Mobile attendance management",
      "Task tracking",
      "Operational alerts",
      "User-friendly mobile dashboard",
      "Responsive mobile workflows",
    ],
    impact: [
      { value: "Mobile", label: "Operational access" },
      { value: "Real-time", label: "Task visibility" },
      { value: "Quick", label: "Attendance actions" },
      { value: "Timely", label: "Operational alerts" },
    ],
    testimonial: {
      quote: "The Intern Management System has streamlined our operations and improved visibility into intern performance.",
      author: "Siddhant Dadel",
      designation: "Director, TechnoKraft Services",
    },
  },
  "crm-mobile-app": {
    title: "CRM Mobile App",
    subtitle:
      "A mobile CRM for sales and counsellor teams to access leads, follow-ups and fee status.",
    industry: "Sales & Institute Teams",
    businessType: "Sales & Education",
    engagement: "Mobile App Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Mobile CRM Platform",
    overview:
      "The CRM mobile application allows sales and counsellor teams to access student leads, manage follow-ups and review fee status from their mobile devices.",
    challenge:
      "Sales and counsellor teams needed flexible access to lead information and student records while working away from their desks.",
    approach:
      "We prioritized mobile access to important CRM workflows, including lead review, follow-up updates and fee status visibility.",
    solution:
      "The application brings essential CRM capabilities to mobile users and helps teams maintain continuity in sales and counselling activities.",
    features: [
      "Student lead access",
      "Lead follow-up management",
      "Counsellor dashboard",
      "Fee status visibility",
      "Mobile CRM records",
      "Sales workflow support",
    ],
    impact: [
      { value: "Mobile", label: "Lead access" },
      { value: "Faster", label: "Follow-up management" },
      { value: "Connected", label: "Sales workflows" },
      { value: "Clear", label: "Fee visibility" },
    ],
    testimonial: {
      quote: "The CRM Mobile App has enhanced our mobile accessibility and improved our sales team's efficiency.",
      author: "Siddhant Dadel",
      designation: "Director, TechnoKraft Services",
    }
  },
  "medical-coding-assessment": {
    title: "Medical Coding Assessment Platform",
    subtitle:
      "A digital assessment platform for medical coding evaluation and performance tracking.",
    industry: "Medical Training",
    businessType: "Assessment & Training",
    engagement: "Web Application Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Medical Assessment Platform",
    overview:
      "The Medical Coding Assessment Platform supports digital assessments and helps training teams evaluate learner performance through a structured online experience.",
    challenge:
      "The assessment process required a centralized digital environment for conducting tests, recording responses and reviewing learner performance.",
    approach:
      "We structured the platform around assessment delivery, learner interaction, result processing and performance visibility.",
    solution:
      "The platform digitizes medical coding assessments and creates a consistent evaluation workflow.",
    features: [
      "Online assessment management",
      "Medical coding question sets",
      "Learner response tracking",
      "Assessment result management",
      "Performance evaluation",
    ],
    impact: [
      { value: "Digital", label: "Assessment delivery" },
      { value: "Structured", label: "Evaluation process" },
      { value: "Centralized", label: "Assessment records" },
      { value: "Trackable", label: "Learner performance" },
    ],
    testimonial: {
      quote: "The Medical Coding Assessment Platform has streamlined our evaluation process and provided valuable insights into learner performance.",
      author: "Rahul Makasare",
      designation: "Founder & Director, TechnoKraft Services",
    }
  },
  "training-assessment-platform": {
    title: "Training Assessment Platform",
    subtitle:
      "An online assessment solution for conducting training evaluations and tracking learner outcomes.",
    industry: "Corporate Training",
    businessType: "Learning & Development",
    engagement: "Web Application Development",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Training Assessment System",
    overview:
      "The Training Assessment Platform enables organizations and training teams to conduct online evaluations, manage assessment content and review learner outcomes.",
    challenge:
      "Training teams needed a reliable digital assessment process that reduced manual evaluation work and provided better visibility into learner results.",
    approach:
      "We developed a structured assessment workflow with digital question sets, response handling and result management.",
    solution:
      "The platform provides a centralized environment for training assessments and learner evaluation.",
    features: [
      "Online training assessments",
      "Question and test management",
      "Learner response tracking",
      "Result management",
      "Performance reporting",
    ],
    impact: [
      { value: "Online", label: "Assessment process" },
      { value: "Centralized", label: "Test management" },
      { value: "Trackable", label: "Learner results" },
      { value: "Efficient", label: "Evaluation workflow" },
    ],
    testimonial: {
      quote: "The Training Assessment Platform has transformed our approach to evaluating learner performance and provided actionable insights.",
      author: "Rahul Makasare",
      designation: "Founder & Director, TechnoKraft Services",
    }
  },
  "amazon-reviews-ai": {
    title: "Amazon Reviews AI Analytics",
    subtitle:
      "An AI-based solution for analysing customer reviews and extracting useful product insights.",
    industry: "E-Commerce Analytics",
    businessType: "E-Commerce & AI",
    engagement: "AI & Machine Learning",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "AI Review Analytics",
    overview:
      "The Amazon Reviews AI project analyses customer reviews to identify sentiment, recurring themes and useful product feedback.",
    challenge:
      "Large volumes of customer reviews are difficult to analyse manually, making it challenging to identify common complaints, positive feedback and improvement opportunities.",
    approach:
      "We used an AI-driven analysis workflow to process review data and organize customer feedback into meaningful insights.",
    solution:
      "The platform transforms raw customer reviews into structured insights that can support product and business decisions.",
    features: [
      "Customer review processing",
      "AI-based sentiment analysis",
      "Review categorization",
      "Feedback insight extraction",
      "Product review analytics",
    ],
    impact: [
      { value: "AI-driven", label: "Review analysis" },
      { value: "Structured", label: "Customer feedback" },
      { value: "Actionable", label: "Product insights" },
      { value: "Scalable", label: "Review processing" },
    ],
    testimonial: {
      quote: "The Amazon Reviews AI Analytics solution has provided us with valuable insights into customer sentiment and product performance.",
      author: "Arvind Thevar",
      designation: "Founder & Director, TechnoKraft Services",
    },
  },
  "startup-funding-predictor": {
    title: "Startup Funding Predictor",
    subtitle:
      "A predictive analytics solution designed to estimate startup funding outcomes using data-driven insights.",
    industry: "Venture Ecosystem",
    businessType: "FinTech & Analytics",
    engagement: "AI & Machine Learning",
    timeline: "Ongoing",
    status: "Completed",
    heroLabel: "Predictive Analytics Platform",
    overview:
      "The Startup Funding Predictor uses startup-related data to generate data-driven funding predictions and support early-stage business analysis.",
    challenge:
      "Startup funding decisions involve multiple variables, and founders or analysts need better ways to interpret data and identify funding possibilities.",
    approach:
      "We structured the project around data preparation, feature analysis and predictive modelling to generate useful funding-related insights.",
    solution:
      "The platform applies predictive analytics to startup data and presents the resulting insights in an accessible format.",
    features: [
      "Startup data analysis",
      "Predictive modelling",
      "Funding outcome prediction",
      "Data-driven insights",
      "Prediction result visualization",
    ],
    impact: [
      { value: "Data-driven", label: "Funding analysis" },
      { value: "Predictive", label: "Business insights" },
      { value: "Structured", label: "Startup data" },
      { value: "Accessible", label: "Prediction results" },
    ],
    testimonial: {
      quote: "The Startup Funding Predictor has given us a competitive edge in understanding funding dynamics.",
      author: "Arvind Thevar",
      designation: "Founder & Director, TechnoKraft Services",
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

interface CaseStudyDetailProps {
  projectId?: string | null;
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  projectId,
  onNavigate,
  onOpenContact,
}) => {
  const [activeSection, setActiveSection] = useState("overview");
  const selectedProject =
    PORTFOLIO_PROJECTS.find((project) => project.id === projectId) ??
    PORTFOLIO_PROJECTS[0];
  const detail =
    PROJECT_DETAILS[selectedProject.id] ?? PROJECT_DETAILS["capernaum-erp"];

  const sidebarLinks = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The Challenge" },
    { id: "approach", label: "Our Approach" },
    { id: "solution", label: "The Solution" },
    { id: "results", label: "Results" },
    { id: "roadmap", label: "Future Roadmap" },
    { id: "feedback", label: "Client Feedback" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      id="case-study-page"
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen"
    >
      {/* Breadcrumbs & Hero Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 text-sm mb-6">
            <div className="flex items-center space-x-2 text-slate-500 font-medium">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <button
                onClick={() => onNavigate("our-work")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Our Work
              </button>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 font-semibold">Case Study</span>
            </div>

            {/* Back Button */}
            <button
              id="back-to-work-btn"
              onClick={() => onNavigate("our-work")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Our Work</span>
            </button>
          </div>

          {/* Hero Content with Split Image Right */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8"
          >
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {detail.title}
              </h1>
              <p className="mt-3 text-lg text-slate-600 font-normal">
                {detail.subtitle}
              </p>

              {/* Metadata Strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 py-4 px-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Industry
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {detail.industry}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Business Type
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {detail.businessType}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Engagement
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {detail.engagement}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Timeline
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {detail.timeline}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image: Industrial robotic arm */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-72 sm:h-80">
                <img
                  src={`${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/"}assets/${PROJECT_IMAGES[selectedProject.id]}`}
                  alt={detail.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/20" />

                {/* Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md border border-slate-700/80 font-medium">
                  {detail.heroLabel}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sticky In-Page Navigation Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-1 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-3">
                Contents
              </p>
              {sidebarLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`sidebar-link-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-white" />
                    )}
                  </button>
                );
              })}

              <div className="pt-6 mt-4 border-t border-slate-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3.5 text-center">
                  <p className="text-xs font-semibold text-blue-950 mb-1">
                    Need a similar transformation?
                  </p>
                  <button
                    onClick={onOpenContact}
                    className="w-full mt-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                  >
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Column */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. Key Impact Metric Cards (4 Grid) */}
            <motion.section
              id="overview"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="scroll-mt-32"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Key Impact Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {detail.impact.map((item) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 hover:border-blue-300 transition-colors"
                  >
                    <div className="text-3xl font-black text-blue-600 tracking-tight">
                      {item.value}
                    </div>
                    <p className="mt-2 text-xs font-medium text-slate-700 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 2. The Challenge */}
            <section
              id="challenge"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                The Challenge
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {detail.challenge}
              </p>

              {/* 4-Card Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-3">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Manual Data Entry
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    High dependency on Excel and manual tracking
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                    <Unplug className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Disconnected Systems
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No integration between departments
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <EyeOff className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Low Visibility
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No real-time insights for decision making
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Slow Reporting
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Reports took days to prepare and compile
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Our Approach */}
            <section
              id="approach"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Our Approach
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {detail.approach}
              </p>

              {/* Linked 6-Step Horizontal Mini-Process Diagram */}
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-8 right-8 h-0.5 bg-slate-200 z-0" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
                  {[
                    {
                      title: "Discover",
                      desc: "Understand business goals and pain points",
                      icon: Search,
                    },
                    {
                      title: "Strategize",
                      desc: "Create a data-driven transformation roadmap",
                      icon: Compass,
                    },
                    {
                      title: "Build",
                      desc: "Design & develop integrated solutions",
                      icon: Code2,
                    },
                    {
                      title: "Automate",
                      desc: "Automate workflows and business processes",
                      icon: Cog,
                    },
                    {
                      title: "Analyze",
                      desc: "Implement dashboards and analytics",
                      icon: BarChart2,
                    },
                    {
                      title: "Optimize",
                      desc: "Continuously improve and optimize",
                      icon: Sliders,
                    },
                  ].map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="text-center flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center font-bold text-sm mb-3 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. The Solution */}
            <section
              id="solution"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                The Solution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {detail.solution}
              </p>

              {/* Checklist with Custom Blue Checkmarks */}
              <div className="space-y-3 mb-10 max-w-2xl">
                {detail.features.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Mockup: Dark UI Desktop Dashboard & Companion Mobile App */}
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl relative overflow-hidden w-full min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-6 border-b border-slate-800 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[10px] sm:text-xs text-slate-400 font-mono ml-2 truncate min-w-0">
                      manufacturing-ops-dashboard.technokraft.internal
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-blue-400 font-medium flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Telemetry Connected
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start min-w-0">
                  {/* Left Desktop Panel */}
                  <div className="lg:col-span-8 space-y-4 min-w-0">
                    {/* Top KPI row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Total Plant Output
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          128,420 units
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          +14.2% vs last month
                        </span>
                      </div>
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Active Assembly Lines
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          18 / 18
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          100% operational
                        </span>
                      </div>
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Avg Lead Time
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          4.2 days
                        </div>
                        <span className="text-[10px] text-blue-400 font-medium">
                          Reduced from 11 days
                        </span>
                      </div>
                    </div>

                    {/* Bar Chart Mockup & Pie Chart */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Bar graph */}
                      <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-slate-200">
                            Production Velocity (Hours)
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Shift A vs B
                          </span>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2">
                          {[40, 65, 55, 80, 70, 95, 85, 100].map((val, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1"
                            >
                              <div
                                style={{ height: `${val}%` }}
                                className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xs hover:brightness-125 transition-all"
                              />
                              <span className="text-[9px] text-slate-400">
                                D{i + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pie/Doughnut graph */}
                      <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-slate-200">
                            Department Allocations
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Real-time
                          </span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <svg
                            className="w-28 h-28 transform -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#1E293B"
                              strokeWidth="4"
                            />
                            {/* Blue slice 45% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="4"
                              strokeDasharray="40 100"
                              strokeDashoffset="0"
                            />
                            {/* Cyan slice 30% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#38BDF8"
                              strokeWidth="4"
                              strokeDasharray="25 100"
                              strokeDashoffset="-40"
                            />
                            {/* Amber slice 25% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#F59E0B"
                              strokeWidth="4"
                              strokeDasharray="20 100"
                              strokeDashoffset="-65"
                            />
                          </svg>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-center text-slate-300">
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1" />
                            Machining
                          </div>
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-1" />
                            Assembly
                          </div>
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1" />
                            QA / Dispatch
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Mobile App Mockup */}
                  <div className="lg:col-span-4 flex justify-center w-full">
                    <div className="w-full max-w-56 bg-slate-950 rounded-2xl p-3 border-2 border-slate-700 shadow-xl">
                      {/* Mobile Notch */}
                      <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-3" />
                      <div className="flex items-center justify-between mb-3 text-slate-300">
                        <span className="text-[11px] font-bold">
                          Plant Companion
                        </span>
                        <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 mb-2">
                        <span className="text-[9px] text-slate-400 block">
                          Active Alert
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400">
                          All 6 CNC Mills synced
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[9px] text-slate-400">
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>Inventory sync</span>
                          <span className="text-blue-400 font-mono">100%</span>
                        </div>
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>Dispatch queue</span>
                          <span className="text-emerald-400 font-mono">
                            42 Trucks
                          </span>
                        </div>
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>ERP Latency</span>
                          <span className="text-cyan-400 font-mono">18ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Results That Matter */}
            <section
              id="results"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Results That Matter
              </h2>
              <p className="text-base text-slate-600 mb-6">
                Measurable impact that drives real business growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {detail.impact.map((item) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className="p-6 rounded-xl bg-blue-50/70 border border-blue-200"
                  >
                    <div className="text-3xl font-black text-blue-700">
                      {item.value}
                    </div>
                    <p className="text-xs font-semibold text-slate-700 mt-2 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Future Roadmap */}
            <section
              id="roadmap"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Future Roadmap
              </h2>
              <p className="text-base text-slate-600 mb-8">
                The transformation journey is just beginning.
              </p>

              {/* Stepper Timeline Labeled with Phase 1 to Phase 5 */}
              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
                {ROADMAP_PHASES.map((item, idx) => {
                  const getStatusBadge = (status: string) => {
                    switch (status) {
                      case "Completed":
                        return "bg-emerald-100 text-emerald-800 border-emerald-300";
                      case "In-Progress":
                        return "bg-amber-100 text-amber-800 border-amber-300";
                      case "Next":
                        return "bg-blue-100 text-blue-800 border-blue-300";
                      default:
                        return "bg-slate-100 text-slate-600 border-slate-300";
                    }
                  };

                  return (
                    <div key={item.phase} className="relative">
                      {/* Circle indicator on vertical bar */}
                      <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600" />
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {item.items}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 7. Client Feedback */}
            <section
              id="feedback"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Client Feedback
              </h2>
              <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 relative">
                <Quote className="w-10 h-10 text-blue-500/40 mb-4" />
                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;
                  {detail.testimonial?.quote ??
                    "TechnoKraft understood our business deeply and built a solution that transformed the way we operate. The impact on efficiency and visibility has been remarkable."}
                  &rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-blue-500">
                    {detail.testimonial?.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {detail.testimonial?.author ?? "Project Stakeholder"}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {detail.testimonial?.designation ?? detail.industry}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </motion.div>
  );
};
