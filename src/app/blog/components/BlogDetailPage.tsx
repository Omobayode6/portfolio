'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import React from 'react';
import { getBlogPost, getRelatedPosts } from './blogData';

// Enhanced Markdown renderer component with better formatting
const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = '';
  let inList = false;
  let listItems: string[] = [];
  let listStartIndex = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${listStartIndex}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const parseInline = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let current = '';
    let i = 0;
    let keyCounter = 0;

    while (i < text.length) {
      // Bold text
      if (text[i] === '*' && text[i + 1] === '*') {
        if (current) {
          parts.push(current);
          current = '';
        }
        const endIndex = text.indexOf('**', i + 2);
        if (endIndex !== -1) {
          parts.push(
            <strong key={`bold-${keyCounter++}`} className="font-bold text-gray-900 dark:text-white">
              {text.slice(i + 2, endIndex)}
            </strong>
          );
          i = endIndex + 2;
          continue;
        }
      }

      // Inline code
      if (text[i] === '`' && text[i - 1] !== '`' && text[i + 1] !== '`') {
        if (current) {
          parts.push(current);
          current = '';
        }
        const endIndex = text.indexOf('`', i + 1);
        if (endIndex !== -1) {
          parts.push(
            <code key={`code-${keyCounter++}`} className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm font-mono text-primary">
              {text.slice(i + 1, endIndex)}
            </code>
          );
          i = endIndex + 1;
          continue;
        }
      }

      current += text[i];
      i++;
    }

    if (current) {
      parts.push(current);
    }

    return parts;
  };

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        flushList();
        elements.push(
          <pre key={`code-${index}`} className="bg-gray-900 text-gray-100 dark:bg-gray-950 rounded-xl p-6 overflow-x-auto my-8 border border-gray-700">
            <code className={`language-${codeBlockLang} text-sm leading-relaxed`}>
              {codeBlockContent.join('\n')}
            </code>
          </pre>
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        flushList();
        codeBlockLang = line.slice(3).trim();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Handle headers
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={index} className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">
          {line.slice(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white">
          {line.slice(4)}
        </h3>
      );
      return;
    }
    if (line.startsWith('#### ')) {
      flushList();
      elements.push(
        <h4 key={index} className="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
          {line.slice(5)}
        </h4>
      );
      return;
    }

    // Handle lists
    if (line.match(/^\d+\.\s/) || line.startsWith('- ')) {
      if (!inList) {
        inList = true;
        listStartIndex = index;
      }
      const item = line.replace(/^\d+\.\s/, '').replace(/^-\s/, '');
      listItems.push(item);
      return;
    } else if (inList) {
      flushList();
    }

    // Empty lines
    if (!line.trim()) {
      return;
    }

    // Paragraphs
    elements.push(
      <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
        {parseInline(line)}
      </p>
    );
  });

  // Flush any remaining list
  flushList();

  return <div className="space-y-1">{elements}</div>;
};

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Sidebar />
        <main className="lg:ml-80 paddingX py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/blog" className="text-primary hover:underline text-lg">
              ← Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />

      <main className="lg:ml-80">
        {/* Header Section */}
        <section className={`paddingX py-20 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 mb-6 hover:underline text-white/90 hover:text-white transition-colors mr-4"
              >
                ← Back to Blog
              </Link>
              
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>
              
              <h1 className="mb-6 text-white text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  📅 {post.date}
                </span>
                <span className="flex items-center gap-2">
                  ⏱️ {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="paddingX py-16">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <MarkdownContent content={post.content} />
            </motion.article>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Written by Omobayode Festus</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Senior Frontend Engineer with 5+ years of experience building scalable web applications.
                Passionate about React, performance optimization, and modern web architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/omobayode-osinubi-7a564a189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:omobayode93@gmail.com"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="paddingX py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className={`h-32 bg-gradient-to-br ${relatedPost.gradient}`}></div>
                      <div className="p-6">
                        <div className="text-xs font-semibold text-primary mb-2">
                          {relatedPost.category}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                          {relatedPost.title}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default BlogDetailPage;