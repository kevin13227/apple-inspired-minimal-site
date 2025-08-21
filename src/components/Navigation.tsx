import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Shield, Sparkles } from 'lucide-react';

export function Navigation() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a 
              href="#" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Shield className="relative h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Apple Zen Mode
                </span>
                <p className="text-xs text-muted-foreground -mt-1 hidden sm:block">Secure & Minimal</p>
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary font-medium">Live</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}