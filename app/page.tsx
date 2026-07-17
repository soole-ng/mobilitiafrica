"use client";

import React from "react";
import { motion } from "framer-motion";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SooleLogo from "./components/SooleLogo";
import HeroMapAnimation from "./components/HeroMapAnimation";
import {
  Navigation,
  Cpu,
  Truck,
  BatteryCharging,
  MapPin,
  Plane,
  ArrowRight,
  Leaf,
  CheckCircle,
  Shield,
  Mail,
  Users,
  Building2,
  BarChart3,
  Globe,
  LayoutDashboard
} from "lucide-react";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="26" className={className} fill="none" viewBox="0 0 21 26">
      <path fill="#fff" d="M17.058 13.83a5.5 5.5 0 0 1 .704-2.616 5.4 5.4 0 0 1 1.87-1.95 5.55 5.55 0 0 0-1.901-1.706 5.5 5.5 0 0 0-2.459-.668c-1.834-.194-3.613 1.105-4.547 1.105-.953 0-2.392-1.086-3.942-1.054a5.8 5.8 0 0 0-4.886 3.002c-2.113 3.682-.537 9.096 1.486 12.073 1.013 1.458 2.196 3.086 3.745 3.028 1.515-.063 2.081-.973 3.91-.973 1.812 0 2.343.973 3.923.937 1.626-.027 2.65-1.465 3.627-2.936a12.1 12.1 0 0 0 1.66-3.402 5.23 5.23 0 0 1-2.319-1.936 5.3 5.3 0 0 1-.871-2.903m-2.984-8.9a5.38 5.38 0 0 0 1.217-3.84 5.4 5.4 0 0 0-3.504 1.827 5.1 5.1 0 0 0-1.249 3.697 4.45 4.45 0 0 0 1.96-.432 4.5 4.5 0 0 0 1.576-1.251"></path>
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" className={className} fill="none" viewBox="0 0 27 30">
      <path fill="url(#pm_paint0)" d="m1.458 28.959-.08-.078c-.318-.337-.505-.86-.505-1.539v.16V3.284v.166c0-.734.218-1.287.584-1.618l13.51 13.564z"></path>
      <path fill="url(#pm_paint1)" d="m19.47 19.919-4.505-4.523 4.504-4.522 5.436 3.101c.69.394 1.078.902 1.143 1.42v.002c-.065.518-.452 1.027-1.143 1.42z"></path>
      <path fill="url(#pm_paint2)" d="M2.421 29.316a1.4 1.4 0 0 1-.963-.357l13.507-13.563 4.505 4.523-15.827 9.029c-.438.25-.853.368-1.222.368"></path>
      <path fill="url(#pm_paint3)" d="M14.965 15.397 1.457 1.832a1.4 1.4 0 0 1 .962-.355c.37 0 .785.118 1.224.368l15.826 9.03z"></path>
      <defs>
        <linearGradient id="pm_paint0" x1="13.768" x2="-4.606" y1="3.034" y2="21.333" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF"></stop>
          <stop offset="0.26" stopColor="#00BEFF"></stop>
          <stop offset="0.76" stopColor="#00DFFF"></stop>
          <stop offset="1" stopColor="#00E3FF"></stop>
        </linearGradient>
        <linearGradient id="pm_paint1" x1="26.89" x2="0.507" y1="15.396" y2="15.396" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000"></stop>
          <stop offset="0.409" stopColor="#FFBD00"></stop>
          <stop offset="0.775" stopColor="orange"></stop>
          <stop offset="1" stopColor="#FF9C00"></stop>
        </linearGradient>
        <linearGradient id="pm_paint2" x1="17.069" x2="-7.847" y1="17.909" y2="42.722" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44"></stop>
          <stop offset="1" stopColor="#C31162"></stop>
        </linearGradient>
        <linearGradient id="pm_paint3" x1="-2.045" x2="9.081" y1="-6.307" y2="4.773" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071"></stop>
          <stop offset="0.069" stopColor="#2DA771"></stop>
          <stop offset="0.476" stopColor="#15CF74"></stop>
          <stop offset="0.801" stopColor="#06E775"></stop>
          <stop offset="1" stopColor="#00F076"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function StoreBadges({ playHref }: { playHref: string }) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      <a href="#" className="rounded-xl flex gap-2 items-center py-2 px-3 border border-white/10 bg-black cursor-pointer transition-all duration-300 hover:bg-neutral-900 active:scale-95">
        <AppleIcon className="w-4 h-5" />
        <div className="text-left">
          <span className="block font-light text-[8px] text-white leading-tight">Download on the</span>
          <span className="block font-semibold text-[11px] text-white leading-tight">App Store</span>
        </div>
      </a>
      <a href={playHref} target="_blank" rel="noopener noreferrer" className="rounded-xl flex gap-2 items-center py-2 px-3 border border-white/10 bg-black cursor-pointer transition-all duration-300 hover:bg-neutral-900 active:scale-95">
        <PlayStoreIcon className="w-4 h-5" />
        <div className="text-left">
          <span className="block font-light text-[8px] text-white leading-tight">GET IT ON</span>
          <span className="block font-semibold text-[11px] text-white leading-tight">Google Play</span>
        </div>
      </a>
    </div>
  );
}

export default function Home() {

  const sectors = [
    {
      id: "transit",
      icon: Navigation,
      title: "Urban & Intercity Transit",
      desc: "Modernizing passenger transit through intelligent matching engines and automated scheduling systems.",
      active: true,
      tag: "Active (Soole)",
      features: [
        "Soole.ng peer-to-peer carpooling matching",
        "Public BRT bus fleet optimization software",
        "Union terminal booking & queue algorithms"
      ]
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Industrial Logistics & Freight",
      desc: "Connecting heavy carriers, container trucks, and cargo centers to optimize freight flows across corridors.",
      active: false,
      tag: "Roadmap",
      features: [
        "Truck capacity matching & digital freight logs",
        "Cold-chain temperature & humidity sensors",
        "Intermodal warehouse & port management APIs"
      ]
    },
    {
      id: "iot",
      icon: Cpu,
      title: "IoT & Embedded Hardware",
      desc: "Designing and assembly of custom physical hardware units for deep telemetry and CAN diagnostics.",
      active: true,
      tag: "Active (Telemetry)",
      features: [
        "In-vehicle GPS trackers running C/C++ firmware",
        "CAN bus OBD-II diagnostic units",
        "Solar-assisted cargo security padlocks"
      ]
    },
    {
      id: "ev",
      icon: BatteryCharging,
      title: "Clean Tech & EV Transition",
      desc: "Accelerating the shift away from ICE vehicles through local conversion kits and charging networks.",
      active: false,
      tag: "Roadmap",
      features: [
        "ICE-to-EV retrofitting kits for city buses",
        "Solar-powered battery swap kiosks",
        "Custom heavy-duty battery management systems"
      ]
    },
    {
      id: "infrastructure",
      icon: MapPin,
      title: "Intelligent Infrastructure",
      desc: "Developing solutions that interact directly with roads, tolls, traffic signals, and cities.",
      active: false,
      tag: "Roadmap",
      features: [
        "RFID-based automated non-stop toll tags",
        "Computer-vision dynamic traffic signal control",
        "Continuous AI road defect & pothole mapping"
      ]
    },
    {
      id: "rail",
      icon: Plane,
      title: "Aviation, Rail & Drone Logistics",
      desc: "Pioneering three-dimensional delivery and connecting non-road transport systems.",
      active: false,
      tag: "Roadmap",
      features: [
        "Rail freight fleet diagnostics & tracking",
        "Medical delivery drone flight planning engines",
        "Airport ground operations vehicle tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroMapAnimation className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
          <div className="max-w-3xl flex flex-col gap-8">
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              The Tech Stack for <br className="hidden sm:inline" />
              <span className="text-primary">African Movement</span>
            </motion.h1>
            <motion.p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Mobiliti Africa is a mobility technology company created to improve the movement of people, goods, and essential services across the continent. Starting with our foundation in route intelligence through Soole, we are building an integrated ecosystem of telematics, clean-energy solutions, and physical infrastructure to serve as the operating system for African movement. Passengers, drivers, and transport organizations all run on the same Soole platform.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 pt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <a href="#sectors" className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
                Explore Verticals <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans leading-tight mt-4 mb-6">
                Africa's movement has a security, cost, and emissions problem
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Unverified drivers and vehicles put passengers and cargo at risk. African countries pay an average of <span className="text-foreground font-semibold">11.4% of import value</span> on international transport, compared to 6.8% in developed countries (UNCTAD). Poor real-time tracking makes routes hard to trust, and inefficient, aging fleets add unnecessary greenhouse gas emissions.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Resolving this requires more than copying existing solutions. It requires designing custom hardware, low-bandwidth software, and clean energy technology built specifically for Africa's roads, climate, and infrastructure realities, not importing systems designed for other environments.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "Security", label: "Unverified drivers and vehicles put passengers and cargo at risk", icon: Shield },
                { stat: "Cost", label: "Higher transit costs than developed markets squeeze margins", icon: BarChart3 },
                { stat: "Tracking", label: "Poor real-time visibility makes routes and cargo hard to trust", icon: MapPin },
                { stat: "Emissions", label: "Inefficient routing and aging fleets add greenhouse gas", icon: Leaf },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} className="p-6 rounded-2xl bg-card-bg border border-border transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Icon size={20} className="text-primary mb-4" />
                    <p className="text-foreground font-bold text-xl mb-1">{item.stat}</p>
                    <p className="text-muted text-xs leading-relaxed">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-24 border-t border-border bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">Our Operational Verticals</h2>
            </div>
            <p className="text-muted max-w-md text-sm leading-relaxed">We cover the entire value chain of movement. While we currently feature ride-sharing through Soole and telemetry setups, we register all pathways on our roadmap.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div key={sector.id} className="rounded-3xl p-8 bg-card-bg border border-border flex flex-col justify-between transition-all duration-500 group relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3 className="text-foreground text-xl font-bold mb-3">{sector.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">{sector.desc}</p>
                  </div>
                  <div className="border-t border-border pt-6 mt-6">
                    <ul className="flex flex-col gap-2.5">
                      {sector.features.map((feat, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted items-start">
                          <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 border-t border-border bg-section-alt-strong relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              "We are not building another ridesharing application. We are building the{" "}
              <span className="text-primary">operating system for African movement.</span>"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Soole Product Suite Section */}
      <section id="products" className="py-24 border-t border-border bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mt-4">Everything Soole, in one place</h2>
              <p className="text-muted text-sm mt-4 leading-relaxed">A mobile app for passengers, a mobile app for drivers, and a web dashboard for the organizations that run intercity transport, all built on the same platform.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Soole for Passenger",
                icon: Users,
                tag: "Mobile App",
                desc: "Book intercity rides, track your driver in real time, and pay securely, all from one app.",
                features: ["Instant intercity booking", "Live trip tracking", "Secure in-app payments"],
                cta: null,
                showStoreBadges: true,
                playHref: "https://play.google.com/store/apps/details?id=ng.soole.soole_app&pcampaignid=web_share",
              },
              {
                name: "Soole for Driver",
                icon: Navigation,
                tag: "Mobile App",
                desc: "Accept trips, follow optimized routes, and get paid instantly with the driver companion app.",
                features: ["Trip requests & navigation", "Earnings paid instantly", "Route and schedule management"],
                cta: null,
                showStoreBadges: true,
                playHref: "#",
              },
              {
                name: "Soole for Organization",
                icon: LayoutDashboard,
                tag: "Web Dashboard",
                desc: "A real-time control center for routes, drivers, terminal bookings, and revenue, no spreadsheets.",
                features: ["Live booking & revenue overview", "Route and terminal queue management", "Driver onboarding & payout tracking"],
                cta: { label: "Visit the Dashboard", href: "https://dashboard.soole.ng" },
                showStoreBadges: false,
                playHref: "",
              },
            ].map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div key={product.name} className="p-8 rounded-3xl bg-card-bg border border-border transition-all duration-300 group flex flex-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">{product.tag}</span>
                  </div>
                  <h4 className="text-foreground font-bold text-lg mb-2">{product.name}</h4>
                  <p className="text-muted text-sm leading-relaxed mb-6">{product.desc}</p>
                  <ul className="flex flex-col gap-2.5 border-t border-border pt-5 mb-6">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-muted items-start">
                        <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {product.cta && (
                    <a href={product.cta.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 active:scale-95">
                      {product.cta.label} <ArrowRight size={16} />
                    </a>
                  )}
                  {product.showStoreBadges && <StoreBadges playHref={product.playHref} />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans leading-tight mt-2">The Integrated Ecosystem</h2>
            <p className="text-muted text-sm leading-relaxed mt-4">We are building secure transportation and monitoring around a growing pipeline of infrastructure, route intelligence, driver verification, and terminal visibility that reinforce each other as the network grows. This shared platform approach lets us scale new capabilities without rebuilding identity, payments, and data each time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Collect Route Data", desc: "Capture live trip and route data from Soole passengers and drivers to understand demand and transit patterns across corridors." },
              { step: "2", title: "Secure the Network", desc: "Verify drivers and organizations, monitor trips in real time, and build the infrastructure pipeline that keeps every journey accountable." },
              { step: "3", title: "Lower Cost of Movement", desc: "Use that visibility to optimize routes and reduce operating costs for organizations, drivers, and passengers alike." },
            ].map((item, i) => (
              <motion.div key={i} className="p-8 rounded-3xl bg-card-bg border border-border relative group overflow-hidden transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary font-bold text-lg mb-6">{item.step}</div>
                <h4 className="text-foreground text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section id="contact" className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="bg-card-bg border border-border rounded-[48px] p-8 md:p-16 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mb-6 leading-tight">
                We are building with operators, governments, and investors who believe Africa's mobility can be world-class.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl">
                Whether you are a transport operator, a technology partner, a development finance institution, or a government agency, there is a structured role for you in the Mobiliti Africa ecosystem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Truck, title: "Transport Organizations", desc: "Pilot Soole and fleet tools with your vehicles and routes." },
                  { icon: Building2, title: "Institutional Investors", desc: "Back the foundational infrastructure for African transit." },
                  { icon: Globe, title: "Government & Regulators", desc: "Explore road intelligence and smart mobility pilots." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl bg-background border border-border">
                      <Icon size={18} className="text-primary mb-3" />
                      <h4 className="text-foreground font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
              <a href="mailto:hello@soole.ng" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
                <Mail size={18} /> Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-32 border-t border-border bg-background relative overflow-hidden">
        <motion.div className="max-w-5xl mx-auto px-6 text-center relative z-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <SooleLogo className="w-40 h-40 sm:w-56 sm:h-56 mx-auto -mb-4" sizes="224px" />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 mt-2">
            Moving Africa.<br />
            <span className="text-primary">Connecting Opportunity.</span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto">
            We begin with software. We grow through data, partnerships, and trusted operations. We build each new mobility layer only when it creates clear value for African users and operators.
          </p>
        </motion.div>
      </section>

      <SiteFooter />

    </div>
  );
}
