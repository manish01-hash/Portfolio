import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Shield, Github, Linkedin, Twitter, Instagram, Youtube, BookOpen, Lock, Code, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  // Generate binary data for background
  const binaryLines = Array.from({ length: 20 }).map((_, i) => 
    "01000110 01001111 01001111 01010100 01000101 01010010 00100000 01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001 00100000 01010000 01001111 01010010 01010100 01000110 01001111 01001100 01001001 01001111"
  );

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'x':
      case 'x (twitter)':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      case 'medium':
        return <BookOpen className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-gray-800 relative overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />
        
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyber-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px] animate-pulse delay-1000" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {binaryLines.map((line, i) => (
              <div key={`binary-${i}`} className="tracking-widest opacity-50">
                {line}
              </div>
            ))}
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo/Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-8 group"
          >
            <div className="p-3 bg-cyber-primary/10 rounded-xl border border-cyber-primary/30 group-hover:border-cyber-primary group-hover:bg-cyber-primary/20 transition-all duration-300">
              <Shield className="h-7 w-7 text-cyber-primary" />
            </div>
            <div>
              <span className="font-mono font-bold text-2xl text-white">
                MANISH
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-accent animate-gradient">
                  .SEC
                </span>
              </span>
              <p className="text-xs text-gray-500 font-mono mt-1">SECURE CYBERSECURITY PORTFOLIO</p>
            </div>
          </motion.div>
          
          {/* Security Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full">
              <Lock className="h-4 w-4 text-cyber-primary" />
              <span className="text-sm font-mono text-gray-300">
                <span className="text-cyber-primary">CONNECTION SECURE</span>
                <span className="mx-2">•</span>
                PORTFOLIO ENCRYPTED
              </span>
            </div>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  color: social.color || '#00ff88'
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300 
                }}
                className="p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyber-primary/50 hover:bg-gray-800/80 transition-all duration-300 group"
                aria-label={social.name}
              >
                <div className="relative">
                  {getSocialIcon(social.name)}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Copyright and Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span className="font-mono">BUILT WITH REACT & TAILWIND</span>
              </div>
              <div className="w-px h-4 bg-gray-800"></div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span className="font-mono">SECURE BY DESIGN</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All digital rights reserved.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-700 text-xs">
              <Heart className="h-3 w-3 text-red-500/70" />
              <span>Made with passion for cybersecurity</span>
              <span className="text-gray-800">•</span>
              <span>Version 1.0.0</span>
              <span className="text-gray-800">•</span>
              <span className="text-cyber-primary/70 font-mono">ENCRYPTED</span>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 mt-6 border-t border-gray-800/50">
              <a href="#about" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                ABOUT
              </a>
              <a href="#experience" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                EXPERIENCE
              </a>
              <a href="#skills" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                SKILLS
              </a>
              <a href="#projects" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                PROJECTS
              </a>
              <a href="#education" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                EDUCATION
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyber-primary text-xs font-mono transition-colors duration-300">
                CONTACT
              </a>
            </div>
            
            {/* Security Status */}
            <div className="mt-8 pt-8 border-t border-gray-800/30">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-900/10 border border-green-800/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-green-400">SYSTEM STATUS: SECURE</span>
                </div>
                <div className="w-px h-4 bg-green-800/30"></div>
                <span className="text-xs text-gray-500 font-mono">Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
    </footer>
  );
};

export default Footer;
