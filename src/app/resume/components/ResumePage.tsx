'use client';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');

  const experiences = [
    {
      company: 'GiriToday',
      role: 'Senior Frontend Software Engineer',
      period: 'Jan. 2025 – Present',
      location: 'Remote',
      achievements: [
        'Designed and implemented a data-first architecture to efficiently manage and scale large volumes of content within the marketplace application',
        'Implemented Incremental Static Regeneration (ISR) to optimize data fetching, enabling instant page loading and improved SEO performance',
        'Led the frontend team in maintaining application stability and uptime, aligning technical priorities with business goals',
        'Led weekly Friday demo meetings with stakeholders to present progress and communicate challenges',
        'Developed responsive web experiences, mobile-first apps, and PWAs with a focus on accessibility'
      ]
    },
    {
      company: 'Orange Invent House',
      role: 'Senior Frontend Software Engineer',
      period: 'Mar. 2022 – Dec. 2024',
      location: 'Remote',
      achievements: [
        'Spearheaded the frontend team, mentoring junior developers and managing repositories, secrets, and deployments',
        'Developed applications using Data-First Design to ensure performance, scalability, and dynamism',
        'Engineered and implemented automated CI/CD pipelines for seamless deployment to AWS infrastructure',
        'Optimized web application for maximum performance, speed, and scalability',
        'Doubled as the DevOps Engineer managing cloud resources and infrastructure'
      ]
    },
    {
      company: 'Newage Solutions',
      role: 'Senior Frontend Software Engineer',
      period: 'Jan. 2024 – Jul. 2024',
      location: 'Hybrid',
      achievements: [
        'Built several software solutions including Invidux (property tokenization), Adin LMS, Edurex LMS, and Exam proctoring',
        'Built reusable code components for the organization',
        'Mentored junior developers and interns',
        'Implemented security and data protection measures',
        'Stayed up to date with latest technologies and React Server Components (RSC) ecosystem'
      ]
    },
    {
      company: 'Prioclen Consulting',
      role: 'Frontend Software Engineer',
      period: 'Feb. 2023 – Jan. 2024',
      location: 'Remote',
      achievements: [
        'Built user verification and authentication Web Application – amala.cloud',
        'Developed CI/CD pipeline to deploy React TypeScript app to Azure',
        'Ensured web security best practices in development and deployment',
        'Implemented cloud infrastructures on Azure and handled website hosting',
        'Developed Progressive Web App (PWA) with optimized mobile responsiveness'
      ]
    }
  ];

  const education = [
    {
      institution: 'AltSchool Africa',
      degree: 'Diploma in Engineering',
      field: 'Cloud Engineering',
      period: 'June 2023',
      location: 'Lagos, Nigeria'
    },
    {
      institution: 'Federal University of Technology',
      degree: 'Bachelor of Technology',
      field: 'Physics Electronics',
      period: 'Nov. 2018',
      location: 'Akure, Nigeria',
      grade: 'Second Class Upper Division (4.25/5.0)'
    }
  ];

  const certifications = [
    'Web Development Bootcamp – UDEMY',
    'The Full-Stack JavaScript Bootcamp – GOMYCODE',
    'Technical Product Management - UDEMY'
  ];

  const technicalSkills = [
    { category: 'Version Control & CI/CD', items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipeline'] },
    { category: 'Languages', items: ['JavaScript', 'TypeScript'] },
    { category: 'Frontend Frameworks', items: ['React.js', 'Next.js'] },
    { category: 'State Management', items: ['React Query', 'Redux', 'Zustand'] },
    { category: 'UI Libraries', items: ['Shadcn', 'Material-UI', 'Tailwind CSS', 'SASS'] },
    { category: 'Testing', items: ['Jest', 'Cypress'] },
    { category: 'API Development', items: ['RESTful APIs', 'GraphQL'] },
    { category: 'Accessibility', items: ['React-Aria', 'WCAG'] },
    { category: 'Internationalization', items: ['react-i18next'] },
    { category: 'Advanced', items: ['PWA', 'WebAssembly'] },
    { category: 'CMS', items: ['Directus'] },
    { category: 'Design Tools', items: ['Canva', 'Figma'] },
    { category: 'Project Management', items: ['Jira', 'Monday.com', 'Asana', 'ClickUp', 'Trello'] }
  ];

  const softSkills = [
    'Critical Thinking',
    'Problem-Solving',
    'Decision Making',
    'Team Player',
    'Emotional Intelligence',
    'Leadership',
    'Mentoring'
  ];

  const handleDownload = () => {
    // This would trigger the PDF download
    // You'll need to add your actual PDF file to the public folder
    const link = document.createElement('a');
    link.href = '/Omobayode_Osinubi_Resume.pdf';
    link.download = 'Omobayode_Osinubi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      {/* Main Content */}
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
              <h1 className="mb-4">Resume</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Senior Frontend Engineer with 5+ years crafting high-performance, scalable web applications
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>📥</span>
                  Download Resume PDF
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:omobayode93@gmail.com"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <span>📧</span>
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="paddingX py-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>📍</span>
                <span>Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>📧</span>
                <a href="mailto:omobayode93@gmail.com" className="hover:text-primary transition-colors">
                  omobayode93@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>📱</span>
                <span>+234 813 639 4817</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="paddingX py-6 bg-gray-50 dark:bg-gray-900/50 sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {(['experience', 'education', 'skills'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="paddingX py-12">
          <div className="max-w-6xl mx-auto">
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-8">Work Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.period}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <span className="text-primary mt-1 flex-shrink-0">▪</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-8">Education & Certifications</h2>
                
                {/* Education */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {edu.institution}
                            </h4>
                            <p className="text-lg text-primary font-semibold mb-1">{edu.degree}</p>
                            <p className="text-gray-700 dark:text-gray-300">{edu.field}</p>
                            {edu.grade && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.grade}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.period}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{edu.location}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg"
                  >
                    <ul className="space-y-3">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="text-primary mt-1 flex-shrink-0">🎓</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Volunteer Experience */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Volunteer Experience</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg"
                  >
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-primary mt-1 flex-shrink-0">▪</span>
                        <span><strong>Gender President</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-primary mt-1 flex-shrink-0">▪</span>
                        <span><strong>Eden President</strong></span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-8">Skills & Technologies</h2>
                
                {/* Technical Skills */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {technicalSkills.map((skillGroup, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <h4 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-primary/10 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg"
                  >
                    <div className="flex flex-wrap gap-3">
                      {softSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full text-sm font-semibold shadow-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="paddingX py-16 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 dark:from-primary/10 dark:via-purple-500/10 dark:to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Interested in Working Together?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, challenging projects, and innovative ideas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Full Resume
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:omobayode93@gmail.com"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get In Touch
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

export default ResumePage;