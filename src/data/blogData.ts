export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
}

// Educational draft articles for the Gargi Linux Access website.
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "linux-server-basics", slug: "linux-server-basics-for-business", title: "Linux Server Basics for Business Workloads",
    excerpt: "A practical introduction to choosing, setting up, and maintaining a Linux server environment for business applications.", category: "Linux Infrastructure", date: "September 2026", readTime: "5 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Linux servers power websites, internal tools, databases, and many other business services. Before setting one up, it helps to understand what the workload needs and who will maintain the system.",
      "Start by listing the applications the server will run, the expected number of users, storage needs, and any availability requirements. These details guide decisions about server capacity, network access, and where the system should be hosted.",
      "Choose a Linux distribution that fits your support and maintenance plans. Keep the installation focused on required packages and services, since a simpler system is often easier to understand and maintain.",
      "Plan user accounts, remote administration, updates, backups, and monitoring as part of the initial setup. Keeping configuration notes gives the team a useful reference when changes or troubleshooting are needed.",
      "A reliable server setup is an ongoing process. Review system health and operating needs regularly as applications and teams change."
    ]
  },
  {
    id: "linux-access-control", slug: "linux-users-permissions-and-access", title: "Linux Users, Permissions, and Access: A Practical Guide",
    excerpt: "Learn the basics of Linux accounts, groups, file permissions, and remote access in a shared environment.", category: "Linux Administration", date: "September 2026", readTime: "6 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Linux uses users and groups to determine who can work with files and services. A clear account structure makes shared systems easier to administer and helps teams understand which access belongs to each role.",
      "Follow the principle of least privilege: give each account the permissions needed for its tasks, and avoid using administrator-level access for routine work. Groups can make it simpler to manage permissions for people with similar responsibilities.",
      "Review file ownership and permissions when applications or teams change. Broad permissions may be convenient in the moment, but they can expose data or allow unintended modifications later.",
      "For remote administration, use a controlled SSH configuration and protect authentication credentials. Remove or disable accounts when access is no longer required, and review privileged accounts periodically.",
      "Documenting who has access, why it is needed, and how it is reviewed gives the organization a clearer and more maintainable access process."
    ]
  },
  {
    id: "linux-updates", slug: "linux-server-updates-and-maintenance", title: "Planning Linux Server Updates and Maintenance",
    excerpt: "Build a steady maintenance routine for Linux systems without losing sight of service availability and change planning.", category: "Linux Operations", date: "September 2026", readTime: "5 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Regular updates help keep operating systems and installed software maintained. A repeatable process makes updates easier to plan and reduces the chance that important systems are forgotten.",
      "First, keep an inventory of servers, distributions, applications, and system owners. This provides a starting point for understanding which updates apply and who should review them.",
      "Before changing a production system, understand the update, check compatibility requirements, and plan a suitable maintenance window. Make sure important data is backed up and that the team knows how to verify services afterward.",
      "After updates, check that expected services are running and review logs for issues. Record what changed and any follow-up work so future maintenance has a clear history.",
      "The right maintenance frequency depends on the system and its operating requirements. A documented schedule helps balance timely updates with careful change management."
    ]
  },
  {
    id: "linux-backups", slug: "linux-backup-and-recovery-planning", title: "Linux Backup and Recovery Planning for Small Teams",
    excerpt: "A straightforward way to identify important data, set backup priorities, and prepare for recovery.", category: "Backup & Recovery", date: "September 2026", readTime: "6 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Backups are useful when they can restore the information and services a team depends on. Planning begins by identifying important data, where it lives, and how long the organization can operate without it.",
      "Different systems may need different backup schedules and retention periods. Consider how often data changes, how much history is useful, and who should be able to access backup copies.",
      "Keep backup copies protected from the same risks that could affect the original system. Storage location, access credentials, and monitoring all matter when building a dependable process.",
      "A backup that has never been restored is an assumption. Schedule restore checks in a safe environment and document the steps, dependencies, and expected recovery time.",
      "Review the plan whenever systems or business priorities change. Clear ownership and current documentation help make recovery less stressful when it is needed."
    ]
  },
  {
    id: "linux-monitoring", slug: "linux-server-health-monitoring", title: "What to Monitor on a Linux Server",
    excerpt: "Understand useful starting points for checking Linux system health, service status, storage, and resource use.", category: "Linux Monitoring", date: "September 2026", readTime: "5 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Monitoring helps a team notice changes in a Linux system before they become harder to investigate. Useful checks depend on what the server does, but a few basic signals apply to many environments.",
      "Track processor load, memory use, disk capacity, and network activity over time. Trends can help distinguish a temporary spike from a gradual change that needs attention.",
      "Service availability matters too. Confirm that important processes are running and that the applications they support can respond as expected. Logs provide additional context when a check reports a problem.",
      "Alerts should be actionable. Set thresholds that reflect the system's role, route notifications to someone responsible, and include enough detail to begin an investigation.",
      "Review monitoring coverage as applications change. A small set of relevant checks with clear ownership is more useful than collecting data nobody reviews."
    ]
  },
  {
    id: "linux-ssh-security", slug: "safer-ssh-access-for-linux-servers", title: "Safer SSH Access for Linux Servers",
    excerpt: "Practical considerations for managing remote Linux access, authentication, and account reviews.", category: "Linux Security", date: "September 2026", readTime: "6 min read", author: "Gargi Linux Access",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "SSH is widely used to administer Linux systems remotely. Because it provides access to important services and data, teams should treat SSH configuration and account management as part of their regular operations.",
      "Limit remote access to the people and systems that need it. Keep user accounts individually attributable, review privileged access, and remove credentials when a person or service no longer needs them.",
      "Use strong authentication practices appropriate to the environment, protect private keys, and avoid sharing personal credentials. Where practical, restrict access through network controls or an approved access gateway.",
      "Keep the SSH service and operating system maintained, and review authentication logs for unusual activity. Changes should be planned and tested so administrators do not unintentionally lock themselves out.",
      "Documenting the approved access path and recovery process helps teams manage remote administration more consistently."
    ]
  }
];