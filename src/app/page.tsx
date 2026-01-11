"use client";

import { useState, useEffect } from "react";
import {
  Leaf,
  Globe,
  ChevronDown,
  MessageCircle,
  Send,
  X,
  Shield,
  Award,
  Lock,
  TreePine,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Truck,
  Users,
  Phone,
  Mail,
  Menu,
  ExternalLink,
  Bot,
} from "lucide-react";

// Mock chat messages for the AI assistant demo
const mockConversation = [
  {
    role: "user",
    message: "Do you have peat-free shrubs available for a site in Belgium?",
    time: "23:47",
  },
  {
    role: "assistant",
    message:
      "Good evening! Yes, we have excellent peat-free options. From our Holland facility, we can supply:\n\n• Hydrangea paniculata (50+ available)\n• Viburnum tinus (120+ available)\n• Prunus laurocerasus (80+ available)\n\nAll grown in our certified peat-free substrate. Delivery to Belgium typically takes 2-3 business days. Would you like a formal quote?",
    time: "23:47",
  },
];

// Project data for the news grid
const projects = [
  {
    id: 1,
    title: "Amsterdam Central Station Renovation",
    location: "Netherlands",
    category: "Urban Landscaping",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    date: "December 2024",
    description: "12,000 native plants installed across the new plaza development",
  },
  {
    id: 2,
    title: "Manchester Biophilic Office Complex",
    location: "United Kingdom",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    date: "November 2024",
    description: "Living walls and rooftop gardens for BREEAM Excellent certification",
  },
  {
    id: 3,
    title: "Rotterdam Climate-Adaptive Park",
    location: "Netherlands",
    category: "Public Spaces",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
    date: "October 2024",
    description: "Sustainable water management with 5,000+ native species",
  },
  {
    id: 4,
    title: "Edinburgh Royal Mile Heritage Gardens",
    location: "United Kingdom",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    date: "September 2024",
    description: "Historic restoration using period-appropriate planting schemes",
  },
  {
    id: 5,
    title: "Brussels EU Quarter Green Corridor",
    location: "Belgium",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
    date: "August 2024",
    description: "Biodiversity corridor connecting 3 major urban parks",
  },
  {
    id: 6,
    title: "London Canary Wharf Terraces",
    location: "United Kingdom",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    date: "July 2024",
    description: "Premium rooftop gardens for Grade A office development",
  },
];

// ISO certifications data
const certifications = [
  {
    code: "ISO 9001",
    title: "Quality Management",
    icon: Award,
    description: "Consistent quality across all operations",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management",
    icon: Leaf,
    description: "Sustainable practices & carbon reduction",
  },
  {
    code: "ISO 45001",
    title: "Health & Safety",
    icon: Shield,
    description: "Zero-harm workplace commitment",
  },
  {
    code: "ISO 27001",
    title: "Information Security",
    icon: Lock,
    description: "Enterprise-grade data protection",
  },
];

// Stats data
const stats = [
  { value: "30+", label: "Years Experience", icon: Building2 },
  { value: "500K+", label: "Plants Supplied Annually", icon: TreePine },
  { value: "3", label: "European Locations", icon: Globe },
  { value: "150+", label: "Expert Team Members", icon: Users },
];

export default function GreenwoodDemo() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [showChatBubble, setShowChatBubble] = useState(false);

  // Show chat bubble after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowChatBubble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate typing indicator
  useEffect(() => {
    if (chatOpen) {
      const timer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [chatOpen]);

  const regions = [
    { id: "uk", name: "Greenwood UK", flag: "🇬🇧", tagline: "Landscaping Excellence" },
    { id: "holland", name: "Greenwood Holland", flag: "🇳🇱", tagline: "Wholesale Nursery" },
    { id: "plants", name: "Greenwood Plants", flag: "🌿", tagline: "Specialist Growers" },
  ];

  return (
    <div className="min-h-screen bg-greenwood-dark">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-greenwood-dark/95 backdrop-blur-md border-b border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-forest-green to-electric-cyan flex items-center justify-center">
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Greenwood <span className="text-electric-cyan">Group</span>
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 hidden sm:block">
                  Unified Excellence Across Europe
                </p>
              </div>
            </div>

            {/* Region Switcher - Desktop */}
            <nav className="hidden lg:flex items-center gap-1 bg-greenwood-card/50 rounded-full p-1 border border-forest-green/30">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeRegion === region.id
                      ? "bg-forest-green text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </span>
                  {activeRegion === region.id && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-electric-cyan whitespace-nowrap">
                      {region.tagline}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-forest-green to-forest-dark text-white text-sm font-medium rounded-full border border-electric-cyan/30 hover:border-electric-cyan/60 transition-all glow-cyan">
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-forest-green/30">
              <div className="space-y-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-forest-green/20 rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{region.flag}</span>
                      <span>{region.name}</span>
                    </span>
                    <span className="text-xs text-electric-cyan">{region.tagline}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-forest-green/30 flex flex-col gap-2">
                <button className="w-full py-3 text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-forest-green to-forest-dark text-white font-medium rounded-full border border-electric-cyan/30">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-greenwood-dark to-greenwood-dark" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-green/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green/20 border border-forest-green/40 rounded-full text-sm text-electric-cyan mb-6 md:mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Now with 24/7 AI-Powered Support</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Europe&apos;s Leading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-green via-electric-cyan to-forest-green animate-gradient">
                Horticulture
              </span>{" "}
              <br className="hidden sm:block" />& Landscaping Group
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Three powerhouse brands. One unified mission. From wholesale nurseries to
              complete landscape solutions—delivered with{" "}
              <span className="text-electric-cyan">ISO-certified excellence</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-electric-cyan to-forest-green text-white font-semibold rounded-full hover:shadow-lg hover:shadow-electric-cyan/20 transition-all">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border border-forest-green/50 text-white font-medium rounded-full hover:bg-forest-green/10 hover:border-forest-green transition-all">
                <Globe className="w-5 h-5" />
                <span>View Locations</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group p-4 md:p-6 bg-greenwood-card/50 border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-forest-green/20 rounded-xl group-hover:bg-electric-cyan/10 transition-colors">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-electric-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance / Trust Bar */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-greenwood-card via-forest-dark/50 to-greenwood-card border-y border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Audit-Ready. Always Compliant.
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Trusted by enterprises who demand the highest standards
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative p-4 md:p-6 bg-greenwood-dark/50 border border-forest-green/30 rounded-2xl hover:border-electric-cyan/40 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-forest-green/30 rounded-xl group-hover:bg-electric-cyan/20 transition-colors">
                      <cert.icon className="w-5 h-5 md:w-6 md:h-6 text-electric-cyan" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">{cert.code}</div>
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{cert.description}</p>

                  {/* Verified badge */}
                  <div className="mt-3 md:mt-4 flex items-center gap-1.5 text-xs text-electric-cyan">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified & Current</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-green/20 border border-forest-green/40 rounded-full text-xs text-electric-cyan mb-3 md:mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Auto-Updated</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Latest Projects</h3>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                Excellence delivered across Europe
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-greenwood-card border border-forest-green/30 rounded-2xl overflow-hidden hover:border-electric-cyan/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-greenwood-card via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-greenwood-dark/80 backdrop-blur-sm border border-forest-green/40 rounded-full text-xs text-electric-cyan">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>

                  <h4 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-sm text-electric-cyan hover:gap-3 transition-all">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Brands Section */}
      <section className="py-16 md:py-24 bg-greenwood-card/30 border-y border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              One Group. Three Specialists.
            </h3>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Seamlessly connected across borders for complete horticultural solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Greenwood UK */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🇬🇧</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood UK</h4>
                  <p className="text-sm text-electric-cyan">Full-Service Landscaping</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {["Commercial Landscaping", "Estate Management", "Urban Greening", "Sports Turf"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
                Explore UK Services
              </button>
            </div>

            {/* Greenwood Holland */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🇳🇱</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood Holland</h4>
                  <p className="text-sm text-electric-cyan">European Distribution Hub</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {["Wholesale Nursery", "EU-Wide Delivery", "Trade Supplies", "Climate Logistics"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
                Explore Holland Services
              </button>
            </div>

            {/* Greenwood Plants */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🌿</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood Plants</h4>
                  <p className="text-sm text-electric-cyan">Specialist Growers</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {["Specimen Trees", "Rare Varieties", "Contract Growing", "Peat-Free Range"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
                Explore Plant Catalogue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-forest-dark to-greenwood-card border border-forest-green/40 rounded-3xl overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full text-sm text-electric-cyan mb-6">
                <Truck className="w-4 h-4" />
                <span>EU-Wide Delivery Available</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h3>

              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                From initial consultation to final installation—get a tailored quote
                for your commercial landscaping or wholesale plant needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-cyan to-forest-green text-white font-semibold rounded-full hover:shadow-lg hover:shadow-electric-cyan/20 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Request Quote</span>
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
                  <Phone className="w-5 h-5" />
                  <span>Call Sales Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-greenwood-card/30 border-t border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-green to-electric-cyan flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Greenwood Group</span>
                <p className="text-xs text-gray-400">© 2024 All rights reserved</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-electric-cyan transition-colors">Privacy</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Cookies</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget - The Genetic Agent */}
      {showChatBubble && !chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-forest-green to-forest-dark border border-electric-cyan/40 rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 transition-all group animate-bounce"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-electric-cyan" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-electric-cyan rounded-full animate-pulse" />
          </div>
          <span className="text-white text-sm font-medium hidden sm:block">
            24/7 Assistant
          </span>
        </button>
      )}

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] sm:w-96 max-h-[80vh] bg-greenwood-dark border border-forest-green/40 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-forest-green to-forest-dark border-b border-forest-green/40">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-electric-cyan/20 rounded-xl">
                <Bot className="w-5 h-5 text-electric-cyan" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-forest-dark" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Greenwood 24/7 Assistant</h4>
                <p className="text-[10px] text-electric-cyan">Powered by AI • Always Online</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto min-h-[300px] max-h-[400px]">
            {/* Welcome message */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-electric-cyan" />
              </div>
              <div className="flex-1">
                <div className="bg-greenwood-card border border-forest-green/30 rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-gray-300">
                    Hello! I&apos;m the Greenwood AI assistant. I can help you with stock
                    queries, quotes, and delivery information 24/7. How can I help?
                  </p>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 block">23:46</span>
              </div>
            </div>

            {/* Mock conversation */}
            {mockConversation.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-electric-cyan" />
                  </div>
                )}
                <div className={`flex-1 ${msg.role === "user" ? "flex flex-col items-end" : ""}`}>
                  <div
                    className={`rounded-2xl p-3 max-w-[85%] ${
                      msg.role === "user"
                        ? "bg-electric-cyan/20 border border-electric-cyan/30 rounded-tr-sm"
                        : "bg-greenwood-card border border-forest-green/30 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm text-gray-300 whitespace-pre-line">{msg.message}</p>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-electric-cyan" />
                </div>
                <div className="bg-greenwood-card border border-forest-green/30 rounded-2xl rounded-tl-sm p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-electric-cyan/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-electric-cyan/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-electric-cyan/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-forest-green/40 bg-greenwood-card/50">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about stock, delivery, or quotes..."
                className="flex-1 px-4 py-2.5 bg-greenwood-dark border border-forest-green/40 rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-electric-cyan/50"
              />
              <button
                onClick={() => {
                  if (chatInput.trim()) {
                    setIsTyping(true);
                    setChatInput("");
                  }
                }}
                className="p-2.5 bg-gradient-to-r from-electric-cyan to-forest-green rounded-full text-white hover:shadow-lg hover:shadow-electric-cyan/20 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 text-center mt-2">
              AI responses are for demo purposes only
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
