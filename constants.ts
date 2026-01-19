import { Project, Experience, Education, Certificate, SkillCategory } from './types';
import { Shield, Terminal, Database, Globe, Lock, Server, Cpu, Wifi } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Manish Dhaygude",
  title: "Cybersecurity Student & Aspiring Security Professional",
  email: "manishdhaygude36@gmail.com",
  phone: "+918767011304",
  location: "Pune, India",
  tagline: "Building Secure Digital Infrastructure & Mitigating Cyber Threats",
  summary: ""
};

export const SKILLS = [
  {
    category: "Programming Languages",
    skills: ["Python", "Bash", "JavaScript", "HTML", "SQL"],
    icon: "💻"
  },
  {
    category: "Networking",
    skills: [
      "TCP/IP",
      "DNS", 
      "HTTP / HTTPS",
      "Ports & Protocols",
      "OSI Model",
      "Network Traffic Analysis",
      "Firewalls"
    ],
    icon: "🌐"
  },
  {
    category: "Digital Forensics",
    skills: [
      "Digital Evidence Handling",
      "Disk Forensics",
      "Memory Forensics",
      "File System Analysis",
      "Timeline Analysis",
      "Artifact Analysis"
    ],
    icon: "🔍"
  },
  {
    category: "Cybersecurity & Digital Forensics Tools",
    skills: [
      "Autopsy",
      "FTK Imager",
      "Volatility",
      "Wireshark",
      "Nmap",
      "Burp Suite"
    ],
    icon: "🛠️"
  },
  {
    category: "Web Security",
    skills: [
      "OWASP Top 10",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Broken Access Control",
      "Insecure Authentication",
      "Security Misconfiguration"
    ],
    icon: "🛡️"
  },
  {
    category: "Operating Systems",
    skills: [
      "Linux",
      "Windows",
      "File Permissions",
      "Process Analysis",
      "Service Analysis",
      "Log Analysis"
    ],
    icon: "⚙️"
  },
  {
    category: "Security Concepts",
    skills: [
      "CIA Triad",
      "Threat Modeling",
      "Vulnerability Assessment",
      "Risk Analysis",
      "Attack Surface",
      "Defense in Depth"
    ],
    icon: "🎯"
  },
  {
    category: "Cryptography & Authentication",
    skills: [
      "Hashing",
      "Salting",
      "Encryption Concepts",
      "Authentication Mechanisms",
      "Session Management"
    ],
    icon: "🔐"
  },
  {
    category: "Platforms & Practice",
    skills: [
      "TryHackMe",
      "Hack The Box",
      "Capture The Flag (CTF)"
    ],
    icon: "🏆"
  },
  {
    category: "Professional Skills",
    skills: [
      "Technical Documentation",
      "Incident Reporting",
      "Analytical Thinking",
      "Problem Solving"
    ],
    icon: "📋"
  }
];

export const EXPERIENCE = [
  {
    role: "Cyber Security and Ethical Hacking Intern",
    company: "Concent.ai",
    period: "Jul 2023 - Aug 2023 · 1 months",
    location: "Virtual • Remote",
    description: [
      "Completed a virtual project-based internship focused on penetration testing and password security",
      "Specialized in using the Hydra tool for comprehensive brute-force attack simulations",
      "Conducted password strength testing and vulnerability assessments on test systems",
      "Analyzed attack methodologies to understand security weaknesses in authentication systems",
      "Documented findings and provided recommendations for improving password security"
    ],
    skills: ["Hydra Tool", "Password Security", "Brute-force Attacks", "Penetration Testing", "Vulnerability Assessment"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Secure Password Manager",
    role: "Security Engineer & Python Developer",
    description:
      "A robust local password management solution focusing on cryptographic integrity. Implemented Argon2 hashing for superior resistance against GPU-based cracking attacks.",
    tags: ["Python", "Cryptography", "Argon2", "Security"],
    githubUrl: "https://github.com/manish01-hash/secure-password-manager",
  },
  {
    title: "Vhub - Event Management System",
    role: "Full Stack Developer",
    description:
      "A Role-Based Access Control (RBAC) system for managing events. Designed the architecture to securely handle user permissions, API endpoints, and database transactions.",
    tags: ["React", "Django", "MySQL", "REST API", "RBAC"],
    githubUrl: "https://github.com/manish01-hash/Vhub",
  },
  {
    title: "HackeyeBot",
    role: "Backend Developer",
    description:
      "An automated Discord bot designed to manage community roles and permissions dynamically, reducing manual administrative overhead.",
    tags: ["Node.js", "Discord API", "Automation", "JavaScript"],
    githubUrl: "https://github.com/manish01-hash/HackeyeBot", 
  }
];


export const EDUCATION: Education[] = [
  {
    degree: "MSc in Cybersecurity & Digital Forensics",
    institution: "Rashtriya Raksha University",
    year: "2025 – 2027",
    details: "Focusing on advanced network security, digital investigation techniques, and cyber law."
  },
  {
    degree: "Minor in Computer Science & Engineering",
    institution: "IIT Mandi",
    year: "Sep 2024 – Oct 2025",
    details: "Specialized coursework in algorithms and systems programming."
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "VPASC College, SPPU",
    year: "2022 – 2025",
    details: "Foundation in computer science principles, database management, and software engineering."
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Microsoft Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft"
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group"
  },
  {
    name: "Cybersecurity Certification",
    issuer: "IIT Roorkee (Teachnook)"
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Goldman Sachs"
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft + LinkedIn"
  }
];

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    url: "https://github.com/manish01-hash", 
    icon: "github",
    color: "#ffffff"
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/manishdhaygude/", 
    icon: "linkedin",
    color: "#0A66C2"
  },
  { 
    name: "X", 
    url: "https://x.com/MDhaygude39373", 
    icon: "X",
    color: "#df650eff"
  },
  { 
    name: "Instagram", 
    url: "https://instagram.com/_manish_003d", 
    icon: "instagram",
    color: "#E4405F"
  },
  { 
    name: "YouTube", 
    url: "https://youtube.com/@hack_eye", 
    icon: "youtube",
    color: "#FF0000"
  },
  { 
    name: "Medium", 
    url: "https://medium.com/@manishdhaygude36", 
    icon: "book-open-text",
    color: "#2acf09ff"
  }
];


export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
