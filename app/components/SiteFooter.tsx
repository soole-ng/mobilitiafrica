import SooleLogo from "./SooleLogo";

export default function SiteFooter() {
  return (
    <footer className="bg-section-alt-strong border-t border-border py-16 text-muted text-base">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-foreground text-lg tracking-wider flex items-center gap-2">
            <SooleLogo className="w-7 h-7" />
            MOBILITI <span className="text-primary">AFRICA</span>
          </span>
          <p className="text-base text-muted leading-relaxed max-w-xs">A mobility technology holding company engineering software, telematics, and clean-energy solutions to make African movement safer and more efficient.</p>
          <p className="text-sm text-muted font-mono mt-2">Incorporated in Nigeria. Expanding across Africa.</p>
        </div>
        <div>
          <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Active Operations</h4>
          <ul className="flex flex-col gap-2.5 text-base">
            <li><a href="https://soole.ng" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Soole Ride Carpool App</a></li>
            <li><a href="https://dashboard.soole.ng" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Soole Organizational Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
          <ul className="flex flex-col gap-2.5 text-base">
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="mailto:info@soole.ng" className="hover:text-primary transition-colors">info@soole.ng</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-base">&copy; {new Date().getFullYear()} Mobiliti Africa. All rights reserved.</p>
        <div className="flex gap-6 text-base">
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
