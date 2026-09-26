export interface LinuxService {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  points: string[];
}


export const LINUX_SERVICES: LinuxService[] = [
  {
    slug: "linux-server-setup",
    title: "Linux Server Setup & Configuration",
    summary: "Set up a Linux server environment around your requirements.",
    overview:
      "A well-planned server setup gives your applications and teams a dependable place to run. We can help assess your needs and prepare an environment that fits your intended workloads.",
    points: [
      "Review server and workload requirements",
      "Install and configure a suitable Linux environment",
      "Set up essential services and access",
      "Document the delivered configuration",
    ],
  },
  {
    slug: "server-administration",
    title: "Linux Server Administration",
    summary: "Keep Linux systems maintained and operating smoothly.",
    overview:
      "Routine administration helps teams keep server environments organized and easier to manage. Support can be shaped around the systems and operating practices you already have.",
    points: [
      "Routine system administration",
      "Configuration and package maintenance",
      "Service and resource checks",
      "Operational guidance for your team",
    ],
  },
  {
    slug: "access-management",
    title: "Linux User & Access Management",
    summary: "Organize user accounts, permissions, and system access.",
    overview:
      "Clear access practices help ensure people can reach the systems they need while keeping permissions manageable. We can review your current setup and help align it with your organization’s workflow.",
    points: [
      "User and group account setup",
      "Permission and access review",
      "SSH access configuration",
      "Account lifecycle guidance",
    ],
  },
  {
    slug: "linux-security-hardening",
    title: "Linux Security & Hardening",
    summary:
      "Review common system settings and strengthen your Linux environment.",
    overview:
      "Security work starts with understanding the current environment and its exposure. We can help identify practical configuration improvements and support a more consistent maintenance approach.",
    points: [
      "Baseline configuration review",
      "Firewall and remote access settings",
      "System update planning",
      "Security recommendations and documentation",
    ],
  },
  {
    slug: "backup-recovery",
    title: "Linux Backup & Recovery",
    summary: "Plan backup routines and recovery steps for important systems.",
    overview:
      "A backup plan is useful when it matches the data and recovery needs of your organization. We can help review what should be protected and outline a practical approach to restore readiness.",
    points: [
      "Identify important systems and data",
      "Plan backup frequency and retention",
      "Review storage and access considerations",
      "Document recovery steps",
    ],
  },
  {
    slug: "linux-technical-support",
    title: "Linux Troubleshooting & Technical Support",
    summary:
      "Get help investigating Linux issues and resolving system problems.",
    overview:
      "When a Linux system behaves unexpectedly, a clear investigation helps narrow down the cause. Share the environment and symptoms, and we can discuss a suitable support path.",
    points: [
      "System and service troubleshooting",
      "Log and configuration review",
      "Performance issue investigation",
      "Practical recommendations for next steps",
    ],
  },
];

export const linuxServiceBySlug = (slug: string) =>
  LINUX_SERVICES.find((service) => service.slug === slug);
