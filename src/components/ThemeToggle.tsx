import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-10 w-10 p-0 hover:bg-secondary/50 border border-border/50 hover:border-border transition-all duration-200 hover:scale-105 group"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:rotate-12" />
        ) : (
          <Sun className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:rotate-12" />
        )}
        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-0 group-hover:scale-100"></div>
      </div>
    </Button>
  );
}