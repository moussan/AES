import React from 'react';
import { motion } from 'framer-motion';

const AESExplanation: React.FC = () => {
  return (
    <motion.div
      className="prose prose-blue max-w-none dark:prose-invert"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Understanding AES Encryption</h2>
      
      <h3>What is AES?</h3>
      <p>
        The Advanced Encryption Standard (AES) is a symmetric block cipher chosen by the U.S. government to 
        protect classified information. AES is implemented in software and hardware throughout the world to 
        encrypt sensitive data. It is essential for government computer security, cybersecurity, and electronic 
        data protection.
      </p>
      
      <h3>History of AES</h3>
      <p>
        AES was established by the U.S. National Institute of Standards and Technology (NIST) in 2001 after a 
        five-year standardization process. The algorithm was originally called Rijndael, after its developers 
        Vincent Rijmen and Joan Daemen. It was selected as the winner of the AES competition, which sought a 
        replacement for the aging Data Encryption Standard (DES).
      </p>
      
      <h3>Key Features of AES</h3>
      <ul>
        <li>
          <strong>Block Cipher:</strong> AES operates on fixed-size blocks of data (128 bits or 16 bytes).
        </li>
        <li>
          <strong>Symmetric Key:</strong> The same key is used for both encryption and decryption.
        </li>
        <li>
          <strong>Variable Key Lengths:</strong> AES supports key sizes of 128, 192, and 256 bits.
        </li>
        <li>
          <strong>Rounds:</strong> AES performs multiple rounds of transformation (10, 12, or 14 rounds depending on key size).
        </li>
        <li>
          <strong>Substitution-Permutation Network:</strong> AES uses a series of substitution and permutation operations to create confusion and diffusion.
        </li>
      </ul>
      
      <h3>AES Variants</h3>
      <p>AES has three variants, each with a different key length:</p>
      <ul>
        <li><strong>AES-128:</strong> Uses a 128-bit key (16 bytes) and performs 10 rounds</li>
        <li><strong>AES-192:</strong> Uses a 192-bit key (24 bytes) and performs 12 rounds</li>
        <li><strong>AES-256:</strong> Uses a 256-bit key (32 bytes) and performs 14 rounds</li>
      </ul>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Variant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Length</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Number of Rounds</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Security Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">AES-128</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">128 bits (16 bytes)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">10</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">High</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">AES-192</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">192 bits (24 bytes)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">12</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Very High</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">AES-256</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">256 bits (32 bytes)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">14</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Extremely High</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>Security of AES</h3>
      <p>
        AES is considered highly secure and is widely used for sensitive data protection. The security of AES 
        depends on the key length used. As of 2023, there are no practical attacks that can break AES when 
        properly implemented. The most effective attack against AES is still a brute-force attack, which becomes 
        computationally infeasible with larger key sizes.
      </p>
      <p>
        To put this in perspective:
      </p>
      <ul>
        <li>Breaking AES-128 would require 2<sup>128</sup> operations, which is computationally infeasible with current technology.</li>
        <li>AES-256 provides a security margin against future advances in computing, including quantum computers.</li>
      </ul>
      
      <h3>Common Applications of AES</h3>
      <ul>
        <li>Secure communications (HTTPS, SSL/TLS)</li>
        <li>File encryption</li>
        <li>Disk encryption</li>
        <li>Password managers</li>
        <li>VPNs (Virtual Private Networks)</li>
        <li>Wireless security (WPA2/WPA3)</li>
        <li>Government and military communications</li>
        <li>Financial transactions</li>
      </ul>
      
      <h3>AES Modes of Operation</h3>
      <p>
        AES can be used in different modes of operation, which affect how the algorithm is applied to encrypt 
        data. Common modes include:
      </p>
      <ul>
        <li>
          <strong>ECB (Electronic Codebook):</strong> The simplest mode, but not recommended for most applications 
          due to security vulnerabilities. Each block is encrypted independently, which can reveal patterns in the data.
        </li>
        <li>
          <strong>CBC (Cipher Block Chaining):</strong> Each block of plaintext is XORed with the previous 
          ciphertext block before being encrypted. This helps hide patterns in the data.
        </li>
        <li>
          <strong>CTR (Counter):</strong> Turns a block cipher into a stream cipher by encrypting successive 
          values of a counter. This allows for parallel encryption and decryption.
        </li>
        <li>
          <strong>GCM (Galois/Counter Mode):</strong> Provides both authentication and encryption, making it 
          suitable for secure communications. It's widely used in TLS.
        </li>
        <li>
          <strong>XTS (XEX-based Tweaked-codebook mode with ciphertext Stealing):</strong> Designed for disk encryption, 
          where each sector is encrypted independently.
        </li>
      </ul>
      
      <h3>Implementation Considerations</h3>
      <p>
        When implementing AES, several factors should be considered:
      </p>
      <ul>
        <li>
          <strong>Key Management:</strong> Secure generation, storage, and distribution of keys is critical.
        </li>
        <li>
          <strong>IV (Initialization Vector):</strong> For modes that require an IV, it should be unique for 
          each encryption operation.
        </li>
        <li>
          <strong>Padding:</strong> Since AES operates on fixed-size blocks, padding may be required for data 
          that is not a multiple of the block size.
        </li>
        <li>
          <strong>Side-Channel Attacks:</strong> Implementations should be resistant to timing attacks, power 
          analysis, and other side-channel attacks.
        </li>
        <li>
          <strong>Hardware Acceleration:</strong> Many modern CPUs include hardware support for AES, which can 
          significantly improve performance.
        </li>
      </ul>
      
      <h3>Advantages of AES</h3>
      <ul>
        <li>Strong security with no practical attacks</li>
        <li>Efficient in both hardware and software implementations</li>
        <li>Widely adopted and well-analyzed</li>
        <li>Hardware acceleration on modern processors</li>
        <li>Flexible with different key sizes and modes of operation</li>
      </ul>
      
      <h3>Limitations of AES</h3>
      <ul>
        <li>Requires secure key management</li>
        <li>Improper implementation can lead to vulnerabilities</li>
        <li>Some modes (like ECB) can reveal patterns in the data</li>
        <li>Susceptible to side-channel attacks if not properly implemented</li>
      </ul>
      
      <h3>Future of AES</h3>
      <p>
        AES remains the standard for symmetric encryption and is expected to continue being secure for many years. 
        However, with the potential advent of quantum computing, cryptographers are developing post-quantum cryptographic 
        algorithms that would be resistant to attacks using quantum computers. For now, AES-256 is considered 
        quantum-resistant for most practical purposes.
      </p>
    </motion.div>
  );
};

export default AESExplanation; 