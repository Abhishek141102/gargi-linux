export interface ServiceCard {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow?: string;
  lead: string;
  introTitle?: string;
  intro?: string;
  sectionTitle?: string;
  cards?: ServiceCard[];
  integrations?: string[];
  comparison?: string[][];
  caseStudies?: ServiceCard[];
  methodology?: { step: string; title: string; description: string }[];
  compliance?: string;
  faqs?: ServiceFaq[];
  sectors?: ServiceCard[];
  office?: { address: string; phone: string; email: string; hours: string };
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
}

export const servicesData: ServiceData[] = [
  {
    "slug": "custom-software-development",
    "navLabel": "Custom Software Development",
    "title": "Custom Software Development Company in Nashik (Java & Python)",
    "lead": "TechnoKraft Services LLP engineers enterprise-grade custom software solutions engineered with Java (Spring Boot) and Python (Django, FastAPI) to solve complex business challenges, automate core operations, and accelerate digital transformation. Headquartered on College Road in Nashik with clients across Maharashtra and India, our engineering team constructs secure, high-concurrency, and scalable software architectures.",
    "introTitle": "Build Software Around Your Exact Workflows",
    "intro": "Off-the-shelf software forces businesses to change their proven operating models to fit generic templates. TechnoKraft designs custom software around your proprietary business rules, providing complete source code ownership and freedom from recurring per-user license fees.",
    "sectionTitle": "Core Software Engineering Capabilities",
    "cards": [
      {
        "title": "Enterprise Java & Spring Boot",
        "description": "Multi-threaded, high-concurrency software backends engineered for 99.99% uptime and zero transactional errors."
      },
      {
        "title": "Python FastAPI & Microservices",
        "description": "High-speed RESTful API backends, automated data processing pipelines, and AI/LLM workflow integrations."
      },
      {
        "title": "High-Volume Databases",
        "description": "PostgreSQL and MySQL database schemas optimized for large transactional volumes, with Redis caching."
      },
      {
        "title": "Cloud Architecture & CI/CD",
        "description": "Docker containerization and automated cloud deployments on AWS and Azure with 24/7 server monitoring."
      }
    ],
    "faqs": [
      {
        "question": "Who owns the intellectual property (IP) and source code?",
        "answer": "You do. TechnoKraft delivers full source code, database architectures, and complete IP rights to your company upon project completion."
      },
      {
        "question": "How do you handle software quality assurance and testing?",
        "answer": "Every custom software build undergoes automated unit testing, end-to-end integration tests, data validation scans, and cross-platform UI/UX verification before production deployment."
      }
    ],
    "ctaTitle": "Ready to Engineer Custom Software for Your Business?",
    "ctaText": "Schedule a free technical scoping call with our senior architects in Nashik.",
    "ctaButton": "Schedule Scoping Session"
  },
  {
    "slug": "custom-erp-development",
    "navLabel": "Custom ERP Development",
    "title": "Custom ERP Software Development Company in Nashik",
    "lead": "TechnoKraft Services LLP architects, develops, and deploys fully customized Enterprise Resource Planning (ERP) software designed around the exact operational workflows of your business. Based on College Road in Nashik, Maharashtra, we build robust, scalable, cloud-based ERP systems that unify inventory, procurement, production, sales orders, GST billing, and multi-tier employee approvals into a single, cohesive management portal.",
    "introTitle": "Why Off-the-Shelf ERPs (SAP, Tally, Odoo) Limit Growing Businesses:",
    "intro": "Standard software packages force your company to adapt its proprietary workflows to rigid templates while charging expensive, recurring per-user monthly licenses. TechnoKraft’s custom ERPs give you 100% control over your operational logic, complete source code ownership, and zero per-seat subscription fees.",
    "sectionTitle": "Core Modules in a TechnoKraft Custom ERP",
    "cards": [
      {
        "title": "Inventory & Warehouse",
        "description": "Multi-godown stock tracking, Low-Stock & MOQ alerts, barcode scanner integration, batch numbers, and FIFO picking."
      },
      {
        "title": "Purchase & Procurement",
        "description": "Purchase requisitions, supplier rate comparison, automated PO generation, GRN matching, and vendor payment ledgers."
      },
      {
        "title": "Sales Order & Dispatch",
        "description": "Customer quotations, sales orders, packing slips, delivery challans, and customer payment reminder alerts via WhatsApp."
      },
      {
        "title": "GST Invoicing & Accounts",
        "description": "GST-compliant tax invoicing (CGST/SGST/IGST), accounts receivable/payable aging, and seamless Tally data export bridges."
      }
    ],
    "comparison": [
      [
        "Workflow Alignment",
        "Rigid generic templates",
        "100% Tailored to Your Business Logic"
      ],
      [
        "Licensing Fees",
        "Recurring per-user / per-month fees",
        "One-Time Investment (Zero Per-Seat Fees)"
      ],
      [
        "Data Ownership",
        "Stored on vendor's cloud",
        "100% Proprietary Cloud Ownership (AWS/Azure)"
      ],
      [
        "Custom Modules",
        "Expensive certified consultants required",
        "Modular & Scalable as Your Business Grows"
      ]
    ],
    "caseStudies": [
      {
        "title": "Rejos Transport: Freight Logistics CRM",
        "description": "Tracked 39,129+ Lorry Receipts with automated multi-branch vehicle allotment, rate cards, and instant invoicing."
      },
      {
        "title": "Capernaum Solutions ERP Portal",
        "description": "Centralized account orchestration, departmental approval pipelines, and live executive revenue dashboards."
      }
    ],
    "faqs": [
      {
        "question": "Can you migrate historical data from our current Excel sheets or Tally?",
        "answer": "Yes. We develop automated data sanitization scripts that import your historical customer masters, supplier ledgers, SKU lists, and transaction histories cleanly into the new ERP database."
      },
      {
        "question": "How long does a custom ERP project take to build and deploy?",
        "answer": "A standard custom ERP deployment with 4–6 core modules typically takes 8 to 16 weeks, delivered in iterative bi-weekly sprint milestones allowing your staff to test and adopt modules progressively."
      }
    ],
    "ctaTitle": "Ready to Build a Custom ERP for Your Business?",
    "ctaText": "Schedule a free technical scoping call with our enterprise ERP architects on College Road, Nashik.",
    "ctaButton": "Schedule ERP Consultation"
  },
  {
    "slug": "inventory-management-software",
    "navLabel": "Inventory Management Software",
    "title": "Custom Inventory & Warehouse Management Software Development",
    "lead": "TechnoKraft Services LLP develops bespoke Inventory Management and Warehouse Control Software that gives businesses total, real-time visibility over raw materials, finished stock, and inter-branch inventory transfers. Built for manufacturers, distributors, retail chains, and logistics operators in Nashik and throughout Maharashtra, our inventory systems eliminate stockouts, prevent dead capital accumulation, and automate purchase-to-dispatch workflows.",
    "introTitle": "Eliminate the Costly Errors of Excel Spreadsheets",
    "intro": "Managing thousands of SKUs across multiple storage godowns using manual registers or detached Excel sheets leads to double-allocations, untracked shrinkage, and missed client delivery deadlines. TechnoKraft engineers automated, scan-verified inventory databases that sync stock movements in real time.",
    "sectionTitle": "Core Capabilities of TechnoKraft Inventory Software",
    "cards": [
      {
        "title": "Barcode & QR Code Integration",
        "description": "Generate, print, and scan custom barcode labels for rapid inbound material verification (GRN) and error-free outbound picking."
      },
      {
        "title": "Multi-Warehouse Synchronization",
        "description": "Centralized visibility across regional godowns with inter-branch stock transfer challans and in-transit tracking."
      },
      {
        "title": "Low-Stock & Reorder Triggers",
        "description": "Automated Minimum Order Quantity (MOQ) alerts linked to vendor lead times, generating draft purchase requisitions automatically."
      },
      {
        "title": "Batch, Serial & Expiry (FIFO/FEFO)",
        "description": "Granular batch number tracking, expiry date alerts, and automated First-In First-Out (FIFO) picking algorithms for perishables."
      }
    ],
    "integrations": [
      "Zebra, Honeywell & TVS Barcode Scanners",
      "Thermal Label Printers & Receipt Printers",
      "Weighbridge & Industrial Scale API Integration",
      "GST E-Way Bill & Tax Invoicing Connectors"
    ],
    "ctaTitle": "Get Complete Real-Time Visibility Over Your Stock",
    "ctaText": "Connect with our inventory software specialists on College Road, Nashik for a custom demonstration.",
    "ctaButton": "Request Inventory Demo"
  },
  {
    "slug": "web-development",
    "navLabel": "Web Application Development",
    "title": "Web Application Development & UI/UX Design in Nashik",
    "lead": "TechnoKraft Services LLP creates high-performance, blazing-fast web applications, interactive portals, and custom SaaS platforms built with React, Next.js, and Node.js. Combining human-centered UI/UX design with robust Python and Java backends, we build web solutions that deliver seamless experiences across desktop and mobile devices.",
    "introTitle": "Modern Web Frameworks & 95+ Core Web Vitals",
    "intro": "We construct Progressive Web Apps (PWA) and Single Page Applications (SPA) engineered for fast load times, smooth micro-interactions, full keyboard accessibility, and top Google Search visibility.",
    "sectionTitle": "Our Web Development Services",
    "cards": [
      {
        "title": "Single Page Apps (SPA)",
        "description": "Ultra-fast reactive web applications built with React.js, Next.js, and Vite for dynamic user interactions."
      },
      {
        "title": "Custom E-Commerce",
        "description": "High-converting luxury e-commerce platforms with custom product builders and payment gateways (proven by Irasa Perfumes)."
      },
      {
        "title": "Enterprise Portals",
        "description": "Secure customer, vendor, and student dashboards with role-based access and data analytics (proven by Focus Coaching & IMS)."
      },
      {
        "title": "Technical SEO Built-In",
        "description": "Server-side rendering (SSR), semantic HTML5, JSON-LD Schema markup, and sub-second page loads."
      }
    ],
    "ctaTitle": "Build a High-Converting Web Application",
    "ctaText": "Schedule a consultation with our front-end and full-stack architects on College Road, Nashik.",
    "ctaButton": "Discuss Web Project"
  },
  {
    "slug": "mobile-app-development",
    "navLabel": "Mobile App Development",
    "title": "Native & Cross-Platform Mobile App Development in Nashik",
    "lead": "TechnoKraft Services LLP builds high-performance, intuitive, and secure mobile applications for iOS and Android. Whether engineering single-codebase cross-platform solutions on Flutter and React Native or specialized native Swift and Kotlin applications, our mobile team delivers fluid 60 FPS performance and rich device integrations.",
    "introTitle": "Cross-Platform Efficiency with Native Speed",
    "intro": "Using Flutter and React Native, we cut time-to-market in half while maintaining pixel-perfect native UI performance, shared business logic, offline data caching, and seamless Google Play and Apple App Store deployment.",
    "sectionTitle": "Our Mobile Development Capabilities",
    "cards": [
      {
        "title": "Cross-Platform Flutter Apps",
        "description": "High-performance Android and iOS mobile applications with rich custom UI widgets and instant state reload."
      },
      {
        "title": "Geo-Tracking & Offline Sync",
        "description": "Offline data caching with automated cloud sync upon reconnection, and tamper-proof GPS geo-fencing."
      },
      {
        "title": "Push Alerts & Live Chat",
        "description": "Firebase Cloud Messaging (FCM) push notifications, real-time WebSockets chat, and event alerts."
      },
      {
        "title": "Biometric Security & Payments",
        "description": "FaceID and Fingerprint biometric authentication with integrated Razorpay, Stripe, and UPI mobile checkouts."
      }
    ],
    "ctaTitle": "Build a Powerful Mobile App Today",
    "ctaText": "Schedule a free consultation with our mobile application leads on College Road, Nashik.",
    "ctaButton": "Discuss Mobile App"
  },
  {
    "slug": "cloud-devops",
    "navLabel": "Cloud & DevOps Engineering",
    "title": "Scalable Cloud Infrastructure, AWS/Azure Migration & DevOps",
    "lead": "Transform your business agility and application scalability with TechnoKraft Services’ Cloud & DevOps engineering. We empower organizations to migrate, modernize, and automate their cloud environments across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
    "introTitle": "Zero-Downtime Migration & Automated CI/CD",
    "intro": "By containerizing applications with Docker, orchestrating with Kubernetes, and automating continuous integration and delivery (CI/CD) pipelines, we eliminate deployment friction and maintain 99.99% infrastructure availability.",
    "sectionTitle": "Our Cloud & DevOps Capabilities",
    "cards": [
      {
        "title": "AWS & Azure Migration",
        "description": "Seamless lift-and-shift or cloud-native re-architecting of on-premise servers with zero operational downtime."
      },
      {
        "title": "Docker & Kubernetes",
        "description": "Microservices containerization and Kubernetes cluster management for auto-scaling under peak traffic loads."
      },
      {
        "title": "Automated CI/CD Pipelines",
        "description": "GitHub Actions and Jenkins automated deployment pipelines ensuring rapid, error-free software releases."
      },
      {
        "title": "FinOps Cost Reduction",
        "description": "Auditing and optimizing cloud infrastructure configurations, reducing AWS/Azure bills by 20% to 40%."
      }
    ],
    "ctaTitle": "Optimize Your Cloud Infrastructure Today",
    "ctaText": "Schedule a free cloud audit with our certified architects in Nashik.",
    "ctaButton": "Schedule Cloud Audit"
  },
  {
    "slug": "cybersecurity-vapt",
    "navLabel": "Cybersecurity & VAPT Audits",
    "title": "Vulnerability Assessment & Penetration Testing (VAPT)",
    "eyebrow": "ENTERPRISE THREAT PROTECTION",
    "lead": "Modern web applications, mobile platforms, and enterprise cloud networks face relentless attacks from automated exploit bots, credential stuffing, and sophisticated ransomware. At TechnoKraft Services LLP, our certified security analysts conduct rigorous Vulnerability Assessments and Penetration Testing (VAPT) to identify, exploit, and remediate security weaknesses before malicious actors can exploit them. We follow internationally recognized security standards including the OWASP Top 10, SANS Top 25, NIST SP 800-115, and CIS Benchmarks. Our audits combine automated vulnerability scanning with extensive manual ethical hacking to uncover complex logical flaws, business logic bypasses, and privilege escalation vulnerabilities that automated scanners miss.",
    "sectionTitle": "Our Security Testing Capabilities",
    "cards": [
      {
        "title": "Web & API Pen Testing",
        "description": "Deep inspection of SQL injection, cross-site scripting (XSS), broken authentication, IDOR, SSRF, and REST/GraphQL API vulnerabilities."
      },
      {
        "title": "Mobile App Security",
        "description": "Static and dynamic analysis (SAST/DAST) for iOS and Android apps, checking reverse engineering risks, insecure local data storage, and IPC flaws."
      },
      {
        "title": "Cloud & IAM Audits",
        "description": "Auditing AWS, Azure, and Google Cloud environments for overly permissive IAM policies, exposed S3 buckets, unencrypted databases, and container misconfigurations."
      },
      {
        "title": "Source Code Review",
        "description": "Line-by-line manual code auditing combined with automated SAST tools to detect insecure dependencies, hardcoded secrets, and cryptographic errors."
      }
    ],
    "methodology": [
  {
    "step": "01",
    "title": "Scoping & Rules of Engagement",
    "description": "Defining target IP ranges, domains, APIs, testing windows, and non-destructive testing boundaries to prevent system downtime."
  },
  {
    "step": "02",
    "title": "Reconnaissance & Threat Modeling",
    "description": "Mapping attack surfaces, subdomains, listening ports, exposed services, frameworks, and architecture components."
  },
  {
    "step": "03",
    "title": "Vulnerability Analysis & Exploitation",
    "description": "Manual penetration testing to confirm exploitability, chain vulnerabilities, evaluate privilege escalation paths, and eliminate false positives."
  },
  {
    "step": "04",
    "title": "Executive & Technical Reporting",
    "description": "Delivering CVSS v3 scored vulnerability reports, step-by-step reproduction steps (PoC), and exact remediation guidance for developers."
  },
  {
    "step": "05",
    "title": "Remediation Support",
    "description": "Collaborating directly with your internal development or DevOps teams to assist with patch deployment and code sanitization."
  },
  {
    "step": "06",
    "title": "Re-Testing & Security Attestation Certificate",
    "description": "Conducting secondary validation scans to confirm all identified vulnerabilities are resolved, issuing formal audit completion certificates."
  }
],
    "compliance": "Whether you need to satisfy enterprise vendor security questionnaires, prepare for ISO/IEC 27001 certification, adhere to India’s Digital Personal Data Protection (DPDP) Act 2023, or fulfill CERT-In security reporting guidelines, TechnoKraft equips your team with the audit reports and documentation required by enterprise stakeholders.",
    "faqs": [
      {
        "question": "What is the difference between a Vulnerability Assessment (VA) and Penetration Testing (PT)?",
        "answer": "A Vulnerability Assessment uses automated tools to scan and list known vulnerabilities without actively exploiting them. Penetration Testing goes further: an ethical hacker manually attempts to exploit those flaws to prove real-world impact, discover business logic bugs, and demonstrate actual attack vectors."
      },
      {
        "question": "Will a penetration test cause downtime for our live production systems?",
        "answer": "No. We establish clear Rules of Engagement prior to testing. Non-destructive methods are prioritized, and intrusive tests (such as heavy fuzzing or DoS simulations) are conducted either on staging environments or during scheduled maintenance windows to ensure zero downtime."
      },
      {
        "question": "Do you provide re-testing after our developers patch the vulnerabilities?",
        "answer": "Yes. Every VAPT engagement includes one complete round of re-testing after your engineering team implements the remediation recommendations. Once verified, we issue an updated audit report and security closure certificate."
      }
    ],
    "ctaTitle": "Schedule a Security Assessment",
    "ctaText": "Speak confidentially with our certified security experts about your audit requirements.",
    "ctaButton": "Book VAPT Assessment"
  },
  {
    "slug": "ai-machine-learning",
    "navLabel": "AI & Machine Learning",
    "title": "Practical AI & Machine Learning Business Solutions in Nashik",
    "lead": "Unlock transformative business value, predictive foresight, and intelligent automated workflows with TechnoKraft Services’ AI and Machine Learning solutions. We assist enterprises in transforming unstructured data into actionable decision-making engines.",
    "introTitle": "Practical AI Embedded into Daily Operations",
    "intro": "We do not build generic chatbots for novelty. We build practical AI layers integrated into your custom ERP, CRM, and SaaS applications to automate document parsing, classify customer sentiment, score sales leads, and forecast inventory demand.",
    "sectionTitle": "Our AI & Machine Learning Services",
    "cards": [
      {
        "title": "Predictive Analytics",
        "description": "Machine learning algorithms trained on historical data to anticipate demand spikes, equipment failures, and sales trends."
      },
      {
        "title": "NLP Sentiment & Text Mining",
        "description": "Natural Language Processing models for customer feedback classification and complaint risk detection (proven in our Amazon Review NLP model)."
      },
      {
        "title": "Custom LLM & RAG Workflows",
        "description": "LangChain and Retrieval-Augmented Generation (RAG) pipelines for semantic knowledge base search and document summarization."
      },
      {
        "title": "Zero Data Leakage Privacy",
        "description": "Self-hosted and private cloud model deployments ensuring client proprietary data is never used for public training."
      }
    ],
    "ctaTitle": "Automate Your Operations with Machine Learning",
    "ctaText": "Schedule a free discovery call with our AI engineers on College Road, Nashik.",
    "ctaButton": "Schedule AI Discovery Call"
  },
  {
    "slug": "nashik-software-services",
    "navLabel": "Nashik Software Services",
    "title": "Leading Software Development Company in Nashik, Maharashtra",
    "lead": "TechnoKraft Services LLP is an established software engineering and IT consulting firm based on College Road in Nashik. Since 2014, we have partnered with manufacturing units across Ambad and Satpur MIDC, freight logistics providers, educational coaching networks, and commercial enterprises to deliver robust custom software, ERP systems, web platforms, and mobile applications.",
    "sectionTitle": "Why Nashik Businesses Trust TechnoKraft Services",
    "cards": [
      {
        "title": "Physical College Road Office",
        "description": "Meet our technical directors and software architects in person at our office on Thatte Nagar Marg, College Road to review requirements face-to-face."
      },
      {
        "title": "12+ Years Local Experience",
        "description": "Founded in 2014, we possess a verified decade-long track record delivering over 50+ custom software and ERP applications across Maharashtra."
      },
      {
        "title": "Enterprise Tech Mastery",
        "description": "Specialized expertise in Java (Spring Boot), Python (FastAPI/Django), React, Next.js, Flutter, and Amazon Web Services (AWS) cloud architecture."
      },
      {
        "title": "Complete Code Ownership",
        "description": "Zero per-user recurring license fees. You own your source code, database architecture, and intellectual property entirely."
      }
    ],
    "sectors": [
      {
        "title": "Manufacturing & Industrial Units (Ambad & Satpur MIDC)",
        "description": "Custom production planning ERP, raw material inventory with barcode scanning, machine maintenance logs, and GST billing."
      },
      {
        "title": "Freight Transport & Logistics Operators",
        "description": "High-capacity logistics CRM tracking 39,000+ Lorry Receipts (LR), automated fleet allotment, rate cards, and memo generation."
      },
      {
        "title": "Coaching Classes & Educational Institutes",
        "description": "Multi-batch student management ERP tracking ₹9.96L+ in fee installments, attendance records, and exam scorecards."
      }
    ],
    "office": {
      "address": "3rd Floor, Kanchwala Avenue, Above Viju's Dabeli, Thatte Nagar Marg, College Road, Nashik, Maharashtra - 422005",
      "phone": "+91 93701 74424",
      "email": "info@technokraftservices.com",
      "hours": "Monday – Saturday: 9:30 AM to 8:30 PM (Sunday: Closed)"
    },
    "ctaTitle": "Discuss Your Project",
    "ctaText": "Talk to a software expert in Nashik. We respond within 24 business hours.",
    "ctaButton": "Request Free Consultation"
  }
];

export const serviceBySlug = (slug: string) => servicesData.find((service) => service.slug === slug);
