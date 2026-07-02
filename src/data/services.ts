import type { LucideIcon } from "lucide-react";
import {
  Wifi,
  Network,
  Cable,
  Cctv,
  Phone,
  DoorOpen,
  ScanFace,
  RadioTower,
  ServerCog,
  Zap,
  ShieldAlert,
  ShieldBan,
  Router,
  MonitorCog,
  Factory,
  Home,
  Video,
  CloudCog,
  Wrench,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDesc: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    icon: Zap,
    title: "Internet Leased Line Connectivity",
    description:
      "Dedicated high-speed internet leased lines ensuring maximum uptime and bandwidth for your enterprise.",
    detailedDesc: "Deliver lightning-fast, ultra-reliable internet leased lines tailored for demanding business environments. Enjoy 1:1 symmetric speeds, robust Service Level Agreements (SLAs), and round-the-clock proactive monitoring to ensure your operations are always online.",
    features: [
      "Symmetric upload & download speeds",
      "SLA guarantees up to 99.9% uptime",
      "Proactive traffic monitoring & alerts",
      "Dedicated 24/7 technical support desk",
    ],
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Network,
    title: "Local LAN Networking",
    description:
      "Complete LAN infrastructure design, installation and management for seamless office connectivity.",
    detailedDesc: "Architect and manage secure, high-performing Local Area Networks (LAN) to facilitate seamless data communication. We custom design enterprise layouts using top-grade switching, routing, and traffic management equipment.",
    features: [
      "High-density switch configuration",
      "VLAN segmentation & traffic isolation",
      "Rigorous packet-loss testing",
      "Scalable design for expansion",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Cable,
    title: "Structured Cabling (LAN/WAN)",
    description:
      "Professional structured cabling solutions compliant with industry standards for reliable data transmission.",
    detailedDesc: "Deploy neat, standardized Cat6/Cat6A/Cat7 copper and fiber structured cabling systems. Our precision styling and layout prevent signal degradation, facilitate easy maintenance, and guarantee high-speed data transmission.",
    features: [
      "Standardized labeling & organization",
      "Certified Cat6/Cat6A copper termination",
      "OTDR & Fluke testing reports",
      "Lifetime performance assurance",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Cctv,
    title: "CCTV Surveillance Systems",
    description:
      "Advanced IP-based CCTV surveillance systems with remote monitoring for comprehensive security.",
    detailedDesc: "Protect your physical assets with advanced IP-based CCTV surveillance. Rest assured with remote mobile access, intelligent video analytics, high-definition recording, and motion alarms integrated with security desks.",
    features: [
      "1080p / 4K UHD IP-cameras",
      "Continuous & motion-based recording",
      "Cloud storage & local storage backups",
      "Remote live monitoring app support",
    ],
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Phone,
    title: "Intercom Systems",
    description:
      "Modern IP and analog intercom solutions for seamless internal communication across facilities.",
    detailedDesc: "Optimize workplace communication with crystal-clear IP and analog intercom deployments. We integrate voice communication systems seamlessly across large multi-floor corporate offices and industrial campuses.",
    features: [
      "VoIP & analog system integration",
      "Multi-terminal directory setup",
      "Robust noise-canceling hardware",
      "Zero-cost local communication lines",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: DoorOpen,
    title: "Access Control Systems",
    description:
      "Secure access control solutions with smart card, PIN and biometric integration.",
    detailedDesc: "Regulate site entries and keep detailed logs using smart keycards, PIN access pads, and electronic locks. Perfect for managing restricted research server rooms, stock repositories, and office gates.",
    features: [
      "Smart card & PIN panel layouts",
      "Magnetic locking system integrations",
      "Centralized administration software",
      "Real-time access logs & alerts",
    ],
    color: "from-brand-700 to-brand-400",
  },
  {
    icon: ScanFace,
    title: "Biometric & Face Recognition",
    description:
      "Cutting-edge biometric and AI-powered face recognition systems for enterprise security.",
    detailedDesc: "Implement state-of-the-art contact-free face recognition and fingerprint biometric scanners. Ideal for precise automated employee attendance tracking, payroll synchronization, and multi-factor validation.",
    features: [
      "High-speed face scanning algorithm",
      "Biometric fingerprint authentication",
      "Attendance management API support",
      "Fail-safe mechanical override switches",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Wifi,
    title: "WiFi & Hotspot Networking",
    description:
      "Enterprise-grade WiFi deployments with seamless roaming and centralized management.",
    detailedDesc: "Install high-density, centralized WiFi networks optimized for enterprise offices and hospitality guests. We configure seamless access-point roaming so you never drop a call while moving between rooms.",
    features: [
      "Centralized cloud controllers",
      "Seamless mesh roaming configuration",
      "Captive portal guest access setup",
      "Advanced RF signal optimization",
    ],
    color: "from-brand-400 to-brand-200",
  },
  {
    icon: ServerCog,
    title: "Server & Data Center Setup",
    description:
      "End-to-end server room and data center design, deployment and management services.",
    detailedDesc: "Design, provision, and deploy high-availability server racks and server rooms. We customize rack layouts, cooling corridors, redundant power lines, automatic fire suppression, and core server styling.",
    features: [
      "Redundant UPS & power configurations",
      "Precision cooling & airflow planning",
      "Cable organizer & rack architecture",
      "Automated environment monitors",
    ],
    color: "from-brand-800 to-brand-500",
  },
  {
    icon: RadioTower,
    title: "Optical Fiber Cabling Projects",
    description:
      "High-capacity optical fiber cabling for long-distance, high-bandwidth network requirements.",
    detailedDesc: "Establish high-speed, long-distance backbones using premium single-mode or multi-mode optical fiber cables. Crucial for connecting distant office buildings, high-bandwidth server hubs, and industrial zones.",
    features: [
      "Fusion splicing & precise termination",
      "Single-mode & Multi-mode deployments",
      "Durable outdoor & armored cabling",
      "High-bandwidth capability check",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: ShieldBan,
    title: "Network Security & Firewall",
    description:
      "Advanced firewall, UTM and network security solutions to protect your critical infrastructure.",
    detailedDesc: "Establish a robust perimeter defense against malware, ransomware, and unauthorized intrusions. We configure Next-Generation Firewalls (NGFW) with intrusion prevention, packet filtering, and SSL inspection.",
    features: [
      "Next-Gen Firewall configuration",
      "Intrusion Prevention Systems (IPS)",
      "Secure client-to-site VPN tunnels",
      "Continuous security threat reporting",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity & Endpoint Protection",
    description:
      "Practical cybersecurity controls for endpoints, users, cloud access and business-critical networks.",
    detailedDesc: "Strengthen your organization with layered cybersecurity covering endpoint protection, email security, identity controls, vulnerability reviews, secure VPN access, and response-ready monitoring. We focus on practical protection that suits day-to-day business operations.",
    features: [
      "Endpoint antivirus / EDR deployment",
      "Email and web security controls",
      "Vulnerability review and hardening",
      "User access and MFA implementation",
    ],
    color: "from-brand-800 to-brand-500",
  },
  {
    icon: Factory,
    title: "Manufacturing IT & OT Networking",
    description:
      "Reliable plant-floor connectivity for manufacturing units, warehouses and industrial operations.",
    detailedDesc: "Build dependable industrial networks for production floors, warehouses, quality labs and administrative blocks. We plan segmentation between IT and OT environments, camera coverage, fiber backbones, access control and resilient switching for demanding sites.",
    features: [
      "Plant-floor LAN and fiber design",
      "IT / OT network segmentation",
      "Industrial CCTV and gate monitoring",
      "Resilient switching for critical zones",
    ],
    color: "from-brand-700 to-brand-400",
  },
  {
    icon: Router,
    title: "Switching, Routing & SD-WAN",
    description:
      "Enterprise switching, routing and branch connectivity for multi-site business operations.",
    detailedDesc: "Design and configure routing, switching and WAN architectures that keep offices, branches and remote sites connected. We handle VLANs, routing policies, failover, VPNs, link load balancing and SD-WAN-ready deployments.",
    features: [
      "Core and access switch deployment",
      "Branch VPN and WAN failover",
      "Routing policy configuration",
      "Bandwidth and link optimization",
    ],
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: MonitorCog,
    title: "IT Hardware & Workstation Support",
    description:
      "Workstation, peripheral, printer and office IT support for stable everyday operations.",
    detailedDesc: "Support everyday office technology with workstation setup, device configuration, printer and scanner integration, user troubleshooting, asset upkeep and preventive maintenance aligned with your network environment.",
    features: [
      "Desktop and laptop setup",
      "Printer and peripheral integration",
      "User troubleshooting support",
      "Asset checks and preventive upkeep",
    ],
    color: "from-brand-500 to-brand-200",
  },
  {
    icon: Home,
    title: "Home & Office Automation",
    description:
      "Smart automation solutions for homes and offices integrating security, lighting and climate control.",
    detailedDesc: "Elevate your property to a smart workspace or home. We install connected automation controllers for smart lighting, climate controls, conference room audio, and video integrations accessible from a single interface.",
    features: [
      "Integrated central control screens",
      "Custom scene & routine configurations",
      "Energy consumption monitoring",
      "Voice control assistant integrations",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Video,
    title: "Audio / Video Conferencing",
    description:
      "Professional AV conferencing systems for boardrooms, classrooms and collaboration spaces.",
    detailedDesc: "Create collaborative boardrooms with high-fidelity microphones, intelligent pan-tilt-zoom cameras, and ultra-high-definition screens. Perfectly compatible with Zoom, Microsoft Teams, and Webex systems.",
    features: [
      "UHD zoom cameras with auto-focus",
      "Echo-canceling boundary microphones",
      "One-touch meeting room controllers",
      "Dual-screen layout configuration",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: CloudCog,
    title: "Cloud Integration & IT Infrastructure",
    description:
      "Seamless cloud migration, hybrid infrastructure and IT services for modern businesses.",
    detailedDesc: "Migrate your file servers and applications to cloud platforms (AWS, Azure, Google Cloud). We build secure hybrid clouds connecting your local office network seamlessly with cloud databases.",
    features: [
      "Secure AWS & Azure VPC setups",
      "On-premise file to cloud syncing",
      "Highly scalable storage endpoints",
      "Disaster recovery & backup policies",
    ],
    color: "from-brand-400 to-brand-200",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    description:
      "Comprehensive AMC packages ensuring optimal performance and priority support year-round.",
    detailedDesc: "Keep your networks running at peak efficiency all year round with our priority AMC support. Benefit from scheduled preventive maintenance, immediate hardware swap guarantees, and fast on-site SLA response times.",
    features: [
      "Scheduled preventive inspections",
      "Priority SLA troubleshooting tickets",
      "Temporary replacement hardware supply",
      "Regular network performance audits",
    ],
    color: "from-brand-600 to-brand-300",
  },
];
