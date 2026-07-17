"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import SooleLogo from "./SooleLogo";

const NAV_LINKS = [
  { href: "/#sectors", label: "What We Do" },
  { href: "/#products", label: "Products" },
  { href: "/#ecosystem", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass-panel border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <SooleLogo className="w-9 h-9" />
            <span className="font-bold text-xl tracking-wider text-foreground flex items-center gap-2">
              MOBILITI <span className="text-primary">AFRICA</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-surface-alt border border-border text-foreground active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 left-0 right-0 glass-panel border-b border-border z-40 px-6 py-8 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{link.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
