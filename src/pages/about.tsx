import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              About CryptoVisualizer
            </h1>
          </div>
        </header>
        
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="card">
                <motion.div
                  className="prose prose-blue max-w-none dark:prose-invert"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>Our Mission</h2>
                  <p>
                    CryptoVisualizer was created with a simple mission: to make complex encryption algorithms and 
                    data structures accessible and understandable to everyone. We believe that visualization is 
                    a powerful tool for learning, and our interactive demos help demystify the inner workings of 
                    cryptographic concepts.
                  </p>
                  
                  <h2>The Project</h2>
                  <p>
                    This project began as a simple C program demonstrating AES encryption and has evolved into 
                    a comprehensive web application that visualizes various algorithms and data structures. Our 
                    goal is to continue expanding the library of visualizations and to create an educational 
                    resource for students, developers, and anyone interested in understanding how these 
                    fundamental technologies work.
                  </p>
                  
                  <h2>Features</h2>
                  <ul>
                    <li>Interactive visualizations of encryption algorithms</li>
                    <li>Step-by-step explanations of cryptographic processes</li>
                    <li>Detailed information about various encryption methods</li>
                    <li>Real-time encryption and decryption using actual algorithms</li>
                    <li>Modern, responsive UI with dark mode support</li>
                  </ul>
                  
                  <h2>Technologies Used</h2>
                  <p>
                    CryptoVisualizer is built using modern web technologies:
                  </p>
                  <ul>
                    <li><strong>Next.js</strong> - React framework for server-rendered applications</li>
                    <li><strong>React</strong> - JavaScript library for building user interfaces</li>
                    <li><strong>TypeScript</strong> - Typed superset of JavaScript</li>
                    <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
                    <li><strong>Framer Motion</strong> - Animation library for React</li>
                    <li><strong>Crypto-JS</strong> - JavaScript library of crypto standards</li>
                  </ul>
                  
                  <h2>Future Plans</h2>
                  <p>
                    We're constantly working to improve CryptoVisualizer and add new features. Some of our 
                    planned additions include:
                  </p>
                  <ul>
                    <li>More encryption algorithms (RSA, ECC, etc.)</li>
                    <li>Additional data structures (graphs, heaps, etc.)</li>
                    <li>Interactive coding challenges</li>
                    <li>Comparison tools for different algorithms</li>
                    <li>Performance benchmarks</li>
                  </ul>
                  
                  <h2>Contributing</h2>
                  <p>
                    CryptoVisualizer is an open-source project, and we welcome contributions from the community. 
                    Whether you're fixing a bug, adding a feature, or improving documentation, your help is 
                    appreciated.
                  </p>
                  <p>
                    Visit our <a href="https://github.com/yourusername/crypto-visualizer" className="text-primary-600 dark:text-primary-400 hover:underline">GitHub repository</a> to 
                    learn how you can contribute.
                  </p>
                  
                  <h2>Contact</h2>
                  <p>
                    Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us at:
                  </p>
                  <ul>
                    <li>Email: <a href="mailto:contact@cryptovisualizer.com" className="text-primary-600 dark:text-primary-400 hover:underline">contact@cryptovisualizer.com</a></li>
                    <li>Twitter: <a href="https://twitter.com/cryptovisualizer" className="text-primary-600 dark:text-primary-400 hover:underline">@cryptovisualizer</a></li>
                    <li>GitHub: <a href="https://github.com/yourusername/crypto-visualizer" className="text-primary-600 dark:text-primary-400 hover:underline">github.com/yourusername/crypto-visualizer</a></li>
                  </ul>
                </motion.div>
                
                <div className="mt-8 flex justify-center">
                  <Link href="/" className="btn btn-primary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 