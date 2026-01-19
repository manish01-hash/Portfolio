import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, ChevronRight } from 'lucide-react';
import { NAVIGATION_LINKS, PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl shadow-black/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <div 
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-primary/20 blur-lg rounded-full animate-pulse"></div>
              <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-cyber-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xl lg:text-2xl tracking-tight text-white leading-tight">
                MANISH<span className="text-cyber-primary">.SEC</span>
              </span>
              <span className="text-xs text-gray-400 font-mono tracking-wider">
                Cybersecurity
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyber-primary bg-cyber-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center text-sm font-medium tracking-wide">
                  {link.name}
                  <ChevronRight className={`ml-1 h-4 w-4 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'opacity-100' : 'opacity-0 -translate-x-2'
                  }`} />
                </span>
                
                {/* Active indicator */}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyber-primary rounded-full" />
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-primary/0 via-cyber-primary/5 to-cyber-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
            
            {/* Resume Button */}
            <a
              href="/Resume.pdf"
              download
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center text-sm">
                Resume
                <Terminal className="ml-2 h-4 w-4" />
              </span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="/Resume.pdf"
              download
              className="px-4 py-2 bg-cyber-primary text-black font-semibold rounded-lg text-sm"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isOpen 
                  ? 'bg-cyber-primary text-black' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between group px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyber-primary bg-cyber-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-medium">{link.name}</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                  activeSection === link.href.substring(1) ? 'translate-x-0' : '-translate-x-2 opacity-0'
                }`} />
              </a>
            ))}
            
            {/* Contact CTA in mobile */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-cyber-primary/30 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Get In Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
