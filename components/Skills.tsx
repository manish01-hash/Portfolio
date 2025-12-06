import React from 'react';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical <span className="text-cyber-accent">Expertise</span>
          </h2>
          <p className="mt-4 text-gray-400">Advanced technical competencies and specialized tools that drive secure and innovative solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-black border border-gray-800 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-cyber-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-4">
                <Cpu className="text-cyber-primary w-6 h-6" />
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded border border-gray-700 hover:border-cyber-accent hover:text-cyber-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;