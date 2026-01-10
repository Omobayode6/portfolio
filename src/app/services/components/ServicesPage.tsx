'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState<'hourly' | 'project'>('project');

  const services = [
    {
      title: 'Custom Web Application Development',
      description: 'Build scalable, high-performance web applications from scratch using React, Next.js, and TypeScript.',
      features: [
        'Modern React/Next.js architecture',
        'TypeScript implementation',
        'State management (Redux/Zustand)',
        'API integration',
        'Responsive design',
        'Performance optimization'
      ],
      hourlyRate: '$10-20',
      projectRate: '$3,000-6,000',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Architecture & Code Review',
      description: 'Comprehensive architecture design, code audits, and optimization recommendations for existing projects.',
      features: [
        'Architecture design & review',
        'Code quality assessment',
        'Performance audit',
        'Best practices implementation',
        'Technical documentation',
        'Team training sessions'
      ],
      hourlyRate: '$15-30',
      projectRate: '$1,000-3,000',
      icon: '🏗️',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'UI/UX Implementation',
      description: 'Transform designs into pixel-perfect, accessible, and responsive user interfaces.',
      features: [
        'Figma to code conversion',
        'Component library development',
        'Responsive design implementation',
        'Accessibility (WCAG) compliance',
        'Animation & micro-interactions',
        'Cross-browser compatibility'
      ],
      hourlyRate: '$8-15',
      projectRate: '$800-1,000',
      icon: '🎨',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Performance Optimization',
      description: 'Improve load times, Core Web Vitals, and overall application performance.',
      features: [
        'Performance auditing',
        'Code splitting & lazy loading',
        'Image & asset optimization',
        'Caching strategies',
        'Bundle size reduction',
        'SEO optimization'
      ],
      hourlyRate: '$15-30',
      projectRate: '$900-1,500',
      icon: '⚡',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Build robust e-commerce platforms with payment integration and inventory management.',
      features: [
        'Shopping cart implementation',
        'Payment gateway integration',
        'Product catalog management',
        'Order management system',
        'User authentication',
        'Admin dashboard'
      ],
      hourlyRate: '$15-25',
      projectRate: '$5,000-10,000',
      icon: '🛒',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Progressive Web Apps (PWA)',
      description: 'Convert websites into installable, offline-capable progressive web applications.',
      features: [
        'Service worker implementation',
        'Offline functionality',
        'Push notifications',
        'App manifest configuration',
        'Cache strategies',
        'Install prompt optimization'
      ],
      hourlyRate: '$15-35',
      projectRate: '$3,500-5,000',
      icon: '📱',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'CI/CD & DevOps Setup',
      description: 'Automated deployment pipelines and cloud infrastructure setup for frontend applications.',
      features: [
        'GitHub Actions setup',
        'AWS/Azure deployment',
        'Docker containerization',
        'Environment configuration',
        'Automated testing pipeline',
        'Monitoring & logging setup'
      ],
      hourlyRate: '$15-30',
      projectRate: '$900-1,500',
      icon: '🚀',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'API Integration & Development',
      description: 'Connect frontend applications with RESTful APIs, GraphQL, and third-party services.',
      features: [
        'RESTful API integration',
        'GraphQL implementation',
        'Third-party API connections',
        'Authentication & authorization',
        'Error handling',
        'API documentation'
      ],
      hourlyRate: '$10-20',
      projectRate: '$1,000-6,000',
      icon: '🔌',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Component Library Development',
      description: 'Build reusable, documented component libraries using Storybook and design systems.',
      features: [
        'Design system implementation',
        'Component library creation',
        'Storybook documentation',
        'TypeScript definitions',
        'Theme customization',
        'NPM package publishing'
      ],
      hourlyRate: '$15-30',
      projectRate: '$900-2,000',
      icon: '📦',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Technical Consultation & Mentoring',
      description: 'One-on-one technical guidance, code reviews, and team mentoring sessions.',
      features: [
        '1-on-1 consultation sessions',
        'Technical decision guidance',
        'Code review & feedback',
        'Team training workshops',
        'Career development advice',
        'Tech stack recommendations'
      ],
      hourlyRate: '$20-40',
      projectRate: '$500-1,000',
      icon: '👨‍🏫',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Migration & Modernization',
      description: 'Migrate legacy applications to modern frameworks and update tech stacks.',
      features: [
        'Framework migration (React/Next.js)',
        'JavaScript to TypeScript conversion',
        'Legacy code refactoring',
        'Dependency updates',
        'Testing migration',
        'Documentation updates'
      ],
      hourlyRate: '$20-40',
      projectRate: '$1,000-2,500',
      icon: '🔄',
      gradient: 'from-sky-500 to-blue-500'
    },
    {
      title: 'SaaS Dashboard Development',
      description: 'Build comprehensive admin dashboards and analytics platforms for SaaS products.',
      features: [
        'Data visualization (charts/graphs)',
        'Real-time updates',
        'User management interface',
        'Role-based access control',
        'Export & reporting features',
        'Analytics integration'
      ],
      hourlyRate: '$15-35',
      projectRate: '$3,000-6,000',
      icon: '📊',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and MVPs',
      price: '$2,500',
      duration: '4-12 weeks',
      features: [
        'Up to 5 pages/components',
        'Responsive design',
        'Basic SEO setup',
        'Performance optimization',
        '2 rounds of revisions',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$7,500',
      duration: '12-24 weeks',
      features: [
        'Up to 15 pages/components',
        'Advanced UI/UX implementation',
        'API integration',
        'State management',
        'Testing setup',
        'CI/CD pipeline',
        '4 rounds of revisions',
        '60 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For complex, large-scale applications',
      price: '$15,000+',
      duration: '24-53 weeks',
      features: [
        'Unlimited pages/components',
        'Custom architecture',
        'Advanced performance optimization',
        'Comprehensive testing',
        'Documentation',
        'Team training',
        'Unlimited revisions',
        '90 days support',
        'Ongoing maintenance available'
      ],
      popular: false
    }
  ];

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
              <h1 className="mb-4">Services & Pricing</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Professional frontend engineering services tailored to your needs. From custom web applications to performance optimization and technical consultation.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-lg">
                <button
                  onClick={() => setBillingCycle('hourly')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'hourly'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Hourly Rate
                </button>
                <button
                  onClick={() => setBillingCycle('project')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'project'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Project-Based
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="paddingX py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-center mb-12">Services Offered</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Service Header */}
                    <div className={`h-24 bg-gradient-to-br ${service.gradient} relative flex items-center justify-center`}>
                      <span className="text-5xl">{service.icon}</span>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {service.description}
                      </p>

                      {/* Pricing */}
                      <div className="mb-4 p-3 bg-primary/5 dark:bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {billingCycle === 'hourly' ? service.hourlyRate : service.projectRate}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {billingCycle === 'hourly' ? 'per hour' : 'per project'}
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Package Pricing */}
        <section className="paddingX py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-4">Package Pricing</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Not sure which service you need? Choose a package based on your project scope.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative ${
                      pkg.popular ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary mb-1">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {pkg.duration}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:omobayode93@gmail.com"
                      className={`block w-full py-3 text-center rounded-lg font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-primary text-white shadow-lg hover:shadow-xl'
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      Get Started
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="paddingX py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center mb-12">How We Work</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'We discuss your project requirements, goals, and timeline.',
                    icon: '🔍'
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'I create a detailed project plan with milestones and deliverables.',
                    icon: '📋'
                  },
                  {
                    step: '03',
                    title: 'Development',
                    description: 'Building your solution with regular updates and demos.',
                    icon: '⚙️'
                  },
                  {
                    step: '04',
                    title: 'Delivery',
                    description: 'Final testing, deployment, and documentation handoff.',
                    icon: '🚀'
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                      {process.icon}
                    </div>
                    <div className="text-primary font-bold text-sm mb-2">STEP {process.step}</div>
                    <h4 className="font-bold mb-2">{process.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="paddingX py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 dark:from-primary/10 dark:via-purple-500/10 dark:to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let`s discuss your requirements and find the best solution for your needs. Free initial consultation available.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:omobayode93@gmail.com"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Portfolio
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;