import {
  Building2,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Home,
  Landmark,
  Factory,
  Warehouse,
  ShieldCheck,
  Pill,
  Store,
  Hotel,
  School,
  Truck,
  ServerCog,
} from "lucide-react";
import { SectorCard } from "./SectorCard";
import { SectorsHeader } from "./SectorsHeader";
import "./sectors.css";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial Sites",
    desc: "Plant networks, CCTV coverage, fiber backbones, access control and support for production floors.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    desc: "High-speed LAN, WiFi, CCTV, access control and AV collaboration for growing workspaces.",
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    desc: "Campus fiber, WiFi, CCTV, biometric attendance, access control and communication systems.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    desc: "Reliable medical-grade networks, IP telephony, surveillance and biometric access.",
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Pill,
    title: "Pharma & Medical Stores",
    desc: "Secure billing counters, inventory systems, CCTV, WiFi and backup-ready network layouts.",
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Store,
    title: "Retail Stores & Showrooms",
    desc: "POS connectivity, customer WiFi, CCTV, access control and stable back-office networks.",
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Commercial Spaces",
    desc: "Multi-tenant networking, WiFi, CCTV, access control, communication and building automation.",
    color: "from-brand-700 to-brand-400",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Guest WiFi, reception systems, IP cameras, intercom, POS and meeting-room connectivity.",
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: School,
    title: "Schools & Campus Networks",
    desc: "Classroom connectivity, labs, CCTV, announcements, admin blocks and campus-wide WiFi.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    desc: "Coverage for large facilities, inventory zones, gates, loading areas and operations teams.",
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: Truck,
    title: "Transport & Fleet Operations",
    desc: "Yard surveillance, office connectivity, tracking support and secure network access.",
    color: "from-brand-500 to-brand-200",
  },
  {
    icon: Home,
    title: "Residential Projects",
    desc: "WiFi, CCTV, video door phones, intercom, access control and automation for homes and communities.",
    color: "from-brand-500 to-brand-200",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "Secure government networks, fiber projects, video conferencing and IT infrastructure.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: ShieldCheck,
    title: "Security-Sensitive Facilities",
    desc: "Layered surveillance, controlled access, firewalls and monitoring for restricted environments.",
    color: "from-brand-800 to-brand-500",
  },
  {
    icon: ServerCog,
    title: "Data Centers & Server Rooms",
    desc: "Server infrastructure, rack organization, fiber links, structured cabling and coordinated power and cooling requirements.",
    color: "from-brand-700 to-brand-500",
  },
];

export function Industries() {
  return (
    <section id="industries" aria-labelledby="sectors-heading" className="network-page sectors-page pt-8 pb-20 lg:pt-10 lg:pb-24 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectorsHeader />
        <ul className="sectors-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Sectors we serve">
          {industries.map((industry, index) => (
            <SectorCard key={industry.title} sector={industry} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
