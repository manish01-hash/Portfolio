import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Lock, Shield, Cpu, Key, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  // Get icon based on project title
  const getProjectIcon = (title: string) => {
    if (title.includes('Secure Password Manager')) return <Key className="w-6 h-6 text-cyber-primary" />;
    if (title.includes('Vhub')) return <Shield className="w-6 h-6 text-cyber-primary" />;
    if (title.includes('HackeyeBot')) return <Cpu className="w-6 h-6 text-cyber-primary" />;
    return <Lock className="w-6 h-6 text-cyber-primary" />;
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-accent">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-cyber-primary mb-6"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-gray-400">
              A selection of my work in security and development.
            </p>
            <a 
              href="https://github.com/manish01-hash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyber-primary hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Github Profile</span>
            </a>
          </div>
        </div>

        {/* Projects Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden h-full hover:border-cyber-primary/30 transition-all duration-300 flex flex-col">
                {/* Card Header */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      {getProjectIcon(project.title)}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                          aria-label={`${project.title} GitHub Repository`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-cyber-primary transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Role */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-sm font-mono text-cyber-accent mb-4">
                      {project.role}
                    </p>
                  )}
                  
                  {/* Project Description */}
                  <p className="text-gray-300 text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags && project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="text-xs font-mono text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
