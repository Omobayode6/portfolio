'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SidebarProps {
  // No props needed anymore since we're using URL routing
}

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: '/', label: 'About Me', icon: '👤', path: '/' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼', badge: '6', path: '/portfolio' },
    { id: 'services', label: 'Services & Pricing', icon: '💰', path: '/services' },
    { id: 'resume', label: 'Resume', icon: '📄', path: '/resume' },
    { id: 'blog', label: 'Blog', icon: '📝', path: '/blog' }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/omobayode-osinubi-7a564a189/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/Omobayode6",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/omobayode6/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://web.facebook.com/omobayode6",
    },
  ];

  const handleNavigation = () => {
    setIsSidebarOpen(false);
  };

  // Check if current path matches menu item
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-4"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center text-2xl shadow-lg">
                👋
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold mb-1">Omobayode Festus</h2>
            <p className="text-gray-600 dark:text-gray-400">Senior Frontend Engineer</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 mb-6" />

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={handleNavigation}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded ${
                    isActive(item.path)
                      ? 'bg-white/20' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;