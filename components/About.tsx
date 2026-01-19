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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-accent/5 blur-[120px]" />
        
        {/* Binary Code Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001
              </div>
            ))}
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
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-4">
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
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyber-primary/10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-cyber-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-cyber-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Security Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in proactive security measures combined with continuous learning. Every system has vulnerabilities; 
                    the goal is to identify them before malicious actors do and build robust defenses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-cyber-accent/10 rounded-lg">
                    <Briefcase className="w-8 h-8 text-cyber-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Combining technical expertise with strategic thinking to deliver security solutions that are both effective and 
                    practical for real-world applications. Focus on measurable impact and continuous improvement.
                  </p>
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
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyber-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-cyber-primary/10 rounded-lg">
                      {React.cloneElement(stat.icon, { className: "w-4 h-4 text-cyber-primary" })}
                    </div>
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">{stat.label}</span>
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
                className={`group relative bg-gradient-to-br ${point.gradient} to-transparent rounded-2xl p-px hover:shadow-2xl hover:shadow-cyber-primary/20 transition-all duration-500`}
              >
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 h-full">
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
                      <p className="text-gray-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyber-primary/20 transition-all duration-500" />
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
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyber-primary/10 rounded-lg">
                  <Globe className="w-5 h-5 text-cyber-primary" />
                </div>
                <span className="text-sm text-gray-400 font-mono uppercase tracking-wider">Location</span>
              </div>
              <p className="text-white text-lg font-medium">{PERSONAL_INFO.location}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyber-accent/10 rounded-lg">
                  <Terminal className="w-5 h-5 text-cyber-accent" />
                </div>
                <span className="text-sm text-gray-400 font-mono uppercase tracking-wider">Email</span>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg font-medium text-cyber-primary hover:text-cyber-accent transition-colors duration-300 group inline-flex items-center"
              >
                {PERSONAL_INFO.email}
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
              </a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyber-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-cyber-primary" />
                </div>
                <span className="text-sm text-gray-400 font-mono uppercase tracking-wider">Status</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-primary/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-center sm:text-left">
                Interested in collaborating on cybersecurity projects or discussing opportunities?
              </p>
              <a 
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-black font-semibold rounded-lg hover:shadow-xl hover:shadow-cyber-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
