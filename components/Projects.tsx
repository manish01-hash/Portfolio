import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured <span className="text-cyber-primary">Projects</span>
            </h2>
            <p className="mt-4 text-gray-400">A selection of my work in security and development.</p>
          </div>
          <a href="https://github.com/manish01-hash" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-cyber-primary hover:text-white transition mt-4 md:mt-0">
            <Github className="w-5 h-5 mr-2" /> View Github Profile
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cyber-gray border border-gray-800 rounded-xl overflow-hidden hover:border-cyber-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Header (Visual) */}
              <div className="h-2 bg-gradient-to-r from-cyber-primary to-cyber-accent"></div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Folder className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div className="flex space-x-3">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} GitHub Repository`}
      className="text-gray-500 hover:text-white transition"
    >
      <Github className="w-5 h-5" />
    </a>
  )}
</div>

                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-cyber-accent mb-4">{project.role}</p>
                
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="https://github.com/manish01-hash" target="_blank" rel="noreferrer" className="inline-flex items-center text-cyber-primary hover:text-white transition">
                <Github className="w-5 h-5 mr-2" /> View Github Profile
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
