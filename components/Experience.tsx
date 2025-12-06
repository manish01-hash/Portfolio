import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-cyber-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-3">
            <span className="text-cyber-primary">Professional</span> Experience
          </h2>
          <div className="w-20 h-1 bg-cyber-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">My professional journey in cybersecurity and ethical hacking</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyber-primary/30 to-transparent"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 bg-cyber-black border-2 border-cyber-primary rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content Spacer for centering */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[46%] pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                }`}>
                  <div className="bg-cyber-gray/50 border border-gray-800/50 p-6 rounded-xl hover:border-cyber-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/5">
                    <div className="flex flex-col mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20">
                            {index === 0 ? 'Internship' : 'Work'}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-lg text-cyber-accent font-mono mb-1">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-cyber-primary/80" />
                          <span className="text-gray-300 font-medium">{exp.company}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-cyber-primary/80" />
                          <span>India - Remote</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-cyber-primary/80" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3.5 mt-5 pl-1">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          <span className="text-cyber-primary mr-3 mt-1 text-xs">▹</span>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/3 w-32 h-32 bg-cyber-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -right-10 bottom-1/4 w-40 h-40 bg-cyber-accent/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;