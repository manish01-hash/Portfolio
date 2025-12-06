import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Shield, Github, Linkedin, Twitter, Instagram, Youtube, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'x':
      case 'x (twitter)':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      case 'medium':
        return <BookOpen className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-cyber-dark border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-6 w-6 text-cyber-primary" />
            <span className="font-mono font-bold text-lg text-cyber-primary">
              MANISH<span className="text-white">.SEC</span>
            </span>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyber-primary transition-colors duration-300"
                aria-label={social.name}
                style={{ color: social.color }}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Designed with security and performance in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;