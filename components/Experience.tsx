import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, ExternalLink, Terminal, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyber-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyber-accent/5 blur-[120px]" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01001000 01011001 01000100 01010010 01000001 00100000 01010100 01001111 01001111 01001100
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-accent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-cyber-primary mb-6"></div>
          <p className="text-gray-400">
            My professional journey and hands-on project experience in cybersecurity
          </p>
        </motion.div>

        {/* Single Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden"
        >
          {/* Card Header */}
          <div className="p-8 border-b border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Cyber Security and Ethical Hacking Intern
                </h3>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="font-medium">Concent.ai</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-cyber-primary/80" />
                    <span className="text-sm">Jul 2023 - Aug 2023 · 1 months</span>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/20 rounded-full">
                <Terminal className="w-4 h-4 text-cyber-primary" />
                <span className="text-sm font-medium text-cyber-primary">Virtual Internship</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Virtual • Remote</span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8">
            {/* Project Overview */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-cyber-primary" />
                <h4 className="text-lg font-bold text-white">PROJECT OVERVIEW</h4>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyber-primary mt-1">•</span>
                  <span className="text-gray-300">Completed a virtual project-based internship focused on penetration testing and password security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-primary mt-1">•</span>
                  <span className="text-gray-300">Specialized in using the Hydra tool for comprehensive brute-force attack simulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-primary mt-1">•</span>
                  <span className="text-gray-300">Conducted password strength testing and vulnerability assessments on test systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-primary mt-1">•</span>
                  <span className="text-gray-300">Analyzed attack methodologies to understand security weaknesses in authentication systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyber-primary mt-1">•</span>
                  <span className="text-gray-300">Documented findings and provided recommendations for improving password security</span>
                </li>
              </ul>
            </div>

            {/* Primary Tool Used */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-cyber-accent" />
                <h4 className="text-lg font-bold text-white">PRIMARY TOOL USED</h4>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 rounded-lg font-medium">
                  Hydra Tool
                </span>
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg font-medium">
                  Password Security
                </span>
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg font-medium">
                  Brute-force Attacks
                </span>
              </div>
            </div>

            {/* Other Skills */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-cyber-primary" />
                <h4 className="text-lg font-bold text-white">KEY SKILLS DEVELOPED</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded text-sm">
                  Penetration Testing
                </span>
                <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded text-sm">
                  Vulnerability Assessment
                </span>
                <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded text-sm">
                  Security Testing
                </span>
                <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded text-sm">
                  Ethical Hacking
                </span>
                <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded text-sm">
                  Password Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="font-mono">SECURITY FOCUSED • PRACTICAL EXPERIENCE • REAL-WORLD TOOLS</span>
              </div>
              
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 text-cyber-primary hover:text-cyber-accent transition-colors"
              >
                <span className="font-medium">View Related Projects</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Looking to leverage my hands-on experience with Hydra and penetration testing tools 
            for your security projects?
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-primary/30 transition-all"
          >
            Discuss Security Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
