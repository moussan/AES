import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GraphsPage() {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Graphs
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Visualize and understand graph data structures and algorithms
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
                    We're working on an interactive visualization for graphs. 
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
                      Interactive Graph Builder
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create and modify different types of graphs with an intuitive interface. 
                      Add, remove, and connect vertices to understand graph structures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Graph Traversal Algorithms
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visualize breadth-first search (BFS) and depth-first search (DFS) 
                      algorithms with step-by-step animations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Shortest Path Algorithms
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      See how Dijkstra's algorithm and Bellman-Ford algorithm find the 
                      shortest paths between vertices in weighted graphs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Minimum Spanning Trees
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understand how Kruskal's and Prim's algorithms find minimum 
                      spanning trees in connected, undirected graphs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Basic information about graphs */}
              <div className="mt-8 card">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  About Graphs
                </h2>
                <div className="prose prose-blue max-w-none dark:prose-invert">
                  <p>
                    A graph is a non-linear data structure consisting of vertices (or nodes) connected by edges. 
                    Graphs are used to represent networks of communication, data organization, computational 
                    devices, flow of computation, and much more.
                  </p>
                  
                  <h3>Types of Graphs</h3>
                  <ul>
                    <li><strong>Directed Graph (Digraph):</strong> Edges have a direction, indicating a one-way relationship</li>
                    <li><strong>Undirected Graph:</strong> Edges have no direction, indicating a two-way relationship</li>
                    <li><strong>Weighted Graph:</strong> Edges have weights or costs associated with them</li>
                    <li><strong>Unweighted Graph:</strong> Edges have no weights or costs</li>
                    <li><strong>Cyclic Graph:</strong> Contains at least one cycle (a path that starts and ends at the same vertex)</li>
                    <li><strong>Acyclic Graph:</strong> Contains no cycles</li>
                    <li><strong>Connected Graph:</strong> There is a path between every pair of vertices</li>
                    <li><strong>Disconnected Graph:</strong> There are some vertices that cannot be reached from others</li>
                  </ul>
                  
                  <h3>Graph Representations</h3>
                  <ul>
                    <li><strong>Adjacency Matrix:</strong> A 2D array where matrix[i][j] represents an edge from vertex i to vertex j</li>
                    <li><strong>Adjacency List:</strong> An array of linked lists where each list represents the vertices adjacent to a particular vertex</li>
                    <li><strong>Edge List:</strong> A list of all edges in the graph</li>
                  </ul>
                  
                  <h3>Common Graph Algorithms</h3>
                  <ul>
                    <li><strong>Breadth-First Search (BFS):</strong> Explores all vertices at the present depth before moving on to vertices at the next depth level</li>
                    <li><strong>Depth-First Search (DFS):</strong> Explores as far as possible along each branch before backtracking</li>
                    <li><strong>Dijkstra's Algorithm:</strong> Finds the shortest paths from a source vertex to all other vertices in a weighted graph with non-negative weights</li>
                    <li><strong>Bellman-Ford Algorithm:</strong> Finds the shortest paths from a source vertex to all other vertices in a weighted graph, even with negative weights</li>
                    <li><strong>Kruskal's Algorithm:</strong> Finds a minimum spanning tree for a connected, undirected graph</li>
                    <li><strong>Prim's Algorithm:</strong> Finds a minimum spanning tree for a connected, undirected graph</li>
                    <li><strong>Topological Sort:</strong> Linear ordering of vertices such that for every directed edge (u, v), vertex u comes before v in the ordering</li>
                  </ul>
                  
                  <h3>Applications of Graphs</h3>
                  <ul>
                    <li>Social networks</li>
                    <li>Web page ranking</li>
                    <li>GPS and mapping</li>
                    <li>Network routing</li>
                    <li>Scheduling problems</li>
                    <li>Dependency resolution</li>
                    <li>Circuit design</li>
                    <li>Compiler optimization</li>
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