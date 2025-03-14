import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';

// AES visualization components
import AESDemo from '@/components/AESDemo';
import AESSteps from '@/components/AESSteps';
import AESExplanation from '@/components/AESExplanation';

export default function AESPage() {
  const [activeTab, setActiveTab] = useState<'demo' | 'steps' | 'explanation'>('demo');
  const [plaintext, setPlaintext] = useState('Hello, World!');
  const [key, setKey] = useState('0123456789abcdef0123456789abcdef');
  const [iv, setIv] = useState('0123456789abcdef');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Encrypt the plaintext
  const encryptText = () => {
    try {
      // In a real implementation, we would use proper IV handling
      // This is simplified for demonstration purposes
      const encrypted = AES.encrypt(plaintext, key).toString();
      setCiphertext(encrypted);
      setCurrentStep(0);
    } catch (error) {
      console.error('Encryption error:', error);
      setCiphertext('Encryption error');
    }
  };

  // Decrypt the ciphertext
  const decryptText = () => {
    try {
      if (!ciphertext) {
        setDecryptedText('');
        return;
      }
      
      const decrypted = AES.decrypt(ciphertext, key).toString(Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      console.error('Decryption error:', error);
      setDecryptedText('Decryption error');
    }
  };

  // Run encryption when plaintext or key changes
  useEffect(() => {
    encryptText();
  }, [plaintext, key]);

  // Run decryption when ciphertext or key changes
  useEffect(() => {
    decryptText();
  }, [ciphertext, key]);

  // Animation steps for the AES process
  const totalSteps = 10;
  
  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        if (nextStep >= totalSteps) {
          clearInterval(interval);
          setIsAnimating(false);
          return 0;
        }
        return nextStep;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  };

  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              AES (Advanced Encryption Standard)
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Visualize and understand how the AES encryption algorithm works
            </p>
          </div>
        </header>
        
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('demo')}
                    className={`${
                      activeTab === 'demo'
                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Interactive Demo
                  </button>
                  <button
                    onClick={() => setActiveTab('steps')}
                    className={`${
                      activeTab === 'steps'
                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Step-by-Step Process
                  </button>
                  <button
                    onClick={() => setActiveTab('explanation')}
                    className={`${
                      activeTab === 'explanation'
                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Explanation
                  </button>
                </nav>
              </div>

              {/* Tab content */}
              <div className="mt-8">
                {activeTab === 'demo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Input section */}
                      <div className="card">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Input</h2>
                        
                        <div className="mb-4">
                          <label htmlFor="plaintext" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Plaintext
                          </label>
                          <textarea
                            id="plaintext"
                            rows={3}
                            className="input"
                            value={plaintext}
                            onChange={(e) => setPlaintext(e.target.value)}
                            placeholder="Enter text to encrypt"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="key" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Key (32 characters for AES-256)
                          </label>
                          <input
                            type="text"
                            id="key"
                            className="input"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder="Enter encryption key"
                          />
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            For AES-256, the key should be 32 characters (256 bits)
                          </p>
                        </div>
                      </div>
                      
                      {/* Output section */}
                      <div className="card">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Output</h2>
                        
                        <div className="mb-4">
                          <label htmlFor="ciphertext" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Ciphertext
                          </label>
                          <textarea
                            id="ciphertext"
                            rows={3}
                            className="input"
                            value={ciphertext}
                            readOnly
                            placeholder="Encrypted text will appear here"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="decrypted" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Decrypted Text
                          </label>
                          <textarea
                            id="decrypted"
                            rows={3}
                            className="input"
                            value={decryptedText}
                            readOnly
                            placeholder="Decrypted text will appear here"
                          />
                        </div>
                        
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hex Representation</h3>
                          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                            <code className="text-xs font-mono">
                              {plaintext && Utf8.parse(plaintext).toString(Hex)}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visualization */}
                    <div className="mt-8 card">
                      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AES Encryption Visualization</h2>
                      <AESDemo 
                        plaintext={plaintext}
                        key={key}
                        onEncrypt={setCiphertext}
                        onAnimationStart={startAnimation}
                        isAnimating={isAnimating}
                        currentStep={currentStep}
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'steps' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AESSteps />
                  </motion.div>
                )}

                {activeTab === 'explanation' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card">
                      <AESExplanation />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 