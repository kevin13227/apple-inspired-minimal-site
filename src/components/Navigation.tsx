import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-apple">
      <div className="max-w-6xl mx-auto px-section">
        <div className="flex items-center justify-between h-nav">
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-lg font-semibold text-foreground hover:text-primary transition-apple-fast"
            >
              Our Project
            </a>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-apple-fast text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}