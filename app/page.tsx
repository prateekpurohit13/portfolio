"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Shield, Database, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  highlights: string[];
  status?: string;
}

interface Experience {
  title: string;
  organization: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects: Project[] = [
    {
      title: "API Security Scanner",
      description: "Real-time API vulnerability scanner for production deployments",
      technologies: ["Go", "MongoDB", "Redis", "Kafka", "NGINX"],
      period: "March 2025 – Present",
      status: "Ongoing",
      highlights: [
        "Architecting real-time API vulnerability scanner that automatically flags sensitive information exposure",
        "Designing scalable backend infrastructure using microservices architecture",
        "Implementing Redis caching layer to optimize scanning performance and reduce response latency by 60%"
      ]
    },
    {
      title: "Password Manager",
      description: "Secure password management system with advanced cryptography",
      technologies: ["C", "OpenSSL", "Cryptography"],
      period: "March 2024 – May 2024",
      highlights: [
        "Engineered secure system using OpenSSL EVP for AES-256 encryption and decryption",
        "Implemented SHA-256 hashing algorithm with salt-based protection",
        "Ensured memory-safe cryptographic operations preventing security vulnerabilities"
      ]
    },
    {
      title: "Automatic Public Wi-Fi Login",
      description: "Automated authentication system for public Wi-Fi networks",
      technologies: ["Python", "Selenium", "WebDriver"],
      period: "January 2024 – February 2024",
      highlights: [
        "Developed automated authentication eliminating manual login processes",
        "Utilized Selenium WebDriver to simulate user behavior and handle dynamic forms",
        "Reduced connection time by 80% for frequent public Wi-Fi users"
      ]
    }
  ];

  const experience: Experience[] = [
    {
      title: "Core Committee Member",
      organization: "ACM VIT Chapter",
      period: "April 2024 – Present",
      technologies: ["Rust", "Python", "C++"],
      achievements: [
        "Developed CLI-RPG game using Rust with advanced game mechanics",
        "Conducted technical session on Capture The Flag (CTF) methodologies",
        "Collaborated on Reverse Coding and Cryptic Hunt competitions"
      ]
    }
  ];

  const skills = {
    "Languages & Frameworks": ["Python", "Java", "C/C++", "Rust", "Go", "JavaScript", "TypeScript", "NextJS", "React", "HTML", "CSS", "Tailwind CSS", "MATLAB"],
    "Databases & Tools": ["MongoDB", "Redis", "Kafka", "VS Code", "WSL", "Linux", "OpenSSL", "JWT TOOL", "NGINX", "AWS"],
    "Specializations": ["Network Security", "Penetration Testing", "Full-Stack Development", "API Security", "Cryptography"]
  };

  const achievements = [
    {
      title: "CookOff Hackathon",
      event: "Gravitas 2023",
      date: "November 2023",
      description: "Successfully solved multi-stage programming challenges using Python and C++"
    },
    {
      title: "Reverse Coding Hackathon",
      event: "Yantra 2024", 
      date: "February 2024",
      description: "Placed among top performers in code detection challenge"
    }
  ];

  const certifications = [
    "Full-Stack Development (MOOC)",
    "Network Security (MOOC)",
    "Penetration Testing (MOOC)",
    "Cyber Security Analyst (MOOC)"
  ];

  return (
    <>
      <Head>
        <br></br>
        <title>Prateek Purohit - Software Engineer & Security Specialist</title>
        <meta name="description" content="Computer Science student at VIT specializing in cybersecurity, full-stack development, and API security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#07133d] to-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-blue-500/20">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-center items-center">
              <div className="flex space-x-8">
                {['about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section 
                        ? 'text-blue-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Prateek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Purohit</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Computer Science Student & Aspiring Security Specialist
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Passionate about cybersecurity, full-stack development, and building secure, scalable applications. 
                Currently pursuing BTech at VIT with a focus on API security and cryptography.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="mailto:prateekpurohit171@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  <Mail size={20} />
                  Contact Me
                </a>
                <a 
                  href="https://drive.google.com/file/d/1gqB0yINVPt3lwP_yL8F6MDXf4mv9Hn2V/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  View Resume
                </a>
              </div>
              <div className="flex justify-center gap-6">
                <a href="https://linkedin.com/in/prateek-purohit-3a96a728a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/prateekpurohit13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:prateekpurohit171@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-12">
          {/* About Section */}
          {activeSection === 'about' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="text-blue-400" />
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-4">
                    I'm a Computer Science student at Vellore Institute of Technology with a strong passion for 
                    cybersecurity and full-stack development. Currently maintaining a CGPA of 8.96/10.0, I specialize 
                    in building secure, scalable applications and conducting security research.
                  </p>
                  <p className="text-gray-300 mb-4">
                    As a Core Committee Member at ACM VIT Chapter, I've contributed to various technical initiatives 
                    including CTF competitions and educational workshops. My projects range from API security scanners 
                    to cryptographic password managers, always with a focus on security and performance.
                  </p>
                </div>
                <div className="bg-black/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400">BTech Computer Science & Engineering</h4>
                      <p className="text-gray-300">Vellore Institute of Technology</p>
                      <p className="text-sm text-gray-400">CGPA: 8.96/10.0 | 2023 – Present</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400">XII (CBSE) - 88%</h4>
                      <p className="text-gray-300">Mothers' Public School, Bhubaneswar</p>
                      <p className="text-sm text-gray-400">2021 – 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="text-blue-400" />
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-black/20 rounded-xl p-6 border border-blue-500/10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.organization}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-blue-900/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="text-blue-400" />
                Projects
              </h2>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-black/20 rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                          {project.title}
                          {project.status && (
                            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                              {project.status}
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-400 mt-1">{project.description}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-blue-900/30 px-3 py-1 rounded-full">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="text-blue-400" />
                Technical Skills
              </h2>
              <div className="grid gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index} className="bg-black/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-blue-900/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <ExternalLink className="text-blue-400" />
                Achievements
              </h2>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-black/20 rounded-xl p-6 border border-blue-500/10">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                      <span className="text-sm text-gray-400">{achievement.date}</span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{achievement.event}</p>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="text-blue-400" />
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-6">
                    I'm always interested in discussing new opportunities, collaborating on projects, 
                    or just connecting with fellow developers and security enthusiasts. Feel free to reach out!
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:prateekpurohit171@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                      <Mail size={20} />
                      prateekpurohit171@gmail.com
                    </a>
                    <a href="tel:+91-8280938043" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                      <Phone size={20} />
                      +91-8280938043
                    </a>
                    <a href="https://linkedin.com/in/prateek-purohit-3a96a728a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                      <Linkedin size={20} />
                      LinkedIn Profile
                    </a>
                    <a href="https://github.com/prateekpurohit13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                      <Github size={20} />
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="bg-black/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Current Focus</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Developing API Security Scanner with Go and microservices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Contributing to ACM VIT Chapter technical initiatives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Exploring advanced cryptography and penetration testing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Open to internship and collaboration opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-black/30 border-t border-blue-500/20 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 Prateek Purohit. Built with Next.js and TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;