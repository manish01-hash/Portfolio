import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, Building, ExternalLink, Code2, Shield, Terminal, Folder, Key, Lock, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const getStatusColor = (index: number) => {
    if (index === 0) return {
      bg: 'bg-cyber-primary/10',
      border: 'border-cyber-primary/20',
      text: 'text-cyber-primary',
      icon: <Key className="w-3 h-3" />
    };
    return {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      icon: <Shield className="w-3 h-3" />
    };
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px] animate-pulse delay-1000" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01001000 01011001 01000100 01010010 01000001 00100000 01010100 01001111 01001111 01001100 00100000 01010000 01010010 01001111 01001010 01000101 01000011 01010100
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
            <Briefcase className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              PROJECT EXPERIENCE
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Cybersecurity Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hands-on project experience in password security testing and penetration testing methodologies
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyber-primary via-cyber-accent to-transparent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const status = getStatusColor(index);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 z-10">
                    <div className="w-10 h-10 bg-gray-900 border-2 border-cyber-primary rounded-full flex items-center justify-center group/dot">
                      <div className="w-6 h-6 text-cyber-primary">
                        {index === 0 ? <Cpu className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-cyber-primary/20 animate-ping opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Spacer for centering */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <motion.div 
                      className="group relative"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${
                        isEven ? 'from-cyber-primary/10 via-transparent to-transparent' : 'from-transparent via-transparent to-cyber-accent/10'
                      } rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`}></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-cyber-primary/40 transition-all duration-300 overflow-hidden">
                        
                        {/* Project Type Badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full ${status.bg} border ${status.border}`}>
                            {status.icon}
                            <span className={`text-xs font-medium ${status.text}`}>
                              {index === 0 ? 'Virtual Internship Project' : 'Security Research'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Header */}
                        <div className="mb-6 pr-16">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-3 text-gray-300">
                            <div className="flex items-center space-x-2">
                              <Building className="w-4 h-4 text-cyber-primary/80" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="w-px h-4 bg-gray-700"></div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-cyber-primary/80" />
                              <span className="font-mono text-sm">{exp.period}</span>
                            </div>
                          </div>
                          
                          {/* Location */}
                          <div className="flex items-center space-x-2 text-gray-400 mt-3">
                            <MapPin className="w-4 h-4" />
                            <span>Virtual • Remote</span>
                          </div>
                        </div>
                        
                        {/* Project Description */}
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <Lock className="w-4 h-4 text-cyber-accent" />
                            <span className="text-sm font-mono text-cyber-primary uppercase tracking-wider">Project Overview</span>
                          </div>
                          
                          <ul className="space-y-4">
                            {exp.description.map((item, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start group/point"
                                initial={{ opacity: 0, x: isEven ? 10 : -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                              >
                                <div className="flex-shrink-0 mt-1 mr-3">
                                  <div className="w-2 h-2 rounded-full bg-cyber-primary group-hover/point:scale-150 transition-transform duration-300"></div>
                                </div>
                                <p className="text-gray-300 leading-relaxed group-hover/point:text-gray-200 transition-colors duration-300">
                                  {item}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Tools & Technologies */}
                        <div className="mt-8 pt-6 border-t border-gray-800/50">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <Terminal className="w-4 h-4 text-cyber-accent" />
                              <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">Primary Tool Used</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                  skill.includes('Hydra') 
                                    ? 'bg-cyber-primary/20 text-cyber-primary border-2 border-cyber-primary/40 hover:bg-cyber-primary/30 animate-pulse' 
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-cyber-primary/10 hover:text-cyber-primary'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* End of Timeline Marker */}
          <div className="relative mt-16">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-12 h-12 bg-gray-900 border-2 border-cyber-primary rounded-full flex items-center justify-center group/end">
              <Shield className="w-6 h-6 text-cyber-primary" />
              <div className="absolute inset-0 rounded-full bg-cyber-primary/20 animate-ping opacity-0 group-hover/end:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-24"></div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto group/cta">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/10 via-transparent to-cyber-accent/10 rounded-2xl opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyber-primary" />
                  <h3 className="text-2xl font-bold text-white">
                    Hydra Tool Expertise
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Specialized in Hydra tool for password security testing, brute-force attack simulations, 
                  and comprehensive vulnerability assessments to strengthen security defenses.
                </p>
                
                <a 
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyber-primary/30 transition-all duration-300 hover:-translate-y-0.5 group/button"
                >
                  <Key className="w-5 h-5 mr-2" />
                  Discuss Password Security
                  <span className="ml-2 group-hover/button:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
