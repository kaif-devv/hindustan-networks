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
    detailedDesc: "Bring active and passive network infrastructure together in one planned LAN. We combine switches, routers, wireless access points, controllers and network appliances with racks, patch panels, patch cords and organized cabling for reliable day-to-day connectivity.",
    features: [
      "High-density switch configuration",
      "VLAN segmentation & traffic isolation",
      "Rigorous packet-loss testing",
      "Scalable design for expansion",
      "Active switches, routers and network controllers",
      "Passive racks, patch panels and patch cords",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Cable,
    title: "Structured Cabling (LAN/WAN)",
    description:
      "Professional structured cabling solutions compliant with industry standards for reliable data transmission.",
    detailedDesc: "Build an organized data and voice cabling system for offices, campuses and commercial or residential projects. We plan copper and fiber routes, racks and patch panels around your site, then install, label, test and document the network for easier maintenance and expansion.",
    features: [
      "Standardized labeling & organization",
      "Cat5e / Cat6 / Cat6A data and voice cabling",
      "OTDR & Fluke testing reports",
      "Patch panels, racks and cable management",
      "LAN / WAN infrastructure planning",
      "Network documentation and handover",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Cctv,
    title: "CCTV Surveillance Systems",
    description:
      "Advanced IP-based CCTV surveillance systems with remote monitoring for comprehensive security.",
    detailedDesc: "Plan CCTV coverage for entrances, work areas and indoor or outdoor spaces. We install and configure IP and HD surveillance systems, recording equipment, video storage and remote monitoring, with integration options based on the selected equipment.",
    features: [
      "1080p / 4K UHD IP-cameras",
      "Continuous & motion-based recording",
      "Cloud storage & local storage backups",
      "Remote live monitoring app support",
      "NVR / DVR configuration and video retention planning",
      "Indoor / outdoor camera placement and integration",
    ],
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Phone,
    title: "Intercom Systems",
    description:
      "Modern IP and analog intercom solutions for seamless internal communication across facilities.",
    detailedDesc: "Connect reception desks, entrances, individual units and teams with IP, analog, audio or video intercom systems. We plan multi-user communication for offices, apartments, institutions and commercial facilities, with entry-system integration where equipment supports it.",
    features: [
      "VoIP & analog system integration",
      "Multi-terminal directory setup",
      "Audio and video intercom options",
      "Apartment, office and multi-user communication",
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
      "RFID readers, exit devices and door release",
      "Visitor management integration where supported",
    ],
    color: "from-brand-700 to-brand-400",
  },
  {
    icon: ScanFace,
    title: "Biometric & Face Recognition",
    description:
      "Cutting-edge biometric and AI-powered face recognition systems for enterprise security.",
    detailedDesc: "Deploy fingerprint and face recognition devices for employee attendance and controlled access. We configure users, attendance reporting and compatible access-control integrations around your operating requirements.",
    features: [
      "High-speed face scanning algorithm",
      "Biometric fingerprint authentication",
      "Employee attendance reporting",
      "Integration with compatible access systems",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Wifi,
    title: "WiFi & Hotspot Networking",
    description:
      "Enterprise-grade WiFi deployments with seamless roaming and centralized management.",
    detailedDesc: "Plan wireless LAN coverage around user density, applications and site conditions. We deploy indoor and outdoor access points for offices, campuses, hotels and residential properties, with guest access, hotspot distribution and mobility between coverage zones.",
    features: [
      "Centralized cloud controllers",
      "Seamless mesh roaming configuration",
      "Captive portal guest access setup",
      "Advanced RF signal optimization",
      "Indoor / outdoor access points and coverage planning",
      "Capacity planning for campus and hospitality WiFi",
    ],
    color: "from-brand-400 to-brand-200",
  },
  {
    icon: ServerCog,
    title: "Server & Data Center Setup",
    description:
      "End-to-end server room and data center design, deployment and management services.",
    detailedDesc: "Set up organized server rooms and data center networks, from server infrastructure and rack layouts to switching, structured cabling and documentation. We coordinate UPS requirements and cooling or environmental considerations with the wider site team.",
    features: [
      "UPS and power infrastructure coordination",
      "Precision cooling & airflow planning",
      "Cable organizer & rack architecture",
      "Automated environment monitors",
      "Server infrastructure and data center networking",
      "Infrastructure documentation and handover",
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
      "OTDR and fiber link testing",
      "Fiber patch panels and backbone documentation",
      "Building and campus fiber connectivity",
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
      "Secure internet gateways and access policies",
      "Network segmentation and firewall support",
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
    detailedDesc: "Bring lighting, smart controls, entry systems and compatible security or AV equipment into a coordinated home or office setup. Automation is planned around the property, supported equipment and the routines that matter to its users.",
    features: [
      "Integrated central control screens",
      "Custom scene & routine configurations",
      "Energy consumption monitoring",
      "Voice control assistant integrations",
      "Access automation and security integration",
    ],
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Video,
    title: "Audio / Video Conferencing",
    description:
      "Professional AV conferencing systems for boardrooms, classrooms and collaboration spaces.",
    detailedDesc: "Equip boardrooms, classrooms and meeting spaces for clear audio and video collaboration. We integrate displays, cameras, microphones, speakers and room controls, choosing equipment to suit your preferred meeting platform and hybrid-working requirements.",
    features: [
      "UHD zoom cameras with auto-focus",
      "Echo-canceling boundary microphones",
      "One-touch meeting room controllers",
      "Dual-screen layout configuration",
      "Speaker, microphone and display integration",
      "Hybrid meeting setup and configuration",
    ],
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: CloudCog,
    title: "Cloud Integration & IT Infrastructure",
    description:
      "Seamless cloud migration, hybrid infrastructure and IT services for modern businesses.",
    detailedDesc: "Connect physical IT infrastructure with cloud environments through network integration, migration planning and secure hybrid connectivity. We review your existing systems, plan the transition and support network optimization and day-to-day infrastructure needs.",
    features: [
      "Secure AWS & Azure VPC setups",
      "On-premise file to cloud syncing",
      "Highly scalable storage endpoints",
      "Disaster recovery & backup policies",
      "Infrastructure planning and migration support",
      "Hybrid network optimization and IT support",
    ],
    color: "from-brand-400 to-brand-200",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    description:
      "Planned maintenance, system health checks and technical support for your network and connected systems.",
    detailedDesc: "Keep eligible network, CCTV, access control, biometric, WiFi, server and intercom systems maintained through an agreed annual support plan. Coverage can include preventive inspections, troubleshooting, configuration support and equipment health checks. Visit schedules, response arrangements and replacement coverage are defined in the contract.",
    features: [
      "Scheduled preventive inspections",
      "Corrective maintenance and troubleshooting",
      "Equipment health checks and configuration support",
      "Network, CCTV and WiFi maintenance",
      "Access control, biometric and intercom support",
      "Server and IT infrastructure support",
    ],
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: Router,
    title: "ISP Solutions & Internet Distribution",
    description: "Internet distribution and customer-premises networking for businesses, institutions and residential environments.",
    detailedDesc: "Plan the infrastructure that distributes internet access across a building, campus or community. We support ISP network infrastructure, customer-premises equipment, bandwidth management and wireless distribution to suit the site and connectivity requirement.",
    features: [
      "Internet connectivity infrastructure",
      "Network and WiFi distribution",
      "Bandwidth management",
      "Hotspot network deployment",
      "ISP network infrastructure support",
      "Customer-premises networking",
    ],
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Video,
    title: "Video Door Phones",
    description: "Visitor identification and entry communication for homes, villas, apartments and commercial buildings.",
    detailedDesc: "See and speak with visitors before providing entry. We plan video door phone systems for individual properties, offices and residential communities, with suitable indoor stations, entrance units and compatible access-control integration.",
    features: [
      "Audio and video visitor communication",
      "Indoor stations and entrance panels",
      "Home, villa and apartment installations",
      "Office and commercial entry systems",
      "Multi-unit residential requirements",
      "Compatible door-release integration",
    ],
    color: "from-brand-500 to-brand-300",
  },
];
