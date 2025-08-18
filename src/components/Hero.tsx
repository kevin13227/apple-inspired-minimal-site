import React from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-lg mx-auto px-8">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Our Project
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 leading-relaxed">
          Built step by step, deployed with care
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="rounded-xl px-8 py-3 text-base font-medium transition-apple"
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-xl px-8 py-3 text-base font-medium transition-apple"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </main>
  );
}