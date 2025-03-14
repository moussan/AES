import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HashTablesPage() {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Hash Tables
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Visualize and understand hash table data structures and operations
            </p>
          </div>
        </header>
        
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="card">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-16"
                >
                  <svg
                    className="mx-auto h-16 w-16 text-secondary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                    Coming Soon
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    We're working on an interactive visualization for hash tables. 
                    This feature will be available soon!
                  </p>
                  <div className="mt-6">
                    <Link href="/data-structures" className="btn btn-secondary">
                      Back to Data Structures
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Preview of what's coming */}
              <div className="mt-8 card">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  What to Expect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Hash Function Visualization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      See how different hash functions transform keys into array indices, 
                      and understand the importance of good hash function design.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Collision Resolution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visualize different collision resolution techniques including chaining 
                      and open addressing methods like linear probing and quadratic probing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Interactive Hash Table Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Perform insert, search, and delete operations on a hash table and 
                      see how the data structure changes with each operation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Load Factor and Rehashing
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understand how load factor affects performance and visualize the 
                      rehashing process when a hash table needs to grow.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Basic information about hash tables */}
              <div className="mt-8 card">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  About Hash Tables
                </h2>
                <div className="prose prose-blue max-w-none dark:prose-invert">
                  <p>
                    A hash table (hash map) is a data structure that implements an associative array 
                    abstract data type, a structure that can map keys to values. A hash table uses a 
                    hash function to compute an index into an array of buckets or slots, from which 
                    the desired value can be found.
                  </p>
                  
                  <h3>Key Components</h3>
                  <ul>
                    <li><strong>Hash Function:</strong> Converts keys into array indices</li>
                    <li><strong>Array:</strong> Stores the key-value pairs</li>
                    <li><strong>Collision Resolution:</strong> Handles cases when different keys hash to the same index</li>
                  </ul>
                  
                  <h3>Collision Resolution Techniques</h3>
                  <ul>
                    <li><strong>Chaining:</strong> Each array index points to a linked list of entries that hash to the same index</li>
                    <li><strong>Open Addressing:</strong> All entries are stored in the array itself
                      <ul>
                        <li><strong>Linear Probing:</strong> If a collision occurs, check the next slot sequentially</li>
                        <li><strong>Quadratic Probing:</strong> If a collision occurs, check slots at quadratic distances</li>
                        <li><strong>Double Hashing:</strong> Use a second hash function to determine the probe sequence</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>Common Operations</h3>
                  <ul>
                    <li><strong>Insert:</strong> Add a new key-value pair to the hash table</li>
                    <li><strong>Search:</strong> Find the value associated with a given key</li>
                    <li><strong>Delete:</strong> Remove a key-value pair from the hash table</li>
                  </ul>
                  
                  <h3>Time Complexity</h3>
                  <p>
                    For a well-implemented hash table with a good hash function and appropriate load factor:
                  </p>
                  <ul>
                    <li>Average case: O(1) for insert, search, and delete</li>
                    <li>Worst case: O(n) when many collisions occur</li>
                  </ul>
                  
                  <h3>Load Factor</h3>
                  <p>
                    The load factor is the ratio of the number of stored entries to the number of buckets. 
                    As the load factor increases, the hash table becomes slower. When the load factor exceeds 
                    a certain threshold (typically 0.7), the hash table is resized (rehashed) to maintain 
                    performance.
                  </p>
                  
                  <h3>Applications</h3>
                  <ul>
                    <li>Database indexing</li>
                    <li>Caches</li>
                    <li>Symbol tables in compilers</li>
                    <li>Associative arrays</li>
                    <li>Sets</li>
                    <li>Object representation in many programming languages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 