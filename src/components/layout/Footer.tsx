import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted/50 pt-20 pb-12 px-6 md:px-12 dark:bg-black/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="text-3xl font-display font-extrabold tracking-tighter">
            LUVIA
          </Link>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Crafting a minimalist future where form meets function in its purest expression. 
            Luvia is a curated destination for premium objects and ethereal design.
          </p>
          <div className="flex gap-4 pt-4">
            {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-sm font-medium underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1"
              >
                {social} <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4">
            {['Shop All', 'Technology', 'Living Space', 'New Arrivals', 'Featured'].map((link) => (
              <li key={link}>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Concierge</h4>
          <ul className="space-y-4">
            {['Track Order', 'Returns Policy', 'Sustainability', 'Privacy', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-muted text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase font-black">
            © 2024 LUVIA CONCEPT.
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground/60">Shop status: Active</span>
          </div>
        </div>
        
        <div className="flex gap-8">
          {['Terms', 'Privacy', 'Journal'].map((item) => (
            <p key={item} className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] cursor-pointer hover:text-primary transition-colors">
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};
