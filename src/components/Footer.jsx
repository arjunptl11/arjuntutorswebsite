import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-lg">ArjunTutors</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Structured tutoring for every stage of learning. In-person and online sessions available.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Team", path: "/team" },
                { label: "Testimonials", path: "/testimonials" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-background/50 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">Resources</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Pricing", path: "/pricing" },
                { label: "Booking", path: "/booking" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-background/50 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">Get in Touch</h4>
            <div className="flex flex-col gap-2.5">
              <a href="tel:919-360-6784" className="text-sm text-background/50 hover:text-secondary transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                919-360-6784
              </a>
              <a href="https://instagram.com/arjuntutors" target="_blank" rel="noopener noreferrer" className="text-sm text-background/50 hover:text-secondary transition-colors">
                @arjuntutors
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <p className="text-background/40 text-xs text-center">
            © {new Date().getFullYear()} ArjunTutors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}