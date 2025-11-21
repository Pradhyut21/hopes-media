'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform">
          HoPES Media
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <Link href="#podcasts" className="hover:text-blue-200 transition-colors font-medium">
              Podcasts
            </Link>
            <Link href="#articles" className="hover:text-blue-200 transition-colors font-medium">
              Articles
            </Link>
            <Link href="#about" className="hover:text-blue-200 transition-colors font-medium">
              About
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <div className="md:hidden">
            <button className="p-1 rounded-md hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
