
import React, { useState, useEffect } from 'react';
import { PROFILE } from './constants';
import AIChatAssistant from './components/AIChatAssistant';
import ResumePdf from './components/Resume.pdf';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Hook to handle active section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-none bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {PROFILE.name}
          </a>
          <div className="hidden md:flex gap-10 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors duration-300 ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-400 hover:text-emerald-400'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href={ResumePdf} download="Resume.pdf">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-5 py-2 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2">
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Crafting digital <span className="text-emerald-400">excellence</span> with clean code.
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            I'm {PROFILE.name}, a {PROFILE.title} dedicated to building products that matter.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-xl">
              Hire Me
            </a>
            <a href={PROFILE.github} target="_blank" className="px-8 py-3 glass-card rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Github
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.6)] relative z-10 border-4 border-cyan-400/50">
            <img src="https://avatars.githubusercontent.com/u/89298670?v=4" alt="Profile" className="w-full h-full object-cover transition-all duration-700" />
          </div>
          <div className="absolute top-10 -left-10 w-64 h-64 bg-emerald-500/30 blur-[100px] -z-0"></div>
          <div className="absolute bottom-10 -right-10 w-64 h-64 bg-cyan-500/30 blur-[100px] -z-0"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About <span className="text-emerald-400">Me</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {PROFILE.bio}
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-lg bg-slate-900 ring-1 ring-white/10 leading-none flex items-top justify-start space-x-6">
              <div className="w-full">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 rounded-t-lg border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">developer_profile.json</div>
                </div>
                <div className="p-6 space-y-4 font-mono text-sm overflow-hidden">
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">1</span>
                    <span className="text-pink-400 ml-4">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">2</span>
                    <span className="text-slate-300 ml-8">"name": <span className="text-green-400">"{PROFILE.name}"</span>,</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">3</span>
                    <span className="text-slate-300 ml-8">"title": <span className="text-green-400">"{PROFILE.title}"</span>,</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">4</span>
                    <span className="text-slate-300 ml-8">"location": <span className="text-green-400">"{PROFILE.location}"</span>,</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">5</span>
                    <span className="text-slate-300 ml-8">"skills": <span className="text-yellow-400">["React", "Node.js", "AI", "Cloud"]</span>,</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">6</span>
                    <span className="text-slate-300 ml-8">"hireable": <span className="text-cyan-400">true</span></span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 min-w-[20px]">7</span>
                    <span className="text-pink-400 ml-4">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech <span className="text-emerald-400">Stack</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE.skills.map((skill, i) => (
            <div key={i} className="p-6 glass-card rounded-2xl group hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-slate-200">{skill.name}</span>
                <span className="text-xs text-slate-500 font-mono">{skill.category}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-1000 group-hover:opacity-80"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work <span className="text-emerald-400">Experience</span></h2>
          <div className="space-y-12">
            {PROFILE.experiences.map((exp, i) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-slate-800 pb-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <span className="text-emerald-400 text-sm font-mono">{exp.period}</span>
                </div>
                <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-500 text-sm leading-relaxed flex gap-3">
                      <span className="text-emerald-500 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured <span className="text-emerald-400">Projects</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PROFILE.projects.map(project => (
            <div key={project.id} className="group relative glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-[10px] rounded-full text-slate-400 font-mono uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-emerald-400 text-sm font-bold hover:gap-4 transition-all">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden border-cyan-400/50">
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold">Let's work <span className="text-emerald-400">together.</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Got a project in mind? Or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
              <a href={`mailto:${PROFILE.email}`} className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-10 py-4 rounded-2xl font-bold transition-all shadow-xl text-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Send an Email
              </a>
              <a href={PROFILE.linkedin} target="_blank" className="bg-slate-700 hover:bg-slate-600 text-white px-10 py-4 rounded-2xl font-bold transition-all text-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] -z-0"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={PROFILE.github} target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={PROFILE.linkedin} target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={PROFILE.twitter} target="_blank" className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
