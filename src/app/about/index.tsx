'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const skills = [
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Zustand', category: 'State Management' },
    { name: 'React Query', category: 'State Management' },
    { name: 'Shadcn/UI', category: 'UI Libraries' },
    { name: 'Tailwind CSS', category: 'UI Libraries' },
    { name: 'Material-UI', category: 'UI Libraries' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' }
  ];

  const projects = [
    {
      title: 'Cross-Border E-Commerce Platform',
      description: 'Built full buyer/seller workflow for exporting products from Africa to US, UK, Canada, Europe',
      tech: ['Next.js', 'React Query', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Fintech Dashboard & Escrow System',
      description: 'High-performance dashboard for wallet operations, payments, and KYC',
      tech: ['React', 'Next.js', 'Zustand', 'Material-UI'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Identity Verification Platform',
      description: 'Secure multi-step verification system with document upload & admin approval',
      tech: ['Next.js', 'React Query', 'TypeScript'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real Estate Tokenization Dashboard',
      description: 'Manage fractional real estate investments with portfolio analytics',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'EdTech Learning Platform',
      description: 'Modular LMS interface with accessibility focus',
      tech: ['React', 'MUI', 'PWA'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Performance Optimization Suite',
      description: 'WebAssembly-powered tools for high-performance web applications',
      tech: ['React', 'WebAssembly', 'Next.js'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-80">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center paddingX py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 dark:from-primary/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: heroOpacity }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                👋 Available for Remote Opportunities
              </span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Senior Frontend Engineer
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
              React • Next.js • TypeScript
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Building High-Performance, Scalable Web Applications for fintech, e-commerce, identity verification, and education technology. Passionate about performance, clean code, and AI-assisted development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects →
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/omobayode-osinubi-7a564a189/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Connect on LinkedIn
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '5', label: 'Industries' },
                { value: '100%', label: 'Remote Ready' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="paddingX py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-12">About Me</h2>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    I&apos;m a <strong>Senior Frontend Engineer</strong> based in Lagos, Nigeria, with <strong>5+ years of experience</strong> building scalable, high-performance web applications.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My work spans <strong>fintech, escrow systems, cross-border e-commerce, identity verification, real-estate tokenization, and ed-tech</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I specialize in <strong>React, Next.js, TypeScript, Tailwind, Shadcn/UI, Redux, Zustand, and React Query</strong>, with a focus on component architecture, performance optimization, and AI-assisted workflows.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    One of my highlights: <strong>building a full buyer-side and seller-side e-commerce platform enabling cross-border exportation from Africa to the US, UK, Canada, and Europe</strong>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I&apos;m passionate about building solutions that scale globally and delivering measurable business impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="paddingX py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-12">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="text-xs text-primary font-semibold mb-2">{skill.category}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="paddingX py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-12">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="paddingX py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="mb-6">Let&apos;s Connect</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                I&apos;m open to senior frontend roles, remote opportunities, and collaboration. Reach out via:
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                <a
                  href="mailto:omobayode93@gmail.com"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-2xl">📧</span>
                  <span>omobayode93@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/omobayode-osinubi-7a564a189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/omobayode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-2xl">💻</span>
                  <span>GitHub</span>
                </a>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:omobayode93@gmail.com"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me →
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}