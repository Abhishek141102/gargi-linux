export interface IndustryCard {
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow?: string;
  lead: string;
  introTitle?: string;
  intro?: string;
  sectionTitle?: string;
  cards?: IndustryCard[];
  challenges?: IndustryCard[];
  caseStudies?: IndustryCard[];
  techStack?: string[];
  faqs?: IndustryFaq[];
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "manufacturing",
    navLabel: "Manufacturing",
    title: "Technology Solutions for Manufacturing",
    eyebrow: "Manufacturing",
    lead: "Connect operational workflows, inventory, and business systems with software designed to support the way your manufacturing teams work.",
    introTitle: "Make operational information easier to use",
    intro: "Manufacturers coordinate people, materials, production schedules, and delivery commitments. We help bring these workflows into clearer digital systems so teams can make informed decisions and spend less time reconciling disconnected information.",
    sectionTitle: "Solutions for manufacturing operations",
    cards: [
      { title: "ERP and workflow systems", description: "Connect purchasing, production planning, order handling, and reporting in workflows tailored to your operation." },
      { title: "Inventory and materials visibility", description: "Track stock movement, warehouse activity, and replenishment needs with consistent records." },
      { title: "Business applications and integrations", description: "Build tools that connect existing systems and make operational information easier to access." },
      { title: "Cloud and infrastructure", description: "Plan dependable environments for the applications and data that support daily work." },
    ],
    challenges: [
      { title: "Disconnected records", description: "Reduce duplicate entry and keep important operational information consistent across teams." },
      { title: "Limited stock visibility", description: "Make material movement and stock status easier to review and act on." },
      { title: "Manual coordination", description: "Replace repetitive handoffs with clear, trackable digital workflows." },
    ],
    techStack: ["Custom ERP and business software", "Inventory management workflows", "System integration and reporting", "Cloud and DevOps engineering"],
    faqs: [
      { question: "Can a solution work with our existing systems?", answer: "We begin by reviewing your current tools and data flows, then define integration options based on the systems and access available." },
      { question: "Can we start with one production or business workflow?", answer: "Yes. A focused first phase can address a clearly defined workflow and leave room to expand after teams evaluate the results." },
    ],
    ctaTitle: "Improve the flow of your manufacturing operations",
    ctaText: "Tell us about your production, inventory, or software goals and we can discuss a practical starting point.",
    ctaButton: "Discuss your needs",
  },
  {
    slug: "healthcare",
    navLabel: "Healthcare",
    title: "Technology Solutions for Healthcare",
    eyebrow: "Healthcare",
    lead: "Support smoother administrative workflows and connected digital experiences for healthcare teams and the people they serve.",
    introTitle: "Technology that supports care teams",
    intro: "Healthcare organizations manage appointments, records, teams, and day-to-day operations across many touchpoints. Well-planned software can reduce administrative friction and help staff access the information needed for their work.",
    sectionTitle: "Digital capabilities for healthcare organizations",
    cards: [
      { title: "Patient and appointment workflows", description: "Create clear processes for enquiries, scheduling, reminders, and follow-up coordination." },
      { title: "Staff and operations portals", description: "Give teams useful interfaces for internal requests, schedules, documents, and operational tasks." },
      { title: "Inventory and resource tracking", description: "Support stock visibility for supplies and help teams record movement and replenishment needs." },
      { title: "Secure application foundations", description: "Design systems with role-based access, careful data handling, and operational monitoring in mind." },
    ],
    challenges: [
      { title: "Fragmented administrative processes", description: "Bring repeated coordination tasks into understandable workflows and shared views." },
      { title: "Information access needs", description: "Organize access around team responsibilities and the information each role requires." },
      { title: "Growing digital workload", description: "Plan applications that can adapt as services, teams, and operational needs change." },
    ],
    techStack: ["Web applications and staff portals", "Workflow automation and integrations", "Role-based access design", "Cloud operations and monitoring"],
    faqs: [
      { question: "Can workflows be tailored to our organization?", answer: "Yes. We map the users, tasks, and approval steps first so the proposed software reflects how your organization operates." },
      { question: "How do you approach sensitive information?", answer: "Data handling, permissions, and access controls are discussed during discovery and incorporated into the project scope and design." },
    ],
    ctaTitle: "Plan a smoother digital workflow",
    ctaText: "Share the administrative or application challenge your team wants to improve.",
    ctaButton: "Talk with our team",
  },
  {
    slug: "retail-ecommerce",
    navLabel: "Retail & E-commerce",
    title: "Technology Solutions for Retail & E-commerce",
    eyebrow: "Retail & E-commerce",
    lead: "Connect products, orders, inventory, and customer experiences through practical software for modern retail businesses.",
    introTitle: "Create a more connected retail operation",
    intro: "Retail teams need accurate product and stock information across sales channels, along with dependable ways to handle orders and customer requests. Integrated digital workflows can make these operations easier to manage as a business grows.",
    sectionTitle: "Solutions across the retail journey",
    cards: [
      { title: "E-commerce applications", description: "Build storefronts and customer journeys that make product discovery and ordering straightforward." },
      { title: "Inventory and order management", description: "Coordinate stock, order status, fulfilment, returns, and replenishment workflows." },
      { title: "ERP and business integrations", description: "Connect sales activity with finance, purchasing, product, and operational systems." },
      { title: "Customer and performance insights", description: "Organize useful reporting so teams can review sales activity and service trends." },
    ],
    challenges: [
      { title: "Different channel records", description: "Reduce gaps between online sales, store activity, and back-office data." },
      { title: "Unclear order status", description: "Make order progress and fulfilment responsibilities easier for teams to follow." },
      { title: "Changing stock levels", description: "Improve stock updates and replenishment visibility across locations and channels." },
    ],
    techStack: ["Web and mobile commerce applications", "Inventory and ERP software", "Payment and business system integrations", "Cloud delivery and analytics"],
    faqs: [
      { question: "Can you connect an online store with inventory tools?", answer: "We can review the store and inventory systems you use and plan an integration based on their available interfaces and your workflow." },
      { question: "Can the platform grow with additional sales channels?", answer: "We plan for current requirements and discuss an architecture that can accommodate future channels and operational needs." },
    ],
    ctaTitle: "Bring your retail systems closer together",
    ctaText: "Let's discuss your store, order, inventory, or customer experience priorities.",
    ctaButton: "Explore a solution",
  },
  {
    slug: "education",
    navLabel: "Education",
    title: "Technology Solutions for Education",
    eyebrow: "Education",
    lead: "Help educational institutions simplify administrative work and provide useful digital experiences for students, families, and staff.",
    introTitle: "Make everyday education workflows simpler",
    intro: "Institutions coordinate admissions, communication, schedules, resources, and records. Purpose-built applications and integrations can make common tasks clearer for staff while improving access to information for learners and families.",
    sectionTitle: "Digital tools for institutions and learners",
    cards: [
      { title: "Student and parent portals", description: "Provide a central place for notices, requests, schedules, and other relevant information." },
      { title: "Admissions and administration", description: "Organize enquiry handling, applications, document steps, and internal review workflows." },
      { title: "Learning and resource platforms", description: "Support access to learning materials, course information, and institution resources." },
      { title: "Reporting and integrations", description: "Connect operational systems and make useful academic or administrative summaries easier to prepare." },
    ],
    challenges: [
      { title: "Repeated administrative tasks", description: "Streamline recurring requests and approvals with clear digital steps." },
      { title: "Scattered communications", description: "Make important notices and updates easier for the right audiences to find." },
      { title: "Disconnected records", description: "Reduce re-entry by planning how existing tools and information can work together." },
    ],
    techStack: ["Institution and learner portals", "Web and mobile applications", "Workflow and document management", "Data integration and reporting"],
    faqs: [
      { question: "Can a platform support different user roles?", answer: "Yes. Student, family, educator, and administrator experiences can be designed around the tasks and information relevant to each role." },
      { question: "Can existing institution systems be integrated?", answer: "We assess current systems and available integration options during discovery, then prioritize connections based on value and feasibility." },
    ],
    ctaTitle: "Build a more connected education experience",
    ctaText: "Tell us which student, staff, or administrative workflow you would like to improve.",
    ctaButton: "Start a conversation",
  },
  {
    slug: "professional-services",
    navLabel: "Professional Services",
    title: "Technology Solutions for Professional Services",
    eyebrow: "Professional Services",
    lead: "Give client-focused teams connected tools for managing enquiries, projects, documents, and business operations.",
    introTitle: "Keep client work and internal operations connected",
    intro: "Professional service firms coordinate people, deadlines, client information, and deliverables. Software that reflects how teams manage engagements can improve visibility from the first enquiry through delivery and follow-up.",
    sectionTitle: "Digital capabilities for service-led businesses",
    cards: [
      { title: "Client portals and collaboration", description: "Create clear spaces for client updates, shared documents, requests, and project communication." },
      { title: "Project and resource workflows", description: "Track assignments, milestones, approvals, and team availability in a shared process." },
      { title: "CRM and business systems", description: "Connect enquiry management with client records, proposals, billing, and reporting." },
      { title: "Automation and AI opportunities", description: "Identify suitable repetitive tasks for workflow automation or carefully scoped AI assistance." },
    ],
    challenges: [
      { title: "Limited project visibility", description: "Make progress, ownership, and upcoming milestones easier to review." },
      { title: "Repeated document handling", description: "Organize document workflows and reduce avoidable manual steps." },
      { title: "Disconnected client information", description: "Create a more consistent view across enquiries, active work, and follow-up." },
    ],
    techStack: ["Custom CRM and client portals", "Project and workflow software", "Document and business integrations", "Cloud, security, and AI services"],
    faqs: [
      { question: "Can the tools reflect our specific service process?", answer: "Yes. We map the way engagements move through your firm and shape the solution around those stages and responsibilities." },
      { question: "Can we automate repetitive office tasks?", answer: "We can identify suitable tasks during discovery, then prioritize automation based on expected value, data quality, and the need for human review." },
    ],
    ctaTitle: "Make client delivery easier to manage",
    ctaText: "Share your team's operational goals and we can explore an appropriate digital solution.",
    ctaButton: "Discuss your project",
  },
];

export const industryBySlug = (slug: string) =>
  INDUSTRIES.find((industry) => industry.slug === slug);
