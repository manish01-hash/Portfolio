import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Shield, Terminal, Cpu, Lock, Zap, Target, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sections = [
    {
      icon: <Zap className="w-6 h-6 text-cyber-primary" />,
      title: "Cybersecurity & Ethical Hacking Practitioner",
      description: "Focused on real-world security, offensive techniques, and building a strong defensive mindset."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyber-primary" />,
      title: "What I Do",
      description: "I work across penetration testing, Linux-based reconnaissance, password-attack simulations, and vulnerability analysis. Tools like Hydra, Nmap, Burp Suite, and custom scripts help me explore how systems break — and how they can be secured."
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyber-primary" />,
      title: "How I Build",
      description: "I develop security projects that combine coding, automation, and AI to solve practical cybersecurity challenges. My workflow blends ethical hacking, scripting, and modern tech to create efficient security-focused solutions."
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyber-primary" />,
      title: "Where I'm Growing",
      description: "GitHub projects, HackTheBox labs, and internships shape my experience as I evolve into a versatile cybersecurity professional who can analyze, attack, and harden systems with equal precision."
    },
    {
      icon: <Target className="w-6 h-6 text-cyber-primary" />,
      title: "My Goal",
      description: "To master both offensive and defensive security and contribute to building safer, smarter digital environments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-cyber-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-accent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Terminal Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/30 to-cyber-accent/30 rounded-xl opacity-50 blur-lg group-hover:opacity-70 transition duration-500"></div>
            <div className="relative w-full h-full bg-cyber-black/80 border border-cyber-primary/30 rounded-lg overflow-hidden p-4 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-cyber-gray-400 ml-2">terminal</div>
              </div>
              <div className="space-y-1 overflow-hidden h-96 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ SYSTEM_SCAN --start</p>
                  <p className="text-green-400"> Initializing security audit sequence...</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ CHECK_SYSTEM --integrity</p>
                  <p className="text-green-400"> System integrity: <span className="text-cyber-accent">SECURED</span></p>
                  <p className="text-cyber-gray-400 text-xs ml-4">Last scan: {new Date().toISOString().split('T')[0]}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ ANALYZE_TOOLS --list</p>
                  <p className="text-cyber-gray-300">Tools inventory:</p>
                  <ul className="list-disc list-inside text-cyber-gray-400 text-xs ml-4 space-y-1 mt-1">
                    <li>Nmap v7.92 - Network Mapper</li>
                    <li>Metasploit Framework 6.2.0</li>
                    <li>Burp Suite Community 2023.3</li>
                    <li>Hydra v9.3 - Password Cracker</li>
                    <li>Wireshark 3.6.8</li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.8, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ SCAN_VULNERABILITIES --quick</p>
                  <p className="text-yellow-400"> Scanning for common vulnerabilities...</p>
                  <div className="w-full bg-cyber-gray-800 rounded-full h-2.5 mt-2">
                    <div className="bg-cyber-primary h-2.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.0, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ SYSTEM_STATUS</p>
                  <p className="text-green-400"> Security Level: <span className="text-cyber-accent">HIGH</span></p>
                  <p className="text-cyber-gray-300"> Active Protocols: <span className="text-green-400">HTTPS/2, WPA3, 2FA</span></p>
                  <p className="text-cyber-gray-300"> Last Breach: <span className="text-green-400">None</span></p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 5.0, duration: 0.3 }}
                  className="text-sm text-cyber-gray-300"
                >
                  <p className="text-cyber-primary">$ _</p>
                  <div className="inline-block w-2 h-4 bg-cyber-primary animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-cyber-black/30 p-6 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary/40 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-cyber-gray-300">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-8 border-t border-cyber-gray-800 grid grid-cols-2 gap-4"
            >
              <div>
                <span className="block text-sm text-cyber-gray-400 font-mono mb-1">Location</span>
                <span className="text-white">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="block text-sm text-cyber-gray-400 font-mono mb-1">Email</span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-cyber-primary hover:underline hover:text-cyber-accent transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 via-transparent to-cyber-accent/5"></div>
      </div>
    </section>
  );
};

export default About;
