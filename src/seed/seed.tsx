import { Startup } from "@/interface";
import { TrendingUpIcon, GlobeIcon, RocketIcon } from "lucide-react";

export const startups: Startup[] = [
  {
    name: "Eventum",
    id: "4",
    logosrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202024-05-01T123845.623-IDKnUaDWnDc91fG9RWhIbqMsFIy3Ld.png",
    location: "Catamarca, Argentina",
    description:
      "Plataforma de ticketing digital que simplifica la venta de entradas, permitiendo a organizadores vender más en menos pasos",
    market: {
      type: "Entertainment",
      icon: <GlobeIcon className="mr-1 h-3 w-3" />,
    },
    type: {
      name: "SaaS",
      icon: <RocketIcon />,
    },
    investment: {
      serie: "Seed",
      icon: <TrendingUpIcon />,
    },
    founders: [
      { name: "Founder 1", image: "/placeholder.svg?height=32&width=32" },
      { name: "Founder 2", image: "/placeholder.svg?height=32&width=32" },
      { name: "Founder 3", image: "/placeholder.svg?height=32&width=32" },
    ],
    socialLinks: {
      web: "https://eventum.com",
      linkedin: "https://linkedin.com/company/eventum",
      twitter: "https://twitter.com/eventum",
    },
  },
  {
    id: "2",
    name: "Techify",
    logosrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202024-05-01T123845.623-IDKnUaDWnDc91fG9RWhIbqMsFIy3Ld.png",
    location: "Buenos Aires, Argentina",
    description:
      "Techify impulsa la productividad empresarial con herramientas SaaS diseñadas para mejorar la colaboración y optimizar el trabajo remoto.",
    market: {
      type: "Productivity",
      icon: <GlobeIcon className="mr-1 h-3 w-3" />,
    },
    type: {
      name: "Cloud Service",
      icon: <RocketIcon />,
    },
    investment: {
      serie: "Series A",
      icon: <TrendingUpIcon />,
    },
    founders: [
      { name: "Ana Pérez", image: "/founder1.svg" },
      { name: "Juan Gómez", image: "/founder2.svg" },
    ],
    socialLinks: {
      web: "https://techify.com",
      linkedin: "https://linkedin.com/company/techify",
      twitter: "https://twitter.com/techify",
    },
  },
  {
    id: "3",
    name: "Greenify",
    logosrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202024-05-01T123845.623-IDKnUaDWnDc91fG9RWhIbqMsFIy3Ld.png",
    location: "Mendoza, Argentina",
    description:
      "Greenify crea soluciones sostenibles para el cuidado del medio ambiente, enfocándose en la reducción de residuos y la energía renovable.",
    market: {
      type: "Sustainability",
      icon: <GlobeIcon className="mr-1 h-3 w-3" />,
    },
    type: {
      name: "Eco-Tech",
      icon: <RocketIcon />,
    },
    investment: {
      serie: "Pre-Seed",
      icon: <TrendingUpIcon />,
    },
    founders: [
      { name: "Laura Torres", image: "/founder3.svg" },
      { name: "Carlos Méndez", image: "/founder4.svg" },
    ],
    socialLinks: {
      web: "https://greenify.com",
      linkedin: "https://linkedin.com/company/greenify",
      twitter: "https://twitter.com/greenify",
    },
  },
];

import { FounderCards } from "@/interface";

export const founderCards: FounderCards[] = [
  {
    name: "Juan Pérez",
    role: "CEO",
    startup: "Eventum",
    image: "/founder1.svg",
    skills: ["Leadership", "Business Development", "Sales"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/juanperez",
      twitter: "https://twitter.com/juanperez",
    },
  },
  {
    name: "María González",
    role: "CTO",
    startup: "Techify",
    image: "/founder2.svg",
    skills: ["Software Engineering", "Cloud Computing", "DevOps"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/mariagonzalez",
      twitter: "https://twitter.com/mariagonzalez",
    },
  },
  {
    name: "Carlos Torres",
    role: "COO",
    startup: "Greenify",
    image: "/founder3.svg",
    skills: ["Operations Management", "Sustainability", "Strategy"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/carlostorres",
    },
  },
  {
    name: "Ana López",
    role: "CMO",
    startup: "Eventum",
    image: "/founder4.svg",
    skills: ["Marketing", "Public Relations", "Social Media"],
    socialLinks: {
      twitter: "https://twitter.com/analopez",
    },
  },
  {
    name: "Ricardo Sánchez",
    role: "CFO",
    startup: "Techify",
    image: "/founder5.svg",
    skills: ["Finance", "Accounting", "Budgeting"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/ricardosanchez",
      twitter: "https://twitter.com/ricardosanchez",
    },
  },
];

import { Ventures } from "@/interface";

export const ventures: Ventures[] = [
  {
    name: "CapitalX",
    logo: "https://via.placeholder.com/150",
    location: "San Francisco, USA",
    investmentStages: ["Seed", "Series A"],
    sectors: ["SaaS", "Fintech", "HealthTech"],
    website: "https://capitalx.com",
  },
  {
    name: "Latam Ventures",
    logo: "https://via.placeholder.com/150",
    location: "Buenos Aires, Argentina",
    investmentStages: ["Pre-Seed", "Seed"],
    sectors: ["E-commerce", "AgriTech", "EdTech"],
    website: "https://latamventures.com",
  },
  {
    name: "GreenSpark Investments",
    logo: "https://via.placeholder.com/150",
    location: "Berlin, Germany",
    investmentStages: ["Series A", "Series B"],
    sectors: ["CleanTech", "Renewable Energy", "Sustainability"],
    website: "https://greenspark.com",
  },
  {
    name: "Innovate Ventures",
    logo: "https://via.placeholder.com/150",
    location: "Tokyo, Japan",
    investmentStages: ["Seed", "Series A", "Series B"],
    sectors: ["AI", "Robotics", "IoT"],
    website: "https://innovateventures.jp",
  },
  {
    name: "Pioneer Capital",
    logo: "https://via.placeholder.com/150",
    location: "New York, USA",
    investmentStages: ["Growth", "Series C"],
    sectors: ["Media", "Entertainment", "SportsTech"],
    website: "https://pioneercapital.com",
  },
];