"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Users, Truck, Building2 } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:info@soole.ng?subject=${encodeURIComponent(form.subject || "Website Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <SiteHeader />

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="max-w-2xl mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-bold text-xs uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mt-4">Let&apos;s talk about moving Africa forward</h1>
            <p className="text-muted text-sm mt-4 leading-relaxed">Whether you&apos;re a passenger, driver, transport operator, or investor, reach out and the Mobiliti Africa team will get back to you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 order-1 lg:order-none">
              {[
                { icon: Users, title: "Passengers & Drivers", desc: "Questions about booking, trips, or the Soole app." },
                { icon: Truck, title: "Transport Organizations", desc: "Pilot Soole and fleet tools with your vehicles and routes." },
                { icon: Building2, title: "Partners & Investors", desc: "Explore ways to work with Mobiliti Africa." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl bg-card-bg border border-border">
                    <Icon size={18} className="text-primary mb-3" />
                    <h4 className="text-foreground font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted text-base leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-card-bg border border-border rounded-[32px] p-8 md:p-12 lg:col-span-2 order-2 lg:order-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs text-muted uppercase tracking-wider">First Name</label>
                  <input id="firstName" required value={form.firstName} onChange={handleChange("firstName")} className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs text-muted uppercase tracking-wider">Last Name</label>
                  <input id="lastName" required value={form.lastName} onChange={handleChange("lastName")} className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="text-xs text-muted uppercase tracking-wider">Email</label>
                <input id="email" type="email" required value={form.email} onChange={handleChange("email")} className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors" />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="subject" className="text-xs text-muted uppercase tracking-wider">Subject</label>
                <input id="subject" required value={form.subject} onChange={handleChange("subject")} className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-xs text-muted uppercase tracking-wider">Message</label>
                <textarea id="message" required rows={5} value={form.message} onChange={handleChange("message")} className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95">
                Send Message <Send size={18} />
              </button>
              <p className="text-muted text-xs mt-4 flex items-center gap-2">
                <Mail size={14} /> Or email us directly at <a href="mailto:info@soole.ng" className="text-primary hover:underline">info@soole.ng</a>
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
