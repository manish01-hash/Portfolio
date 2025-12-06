import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

// Initialize EmailJS with public key
emailjs.init({
  publicKey : import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  blockHeadless: true,
  blockList: {
    // Block the request if it contains these patterns
    // This is a security feature to prevent spam
// \'Asterisks are not allowed in the form',
    // '/*': 'Comment patterns are not allowed in the form'
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 5 requests per 10s
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
        // Required fields
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        
        // Optional fields
        phone: formData.phone.trim() || 'Not provided',
        location: formData.location.trim() || 'Not provided',
        
        // Metadata
        time,
        browser: navigator.userAgent,
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        ip: 'N/A',
        
        // Backward compatibility with old template
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        to_name: PERSONAL_INFO.name,
        to_email: PERSONAL_INFO.email,
        reply_to: formData.email.trim()
      };

      // Send the email using EmailJS
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
    } catch (error) {
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
    <section id="contact" className="py-24 bg-cyber-black relative overflow-hidden">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1e1e2e',
            color: '#cdd6f4',
            border: '1px solid #313244',
            padding: '16px',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#a6e3a1',
              secondary: '#1e1e2e',
            },
          },
          error: {
            iconTheme: {
              primary: '#f38ba8',
              secondary: '#1e1e2e',
            },
          },
          loading: {
            iconTheme: {
              primary: '#89b4fa',
              secondary: 'transparent',
            },
          },
        }}
      />
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyber-gray/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get In <span className="text-cyber-primary">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400">Have a security concern or a project in mind?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-cyber-gray border border-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyber-black p-3 rounded-lg border border-gray-700 text-cyber-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg text-white hover:text-cyber-primary transition">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyber-black p-3 rounded-lg border border-gray-700 text-cyber-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Phone</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg text-white hover:text-cyber-primary transition">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyber-black p-3 rounded-lg border border-gray-700 text-cyber-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Location</p>
                    <p className="text-lg text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyber-dark to-cyber-black p-8 rounded-2xl border border-gray-800">
                <p className="text-gray-400 italic">
                    "Security is not a product, but a process."
                </p>
                <p className="text-cyber-primary mt-2 font-mono text-sm">- Bruce Schneier</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-black border border-gray-800 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-200">Location (optional)</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                ></textarea>
              </div>
              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded-lg flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                </div>
              )}
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 border border-green-800 text-green-200 px-4 py-3 rounded-lg flex items-center space-x-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              ) : (
                <button 
                  type="submit" 
                  className="w-full bg-cyber-primary text-cyber-black font-bold py-3 px-4 rounded-lg hover:bg-emerald-400 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;