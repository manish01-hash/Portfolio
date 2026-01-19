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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px] animate-pulse delay-1000" />
        
        {/* Binary Code Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-primary whitespace-pre animate-scroll">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="tracking-widest">
                  01001001 00100000 01100001 01101101 00100000 01001101 01100001 01101110 01101001 01110011 01101000 00100000 01000100 01101000 01100001 01111001 01100111 01110101 01100100 01100101
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-8"
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
              
              <div className="inline-block bg-gray-900/50 backdrop-blur-sm border-l-4 border-cyber-primary px-6 py-4 rounded-r-lg">
                <p className="text-cyber-primary font-mono text-sm md:text-base tracking-wide">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyber-primary/30"
              >
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </a>

              <a
                href="/Resume.pdf"
                download
                className="group flex items-center justify-center px-8 py-4 border border-cyber-primary/30 text-white font-medium rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:border-cyber-primary/60"
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
                className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-cyber-primary hover:bg-gray-800/50 transition-all duration-300 group"
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
                className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-800/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <div className="h-4 w-px bg-gray-700" />
              <span className="text-sm text-gray-500 font-mono">
                Connect with me
              </span>
            </motion.div>
          </div>

          {/* Right Column - Placeholder for Image/Visual */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8">
                {/* Cybersecurity Visual Elements */}
                <div className="absolute top-4 right-4">
                  <ShieldCheck className="h-8 w-8 text-cyber-primary animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Lock className="h-8 w-8 text-cyber-accent" />
                </div>
                
                {/* Terminal-like display */}
                <div className="bg-gray-950 rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-500 font-mono ml-4">terminal</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-cyber-primary">
                      <span className="text-green-400">$</span> whoami
                    </div>
                    <div className="text-gray-300">{PERSONAL_INFO.name.split(' ')[0].toLowerCase()}</div>
                    <div className="text-cyber-primary mt-4">
                      <span className="text-green-400">$</span> cat skills.txt
                    </div>
                    <div className="text-gray-300 grid grid-cols-2 gap-2 mt-2">
                      <span className="text-cyber-accent">›</span> <span>Network Security</span>
                      <span className="text-cyber-accent">›</span> <span>Ethical Hacking</span>
                      <span className="text-cyber-accent">›</span> <span>Cloud Security</span>
                      <span className="text-cyber-accent">›</span> <span>Threat Analysis</span>
                    </div>
                    <div className="text-cyber-primary mt-4">
                      <span className="text-green-400">$</span> <span className="animate-pulse">█</span>
                    </div>
                  </div>
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
          <span className="text-xs text-gray-500 font-mono mb-2">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyber-primary to-transparent animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
