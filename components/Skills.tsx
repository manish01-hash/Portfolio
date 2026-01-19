import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Globe, Search, Wrench, Shield, Monitor, Target, Key, Trophy, FileText, Terminal, Code2, Lock, Network, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Get appropriate icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Terminal className="w-6 h-6 text-cyber-primary" />;
      case "Networking":
        return <Network className="w-6 h-6 text-cyber-primary" />;
      case "Digital Forensics":
        return <Search className="w-6 h-6 text-cyber-primary" />;
      case "Cybersecurity & Digital Forensics Tools":
        return <Wrench className="w-6 h-6 text-cyber-primary" />;
      case "Web Security":
        return <Shield className="w-6 h-6 text-cyber-primary" />;
      case "Operating Systems":
        return <Monitor className="w-6 h-6 text-cyber-primary" />;
      case "Security Concepts":
        return <Target className="w-6 h-6 text-cyber-primary" />;
      case "Cryptography & Authentication":
        return <Key className="w-6 h-6 text-cyber-primary" />;
      case "Platforms & Practice":
        return <Trophy className="w-6 h-6 text-cyber-primary" />;
      case "Professional Skills":
        return <FileText className="w-6 h-6 text-cyber-primary" />;
      default:
        return <Cpu className="w-6 h-6 text-cyber-primary" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01010011 01001011 01001001 01001100 01001100 01010011 00100000 00100000 01000101 01011000 01010000 01000101 01010010 01010100 01001001 01010011 01000101
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-4">
            <Cpu className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              TECHNICAL EXPERTISE
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Skills & Tools
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Advanced technical competencies and specialized tools that drive secure and innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid - 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/10 via-transparent to-cyber-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              
              {/* Skill Category Card */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full group-hover:border-cyber-primary/40 transition-all duration-300">
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-800/50">
                  <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-mono text-gray-500">
                        {category.skills.length} skills
                      </span>
                      <span className="text-gray-700">•</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyber-primary/50"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                      className="px-3 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-cyber-primary hover:bg-cyber-primary/10 hover:text-cyber-primary transition-all duration-300 cursor-default group/skill"
                    >
                      <div className="flex items-center space-x-2">
                        <span>{skill}</span>
                        <span className="text-cyber-primary opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">→</span>
                      </div>
                    </motion.span>
                  ))}
                </div>
                
                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">
                      Click to explore
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-primary mb-2">
                  {SKILLS.reduce((total, category) => total + category.skills.length, 0)}+
                </div>
                <div className="text-gray-400 font-mono text-sm">Total Skills</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-accent mb-2">
                  {SKILLS.length}
                </div>
                <div className="text-gray-400 font-mono text-sm">Categories</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <div className="text-gray-400 font-mono text-sm">Security Focus</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-center sm:text-left">
                  Continuously expanding skill set through hands-on projects and security research
                </p>
                <a 
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyber-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
