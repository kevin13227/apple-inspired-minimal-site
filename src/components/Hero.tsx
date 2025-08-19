import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export function Hero() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md sm:max-w-lg lg:max-w-xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-tight">
            Our Project
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-2 sm:px-0">
          Built step by step, deployed with care
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
          {user ? (
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="rounded-xl px-6 sm:px-8 py-3 text-sm sm:text-base font-medium transition-apple w-full sm:w-auto min-w-[120px]"
            >
              Go to Dashboard
            </Button>
          ) : (
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="rounded-xl px-6 sm:px-8 py-3 text-sm sm:text-base font-medium transition-apple w-full sm:w-auto min-w-[120px]"
            >
              Login
            </Button>
          )}
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-xl px-6 sm:px-8 py-3 text-sm sm:text-base font-medium transition-apple w-full sm:w-auto min-w-[120px]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}