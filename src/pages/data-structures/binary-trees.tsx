import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BinaryTreesPage() {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Binary Trees
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Visualize and understand binary tree data structures and operations
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
                    We're working on an interactive visualization for binary trees. 
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
                      Interactive Tree Builder
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create and modify binary trees with an intuitive drag-and-drop interface. 
                      Add, remove, and rearrange nodes to understand tree structures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Traversal Animations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visualize different tree traversal algorithms including in-order, pre-order, 
                      post-order, and level-order traversals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Search and Insert Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      See how binary search trees perform search, insert, and delete operations 
                      with step-by-step animations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Tree Balancing
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Learn about balanced trees and watch how rebalancing operations like rotations 
                      work to maintain optimal tree height.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Basic information about binary trees */}
              <div className="mt-8 card">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  About Binary Trees
                </h2>
                <div className="prose prose-blue max-w-none dark:prose-invert">
                  <p>
                    A binary tree is a tree data structure in which each node has at most two children, 
                    referred to as the left child and the right child. Binary trees are used to implement 
                    binary search trees and binary heaps, and are used for efficient searching and sorting.
                  </p>
                  
                  <h3>Types of Binary Trees</h3>
                  <ul>
                    <li><strong>Full Binary Tree:</strong> Every node has 0 or 2 children</li>
                    <li><strong>Complete Binary Tree:</strong> All levels are filled except possibly the last level, which is filled from left to right</li>
                    <li><strong>Perfect Binary Tree:</strong> All internal nodes have two children and all leaf nodes are at the same level</li>
                    <li><strong>Balanced Binary Tree:</strong> The height of the left and right subtrees of any node differ by at most one</li>
                    <li><strong>Binary Search Tree (BST):</strong> For each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater</li>
                  </ul>
                  
                  <h3>Common Operations</h3>
                  <ul>
                    <li><strong>Insertion:</strong> Adding a new node to the tree</li>
                    <li><strong>Deletion:</strong> Removing a node from the tree</li>
                    <li><strong>Traversal:</strong> Visiting all nodes in the tree</li>
                    <li><strong>Search:</strong> Finding a specific node in the tree</li>
                    <li><strong>Height/Depth:</strong> Finding the maximum depth of the tree</li>
                  </ul>
                  
                  <h3>Time Complexity</h3>
                  <p>
                    For a balanced binary search tree, the time complexity for common operations is:
                  </p>
                  <ul>
                    <li>Search: O(log n)</li>
                    <li>Insert: O(log n)</li>
                    <li>Delete: O(log n)</li>
                    <li>Traversal: O(n)</li>
                  </ul>
                  <p>
                    However, in the worst case (a completely unbalanced tree), these operations can degrade to O(n).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 