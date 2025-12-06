import React, { useEffect, useRef } from 'react';
import { EDUCATION, CERTIFICATES } from '../constants';
import { GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';


const Education: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as const // Using cubic-bezier as an array with const assertion
      },
    },
  };

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyber-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyber-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <motion.div 
              variants={item}
              className="flex items-center space-x-3 mb-12 group"
            >
              <div className="p-2 rounded-full bg-cyber-primary/10 group-hover:bg-cyber-primary/20 transition-colors duration-300">
                <GraduationCap className="text-cyber-primary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-accent">
                Education
              </h2>
            </motion.div>

            <div className="space-y-8 border-l-2 border-cyber-primary/20 pl-8 relative">
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-cyber-primary to-cyber-accent"></div>
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="relative pl-2 group"
                >
                  <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full border-2 border-cyber-primary bg-cyber-dark group-hover:bg-cyber-primary transition-all duration-300 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-primary group-hover:bg-cyber-dark transition-colors duration-300"></div>
                  </div>
                  <div className="bg-cyber-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyber-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                      <span className="text-sm font-mono text-cyber-accent bg-cyber-accent/10 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-base text-cyber-primary font-medium mb-3">{edu.degree}</h4>
                    {edu.details && (
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Column */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <motion.div 
              variants={item}
              className="flex items-center space-x-3 mb-12 group"
            >
              <div className="p-2 rounded-full bg-cyber-accent/10 group-hover:bg-cyber-accent/20 transition-colors duration-300">
                <Award className="text-cyber-accent w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyber-accent to-cyber-primary">
                Certifications
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {CERTIFICATES.map((cert, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href={cert.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' }
                  }}
                >
                  <div className="bg-gradient-to-r from-cyber-black/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyber-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-accent/5 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-cyber-accent/10 to-transparent rounded-full group-hover:scale-110 transition-all duration-300 ease-out"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-cyber-accent/10 rounded-lg group-hover:bg-cyber-accent/20 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 text-cyber-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors duration-300">
                            {cert.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyber-accent transition-colors duration-300 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-cyber-accent/90 font-medium mt-1">{cert.issuer}</p>
                        {cert.credentialId && (
                          <div className="mt-2 flex items-center space-x-2">
                            <span className="text-xs bg-cyber-accent/10 text-cyber-accent px-2.5 py-1 rounded-full font-mono">
                              {cert.credentialId}
                            </span>
                            <span className="text-xs text-gray-500">View Credential</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;