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
      className="h-9 w-9 p-0 hover:bg-secondary transition-apple"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 transition-apple" />
      ) : (
        <Sun className="h-4 w-4 transition-apple" />
      )}
    </Button>
  );
}