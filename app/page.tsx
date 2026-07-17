"use client";

import React from "react";
import { motion } from "framer-motion";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SooleLogo from "./components/SooleLogo";
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
      desc: "Physical hardware for deep telemetry and vehicle diagnostics, planned for a future phase.",
      active: false,
      tag: "Roadmap",
      features: [
        "In-vehicle GPS trackers",
        "OBD-II diagnostic units",
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

      {/* Hero Section (previous version, kept for reference)
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
                See What We Do <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden">
        <motion.div className="max-w-5xl mx-auto px-6 text-center relative z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <SooleLogo className="w-40 h-40 sm:w-56 sm:h-56 mx-auto -mb-4" sizes="224px" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 mt-2">
            Moving Africa.<br />
            <span className="text-primary">Connecting Opportunity.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto mb-8">
            We begin with software. We grow through data, partnerships, and trusted operations. We build each new mobility layer only when it creates clear value for African users and organizations.
          </p>
          <a href="#sectors" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
            See What We Do <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 border-t border-border bg-background">
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
                Fixing this takes more than copying what works elsewhere. Today we're focused on software that works on slow networks and is built specifically for Africa's roads and realities, with hardware and clean energy tools planned for the future, not systems built for somewhere else.
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
      <section id="sectors" className="py-16 border-t border-border bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">What We Do</h2>
            </div>
            <p className="text-muted max-w-md text-sm leading-relaxed">We cover every part of how people move. Right now, our main product is Soole ride-sharing, everything else here is on our roadmap for later.</p>
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
      <section className="py-14 border-t border-border bg-section-alt-strong relative overflow-hidden">
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
      <section id="products" className="py-16 border-t border-border bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mt-4">Everything Soole, in one place</h2>
              <p className="text-muted text-sm mt-4 leading-relaxed">A mobile app for passengers, a mobile app for drivers, and a web dashboard for the organizations that run intercity transport, all built on the same platform.</p>
            </motion.div>
          </div>
          <motion.div className="rounded-3xl bg-card-bg border border-border p-8 md:p-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  name: "Soole for Passenger",
                  icon: Users,
                  tag: "Mobile App",
                  desc: "Book intercity rides, track your driver in real time, and pay securely, all from one app.",
                  features: ["Instant intercity booking", "Live trip tracking", "Secure in-app payments"],
                },
                {
                  name: "Soole for Driver",
                  icon: Navigation,
                  tag: "Mobile App",
                  desc: "Accept trips, follow optimized routes, and get paid instantly with the driver companion app.",
                  features: ["Trip requests & navigation", "Earnings paid instantly", "Route and schedule management"],
                },
                {
                  name: "Soole for Organization",
                  icon: LayoutDashboard,
                  tag: "Web Dashboard",
                  desc: "A real-time control center for routes, drivers, terminal bookings, and revenue, no spreadsheets.",
                  features: ["Live booking & revenue overview", "Route and terminal queue management", "Driver onboarding & payout tracking"],
                },
              ].map((product, i) => {
                const Icon = product.icon;
                return (
                  <div key={product.name} className={`flex flex-col ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">{product.tag}</span>
                    </div>
                    <h4 className="text-foreground font-bold text-lg mb-2">{product.name}</h4>
                    <p className="text-muted text-sm leading-relaxed mb-6">{product.desc}</p>
                    <ul className="flex flex-col gap-2.5 border-t border-border pt-5 mt-auto">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-muted items-start">
                          <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 pt-8 border-t border-border flex justify-center">
              <a href="https://soole.ng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
                Visit Soole.ng <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-16 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans leading-tight mt-2">How It All Works Together</h2>
            <p className="text-muted text-sm leading-relaxed mt-4">We keep transport safe and easy to track by checking drivers, watching trips as they happen, and keeping an eye on terminals. As we grow, these pieces work together so we don't have to rebuild logins, payments, or data each time we add something new.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Collect Route Data", desc: "Gather live trip and route data from Soole passengers and drivers to see demand and travel patterns across the country." },
              { step: "2", title: "Keep the Network Safe", desc: "Check drivers and organizations, watch trips as they happen, and keep a record so every journey is accountable." },
              { step: "3", title: "Lower Cost of Movement", desc: "Use that information to plan better routes and cut costs for organizations, drivers, and passengers alike." },
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
      <section id="contact" className="py-16 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="bg-card-bg border border-border rounded-[48px] p-8 md:p-16 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mb-6 leading-tight">
                We work with organizations, governments, and investors who want to make African transport better.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl">
                Whether you run a transport organization, a tech company, a funding group, or a government agency, there's a place for you to work with Mobiliti Africa.
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
              <a href="mailto:info@soole.ng" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
                <Mail size={18} /> Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <SiteFooter />

    </div>
  );
}
