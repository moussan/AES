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
    name: 'All Data Structures',
    href: '/data-structures',
    description: 'Overview of all data structures',
  },
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
  {
    name: 'Linked Lists',
    href: '/data-structures/linked-lists',
    description: 'Sequential data structures',
  },
  {
    name: 'Graphs',
    href: '/data-structures/graphs',
    description: 'Network data structures',
  },
];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dataStructuresDropdownOpen, setDataStructuresDropdownOpen] = useState(false);
  const [algorithmsDropdownOpen, setAlgorithmsDropdownOpen] = useState(false);

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
              {/* Algorithms Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  className={`text-base font-medium inline-flex items-center ${
                    router.pathname.startsWith('/algorithms') 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                  onClick={() => {
                    setAlgorithmsDropdownOpen(!algorithmsDropdownOpen);
                    setDataStructuresDropdownOpen(false);
                  }}
                >
                  Algorithms
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform ${algorithmsDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {algorithmsDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {algorithms.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === item.href
                              ? 'bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setAlgorithmsDropdownOpen(false)}
                        >
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Data Structures Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  className={`text-base font-medium inline-flex items-center ${
                    router.pathname.startsWith('/data-structures') 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                  onClick={() => {
                    setDataStructuresDropdownOpen(!dataStructuresDropdownOpen);
                    setAlgorithmsDropdownOpen(false);
                  }}
                >
                  Data Structures
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform ${dataStructuresDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {dataStructuresDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {dataStructures.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === item.href
                              ? 'bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setDataStructuresDropdownOpen(false)}
                        >
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
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
              {/* Mobile Algorithms Dropdown */}
              <div>
                <button
                  type="button"
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname.startsWith('/algorithms') 
                      ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400' 
                      : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setAlgorithmsDropdownOpen(!algorithmsDropdownOpen)}
                >
                  Algorithms
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform ${algorithmsDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {algorithmsDropdownOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1">
                    {algorithms.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === item.href
                            ? 'bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => {
                          setAlgorithmsDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Data Structures Dropdown */}
              <div>
                <button
                  type="button"
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname.startsWith('/data-structures') 
                      ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400' 
                      : 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setDataStructuresDropdownOpen(!dataStructuresDropdownOpen)}
                >
                  Data Structures
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform ${dataStructuresDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {dataStructuresDropdownOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1">
                    {dataStructures.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === item.href
                            ? 'bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => {
                          setDataStructuresDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
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