import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component
 * Design: Sticky header with smooth scrolling to sections
 * Features: Mobile-responsive menu with smooth animations
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0e27]/95 to-[#0a0e27]/80 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
  href="#" 
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
  className="cursor-pointer inline-block hover:opacity-80 transition-opacity"
>
  <img 
    src="/MY-LOGO.png" 
    alt="Yasmine Ehab Logo" 
    className="w-12 h-12 rounded-full" 
  />
</a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll(item.href)}
                className="px-4 py-2 text-gray-300 hover:text-white font-inter text-sm transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover={{ x: 4 }}
                onClick={() => handleScroll(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg font-inter transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
