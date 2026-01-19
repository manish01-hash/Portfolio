import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Shield, Terminal, Cpu, Lock, Zap, Target, Code2, Rocket, User, Briefcase, Wrench, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const aboutPoints = [
    {
      icon: <Zap className="w-6 h-6 text-cyber-primary" />,
      title: "Cybersecurity & Ethical Hacking Practitioner",
      description: "Focused on real-world security, offensive techniques, and building a strong defensive mindset.",
      gradient: "from-cyber-primary/20 to-cyber-accent/20"
    },
    {
      icon: <Shield className="w-6 h-6 text-cyber-primary" />,
      title: "Security Expertise",
      description: "I work across penetration testing, Linux-based reconnaissance, password-attack simulations, and vulnerability analysis using tools like Hydra, Nmap, Burp Suite, and custom scripts.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyber-primary" />,
      title: "Development Approach",
      description: "I develop security projects combining coding, automation, and AI to solve practical cybersecurity challenges through ethical hacking, scripting, and modern technologies.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyber-primary" />,
      title: "Professional Growth",
      description: "GitHub projects, HackTheBox labs, and internships shape my experience as I evolve into a versatile cybersecurity professional.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Target className="w-6 h-6 text-cyber-primary" />,
      title: "Mission",
      description: "To master both offensive and defensive security and contribute to building safer, smarter digital environments.",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const stats = [
    { value: "100%", label: "Security Focused", icon: <Lock className="w-5 h-5" /> },
    { value: "24/7", label: "Learning Mindset", icon: <Cpu className="w-5 h-5" /> },
    { value: "50+", label: "Projects Completed", icon: <Code2 className="w-5 h-5" /> },
    { value: "∞", label: "Cybersecurity Passion", icon: <Shield className="w-5 h-5" /> }
  ];

  // Generate binary data for background
  const binaryLines = Array.from({ length: 40 }).map((_, i) => 
    "01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001 00100000 01010000 01010010 01001111 01000110 01000101 01010011 01010011 01001001 01001111 01001110 01000001 01001100"
  );

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Full Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Full Page Binary Code Pattern - Fixed */}
        <div className="absolute inset-0 opacity-[0.03]">
          {/* Left Side Binary */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
              {binaryLines.map((line, i) => (
                <div key={`left-${i}`} className="tracking-widest opacity-60">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side Binary */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full font-mono text-xs text-cyber-accent whitespace-pre animate-scroll-slow-reverse">
              {binaryLines.map((line, i) => (
                <div key={`right-${i}`} className="tracking-widest text-right pr-8 opacity-60">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Center Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/30"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-4">
            <User className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              PROFESSIONAL PROFILE
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              About Me
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cybersecurity specialist focused on building secure digital infrastructure and mitigating cyber threats through ethical practices and modern technologies.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Summary */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-primary/10 relative overflow-hidden group">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-primary/0 via-cyber-primary/5 to-cyber-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-cyber-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                      Security Philosophy
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I believe in proactive security measures combined with continuous learning. Every system has vulnerabilities; 
                      the goal is to identify them before malicious actors do and build robust defenses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 pt-6 border-t border-gray-800/50">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-cyber-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-cyber-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-accent transition-colors duration-300">
                      Professional Approach
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Combining technical expertise with strategic thinking to deliver security solutions that are both effective and 
                      practical for real-world applications. Focus on measurable impact and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyber-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/10 group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-cyber-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(stat.icon, { className: "w-4 h-4 text-cyber-primary" })}
                    </div>
                    <span className="text-3xl font-bold text-white group-hover:text-cyber-primary transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Detailed Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${point.gradient} to-transparent rounded-2xl p-px hover:shadow-2xl hover:shadow-cyber-primary/20 transition-all duration-500 overflow-hidden`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact & Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden group"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-primary/0 via-cyber-accent/5 to-cyber-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyber-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-5 h-5 text-cyber-primary" />
                  </div>
                  <span className="text-sm text-gray-400 font-mono uppercase tracking-wider group-hover:text-cyber-primary transition-colors duration-300">
                    Location
                  </span>
                </div>
                <p className="text-white text-lg font-medium group-hover:text-cyber-primary transition-colors duration-300">
                  {PERSONAL_INFO.location}
                </p>
              </div>
              
              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyber-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <span className="text-sm text-gray-400 font-mono uppercase tracking-wider group-hover:text-cyber-accent transition-colors duration-300">
                    Email
                  </span>
                </div>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg font-medium text-cyber-primary hover:text-cyber-accent transition-colors duration-300 group/link inline-flex items-center"
                >
                  {PERSONAL_INFO.email}
                  <span className="ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300">→</span>
                </a>
              </div>
              
              <div className="space-y-2 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyber-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-5 h-5 text-cyber-primary" />
                  </div>
                  <span className="text-sm text-gray-400 font-mono uppercase tracking-wider group-hover:text-cyber-primary transition-colors duration-300">
                    Status
                  </span>
                </div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-primary/10 rounded-full group-hover:bg-cyber-primary/20 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-center sm:text-left group-hover:text-gray-300 transition-colors duration-300">
                  Interested in collaborating on cybersecurity projects or discussing opportunities?
                </p>
                <a 
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyber-primary/30 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center group/cta"
                >
                  Let's Connect
                  <span className="ml-2 group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
