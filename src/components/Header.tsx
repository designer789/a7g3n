"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
/**
 * Interface for Header component props
 * @property className - Optional CSS class name for additional styling
 */
interface HeaderProps {
  className?: string;
}

/**
 * Header Component - Website's top navigation bar
 * 
 * Features brand logo, navigation links, and mobile menu button
 * Responsive design with hamburger menu on smaller screens
 * Animated with Framer Motion for smooth interactions
 * 
 * @param className - Optional CSS class name for additional styling
 */
export function Header({ className = '' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for navigation items
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Navigation items array for mapping
  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#action-examples", label: "Action Examples" },
    { href: "#token-utility", label: "Token Utility" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#join", label: "Join" },
    { href: "#faq", label: "FAQ" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 w-full py-6 bg-black text-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Brand logo */}
          <Link href="/" className="flex items-center justify-start gap-2 text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors font-[family-name:var(--font-aldrich)]">
          <Image src="/icon.png" alt="A7G3N" width={48} height={48} />
            A7G3N
          </Link>
       
        
        {/* Desktop navigation menu - shown on medium screens and up */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick(item.href)}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </nav>
        
        {/* Mobile menu button and dropdown */}
        <div className="md:hidden">
          <motion.button 
            className="relative z-50"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white"
            />
          </motion.button>

          {/* Mobile menu dropdown */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              height: isOpen ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  variants={navItemVariants}
                  className="py-2"
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header; 