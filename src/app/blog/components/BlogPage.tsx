'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import React from 'react';
import { blogPosts, categories } from './blogData';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />

      <main className="lg:ml-80">
        {/* Header Section */}
        <section className="paddingX py-12 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 dark:from-primary/10 dark:via-purple-500/10 dark:to-pink-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="mb-4">Blog</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Insights, tutorials, and thoughts on frontend development, React, performance optimization, and modern web architecture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="paddingX py-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="paddingX py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.id}`}>
                    {/* Post Header */}
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} relative flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-white text-center px-6">
                        <div className="text-sm font-semibold mb-2">{post.category}</div>
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span>📅 {post.date}</span>
                        <span>⏱️ {post.readTime}</span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-primary font-semibold flex items-center gap-2">
                        Read More <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default BlogPage;