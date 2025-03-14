import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';

type AESDemoProps = {
  plaintext: string;
  key: string;
  onEncrypt: (ciphertext: string) => void;
  onAnimationStart: () => void;
  isAnimating: boolean;
  currentStep: number;
};

const AESDemo: React.FC<AESDemoProps> = ({
  plaintext,
  key,
  onEncrypt,
  onAnimationStart,
  isAnimating,
  currentStep,
}) => {
  // State for the 4x4 state matrix visualization
  const [stateMatrix, setStateMatrix] = useState<string[][]>([]);
  
  // Initialize the state matrix with plaintext
  useEffect(() => {
    const matrix: string[][] = [];
    for (let i = 0; i < 4; i++) {
      const row: string[] = [];
      for (let j = 0; j < 4; j++) {
        const index = i * 4 + j;
        const char = index < plaintext.length ? plaintext[index] : ' ';
        row.push(char);
      }
      matrix.push(row);
    }
    setStateMatrix(matrix);
  }, [plaintext]);

  // Encrypt the plaintext and update the state matrix based on the current step
  useEffect(() => {
    if (isAnimating) {
      // In a real implementation, we would show the actual transformation at each step
      // This is a simplified visualization for demonstration purposes
      
      // For the final step, show the actual encryption result
      if (currentStep === 9) {
        try {
          const encrypted = AES.encrypt(plaintext, key).toString();
          onEncrypt(encrypted);
        } catch (error) {
          console.error('Encryption error:', error);
        }
      }
    }
  }, [isAnimating, currentStep, plaintext, key, onEncrypt]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">State Matrix</h3>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          <div className="grid grid-cols-4 gap-2">
            {stateMatrix.map((row, i) =>
              row.map((cell, j) => (
                <motion.div
                  key={`${i}-${j}`}
                  className={`h-16 flex items-center justify-center rounded-md font-mono text-white
                    ${isAnimating && (i === currentStep % 4 || j === currentStep % 4)
                      ? 'bg-primary-500'
                      : 'bg-gray-500 dark:bg-gray-700'}`}
                  animate={{
                    scale: isAnimating && (i === currentStep % 4 || j === currentStep % 4) ? [1, 1.1, 1] : 1,
                    backgroundColor: isAnimating && (i === currentStep % 4 || j === currentStep % 4)
                      ? ['#0ea5e9', '#0284c7', '#0ea5e9']
                      : '#6b7280',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {cell.charCodeAt(0).toString(16).padStart(2, '0')}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Current Operation</h3>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {isAnimating ? (
              <span>
                {[
                  "Initial state - Preparing plaintext",
                  "Adding round key (Key Expansion)",
                  "SubBytes - Substituting bytes using S-box",
                  "ShiftRows - Shifting rows of the state array",
                  "MixColumns - Mixing data within columns",
                  "Adding round key",
                  "Repeating SubBytes, ShiftRows, MixColumns",
                  "Final round - SubBytes",
                  "Final round - ShiftRows",
                  "Final round - Adding round key"
                ][currentStep]}
              </span>
            ) : (
              <span>Click "Visualize Encryption Process" to start</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onAnimationStart}
          disabled={isAnimating}
          className="btn btn-primary"
        >
          {isAnimating ? 'Animating...' : 'Visualize Encryption Process'}
        </button>
      </div>
    </div>
  );
};

export default AESDemo; 