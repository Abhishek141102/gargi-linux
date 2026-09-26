import {
  GoalItem,
  FrameworkStep,
  MetricItem,
  IndustryItem,
  ProjectCard,
  TestimonialItem,
  RoadmapPhase,
} from "../types";

export const CLIENT_LOGOS = [
  { name: "FORCE MOTORS", sub: "MOTORS", type: "automotive" },
  { name: "VIJAYANAND", sub: "HEALTHCARE", type: "healthcare" },
  { name: "MEDICOVER", sub: "HOSPITALS", type: "hospitals" },
  { name: "KAKA", sub: "INDUSTRIES", type: "industrial" },
  { name: "POLYPLEX", sub: "POLYMERS", type: "polymers" },
  { name: "SURAJ", sub: "ENTERPRISES", type: "enterprise" },
];

export const GOALS_DATA: GoalItem[] = [
  {
    id: "build",
    title: "Build",
    description: "Launch a new product or digital platform",
    iconName: "Laptop",
  },
  {
    id: "grow",
    title: "Grow",
    description: "Generate leads and increase revenue",
    iconName: "TrendingUp",
  },
  {
    id: "automate",
    title: "Automate",
    description: "Reduce manual work and increase efficiency",
    iconName: "Cpu",
  },
  {
    id: "transform",
    title: "Transform",
    description: "Modernize legacy systems and processes",
    iconName: "RefreshCw",
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Get better insights from your data",
    iconName: "BarChart2",
  },
  {
    id: "scale",
    title: "Scale",
    description: "Build systems that scale with your growth",
    iconName: "Maximize2",
  },
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your business and challenges",
    iconName: "Search",
  },
  {
    step: "02",
    title: "Strategize",
    description: "Create a roadmap with measurable outcomes",
    iconName: "Compass",
  },
  {
    step: "03",
    title: "Build",
    description: "Design and build solutions that solve real problems",
    iconName: "Code2",
  },
  {
    step: "04",
    title: "Automate",
    description: "Streamline processes and eliminate manual work",
    iconName: "Cog",
  },
  {
    step: "05",
    title: "Measure",
    description: "Track performance with data and analytics",
    iconName: "Activity",
  },
  {
    step: "06",
    title: "Optimize",
    description: "Continuously improve and unlock new opportunities",
    iconName: "Sliders",
  },
  {
    step: "07",
    title: "Scale",
    description: "Prepare your business for sustainable growth",
    iconName: "TrendingUp",
  },
];

export const STATS_METRICS: MetricItem[] = [
  { value: "12+", label: "Years of Excellence" },
  { value: "50+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "24/7", label: "Dedicated Support" },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Smart factory, IIoT, ERP and automated quality controls",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Patient management, telemedicine and regulatory compliance",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Omnichannel commerce, dynamic inventory and POS integration",
    imageUrl:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "education",
    name: "Education",
    description: "Digital campus, LMS, attendance and academic analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description: "Client billing, enterprise resource planning and CRM",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "startups",
    name: "Startups",
    description: "Rapid MVP development, cloud scaling and agile architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
];

export const PORTFOLIO_PROJECTS: ProjectCard[] = [
  {
    id: "capernaum-erp",
    category: "Enterprise Systems",
    title: "Capernaum Solutions ERP Portal",
    subtitle:
      "Custom enterprise ERP and operational growth platform architected for strategic account orchestration and revenue milestones.",
    industry: "Capernaum Solutions Pvt. Ltd.",
    goal: "Automate",
    service: "Custom ERP Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "100%", label: "Custom-built" },
    imageUrl: "/assets/projects/capernaum-erp.png",
  },
  {
    id: "focus-coaching-erp",
    category: "Web Apps",
    title: "Focus Coaching Classes ERP",
    subtitle:
      "Student management, fee collections, batch attendance, and academic examination analytics portal across 10+ course streams.",
    industry: "Focus Coaching Classes",
    goal: "Automate",
    service: "Custom ERP Development",
    metric1: { value: "81+", label: "Active batches" },
    metric2: { value: "₹9.96L+", label: "Fees tracked" },
    imageUrl: "/assets/projects/focus-coaching-erp.jpeg",
  },
  {
    id: "rejos-logistics-crm",
    category: "Enterprise Systems",
    title: "Rejos Fleet Logistics & CRM",
    subtitle:
      "High-capacity freight logistics system tracking 39,000+ Lorry Receipts, driver allocations, rate cards, and automated billing.",
    industry: "Rejos Transport",
    goal: "Automate",
    service: "Custom Software Development",
    metric1: { value: "39,000+", label: "Lorry Receipts tracked" },
    metric2: { value: "Live", label: "In production" },
    imageUrl: "/assets/projects/rejos-logistics-crm.png",
  },
  {
    id: "irasa-ecommerce",
    category: "Web Apps",
    title: "Irasa Luxury E-Commerce App",
    subtitle:
      "Luxury fragrance e-commerce web application with interactive custom perfume builder, seamless checkout, and scent discovery.",
    industry: "Irasa Perfumes",
    goal: "Scale",
    service: "Web Application Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "100%", label: "Custom-built" },
    imageUrl: "/assets/projects/irasa-ecommerce.png",
  },
  {
    id: "intern-management-system",
    category: "Web Apps",
    title: "Intern Management System (IMS)",
    subtitle:
      "Admin + college dashboard with punch-in/punch-out, Jira-style task records, intern tracking, and email support.",
    industry: "Educational Institutions",
    goal: "Automate",
    service: "Custom Software Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "Web", label: "Admin + student portal" },
    imageUrl: "/assets/projects/ims-web.png",
  },
  {
    id: "crm-training-management",
    category: "Enterprise Systems",
    title: "CRM Web App (Training Mgmt)",
    subtitle:
      "End-to-end workflow from enquiry to admission & fees, automated certificate generation, and reporting.",
    industry: "TechnoKraft Solutions",
    goal: "Automate",
    service: "Custom ERP Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "End-to-end", label: "Enquiry to fees" },
    imageUrl: "/assets/projects/crm-training.png",
  },
  {
    id: "powerbi-courses-platform",
    category: "AI / ML & Analytics",
    title: "PowerBI Master Courses Platform",
    subtitle:
      "Student + admin dashboards for live lectures, video materials, progress analytics, and auto certificate generation.",
    industry: "Training Institute",
    goal: "Automate",
    service: "AI & Machine Learning",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "Auto", label: "Certificate generation" },
    imageUrl: "/assets/projects/powerbi-platform.png",
  },
  {
    id: "ims-mobile-app",
    category: "Mobile Apps",
    title: "IMS Mobile Application",
    subtitle:
      "Mobile companion application for interns and supervisors for quick attendance logging, task tracking, and alerts.",
    industry: "Educational Institutions",
    goal: "Automate",
    service: "Mobile App Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "iOS/Android", label: "Cross-platform" },
    imageUrl: "/assets/projects/ims-mobile.png",
  },
  {
    id: "crm-mobile-app",
    category: "Mobile Apps",
    title: "CRM Mobile Application",
    subtitle:
      "On-the-go CRM mobile app providing sales and counsellors instant access to student leads, follow-ups, and fee status.",
    industry: "Sales & Institute Teams",
    goal: "Automate",
    service: "Mobile App Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "Real-time", label: "Lead tracking" },
    imageUrl: "/assets/projects/crm-mobile.png",
  },
  {
    id: "medical-coding-assessment",
    category: "Enterprise Systems",
    title: "Medical Coding Assessment System",
    subtitle:
      "Enterprise assessment platform with student & admin portals, timed mock tests, question banks, and instant grading.",
    industry: "Medical Training",
    goal: "Automate",
    service: "Custom Software Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "Instant", label: "Grading" },
    imageUrl: "/assets/projects/medical-assessment.jpeg",
  },
  {
    id: "training-assessment-platform",
    category: "Enterprise Systems",
    title: "Training Assessment Platform",
    subtitle:
      "Comprehensive examination conduction system with student + admin dashboards, email reports, and training evaluation.",
    industry: "Corporate Training",
    goal: "Automate",
    service: "Custom Software Development",
    metric1: { value: "Live", label: "In production" },
    metric2: { value: "Auto", label: "Email reports" },
    imageUrl: "/assets/projects/training-assessment.jpg",
  },
  {
    id: "amazon-reviews-ai",
    category: "AI / ML & Analytics",
    title: "Amazon Customer Reviews AI/ML",
    subtitle:
      "NLP & Machine Learning system classifying sentiment across millions of reviews and predicting product rating risk trends.",
    industry: "E-Commerce Analytics",
    goal: "Automate",
    service: "AI & Machine Learning",
    metric1: { value: "Millions", label: "Reviews analyzed" },
    metric2: { value: "NLP", label: "Sentiment classification" },
    imageUrl: "/assets/projects/amazon-reviews-ai.jpeg",
  },
  {
    id: "startup-funding-predictor",
    category: "AI / ML & Analytics",
    title: "Startup Funding AI Predictor",
    subtitle:
      "Machine Learning models analyzing startup market data to forecast funding probability and estimate round amounts.",
    industry: "Venture Ecosystem",
    goal: "Automate",
    service: "AI & Machine Learning",
    metric1: { value: "ML", label: "Predictive models" },
    metric2: { value: "Live", label: "In production" },
    imageUrl: "/assets/projects/startup-funding-ai.png",
  },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Digital Foundation",
    items: "Website, CRM, Data Centralization",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Process Automation",
    items: "Workflow Automation, Integrations",
    status: "Completed",
  },
  {
    phase: "Phase 3",
    title: "Business Intelligence",
    items: "Advanced Dashboards, Analytics",
    status: "Completed",
  },
  {
    phase: "Phase 4",
    title: "AI & Predictive Insights",
    items: "AI Models, Predictions, Smart Alerts",
    status: "Completed",
  },
  {
    phase: "Phase 5",
    title: "Scale & Optimize",
    items: "Cloud Scaling, Advanced Optimizations",
    status: "Completed",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "TechnoKraft delivered an exceptional custom ERP & software solution that streamlined our business operations. The team's depth of technical knowledge and dedication to delivering on time exceeded our expectations.",
    author: "Jobin Joy",
    role: "Founder & CEO",
    company: "Capernaum Solutions",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "2",
    quote:
      "The custom e-commerce web application and UI/UX design crafted by TechnoKraft transformed our customer engagement. Elegant layouts, fast checkouts, and smooth interactions boosted our online sales.",
    author: "Rakesh Shewale",
    role: "Founder & Brand Head",
    company: "Irasa Perfumes",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  },
];
