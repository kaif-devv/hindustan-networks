import type { LucideIcon } from 'lucide-react'
import {
  Wifi,
  Network,
  Cable,
  Camera,
  Phone,
  ShieldCheck,
  Fingerprint,
  Radio,
  Server,
  Zap,
  Lock,
  Home,
  Video,
  Cloud,
  Wrench,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const services: Service[] = [
  {
    icon: Zap,
    title: 'Internet Leased Line Connectivity',
    description: 'Dedicated high-speed internet leased lines ensuring maximum uptime and bandwidth for your enterprise.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Local LAN Networking',
    description: 'Complete LAN infrastructure design, installation and management for seamless office connectivity.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Cable,
    title: 'Structured Cabling (LAN/WAN)',
    description: 'Professional structured cabling solutions compliant with industry standards for reliable data transmission.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance Systems',
    description: 'Advanced IP-based CCTV surveillance systems with remote monitoring for comprehensive security.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Phone,
    title: 'Intercom Systems',
    description: 'Modern IP and analog intercom solutions for seamless internal communication across facilities.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'Access Control Systems',
    description: 'Secure access control solutions with smart card, PIN and biometric integration.',
    color: 'from-green-500 to-cyan-500',
  },
  {
    icon: Fingerprint,
    title: 'Biometric & Face Recognition',
    description: 'Cutting-edge biometric and AI-powered face recognition systems for enterprise security.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: Wifi,
    title: 'WiFi & Hotspot Networking',
    description: 'Enterprise-grade WiFi deployments with seamless roaming and centralized management.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Server,
    title: 'Server & Data Center Setup',
    description: 'End-to-end server room and data center design, deployment and management services.',
    color: 'from-slate-500 to-blue-600',
  },
  {
    icon: Radio,
    title: 'Optical Fiber Cabling Projects',
    description: 'High-capacity optical fiber cabling for long-distance, high-bandwidth network requirements.',
    color: 'from-blue-500 to-violet-500',
  },
  {
    icon: Lock,
    title: 'Network Security & Firewall',
    description: 'Advanced firewall, UTM and network security solutions to protect your critical infrastructure.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Home,
    title: 'Home & Office Automation',
    description: 'Smart automation solutions for homes and offices integrating security, lighting and climate control.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Video,
    title: 'Audio / Video Conferencing',
    description: 'Professional AV conferencing systems for boardrooms, classrooms and collaboration spaces.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration & IT Infrastructure',
    description: 'Seamless cloud migration, hybrid infrastructure and IT services for modern businesses.',
    color: 'from-sky-400 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance Contracts',
    description: 'Comprehensive AMC packages ensuring optimal performance and priority support year-round.',
    color: 'from-teal-500 to-green-500',
  },
]
