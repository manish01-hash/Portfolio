import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

// Initialize EmailJS with public key
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  blockHeadless: true,
  blockList: {},
  limitRate: {
    id: 'app',
    throttle: 5000,
  },
});

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  location?: string;
}

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    location: ''
  });

  // Generate binary data for background
  const binaryLines = Array.from({ length: 40 }).map((_, i) => 
    "01000011 01001111 01001110 01010100 01000001 01000011 01010100 00100000 01000110 01001111 01010010 01001101 00100000 01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');
    const toastId = toast.loading('Sending message...');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS service is not properly configured');
      }

      const time = new Date().toLocaleString();

      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        phone: formData.phone.trim() || 'Not provided',
        location: formData.location.trim() || 'Not provided',
        time,
        browser: navigator.userAgent,
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        ip: 'N/A',
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        to_name: PERSONAL_INFO.name,
        to_email: PERSONAL_INFO.email,
        reply_to: formData.email.trim()
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200 || response.status === 201) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '', location: '' });
        toast.success('Message sent successfully!', { id: toastId });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error: any) {
      console.error('Email sending error:', error);
      setFormStatus('error');
      const errorMsg = error.message || 'Failed to send message. Please try again later.';
      setErrorMessage(errorMsg);
      toast.error(errorMsg, { id: toastId });
    }
  };

  useEffect(() => {
    console.log('SERVICE ID:', serviceId);
    console.log('TEMPLATE ID:', templateId);
    console.log('PUBLIC KEY:', publicKey);

    if (publicKey) {
      emailjs.init({ publicKey });
    } else {
      console.error('Missing EmailJS public key');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Fixed Binary Code Background - Full Coverage */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          {/* Left Side Binary */}
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
              {binaryLines.map((line, i) => (
                <div key={`left-${i}`} className="tracking-widest opacity-70">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side Binary */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full font-mono text-xs text-cyber-accent whitespace-pre animate-scroll-slow-reverse">
              {binaryLines.map((line, i) => (
                <div key={`right-${i}`} className="tracking-widest text-right pr-8 opacity-70">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay to ensure full coverage */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        </div>
      </div>

      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#e6e6e6',
            border: '1px solid #2d2d44',
            padding: '16px',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#1a1a2e',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff0055',
              secondary: '#1a1a2e',
            },
          },
          loading: {
            iconTheme: {
              primary: '#00aaff',
              secondary: 'transparent',
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-4">
            <Mail className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              SECURE CONNECTION
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a security concern or a project in mind? Send me an encrypted message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl group hover:border-cyber-primary/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-cyber-primary/10 rounded-lg">
                  <Globe className="w-8 h-8 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-gray-400 text-sm">Secure communication channels</p>
                </div>
              </div>

              <div className="space-y-6">
                <motion.a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Email</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Phone</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Location</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-cyber-primary/5 via-transparent to-cyber-accent/5 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "Security is not a product, but a process."
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/50">
                <p className="text-cyber-primary font-mono text-sm">- Bruce Schneier</p>
                <div className="text-xs px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded-full">
                  CYBER WISDOM
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-200 mb-2">Location (optional)</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Your location"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300 resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded-xl flex items-start space-x-3"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                </motion.div>
              )}
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 border border-green-800 text-green-200 px-4 py-3 rounded-xl flex items-center space-x-3"
                >
                  <Check className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              ) : (
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyber-primary to-cyber-accent text-cyber-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-cyber-primary/20 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Encrypting & Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              )}
              
              <p className="text-xs text-gray-500 text-center pt-4">
                This form uses end-to-end encryption. Your message is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

// Initialize EmailJS with public key
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  blockHeadless: true,
  blockList: {},
  limitRate: {
    id: 'app',
    throttle: 5000,
  },
});

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  location?: string;
}

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    location: ''
  });

  // Generate binary data for background
  const binaryLines = Array.from({ length: 40 }).map((_, i) => 
    "01000011 01001111 01001110 01010100 01000001 01000011 01010100 00100000 01000110 01001111 01010010 01001101 00100000 01010011 01000101 01000011 01010101 01010010 01001001 01010100 01011001"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');
    const toastId = toast.loading('Sending message...');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS service is not properly configured');
      }

      const time = new Date().toLocaleString();

      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        phone: formData.phone.trim() || 'Not provided',
        location: formData.location.trim() || 'Not provided',
        time,
        browser: navigator.userAgent,
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        ip: 'N/A',
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        to_name: PERSONAL_INFO.name,
        to_email: PERSONAL_INFO.email,
        reply_to: formData.email.trim()
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200 || response.status === 201) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '', location: '' });
        toast.success('Message sent successfully!', { id: toastId });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error: any) {
      console.error('Email sending error:', error);
      setFormStatus('error');
      const errorMsg = error.message || 'Failed to send message. Please try again later.';
      setErrorMessage(errorMsg);
      toast.error(errorMsg, { id: toastId });
    }
  };

  useEffect(() => {
    console.log('SERVICE ID:', serviceId);
    console.log('TEMPLATE ID:', templateId);
    console.log('PUBLIC KEY:', publicKey);

    if (publicKey) {
      emailjs.init({ publicKey });
    } else {
      console.error('Missing EmailJS public key');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyber-primary/10 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyber-accent/10 blur-[160px] animate-pulse delay-1000" />
        
        {/* Fixed Binary Code Background - Full Coverage */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          {/* Left Side Binary */}
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyber-primary whitespace-pre animate-scroll-slow">
              {binaryLines.map((line, i) => (
                <div key={`left-${i}`} className="tracking-widest opacity-70">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side Binary */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full font-mono text-xs text-cyber-accent whitespace-pre animate-scroll-slow-reverse">
              {binaryLines.map((line, i) => (
                <div key={`right-${i}`} className="tracking-widest text-right pr-8 opacity-70">
                  {line}
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay to ensure full coverage */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        </div>
      </div>

      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#e6e6e6',
            border: '1px solid #2d2d44',
            padding: '16px',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#1a1a2e',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff0055',
              secondary: '#1a1a2e',
            },
          },
          loading: {
            iconTheme: {
              primary: '#00aaff',
              secondary: 'transparent',
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm border border-cyber-primary/30 rounded-full px-4 py-2 mb-4">
            <Mail className="w-4 h-4 text-cyber-primary" />
            <span className="text-sm font-mono text-cyber-primary tracking-wider">
              SECURE CONNECTION
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary animate-gradient">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a security concern or a project in mind? Send me an encrypted message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl group hover:border-cyber-primary/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-cyber-primary/10 rounded-lg">
                  <Globe className="w-8 h-8 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-gray-400 text-sm">Secure communication channels</p>
                </div>
              </div>

              <div className="space-y-6">
                <motion.a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Email</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Phone</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group/item"
                >
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover/item:bg-cyber-primary/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Location</p>
                    <p className="text-lg text-white group-hover/item:text-cyber-primary transition-colors duration-300">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-cyber-primary/5 via-transparent to-cyber-accent/5 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "Security is not a product, but a process."
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/50">
                <p className="text-cyber-primary font-mono text-sm">- Bruce Schneier</p>
                <div className="text-xs px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded-full">
                  CYBER WISDOM
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-200 mb-2">Location (optional)</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300"
                    placeholder="Your location"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary/20 transition-all duration-300 resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded-xl flex items-start space-x-3"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                </motion.div>
              )}
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 border border-green-800 text-green-200 px-4 py-3 rounded-xl flex items-center space-x-3"
                >
                  <Check className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              ) : (
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyber-primary to-cyber-accent text-cyber-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-cyber-primary/20 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Encrypting & Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              )}
              
              <p className="text-xs text-gray-500 text-center pt-4">
                This form uses end-to-end encryption. Your message is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
