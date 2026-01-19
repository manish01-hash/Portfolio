import React from 'react';
import { ArrowRight, Download, Lock, ShieldCheck, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name || '')}&background=1a1a1a&color=10b981&size=512`;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-cyber-black pt-20">
      {/* Animated Background */}
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-grid-white/[0.02]" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-accent/10 blur-[120px]" />
  </div>

  {/* Content */}
  <div className="relative z-10 w-full px-6 lg:px-28 xl:px-36 pt-32">
    <div className="max-w-3xl">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-cyber-primary/10 border border-cyber-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-primary"></span>
            </span>
            <span className="text-xs sm:text-sm font-mono text-cyber-primary tracking-wide">Currently seeking internship opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary bg-300% animate-gradient font-sans tracking-tighter">
              {PERSONAL_INFO.name}
            </span>
            <span className="block mt-4 text-xl sm:text-2xl text-gray-400 font-light">
              {PERSONAL_INFO.title}
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-cyber-primary/80 font-mono text-sm md:text-base mb-8 border-l-2 border-cyber-primary/30 pl-4 py-2">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-start mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="group flex items-center justify-center px-8 py-3.5 bg-cyber-primary text-cyber-black font-medium rounded-lg hover:bg-cyber-accent transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyber-primary/20">
              <span>Get In Touch</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyber-primary hover:bg-cyber-primary/90 transition-all duration-200 group"
              >
                View Resume
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/manish01-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-gray-700 rounded-md text-white bg-gray-800/50 hover:bg-gray-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.146 20.115 22 16.379 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/manishdhaygude/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border border-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
        </div>
    </section>
  );
};

export default Hero;
