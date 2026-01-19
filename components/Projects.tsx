import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Lock, Shield, Cpu, Key, Folder, Terminal, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01010000 01010010 01001111 01001010 01000101 01000011 01010100 00100000 01010000 01001111 01010010 01010100 01000110 01001111 01001100 01001001 01001111
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
            <Folder className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              SECURITY PROJECTS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A selection of my work in security and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/10 via-transparent to-cyber-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              
              {/* Project Card */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-cyber-primary/40 transition-all duration-300">
                
                {/* Top Gradient Bar */}
                <div className="h-1.5 bg-gradient-to-r from-cyber-primary to-cyber-accent"></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? (
                        <Key className="w-6 h-6 text-cyber-primary" />
                      ) : index === 1 ? (
                        <Shield className="w-6 h-6 text-cyber-primary" />
                      ) : (
                        <Cpu className="w-6 h-6 text-cyber-primary" />
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                          aria-label={`${project.title} GitHub Repository`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-cyber-primary hover:bg-gray-700/50 transition-all duration-300"
                          aria-label={`View ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Role */}
                  {project.role && (
                    <p className="text-sm font-mono text-cyber-accent mb-4 tracking-wide">
                      {project.role}
                    </p>
                  )}
                  
                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="inline-block px-3 py-1.5 text-xs font-mono bg-gray-800/50 text-gray-300 rounded-lg hover:bg-cyber-primary/10 hover:text-cyber-primary transition-all duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">Explore More Projects</h3>
                <p className="text-gray-400 text-sm">
                  Check out my GitHub for more security projects, tools, and contributions
                </p>
              </div>
              
              <a 
                href="https://github.com/manish01-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-medium rounded-lg hover:border-cyber-primary hover:bg-gray-800 transition-all duration-300 group/cta"
              >
                <Github className="w-5 h-5 mr-2" />
                View Github Profile
                <ExternalLink className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
