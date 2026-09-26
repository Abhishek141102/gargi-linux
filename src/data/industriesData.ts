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
  office?: { address: string; phone: string; email: string; hours: string };
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
}

const OFFICE = {
  address:
    "3rd Floor, Kanchwala Avenue, Above Viju's Dabeli, Thatte Nagar Marg, College Road, Nashik, Maharashtra - 422005",
  phone: "+91 84080 00048",
  email: "info@technokraftservices.com",
  hours: "Monday – Saturday: 9:30 AM to 8:30 PM (Sunday: Closed)",
};

export const industriesData: IndustryData[] = [
  {
    slug: "manufacturing",
    navLabel: "Manufacturing",
    title: "Manufacturing ERP & Industrial Automation Software in Nashik",
    lead: "TechnoKraft Services LLP builds production-floor ERP systems, inventory control platforms, and quality management software for manufacturers across Nashik's industrial belt. From raw-material procurement to dispatch, we digitise every stage of your production cycle with software engineered around your actual shop-floor workflows.",
    introTitle: "Software Built Around Your Production Reality",
    intro:
      "Generic manufacturing ERPs force plants to redesign proven processes around rigid templates. We map your existing BOM structures, job-work cycles, batch traceability rules, and dispatch approvals directly into custom software — giving you full source-code ownership without recurring per-user licence costs.",
    sectionTitle: "Manufacturing Capabilities We Engineer",
    cards: [
      {
        title: "Production Planning & Scheduling",
        description:
          "Work-order generation, machine-wise capacity planning, shift scheduling, and real-time production status boards for the shop floor.",
      },
      {
        title: "Inventory & Stores Management",
        description:
          "Multi-godown stock control, reorder-level alerts, batch and serial traceability, GRN workflows, and material issue tracking.",
      },
      {
        title: "Quality Control & Compliance",
        description:
          "Inward inspection checklists, in-process QC gates, rejection and rework tracking, plus audit-ready documentation trails.",
      },
      {
        title: "Purchase & Vendor Management",
        description:
          "Indent-to-PO automation, vendor rate comparison, delivery-schedule tracking, and three-way invoice matching.",
      },
      {
        title: "Dispatch & Billing Integration",
        description:
          "Packing lists, e-way bill and GST-compliant invoicing, transporter allocation, and delivery confirmation logging.",
      },
      {
        title: "Production MIS & Dashboards",
        description:
          "Machine utilisation, wastage percentage, OEE indicators, and cost-per-unit reporting for management review meetings.",
      },
    ],
    challenges: [
      {
        title: "Stock Figures Never Match Physical Count",
        description:
          "Disconnected registers and spreadsheets cause inventory drift. Centralised, transaction-level stock movement fixes reconciliation permanently.",
      },
      {
        title: "No Visibility Into Work-in-Progress",
        description:
          "Management cannot answer where an order stands. Stage-wise WIP tracking gives live order status without floor visits.",
      },
      {
        title: "Manual Reporting Consumes Days",
        description:
          "Month-end MIS built by hand in Excel. Automated dashboards deliver the same numbers instantly and without transcription errors.",
      },
    ],
    caseStudies: [
      {
        title: "Capernaum Solutions ERP Portal",
        description:
          "Custom enterprise ERP architected for strategic account orchestration, operational workflows, and revenue milestone tracking — live in production.",
      },
      {
        title: "Rejos Fleet Logistics & CRM",
        description:
          "High-capacity system tracking 39,000+ Lorry Receipts with automated fleet allotment, rate cards, and memo generation for outbound dispatch.",
      },
    ],
    techStack: [
      "Java Spring Boot for high-concurrency transaction backends",
      "PostgreSQL / MySQL schemas tuned for large production volumes",
      "Barcode and QR-based material movement scanning",
      "Tally and GST portal integration for accounting continuity",
      "Role-based access control for shop floor, stores, and management",
      "On-premise or AWS/Azure cloud deployment with daily backups",
    ],
    faqs: [
      {
        question: "Can this integrate with our existing Tally accounting?",
        answer:
          "Yes. We build sync layers that push sales, purchase, and stock vouchers into Tally, so your accounts team continues working in a familiar environment while operations move to the ERP.",
      },
      {
        question: "Will it work if our plant has poor internet connectivity?",
        answer:
          "We can deploy on a local server inside your plant with optional cloud sync, so shop-floor operations continue uninterrupted during outages.",
      },
      {
        question: "How long does a manufacturing ERP implementation take?",
        answer:
          "A focused module set typically goes live in 8 to 14 weeks. Full multi-department rollouts are phased so your team adopts one area at a time rather than facing a single disruptive switchover.",
      },
      {
        question: "Do we own the source code?",
        answer:
          "Yes. Custom builds are delivered with complete source-code ownership and no per-user licence fees.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Digitise Your Production Floor",
    ctaText:
      "Talk to our manufacturing systems team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
  {
    slug: "healthcare",
    navLabel: "Healthcare",
    title: "Healthcare Software & Hospital Management Systems in Nashik",
    lead: "TechnoKraft Services LLP develops patient management platforms, clinical assessment systems, and healthcare training software for hospitals, diagnostic centres, and medical education institutes. We engineer systems that respect patient-data sensitivity while removing the administrative load from clinical staff.",
    introTitle: "Clinical Workflows Deserve Purpose-Built Software",
    intro:
      "Healthcare operations carry obligations that generic business software ignores — audit trails, role-scoped access to patient records, and reliable record retention. We build around those obligations from day one rather than retrofitting them later.",
    sectionTitle: "Healthcare Capabilities We Engineer",
    cards: [
      {
        title: "Patient Registration & Records",
        description:
          "Unique patient IDs, visit history, consultation notes, and document attachments with role-scoped access controls.",
      },
      {
        title: "Appointment & OPD Scheduling",
        description:
          "Doctor-wise slot management, queue tokens, rescheduling workflows, and automated SMS or email reminders.",
      },
      {
        title: "Billing & Insurance Workflows",
        description:
          "Service-wise charge masters, package billing, discount approval chains, and claim documentation support.",
      },
      {
        title: "Diagnostics & Report Delivery",
        description:
          "Test order tracking, result entry with validation gates, and secure digital report delivery to patients.",
      },
      {
        title: "Medical Training & Assessment",
        description:
          "Timed mock examinations, large question banks, instant grading, and candidate performance analytics.",
      },
      {
        title: "Inventory & Pharmacy Control",
        description:
          "Batch and expiry tracking, reorder alerts, consumption against patient records, and supplier management.",
      },
    ],
    challenges: [
      {
        title: "Patient Records Scattered Across Systems",
        description:
          "Paper files, spreadsheets, and standalone tools fragment history. A single patient record unifies every visit, test, and prescription.",
      },
      {
        title: "Front-Desk Queues and Waiting Times",
        description:
          "Manual registration slows throughput. Digital token systems and pre-booked slots reduce crowding at reception.",
      },
      {
        title: "Assessment and Certification Overhead",
        description:
          "Manual test conduction and grading consumes faculty time. Automated assessment platforms return results instantly.",
      },
    ],
    caseStudies: [
      {
        title: "Medical Coding Assessment System",
        description:
          "Enterprise assessment platform with separate student and admin portals, timed mock tests, structured question banks, and instant grading.",
      },
      {
        title: "Training Assessment Platform",
        description:
          "Examination conduction system with student and admin dashboards, automated email reports, and training evaluation analytics.",
      },
    ],
    techStack: [
      "Encrypted data storage with role-based access enforcement",
      "Complete audit logging of record access and modification",
      "Java Spring Boot and Python backends for clinical workloads",
      "Automated daily backups with tested restore procedures",
      "Secure report delivery over authenticated links",
      "Cloud or on-premise deployment based on your data policy",
    ],
    faqs: [
      {
        question: "How do you handle patient data confidentiality?",
        answer:
          "Access is scoped strictly by role, every record view and edit is logged, and data is encrypted at rest and in transit. We also discuss your internal data-retention policy before architecture begins.",
      },
      {
        question: "Can the system work across multiple branches?",
        answer:
          "Yes. Multi-location deployments share a common patient index while keeping branch-level billing, inventory, and reporting separate.",
      },
      {
        question: "Do you provide training for clinical and admin staff?",
        answer:
          "Yes. We run role-specific training sessions and provide documentation, plus a support window after go-live for questions as staff settle in.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Modernise Your Healthcare Operations",
    ctaText:
      "Talk to our healthcare systems team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
  {
    slug: "retail-ecommerce",
    navLabel: "Retail & E-commerce",
    title: "E-Commerce Development & Retail POS Software in Nashik",
    lead: "TechnoKraft Services LLP builds custom e-commerce platforms, retail POS systems, and omnichannel inventory software for brands selling online, offline, or both. We engineer storefronts that convert and back-office systems that keep stock, pricing, and orders synchronised across every channel.",
    introTitle: "One Inventory, Every Sales Channel",
    intro:
      "Retail breaks down when the website, the shop counter, and the marketplace listing each hold a different stock number. We build a single source of truth for inventory and pricing, with each channel reading from and writing back to it in real time.",
    sectionTitle: "Retail & E-Commerce Capabilities",
    cards: [
      {
        title: "Custom E-Commerce Storefronts",
        description:
          "Product catalogues, variant handling, guided product builders, wishlists, and conversion-focused checkout flows.",
      },
      {
        title: "Payment & Shipping Integration",
        description:
          "Razorpay, PayU, and UPI gateways with courier API integration for rate calculation and shipment tracking.",
      },
      {
        title: "Retail POS Systems",
        description:
          "Fast counter billing, barcode scanning, GST invoicing, multi-payment tender, and end-of-day cash reconciliation.",
      },
      {
        title: "Omnichannel Inventory Sync",
        description:
          "Unified stock across website, stores, and marketplaces with automatic deduction and low-stock alerting.",
      },
      {
        title: "Customer Loyalty & CRM",
        description:
          "Purchase history, loyalty points, segment-based campaigns, and repeat-purchase behaviour analytics.",
      },
      {
        title: "Sales Analytics & Reporting",
        description:
          "Channel-wise revenue, fast and slow movers, margin analysis, and daily sales dashboards for owners.",
      },
    ],
    challenges: [
      {
        title: "Overselling Stock You No Longer Have",
        description:
          "Separate channel inventories cause cancellations and refunds. Real-time sync prevents orders for unavailable stock.",
      },
      {
        title: "Cart Abandonment at Checkout",
        description:
          "Long forms and limited payment options lose buyers at the final step. Streamlined checkout recovers those orders.",
      },
      {
        title: "No Insight Into What Actually Sells",
        description:
          "Without channel-wise analytics, purchasing decisions are guesswork. Movement reports show where capital should go.",
      },
    ],
    caseStudies: [
      {
        title: "Irasa Luxury E-Commerce Application",
        description:
          "Luxury fragrance platform with an interactive custom perfume builder, seamless checkout, and guided scent discovery — live in production.",
      },
      {
        title: "Amazon Customer Reviews AI/ML",
        description:
          "NLP and machine learning system classifying sentiment across millions of reviews and predicting product rating risk trends.",
      },
    ],
    techStack: [
      "React and Next.js storefronts optimised for page speed",
      "Node.js and Python backends with REST APIs",
      "Razorpay, PayU, and UPI payment gateway integration",
      "Courier and logistics API integration for live tracking",
      "Search engine optimisation built into the page structure",
      "AWS or Azure hosting with CDN delivery for product media",
    ],
    faqs: [
      {
        question: "Why build custom instead of using Shopify or WooCommerce?",
        answer:
          "Platform tools work well for standard catalogues. Custom builds make sense when you need a unique buying experience, deep integration with existing inventory or ERP systems, or freedom from per-transaction platform fees at scale.",
      },
      {
        question: "Can you integrate with our existing billing software?",
        answer:
          "Yes. We build sync layers to Tally, Busy, or custom accounting systems so online orders flow into your existing books without double entry.",
      },
      {
        question: "Will the storefront work well on mobile?",
        answer:
          "Yes. Storefronts are built mobile-first, since the majority of Indian e-commerce traffic arrives on phones.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Launch or Upgrade Your Retail Platform",
    ctaText:
      "Talk to our e-commerce team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
  {
    slug: "education",
    navLabel: "Education",
    title: "Education ERP & Coaching Class Management Software in Nashik",
    lead: "TechnoKraft Services LLP builds student management ERPs, learning platforms, and examination systems for coaching classes, colleges, and training institutes. Our education software is already tracking thousands of fee installments, attendance records, and exam scorecards in live production.",
    introTitle: "Run Admissions to Results on One System",
    intro:
      "Institutes usually run enquiries in one register, fees in another, attendance in a third, and exam marks in spreadsheets. We connect the entire student lifecycle so a single record follows each student from first enquiry through to final certification.",
    sectionTitle: "Education Platform Capabilities",
    cards: [
      {
        title: "Student & Batch Management",
        description:
          "Admission workflows, multi-batch allocation, course stream mapping, and complete student profile history.",
      },
      {
        title: "Fee Collection & Installments",
        description:
          "Installment schedules, due-date reminders, partial payment handling, receipt generation, and outstanding reports.",
      },
      {
        title: "Attendance Tracking",
        description:
          "Batch-wise daily attendance, biometric or app-based punch-in, shortage alerts, and parent notification options.",
      },
      {
        title: "Examination & Scorecards",
        description:
          "Test scheduling, mark entry with validation, rank generation, and subject-wise performance analytics.",
      },
      {
        title: "Learning Content Delivery",
        description:
          "Live lecture scheduling, recorded video libraries, study material distribution, and progress tracking.",
      },
      {
        title: "Certificates & Reporting",
        description:
          "Automated certificate generation on course completion plus management dashboards for admissions and revenue.",
      },
    ],
    challenges: [
      {
        title: "Fee Follow-Ups Consume Staff Time",
        description:
          "Manual outstanding tracking means missed collections. Automated schedules and reminders recover dues without daily chasing.",
      },
      {
        title: "Attendance Records Are Unreliable",
        description:
          "Paper registers get lost and cannot be analysed. Digital attendance supports shortage alerts and parent communication.",
      },
      {
        title: "Enquiries Never Convert to Admissions",
        description:
          "Walk-in enquiries get forgotten without follow-up structure. Lead workflows ensure every prospect is contacted.",
      },
    ],
    caseStudies: [
      {
        title: "Focus Coaching Classes ERP",
        description:
          "Student management, fee collection, batch attendance, and exam analytics across 10+ course streams — tracking 81+ active batches and ₹9.96L+ in fees.",
      },
      {
        title: "Intern Management System (IMS)",
        description:
          "Admin and college dashboards with punch-in/punch-out, Jira-style task records, intern tracking, and automated email support.",
      },
      {
        title: "PowerBI Master Courses Platform",
        description:
          "Student and admin dashboards for live lectures, video materials, progress analytics, and automated certificate generation.",
      },
      {
        title: "CRM Web App for Training Management",
        description:
          "End-to-end workflow from enquiry through admission and fees, with automated certificate generation and reporting.",
      },
    ],
    techStack: [
      "React web dashboards with Flutter mobile companions",
      "Java Spring Boot and Python backends",
      "Biometric device integration for attendance capture",
      "SMS and email gateway integration for parent communication",
      "Automated PDF generation for receipts and certificates",
      "Cloud hosting with role-based access for staff and students",
    ],
    faqs: [
      {
        question: "Can parents access their child's attendance and marks?",
        answer:
          "Yes. We can add a parent login or automated SMS and email updates for attendance shortage, fee dues, and exam results, depending on what your institute prefers.",
      },
      {
        question: "Does it support multiple branches or centres?",
        answer:
          "Yes. Each branch maintains its own batches, fees, and reporting while management sees consolidated figures across all centres.",
      },
      {
        question: "Can we start with only fees and attendance?",
        answer:
          "Yes. Most institutes begin with one or two modules and expand once staff are comfortable. The architecture is built so later modules plug into the same student record.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Digitise Your Institute",
    ctaText:
      "Talk to our education systems team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
  {
    slug: "professional-services",
    navLabel: "Professional Services",
    title: "CRM & Practice Management Software for Professional Services",
    lead: "TechnoKraft Services LLP builds client management platforms, project tracking systems, and billing automation for consultancies, agencies, legal and accounting practices, and service firms. We replace scattered spreadsheets with systems that show utilisation, receivables, and delivery status in one place.",
    introTitle: "Your Billable Hours Deserve Better Tracking",
    intro:
      "Service firms lose margin in the gaps — time logged late, scope creep unbilled, invoices raised weeks after delivery. We build systems that capture effort as it happens and convert it into invoices without manual reconstruction.",
    sectionTitle: "Professional Services Capabilities",
    cards: [
      {
        title: "Client & Contact Management",
        description:
          "Complete client records, engagement history, document repositories, and communication logs in one profile.",
      },
      {
        title: "Project & Task Tracking",
        description:
          "Jira-style task boards, milestone planning, assignment workflows, and delivery status visibility for managers.",
      },
      {
        title: "Timesheet & Utilisation",
        description:
          "Effort logging against projects, approval workflows, and team utilisation reporting for capacity planning.",
      },
      {
        title: "Automated Billing & Invoicing",
        description:
          "Retainer and milestone billing, GST-compliant invoice generation, and payment status tracking.",
      },
      {
        title: "Lead & Proposal Pipeline",
        description:
          "Enquiry capture, follow-up scheduling, proposal versioning, and conversion-rate analytics.",
      },
      {
        title: "Management Dashboards",
        description:
          "Revenue per client, receivables ageing, project profitability, and team workload distribution.",
      },
    ],
    challenges: [
      {
        title: "Invoices Raised Late or Incompletely",
        description:
          "Reconstructing a month of work from memory leaks revenue. Continuous effort capture makes billing a one-click step.",
      },
      {
        title: "No View of Team Capacity",
        description:
          "New work is accepted blind. Utilisation reporting shows who is free before commitments are made.",
      },
      {
        title: "Client Documents Scattered Everywhere",
        description:
          "Files across email, drives, and desktops slow delivery. A client-linked repository keeps everything retrievable.",
      },
    ],
    caseStudies: [
      {
        title: "Capernaum Solutions ERP Portal",
        description:
          "Custom enterprise ERP for strategic account orchestration, operational workflows, and revenue milestone tracking — live in production.",
      },
      {
        title: "CRM Web & Mobile Applications",
        description:
          "End-to-end CRM covering enquiry through admission and fees, with a mobile companion giving teams instant access to leads, follow-ups, and payment status.",
      },
    ],
    techStack: [
      "React dashboards with role-scoped views per designation",
      "Java Spring Boot and Node.js backends",
      "Flutter mobile apps for on-the-go access",
      "Document storage with versioning and access control",
      "GST-compliant invoice and PDF generation",
      "Email and calendar integration for follow-up workflows",
    ],
    faqs: [
      {
        question: "Can we customise the workflow to our practice?",
        answer:
          "Yes. That is the point of a custom build. Approval chains, billing rules, and stage names are configured to match how your firm already works rather than forcing a template on you.",
      },
      {
        question: "Is there a mobile app for field staff?",
        answer:
          "Yes. We build Flutter companions for iOS and Android so consultants can log effort, check client details, and update task status away from the desk.",
      },
      {
        question: "How is client data kept confidential between teams?",
        answer:
          "Access is scoped by role and engagement, so team members only see the clients and documents assigned to them, with full audit logging.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Systemise Your Practice",
    ctaText:
      "Talk to our business systems team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
  {
    slug: "startups",
    navLabel: "Startups",
    title: "MVP Development & Startup Product Engineering in Nashik",
    lead: "TechnoKraft Services LLP works as an engineering partner for founders building their first product. We take an idea to a working, launchable MVP with an architecture that will not need rewriting the moment traction arrives — and we stay on as the technical team through the scaling that follows.",
    introTitle: "Ship Fast Without Building Technical Debt",
    intro:
      "Most MVPs fail one of two ways: they take a year to launch, or they launch fast on a foundation that collapses at a thousand users. We aim at the narrow path between — a focused feature set, launched quickly, on architecture designed to grow.",
    sectionTitle: "What We Build for Startups",
    cards: [
      {
        title: "MVP Scoping & Architecture",
        description:
          "Feature prioritisation to define a genuinely minimum viable scope, then technical architecture planned for the growth path.",
      },
      {
        title: "Rapid Web & Mobile Builds",
        description:
          "React web applications and Flutter cross-platform mobile apps built in sprint cycles with regular demoable releases.",
      },
      {
        title: "API & Backend Engineering",
        description:
          "Python FastAPI and Node.js backends with clean REST APIs, ready for third-party integration and future mobile clients.",
      },
      {
        title: "Cloud Infrastructure & DevOps",
        description:
          "Docker containerisation, automated CI/CD pipelines, and AWS or Azure deployment sized to early-stage budgets.",
      },
      {
        title: "AI & Data Features",
        description:
          "Machine learning models, predictive analytics, and LLM workflow integration where they genuinely differentiate the product.",
      },
      {
        title: "Post-Launch Iteration",
        description:
          "Analytics instrumentation, user feedback loops, and continuous release cycles as the product finds its market.",
      },
    ],
    challenges: [
      {
        title: "Scope Grows Until Nothing Ships",
        description:
          "Every added feature delays validation. We push hard on cutting scope to whatever proves the core hypothesis fastest.",
      },
      {
        title: "Cheap Builds That Must Be Rewritten",
        description:
          "Shortcut architecture forces an expensive rebuild exactly when growth arrives. Sound foundations cost less over the product's life.",
      },
      {
        title: "No In-House Technical Team Yet",
        description:
          "Founders without a CTO need engineering judgement, not just hands. We take architectural decisions and explain the trade-offs.",
      },
    ],
    caseStudies: [
      {
        title: "Irasa Luxury E-Commerce Application",
        description:
          "Full product build with an interactive custom perfume builder and seamless checkout, launched and running in production.",
      },
      {
        title: "Startup Funding AI Predictor",
        description:
          "Machine learning models analysing startup market data to forecast funding probability and estimate likely round amounts.",
      },
    ],
    techStack: [
      "React and Next.js for web product interfaces",
      "Flutter for single-codebase iOS and Android apps",
      "Python FastAPI and Node.js for API backends",
      "PostgreSQL with Redis caching for scalable data layers",
      "Docker and automated CI/CD from the first sprint",
      "AWS and Azure deployment with cost monitoring",
    ],
    faqs: [
      {
        question: "How long does an MVP typically take?",
        answer:
          "A focused MVP usually reaches launch in 10 to 16 weeks, depending on scope. We work in sprints with demoable builds throughout, so you see progress continuously rather than waiting for a single reveal.",
      },
      {
        question: "Do we own the code and infrastructure?",
        answer:
          "Yes. Source code, repositories, and cloud accounts are yours. We can transfer everything to your in-house team whenever you are ready to bring engineering inside.",
      },
      {
        question: "Can you continue as our tech team after launch?",
        answer:
          "Yes. Many founders keep us on for iteration, scaling, and feature development post-launch, either as a retained team or on a sprint basis.",
      },
      {
        question: "What if we are not technical at all?",
        answer:
          "That is common and fine. We handle architecture decisions and explain the trade-offs in plain terms so you can make informed business calls without needing to evaluate the technology yourself.",
      },
    ],
    office: OFFICE,
    ctaTitle: "Build Your MVP With an Engineering Partner",
    ctaText:
      "Talk to our product team in Nashik. We respond within 24 business hours.",
    ctaButton: "Request Free Consultation",
  },
];

export const industryBySlug = (slug: string) =>
  industriesData.find((industry) => industry.slug === slug);
