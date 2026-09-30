export interface CompanyService {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  points: string[];
}

export const COMPANY_SERVICES: CompanyService[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary: "Purpose-built software designed around your workflows and goals.",
    overview: "We plan and build tailored software for organizations that need more than an off-the-shelf solution. From clarifying requirements to delivery and ongoing improvements, the work is shaped around the people who will use it.",
    points: ["Requirements discovery and solution planning", "Custom web and business applications", "Integration with existing tools and data", "Ongoing maintenance and feature development"],
  },
  {
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    summary: "Bring essential business processes together in one connected system.",
    overview: "A well-fitted ERP can help teams coordinate everyday operations and work from consistent information. We develop ERP solutions around your processes, roles, and reporting needs, with room to evolve as your business changes.",
    points: ["Business process mapping and ERP planning", "Modules for finance, operations, and teams", "Role-based access and approval workflows", "Reporting, integrations, and system support"],
  },
  {
    slug: "inventory-management-software",
    title: "Inventory Management Software",
    summary: "Track stock, movements, and replenishment with clearer workflows.",
    overview: "Inventory tools should make it easier to understand what is available, where it is stored, and when action is needed. We create inventory management software that reflects your products, locations, and day-to-day handling processes.",
    points: ["Stock and warehouse visibility", "Purchase, transfer, and adjustment workflows", "Low-stock alerts and replenishment support", "Inventory reports and operational dashboards"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    summary: "Secure, responsive web applications for customers and internal teams.",
    overview: "We design and build web applications that work smoothly across devices and support the tasks your users need to complete. The approach covers clear interfaces, dependable application architecture, and practical deployment considerations.",
    points: ["Web application planning and UI development", "Responsive customer and staff portals", "APIs and third-party service integrations", "Testing, deployment, and ongoing improvements"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary: "Mobile experiences that keep your services close at hand.",
    overview: "From a first product concept to a companion app for an existing service, we help shape mobile experiences around real user needs. We focus on intuitive flows, reliable integrations, and maintainable releases.",
    points: ["Mobile product discovery and app planning", "Android and cross-platform application development", "Backend and API integration", "Release preparation and maintenance"],
  },
  {
    slug: "cloud-devops-engineering",
    title: "Cloud & DevOps Engineering",
    summary: "Build and operate cloud environments with smoother delivery workflows.",
    overview: "Cloud and DevOps practices help teams deploy changes consistently and operate services with greater visibility. We help plan cloud environments and streamline build, release, monitoring, and infrastructure workflows.",
    points: ["Cloud architecture and environment setup", "CI/CD pipeline design and automation", "Infrastructure as code and configuration management", "Monitoring, reliability, and cost visibility"],
  },
  {
    slug: "cybersecurity-vapt-audits",
    title: "Cybersecurity & VAPT Audits",
    summary: "Identify security weaknesses and prioritize practical improvements.",
    overview: "Security assessments provide a clearer view of potential exposure across applications and infrastructure. We conduct scoped vulnerability assessment and penetration testing, then explain findings in a prioritized report to support remediation.",
    points: ["Scope and assessment planning", "Vulnerability assessment and penetration testing", "Risk-ranked findings and remediation guidance", "Retesting support after fixes are applied"],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    summary: "Apply data-driven automation and insights to useful business problems.",
    overview: "AI and machine learning projects work best when they start with a clear problem and suitable data. We help evaluate use cases and build focused solutions that fit existing workflows and can be assessed against measurable outcomes.",
    points: ["Use-case discovery and feasibility review", "Data preparation and model development", "AI-powered automation and application features", "Evaluation, integration, and iteration"],
  },
];

export const companyServiceBySlug = (slug: string) =>
  COMPANY_SERVICES.find((service) => service.slug === slug);

