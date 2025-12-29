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

export const SKILLS: SkillCategory[] = [
  {
    category: "Cybersecurity & Digital Forensics",
    skills: [
      "Advanced Penetration Testing",
      "Vulnerability Assessment & Management",
      "Web Application Security Analysis",
      "Threat Intelligence & Risk Assessment",
      "Incident Response & Digital Forensics",
      "Security Compliance & Governance",
      "Remediation Strategy Development"
    ]
  },
  {
    category: "Software Development",
    skills: [
      "Python (Advanced)",
      "JavaScript/TypeScript",
      "Java & C/C++",
      "React.js & Next.js",
      "Django & Flask",
      "Node.js & Express",
      "RESTful API Design",
      "Secure Coding Practices"
    ]
  },
  {
    category: "Security Tools & Platforms",
    skills: [
      "Burp Suite Professional",
      "Wireshark & Network Analysis",
      "Nmap & Security Scanning",
      "Metasploit Framework",
      "SIEM Solutions",
      "Git & Version Control",
      "Container Security"
    ]
  },
  {
    category: "Infrastructure & Cloud Security",
    skills: [
      "Linux/Unix System Administration",
      "Network Architecture & Security",
      "Cloud Security (AWS/Azure)",
      "Containerization & Orchestration",
      "Identity & Access Management",
      "Database Security",
      "Enterprise Security Architecture"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Coincent.ai",
    role: "Cyber Security and Ethical Hacking Intern",
    period: "Jul 2023 - Aug 2023 · 2 mos",
    location: "Remote",
    project: "System Hacking",
    description: [
      "Conducted comprehensive analysis of vulnerabilities across various operating systems and security protocols.",
      "Performed penetration testing and vulnerability assessments to identify potential exploit points.",
      "Simulated cyber attacks to test system defenses and identify security weaknesses.",
      "Documented findings and provided recommendations to enhance system security measures.",
      "Gained hands-on experience in ethical hacking techniques and cybersecurity defense strategies.",
      "Focused on preventing unauthorized access through systematic security testing and analysis."
    ]
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
