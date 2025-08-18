import React from 'react';

export function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-nav">
      <div className="text-center max-w-4xl mx-auto px-section">
        <h1 className="text-5xl md:text-7xl font-semibold text-foreground mb-6 tracking-tight">
          Welcome to Our Project
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          Built step by step, deployed with care
        </p>
      </div>
    </main>
  );
}