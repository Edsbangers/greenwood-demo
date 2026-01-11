"use client";

import { useState, useEffect } from "react";
import {
  Leaf,
  Globe,
  MessageCircle,
  Send,
  X,
  Shield,
  Award,
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
  Sprout,
  FlaskConical,
  Bug,
  Wind,
  Droplets,
  Sun,
  Mountain,
  CircleDot,
  TrendingUp,
  Layers,
  Lock,
} from "lucide-react";

// Genetic Plant Specialist mock conversation - technical planting queries
const mockConversation = [
  {
    role: "user",
    message: "What works for a high-wind coastal project in Portsmouth?",
    time: "23:47",
  },
  {
    role: "assistant",
    message:
      "Great question! For coastal Portsmouth, you need salt-tolerant, wind-resistant species. From our current stock:\n\n🌿 **Salt-Tolerant Shrubs:**\n• Elaeagnus x ebbingei (180+ available) - Hardy to -15°C\n• Griselinia littoralis (240+ available) - Excellent windbreak\n• Olearia traversii (90+ available) - NZ native, tough\n\n🌳 **Specimen Trees:**\n• Quercus ilex (Holm Oak) - Ultimate coastal resilience\n• Pinus nigra - Salt spray tolerant to Zone 5\n\nAll grown peat-free at our UK nurseries with Plant Healthy certification. Shall I prepare a planting plan with hardiness zones mapped?",
    time: "23:47",
  },
];

// Project data - updated with horticultural terminology
const projects = [
  {
    id: 1,
    title: "Amsterdam Central Station Plaza",
    location: "Netherlands",
    category: "Infrastructure Planting",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    date: "December 2024",
    plants: "12,000+",
    description: "Native species palette with Betula, Cornus & ornamental grasses for urban biodiversity",
  },
  {
    id: 2,
    title: "Manchester Biophilic Office Complex",
    location: "United Kingdom",
    category: "Commercial Greening",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
    date: "November 2024",
    plants: "8,500+",
    description: "Living walls featuring Hedera, Ferns & shade-tolerant perennials for BREEAM Excellent",
  },
  {
    id: 3,
    title: "Rotterdam Climate-Adaptive Park",
    location: "Netherlands",
    category: "Public Realm",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
    date: "October 2024",
    plants: "5,000+",
    description: "Rain garden species & native wetland planting for sustainable water management",
  },
  {
    id: 4,
    title: "Edinburgh Heritage Gardens",
    location: "United Kingdom",
    category: "Heritage Restoration",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    date: "September 2024",
    plants: "3,200+",
    description: "Period-authentic Rosa, Lavandula & topiary specimens for historic estate",
  },
  {
    id: 5,
    title: "Brussels EU Quarter Green Corridor",
    location: "Belgium",
    category: "Biodiversity Corridor",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    date: "August 2024",
    plants: "15,000+",
    description: "Pollinator-friendly natives connecting three major urban parks",
  },
  {
    id: 6,
    title: "London Canary Wharf Terraces",
    location: "United Kingdom",
    category: "Rooftop Planting",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    date: "July 2024",
    plants: "4,800+",
    description: "Wind-tolerant specimen Acers & evergreen screening for Grade A development",
  },
];

// ACTUAL Greenwood certifications - verified from their website
const certifications = [
  {
    code: "Plant Healthy",
    title: "Biosecurity Certified",
    icon: Shield,
    description: "Audited across all 6 UK nursery sites for pest & disease-free stock",
    verified: "2024",
  },
  {
    code: "HTA Member",
    title: "Horticultural Trades",
    icon: Award,
    description: "Full membership of the Horticultural Trades Association",
    verified: "Active",
  },
  {
    code: "BALI",
    title: "Landscape Industries",
    icon: Leaf,
    description: "British Association of Landscape Industries accredited",
    verified: "Active",
  },
  {
    code: "AIPH Winner",
    title: "International Grower",
    icon: Globe,
    description: "International Grower of the Year award recipient",
    verified: "2023",
  },
];

// Stats data - updated with horticultural focus
const stats = [
  { value: "45+", label: "Years Growing Excellence", icon: Building2 },
  { value: "500K+", label: "Plants Supplied Annually", icon: TreePine },
  { value: "200+", label: "Acres Under Cultivation", icon: Mountain },
  { value: "6", label: "UK Nursery Sites", icon: Sprout },
];

// Live nursery stock - dynamic counters
const liveStock = [
  { species: "Specimen Trees", count: 12847, trend: "+234", icon: TreePine },
  { species: "Shrubs & Hedging", count: 89432, trend: "+1.2K", icon: Layers },
  { species: "Perennials", count: 45210, trend: "+890", icon: Sprout },
  { species: "Ornamental Grasses", count: 23156, trend: "+456", icon: Wind },
];

// Contract growing stats
const contractStats = [
  { label: "Active Contract Orders", value: "47", icon: TrendingUp },
  { label: "Hectares in Production", value: "82", icon: Mountain },
  { label: "Species in Cultivation", value: "1,200+", icon: FlaskConical },
];

export default function GreenwoodDemo() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [stockCounts, setStockCounts] = useState(liveStock);

  // Show chat bubble after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowChatBubble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate live stock updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStockCounts((prev) =>
        prev.map((item) => ({
          ...item,
          count: item.count + Math.floor(Math.random() * 10) - 3,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate typing indicator
  useEffect(() => {
    if (chatOpen) {
      const timer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [chatOpen]);

  const regions = [
    { id: "uk", name: "Greenwood UK", flag: "🇬🇧", tagline: "Six Nursery Sites" },
    { id: "holland", name: "Greenwood Holland", flag: "🇳🇱", tagline: "Tree Centre Opheusden" },
    { id: "plants", name: "Greenwood Plants", flag: "🌿", tagline: "Specimen Growers" },
  ];

  return (
    <div className="min-h-screen bg-greenwood-dark">
      {/* Plant Healthy Notification Bar - Top of page */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-green-900 via-green-800 to-green-900 border-b border-green-600/50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
          <Shield className="w-4 h-4 text-green-300" />
          <p className="text-xs md:text-sm text-green-100 font-medium">
            <span className="font-bold text-white">Proudly Plant Healthy Certified</span>
            <span className="hidden sm:inline"> — Protecting UK & International Biosecurity</span>
          </p>
          <div className="hidden md:flex items-center gap-1 px-2 py-0.5 bg-green-700/50 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-green-300" />
            <span className="text-[10px] text-green-200">All 6 UK Sites Audited</span>
          </div>
        </div>
      </div>

      {/* Header / Navigation - adjusted for notification bar */}
      <header className="fixed top-[36px] md:top-[40px] left-0 right-0 z-50 bg-greenwood-dark/95 backdrop-blur-md border-b border-forest-green/30">
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
                  Specimen Growers & Landscape Suppliers
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
                <span>Trade Enquiries</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-forest-green to-forest-dark text-white text-sm font-medium rounded-full border border-electric-cyan/30 hover:border-electric-cyan/60 transition-all glow-cyan">
                <span>Request Planting Quote</span>
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
                  Trade Enquiries
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-forest-green to-forest-dark text-white font-medium rounded-full border border-electric-cyan/30">
                  Request Planting Quote
                </button>
              </div>
              {/* Mobile audit badge */}
              <div className="mt-4 pt-4 border-t border-forest-green/30">
                <div className="flex items-center gap-2 text-xs text-electric-cyan">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audit-Optimised Mobile Interface</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Specimen Nursery Aesthetic with Macro Botanical */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        {/* Background - High-res macro botanical imagery */}
        <div className="absolute inset-0">
          {/* Macro leaf texture - premium horticultural feel */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=1920&h=1080&fit=crop')" }}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-greenwood-dark via-greenwood-dark/98 to-forest-dark" />
          {/* Subtle leaf vein pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L50 100 M25 25 L50 50 L75 25 M25 75 L50 50 L75 75' stroke='%2300d4ff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-green/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-green/20 border border-forest-green/40 rounded-full text-sm text-electric-cyan mb-6 md:mb-8">
              <FlaskConical className="w-4 h-4" />
              <span>Genetic Plant Specialist AI • 24/7 Planting Advice</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Specimen Trees &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-green via-electric-cyan to-forest-green animate-gradient">
                Peat-Free
              </span>{" "}
              <br className="hidden sm:block" />Contract Growing
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              200+ acres of production across 6 UK nurseries. Award-winning growers of
              rare varieties and{" "}
              <span className="text-electric-cyan">biosecurity-certified stock</span> for
              large-scale infrastructure projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-electric-cyan to-forest-green text-white font-semibold rounded-full hover:shadow-lg hover:shadow-electric-cyan/20 transition-all">
                <span>Browse Specimen Catalogue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border border-forest-green/50 text-white font-medium rounded-full hover:bg-forest-green/10 hover:border-forest-green transition-all">
                <Sprout className="w-5 h-5" />
                <span>Contract Growing Enquiry</span>
              </button>
            </div>

            {/* Hero Certification Badges - Plant Healthy, HTA, BALI */}
            <div className="mt-10 md:mt-12">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Certified & Accredited</p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {/* Plant Healthy - Primary Badge */}
                <div className="group relative flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-900/40 to-green-800/20 border-2 border-green-500/50 rounded-xl hover:border-green-400 transition-all cursor-pointer">
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-[9px] font-bold text-white rounded-full">
                    BIOSECURITY
                  </div>
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm md:text-base font-bold text-white">Plant Healthy</div>
                    <div className="text-[10px] md:text-xs text-green-400">Pest & Disease-Free Certified</div>
                  </div>
                </div>

                {/* HTA Badge */}
                <div className="group flex items-center gap-3 px-4 py-3 bg-greenwood-card/60 border border-forest-green/40 rounded-xl hover:border-electric-cyan/40 transition-all cursor-pointer">
                  <div className="p-2 bg-forest-green/20 rounded-lg">
                    <Award className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">HTA Member</div>
                    <div className="text-[10px] text-gray-400">Horticultural Trades</div>
                  </div>
                </div>

                {/* BALI Badge */}
                <div className="group flex items-center gap-3 px-4 py-3 bg-greenwood-card/60 border border-forest-green/40 rounded-xl hover:border-electric-cyan/40 transition-all cursor-pointer">
                  <div className="p-2 bg-forest-green/20 rounded-lg">
                    <Leaf className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">BALI Accredited</div>
                    <div className="text-[10px] text-gray-400">Landscape Industries</div>
                  </div>
                </div>

                {/* Peat-Free Award */}
                <div className="group flex items-center gap-3 px-4 py-3 bg-greenwood-card/60 border border-electric-cyan/30 rounded-xl hover:border-electric-cyan/50 transition-all cursor-pointer">
                  <div className="p-2 bg-electric-cyan/10 rounded-lg">
                    <TreePine className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">HTA Award</div>
                    <div className="text-[10px] text-electric-cyan">Peat-Free Grower of the Year</div>
                  </div>
                </div>
              </div>
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

      {/* Live Nursery Feed Section */}
      <section className="py-12 md:py-16 bg-greenwood-card/30 border-y border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full text-xs text-green-400 mb-3">
                <CircleDot className="w-3 h-3 animate-pulse" />
                <span>Live from the Nursery</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Real-Time Stock Availability</h3>
              <p className="text-sm text-gray-400 mt-1">Updated every 5 minutes across all 6 UK sites</p>
            </div>
            <div className="flex items-center gap-4">
              {contractStats.map((stat, index) => (
                <div key={index} className="text-center px-4 py-2 bg-greenwood-dark/50 rounded-xl border border-forest-green/30">
                  <div className="text-lg md:text-xl font-bold text-electric-cyan">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stockCounts.map((item, index) => (
              <div
                key={index}
                className="group p-4 md:p-5 bg-greenwood-dark/50 border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-forest-green/20 rounded-lg">
                    <item.icon className="w-5 h-5 text-electric-cyan" />
                  </div>
                  <span className="text-xs text-green-400 font-medium">{item.trend} this week</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {item.count.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">{item.species}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Trust Bar - ACTUAL Greenwood credentials */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-greenwood-card via-forest-dark/50 to-greenwood-card border-b border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Award-Winning. Biosecurity Certified.
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Trusted by enterprises who demand the highest horticultural standards
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
                    <div className="text-sm md:text-base font-bold text-white">{cert.code}</div>
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{cert.description}</p>

                  {/* Verified badge */}
                  <div className="mt-3 md:mt-4 flex items-center gap-1.5 text-xs text-electric-cyan">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified {cert.verified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Biosecurity & Plant Health Special Badge */}
          <div className="mt-8 p-4 md:p-6 bg-gradient-to-r from-forest-green/20 via-greenwood-dark to-forest-green/20 border border-forest-green/40 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Bug className="w-6 h-6 text-green-400" />
                </div>
                <div className="p-3 bg-electric-cyan/20 rounded-xl">
                  <Shield className="w-6 h-6 text-electric-cyan" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h4 className="text-lg font-bold text-white mb-1">Biosecurity & Plant Health Excellence</h4>
                <p className="text-sm text-gray-400">
                  Our nurseries are audited to the highest biosecurity standards via Plant Healthy certification.
                  All 12,000+ plants installed at projects like Amsterdam Central are verified pest and disease-free
                  through our G-Cycle sustainability programme.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">100% Peat-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project & Planting Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-green/20 border border-forest-green/40 rounded-full text-xs text-electric-cyan mb-3 md:mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Auto-Updated Feed</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Project & Planting Case Studies</h3>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                Species-specific solutions delivered across Europe
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
              <span>View Full Portfolio</span>
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
                  {/* Plant count badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-forest-green/80 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                    <Sprout className="w-3 h-3" />
                    {project.plants}
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
                    <span>View Planting Specification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Brands Section - Updated with horticultural terminology */}
      <section className="py-16 md:py-24 bg-greenwood-card/30 border-y border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              One Group. Three Specialist Divisions.
            </h3>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Seamless phytosanitary compliance and logistics from Holland to UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Greenwood UK */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🇬🇧</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood UK</h4>
                  <p className="text-sm text-electric-cyan">Six Production Nurseries</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { text: "Commercial Landscape Supply", icon: Building2 },
                  { text: "Infrastructure Planting", icon: Mountain },
                  { text: "Biodiversity Schemes", icon: Sprout },
                  { text: "Sports Turf & Amenity", icon: Layers },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-2 text-sm text-gray-300">
                    <item.icon className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
                Explore UK Nurseries
              </button>
            </div>

            {/* Greenwood Holland */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-forest-green/30 rounded-2xl hover:border-electric-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🇳🇱</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood Holland</h4>
                  <p className="text-sm text-electric-cyan">Tree Centre Opheusden</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { text: "EU Import/Export Hub", icon: Globe },
                  { text: "Phytosanitary Handling", icon: Shield },
                  { text: "Climate-Controlled Logistics", icon: Truck },
                  { text: "Trade Wholesale", icon: TrendingUp },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-2 text-sm text-gray-300">
                    <item.icon className="w-4 h-4 text-forest-green flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-forest-green/50 text-white text-sm font-medium rounded-full hover:bg-forest-green/10 transition-colors">
                Explore Holland Operations
              </button>
            </div>

            {/* Greenwood Plants - Specimen Grower Focus */}
            <div className="group p-6 md:p-8 bg-greenwood-dark border border-electric-cyan/30 rounded-2xl hover:border-electric-cyan/50 transition-all relative overflow-hidden">
              {/* Special highlight for Plants division */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-electric-cyan/20 text-xs text-electric-cyan rounded-bl-xl">
                Specimen Specialists
              </div>

              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="text-4xl">🌿</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Greenwood Plants</h4>
                  <p className="text-sm text-electric-cyan">Specimen Tree & Peat-Free Contract Growing</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { text: "Rare & Specimen Varieties", icon: TreePine },
                  { text: "100% Peat-Free Production", icon: Leaf },
                  { text: "Contract Growing Service", icon: FlaskConical },
                  { text: "Hardiness Zone Expertise", icon: Sun },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-2 text-sm text-gray-300">
                    <item.icon className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-forest-green to-forest-dark border border-electric-cyan/30 text-white text-sm font-medium rounded-full hover:border-electric-cyan/60 transition-colors">
                Browse Specimen Catalogue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* G-Cycle Sustainability Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-6 md:p-10 bg-gradient-to-br from-forest-dark via-greenwood-card to-forest-dark border border-forest-green/40 rounded-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-forest-green to-electric-cyan flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto" />
                    <span className="text-xs text-white/80 font-medium">G-Cycle</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  G-Cycle Sustainability Programme
                </h3>
                <p className="text-gray-400 mb-6">
                  Greenwood Group is committed to a net-zero future. Our G-Cycle initiative encompasses
                  100% peat-free production, biodiversity-enhancing plant palettes, and carbon-conscious
                  logistics across our Holland-to-UK supply chain.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-forest-green/20 rounded-full">
                    <Droplets className="w-4 h-4 text-electric-cyan" />
                    <span className="text-sm text-gray-300">Water Recycling</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-forest-green/20 rounded-full">
                    <Sun className="w-4 h-4 text-electric-cyan" />
                    <span className="text-sm text-gray-300">Solar Powered</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-forest-green/20 rounded-full">
                    <Leaf className="w-4 h-4 text-electric-cyan" />
                    <span className="text-sm text-gray-300">Peat-Free Since 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 14001 Progress Bar - The Hook for Consultancy */}
      <section className="py-12 md:py-16 bg-greenwood-card/20 border-y border-forest-green/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full text-xs text-electric-cyan mb-4">
              <TrendingUp className="w-3 h-3" />
              <span>Environmental Management Roadmap</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Journey to ISO 14001 Certification
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Building on our Plant Healthy foundation towards full environmental accreditation
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            {/* Progress Track */}
            <div className="h-3 bg-greenwood-dark rounded-full overflow-hidden border border-forest-green/30">
              <div
                className="h-full bg-gradient-to-r from-green-500 via-electric-cyan to-electric-cyan/50 rounded-full transition-all duration-1000"
                style={{ width: '65%' }}
              />
            </div>

            {/* Milestones */}
            <div className="flex justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white font-medium">Plant Healthy</span>
                <span className="text-[10px] text-green-400">Achieved 2024</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white font-medium">100% Peat-Free</span>
                <span className="text-[10px] text-green-400">Achieved 2022</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-electric-cyan flex items-center justify-center mb-2 animate-pulse">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white font-medium">Gap Analysis</span>
                <span className="text-[10px] text-electric-cyan">In Progress</span>
              </div>

              <div className="flex flex-col items-center opacity-60">
                <div className="w-10 h-10 rounded-full bg-forest-green/50 border-2 border-dashed border-forest-green flex items-center justify-center mb-2">
                  <Leaf className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium">ISO 14001</span>
                <span className="text-[10px] text-gray-500">Target 2025</span>
              </div>
            </div>
          </div>

          {/* Supporting Message */}
          <div className="mt-8 p-4 bg-greenwood-dark/50 border border-forest-green/30 rounded-xl text-center">
            <p className="text-sm text-gray-400">
              <span className="text-electric-cyan font-medium">The Management System Behind the Plants:</span>{" "}
              We don&apos;t just show you the plant; we show the management system that grew it sustainably.
            </p>
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
                <span>Phytosanitary Certificates Handled Internally</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready for Your Next Planting Project?
              </h3>

              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                From specimen sourcing to contract growing—get a tailored quote for your
                infrastructure, commercial, or public realm planting scheme.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-cyan to-forest-green text-white font-semibold rounded-full hover:shadow-lg hover:shadow-electric-cyan/20 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Request Planting Quote</span>
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
                  <Phone className="w-5 h-5" />
                  <span>Speak to a Specialist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Proof Digital Infrastructure Bar */}
      <section className="py-6 bg-gradient-to-r from-greenwood-dark via-forest-dark to-greenwood-dark border-t border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-electric-cyan/10 rounded-lg">
                <Lock className="w-5 h-5 text-electric-cyan" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-medium">
                  Digital Infrastructure Built to <span className="text-electric-cyan">ISO 27001</span> Standards
                </p>
                <p className="text-xs text-gray-400">
                  Supporting our journey to ISO 14001 Environmental Management certification
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-forest-green/40" />
            <div className="flex items-center gap-2 px-4 py-2 bg-forest-green/10 border border-forest-green/30 rounded-full">
              <Sparkles className="w-4 h-4 text-electric-cyan" />
              <span className="text-xs text-gray-300">Enterprise-Ready Digital Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Trust Bar */}
      <footer className="py-12 bg-greenwood-card/30 border-t border-forest-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Bar - HTA & BALI */}
          <div className="mb-8 pb-8 border-b border-forest-green/30">
            <p className="text-xs text-gray-500 uppercase tracking-wider text-center mb-4">Industry Accreditations</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* Plant Healthy */}
              <div className="flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white font-medium">Plant Healthy</span>
                <span className="text-[10px] text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">Biosecurity</span>
              </div>
              {/* HTA */}
              <div className="flex items-center gap-2 px-4 py-2 bg-greenwood-dark/50 border border-forest-green/30 rounded-lg">
                <Award className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm text-white font-medium">HTA Member</span>
              </div>
              {/* BALI */}
              <div className="flex items-center gap-2 px-4 py-2 bg-greenwood-dark/50 border border-forest-green/30 rounded-lg">
                <Leaf className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm text-white font-medium">BALI Accredited</span>
              </div>
              {/* AIPH */}
              <div className="flex items-center gap-2 px-4 py-2 bg-greenwood-dark/50 border border-electric-cyan/30 rounded-lg">
                <Globe className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm text-white font-medium">AIPH International Grower</span>
              </div>
            </div>
          </div>

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

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <TreePine className="w-3 h-3" />
                100% Peat-Free Since 2022
              </span>
              <span>•</span>
              <span>HTA Peat-Free Grower of the Year</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-electric-cyan transition-colors">Privacy</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Biosecurity</a>
              <a href="#" className="hover:text-electric-cyan transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget - The Genetic Plant Specialist */}
      {showChatBubble && !chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-forest-green to-forest-dark border border-electric-cyan/40 rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 transition-all group animate-bounce"
        >
          <div className="relative">
            <FlaskConical className="w-6 h-6 text-electric-cyan" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-electric-cyan rounded-full animate-pulse" />
          </div>
          <span className="text-white text-sm font-medium hidden sm:block">
            Plant Specialist
          </span>
        </button>
      )}

      {/* Chat Modal - Genetic Plant Specialist */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] sm:w-[420px] max-h-[80vh] bg-greenwood-dark border border-forest-green/40 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-forest-green to-forest-dark border-b border-forest-green/40">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-electric-cyan/20 rounded-xl">
                <FlaskConical className="w-5 h-5 text-electric-cyan" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-forest-dark" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Genetic Plant Specialist</h4>
                <p className="text-[10px] text-electric-cyan">Soil types • Hardiness zones • Biosecurity</p>
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
            {/* Welcome message - Updated with International Logistics */}
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-electric-cyan" />
              </div>
              <div className="flex-1">
                <div className="bg-greenwood-card border border-forest-green/30 rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-gray-300">
                    Good evening! Welcome to <span className="text-electric-cyan font-medium">Greenwood Group</span>. I&apos;m your 24/7 Plant Specialist with full access to our UK & Holland logistics network.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Globe className="w-3 h-3 text-electric-cyan" />
                      <span>International logistics & phytosanitary support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TreePine className="w-3 h-3 text-electric-cyan" />
                      <span>Species selection for specific site conditions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-electric-cyan" />
                      <span>Plant Healthy biosecurity queries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck className="w-3 h-3 text-electric-cyan" />
                      <span>Holland-to-UK delivery coordination</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-500 italic">
                    After-hours enquiries are pre-qualified and forwarded to your dedicated account manager at 07:00.
                  </p>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 block">23:46</span>
              </div>
            </div>

            {/* Mock conversation - technical planting query */}
            {mockConversation.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-electric-cyan" />
                  </div>
                )}
                <div className={`flex-1 ${msg.role === "user" ? "flex flex-col items-end" : ""}`}>
                  <div
                    className={`rounded-2xl p-3 max-w-[90%] ${
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
                  <FlaskConical className="w-4 h-4 text-electric-cyan" />
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
                placeholder="Ask about species, soil types, or hardiness..."
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
              After-hours queries forwarded to specialists at 07:00
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
