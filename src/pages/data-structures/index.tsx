import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

type DataStructure = {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: {
    timeComplexity: string;
    spaceComplexity: string;
  };
  icon: React.ReactNode;
};

const dataStructures: DataStructure[] = [
  {
    id: 'binary-trees',
    name: 'Binary Trees',
    description: 'A tree data structure in which each node has at most two children, referred to as the left child and the right child.',
    category: 'Trees',
    complexity: {
      timeComplexity: 'O(log n) for search, insert, delete (balanced)',
      spaceComplexity: 'O(n)',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 'hash-tables',
    name: 'Hash Tables',
    description: 'A data structure that implements an associative array abstract data type, a structure that can map keys to values.',
    category: 'Arrays',
    complexity: {
      timeComplexity: 'O(1) average for search, insert, delete',
      spaceComplexity: 'O(n)',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    description: 'A linear collection of data elements whose order is not given by their physical placement in memory.',
    category: 'Linear',
    complexity: {
      timeComplexity: 'O(n) for search, O(1) for insert/delete at known position',
      spaceComplexity: 'O(n)',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'A non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.',
    category: 'Non-Linear',
    complexity: {
      timeComplexity: 'Varies by operation and implementation',
      spaceComplexity: 'O(V + E) where V is vertices and E is edges',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const categories = [...new Set(dataStructures.map(ds => ds.category))];

export default function DataStructuresPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredDataStructures = dataStructures.filter(ds => {
    if (selectedCategory && ds.category !== selectedCategory) return false;
    return true;
  });

  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Data Structures
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              {/* Filters */}
              <div className="mb-8">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Data Structures list */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDataStructures.map((dataStructure, index) => (
                  <motion.div
                    key={dataStructure.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href={`/data-structures/${dataStructure.id}`} className="block hover:no-underline">
                      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 bg-secondary-500 rounded-md p-3">
                              <div className="h-6 w-6 text-white">{dataStructure.icon}</div>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                  {dataStructure.category}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                                    {dataStructure.name}
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {dataStructure.description}
                            </p>
                          </div>
                          <div className="mt-4">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              <span className="font-medium">Time Complexity:</span> {dataStructure.complexity.timeComplexity}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              <span className="font-medium">Space Complexity:</span> {dataStructure.complexity.spaceComplexity}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6">
                          <div className="text-sm">
                            <span className="font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-500">
                              Explore visualization <span aria-hidden="true">&rarr;</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredDataStructures.length === 0 && (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No data structures found</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Try changing your filters or check back later for new data structures.
                  </p>
                </div>
              )}

              {/* Coming Soon section */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      We're working on adding more data structure visualizations. Stay tuned for:
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
                      <li>Heaps</li>
                      <li>Stacks and Queues</li>
                      <li>AVL Trees</li>
                      <li>Red-Black Trees</li>
                      <li>Tries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 