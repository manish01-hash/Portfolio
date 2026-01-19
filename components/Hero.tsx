import React from 'react';
import { ArrowRight, Download, Lock, ShieldCheck, Terminal, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name || '')}&background=1a1a1a&color=10b981&size=512`;
  };

  // Skills data
  const skills = [
    "Network Security",
    "Ethical Hacking", 
    "Cloud Security",
    "Threat Analysis"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Binary Code Animation - Right Side */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-primary whitespace-pre animate-scroll">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="tracking-widest text-right pr-8">
                  01101101 01100001 01101110 01101001 01110011 01101000 00100000 01100100 01101000 01100001 01111001 01100111 01110101 01100100 01100101
                </div>
              ))}
            </div>
          </div>
          
          {/* Left Side Binary */}
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-accent whitespace-pre animate-scroll-reverse">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="tracking-widest pl-8">
                  01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001 00100000 01010000 01010010 01001111 01000110 01000101 01010011 01010011 01001001 01001111 01001110 01000001 01001100
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-8"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-primary"></span>
              </div>
              <span className="text-sm font-mono text-cyber-primary tracking-wider">
                Currently seeking internship opportunities
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
                {PERSONAL_INFO.name}
              </span>
              <span className="block mt-4 text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                {PERSONAL_INFO.title}
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 mb-8"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
              
              <div className="inline-block bg-gray-900/80 backdrop-blur-sm border-l-4 border-cyber-primary px-6 py-4 rounded-r-lg">
                <p className="text-cyber-primary font-mono text-sm md:text-base tracking-wide">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyber-primary/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </a>

              <a
                href="/Resume.pdf"
                download
                className="group flex items-center justify-center px-8 py-4 border border-cyber-primary/40 text-white font-medium rounded-lg bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:border-cyber-primary/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyber-primary/20"
              >
                <span>View Resume</span>
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://github.com/manish01-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-cyber-primary hover:bg-gray-800/80 transition-all duration-300 group hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6 text-gray-400 group-hover:text-cyber-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.146 20.115 22 16.379 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/manishdhaygude/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300 group hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <div className="h-4 w-px bg-gray-700" />
              <span className="text-sm text-gray-400 font-mono tracking-wide">
                Connect with me
              </span>
            </motion.div>
          </div>

          {/* Right Column - Terminal Section */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main Terminal Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-6 lg:p-8 shadow-2xl shadow-black/50">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-400 font-mono ml-3 tracking-wide">terminal</span>
                  </div>
                  <Terminal className="h-5 w-5 text-cyber-primary/60" />
                </div>
                
                {/* Terminal Content */}
                <div className="font-mono space-y-4 text-sm lg:text-base">
                  {/* whoami command */}
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400 flex-shrink-0">$</span>
                    <span className="text-cyber-primary">whoami</span>
                  </div>
                  <div className="text-gray-300 ml-6">{PERSONAL_INFO.name.split(' ')[0].toLowerCase()}</div>
                  
                  {/* Skills command */}
                  <div className="flex items-start space-x-2 mt-6">
                    <span className="text-green-400 flex-shrink-0">$</span>
                    <span className="text-cyber-primary">cat skills.txt</span>
                  </div>
                  
                  {/* Skills list */}
                  <div className="ml-6 mt-3 space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2 group">
                        <span className="text-cyber-accent">›</span>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Cursor */}
                  <div className="flex items-center space-x-2 mt-8">
                    <span className="text-green-400">$</span>
                    <div className="h-5 w-3 bg-cyber-primary animate-pulse"></div>
                  </div>
                </div>
                
                {/* Decorative Icons */}
                <div className="absolute top-4 right-4">
                  <ShieldCheck className="h-6 w-6 text-cyber-primary/40" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Lock className="h-6 w-6 text-cyber-accent/40" />
                </div>
              </div>
              
              {/* Stats Bar */}
              <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-mono px-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>STATUS: ACTIVE</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>SECURE</span>
                  <span>ENCRYPTED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 font-mono mb-2 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyber-primary via-cyber-accent to-transparent animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
