import React from 'react';
import { EDUCATION, CERTIFICATES } from '../constants';
import { GraduationCap, Award, CheckCircle, ExternalLink, Calendar, MapPin, Book, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="tracking-widest">
                01000101 01000100 01010101 01000011 01000001 01010100 01001001 01001111 01001110 00100000 01000011 01000101 01010010 01010100 01001001 01000110 01001001 01000011 01000001 01010100 01000101 01010011
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
            <Book className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              ACADEMIC & CERTIFICATIONS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Education & Certifications
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Academic background and professional certifications in cybersecurity and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-cyber-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="text-gray-400 text-sm">Academic qualifications and training</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-8 border-l border-gray-800">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyber-primary via-cyber-accent to-transparent"></div>
                
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative mb-8 last:mb-0 group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-11 top-6 w-6 h-6 bg-gray-900 border-2 border-cyber-primary rounded-full flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Education Card */}
                    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-cyber-primary/40 transition-all duration-300 overflow-hidden">
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/20 rounded-full">
                          <Calendar className="w-3 h-3 text-cyber-primary" />
                          <span className="text-sm font-mono text-cyber-primary">{edu.year}</span>
                        </div>
                      </div>
                      
                      <div className="pr-20">
                        {/* Course/Degree Name (now on top) */}
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        
                        {/* Institution Name (now below) */}
                        <div className="flex items-center space-x-4 text-gray-300 mb-3">
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4 text-cyber-primary/80" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="w-px h-4 bg-gray-700"></div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 text-cyber-primary/80" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        
                        {edu.details && (
                          <p className="text-gray-400 leading-relaxed">
                            {edu.details}
                          </p>
                        )}
                        
                        {/* GPA/Score if available */}
                        {edu.gpa && (
                          <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg">
                            <span className="text-sm text-gray-400">CGPA:</span>
                            <span className="text-cyber-primary font-bold">{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certificates Column */}
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-cyber-accent/10 rounded-lg">
                  <Award className="w-8 h-8 text-cyber-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                  <p className="text-gray-400 text-sm">Professional credentials and achievements</p>
                </div>
              </div>

              {/* Certificates Grid */}
              <div className="space-y-6">
                {CERTIFICATES.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="block group"
                  >
                    {/* Certificate Card */}
                    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-cyber-accent/40 transition-all duration-300 overflow-hidden relative">
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-cyber-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-6 h-6 text-cyber-accent" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors duration-300">
                                {cert.name}
                              </h4>
                              <p className="text-sm text-cyber-accent mt-1">{cert.issuer}</p>
                            </div>
                          </div>
                          
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyber-accent transition-colors duration-300 flex-shrink-0 mt-2" />
                        </div>
                        
                        {/* Credential Info */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/50">
                          <div className="flex items-center space-x-4">
                            {cert.credentialId && (
                              <div className="flex items-center space-x-2">
                                <Shield className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-mono text-gray-300">
                                  {cert.credentialId}
                                </span>
                              </div>
                            )}
                            {cert.issued && (
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-xs text-gray-400">
                                  {cert.issued}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <span className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full font-medium">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Learning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Book className="w-5 h-5 text-cyber-primary" />
                <h4 className="text-lg font-bold text-white">Continuous Learning</h4>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">
                Actively pursuing knowledge through platforms like TryHackMe, Hack The Box, 
                and cybersecurity courses to stay updated with the latest security trends.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs bg-cyber-primary/10 text-cyber-primary rounded-lg">
                  TryHackMe
                </span>
                <span className="px-3 py-1.5 text-xs bg-cyber-accent/10 text-cyber-accent rounded-lg">
                  Hack The Box
                </span>
                <span className="px-3 py-1.5 text-xs bg-gray-800/50 text-gray-300 rounded-lg">
                  CTF Challenges
                </span>
                <span className="px-3 py-1.5 text-xs bg-gray-800/50 text-gray-300 rounded-lg">
                  Security Courses
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
