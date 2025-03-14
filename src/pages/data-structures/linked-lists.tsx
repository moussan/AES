import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LinkedListsPage() {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Linked Lists
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Visualize and understand linked list data structures and operations
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
                    We're working on an interactive visualization for linked lists. 
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
                      Interactive List Builder
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create and modify singly and doubly linked lists with an intuitive interface. 
                      Add, remove, and rearrange nodes to understand list structures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Operation Animations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visualize different linked list operations including insertion, deletion, 
                      and traversal with step-by-step animations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Comparison with Arrays
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Compare linked lists with arrays to understand the advantages and disadvantages 
                      of each data structure for different operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Advanced List Types
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Explore circular linked lists and other specialized list structures 
                      with interactive examples and use cases.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Basic information about linked lists */}
              <div className="mt-8 card">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  About Linked Lists
                </h2>
                <div className="prose prose-blue max-w-none dark:prose-invert">
                  <p>
                    A linked list is a linear data structure where elements are stored in nodes, and each node 
                    points to the next node in the sequence. Unlike arrays, linked lists don't require 
                    contiguous memory allocation, making insertions and deletions more efficient.
                  </p>
                  
                  <h3>Types of Linked Lists</h3>
                  <ul>
                    <li><strong>Singly Linked List:</strong> Each node contains data and a pointer to the next node</li>
                    <li><strong>Doubly Linked List:</strong> Each node contains data and pointers to both the next and previous nodes</li>
                    <li><strong>Circular Linked List:</strong> The last node points back to the first node, creating a circle</li>
                  </ul>
                  
                  <h3>Common Operations</h3>
                  <ul>
                    <li><strong>Insertion:</strong> Adding a new node to the list (at the beginning, end, or middle)</li>
                    <li><strong>Deletion:</strong> Removing a node from the list</li>
                    <li><strong>Traversal:</strong> Visiting all nodes in the list</li>
                    <li><strong>Search:</strong> Finding a specific node in the list</li>
                    <li><strong>Reversal:</strong> Reversing the order of nodes in the list</li>
                  </ul>
                  
                  <h3>Time Complexity</h3>
                  <p>
                    For a linked list, the time complexity for common operations is:
                  </p>
                  <ul>
                    <li>Access: O(n) - Must traverse from the head</li>
                    <li>Search: O(n) - Must traverse from the head</li>
                    <li>Insertion at beginning: O(1)</li>
                    <li>Insertion at end: O(n) for singly linked list, O(1) for doubly linked list with tail pointer</li>
                    <li>Insertion at middle: O(n) to find position, then O(1) to insert</li>
                    <li>Deletion: O(n) to find position, then O(1) to delete</li>
                  </ul>
                  
                  <h3>Advantages and Disadvantages</h3>
                  <p><strong>Advantages:</strong></p>
                  <ul>
                    <li>Dynamic size - can grow and shrink during execution</li>
                    <li>Efficient insertions and deletions</li>
                    <li>No need for contiguous memory allocation</li>
                  </ul>
                  
                  <p><strong>Disadvantages:</strong></p>
                  <ul>
                    <li>Random access is not allowed - must traverse from the beginning</li>
                    <li>Extra memory for pointers</li>
                    <li>Not cache-friendly due to non-contiguous memory allocation</li>
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