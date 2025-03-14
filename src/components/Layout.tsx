import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavItem = {
  name: string;
  href: string;
  description: string;
};

const algorithms: NavItem[] = [
  {
    name: 'AES',
    href: '/algorithms/aes',
    description: 'Advanced Encryption Standard',
  },
  {
    name: 'RSA',
    href: '/algorithms/rsa',
    description: 'Rivest–Shamir–Adleman',
  },
  {
    name: 'SHA',
    href: '/algorithms/sha',
    description: 'Secure Hash Algorithms',
  },
];

const dataStructures: NavItem[] = [
  {
    name: 'Binary Trees',
    href: '/data-structures/binary-trees',
    description: 'Hierarchical data structures',
  },
  {
    name: 'Hash Tables',
    href: '/data-structures/hash-tables',
    description: 'Key-value data structures',
  },
];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  CryptoVisualizer
                </span>
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <Link 
                href="/algorithms" 
                className={`text-base font-medium ${
                  router.pathname.startsWith('/algorithms') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Algorithms
              </Link>
              <Link 
                href="/data-structures" 
                className={`text-base font-medium ${
                  router.pathname.startsWith('/data-structures') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Data Structures
              </Link>
              <Link 
                href="/about" 
                className={`text-base font-medium ${
                  router.pathname === '/about' 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                About
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/algorithms" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname.startsWith('/algorithms') 
                    ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400' 
                    : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Algorithms
              </Link>
              <Link 
                href="/data-structures" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname.startsWith('/data-structures') 
                    ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400' 
                    : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Data Structures
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname === '/about' 
                    ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400' 
                    : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CryptoVisualizer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 