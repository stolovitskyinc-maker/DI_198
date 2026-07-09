import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              LaunchPad AI turns relocation complexity into a personalized journey — from paperwork to finding the right neighborhood.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-border transition-colors hover:text-primary">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Product</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/concierge" className="hover:text-foreground">AI Concierge</Link></li>
              <li><Link to="/neighborhood" className="hover:text-foreground">Neighborhood Match</Link></li>
              <li><Link to="/listings" className="hover:text-foreground">Listings</Link></li>
              <li><Link to="/demo" className="hover:text-foreground">AI Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LaunchPad AI. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border">
            <Rocket className="h-3.5 w-3.5 text-orange-500" /> Currently focused on Israel
          </p>
        </div>
      </div>
    </footer>
  );
}