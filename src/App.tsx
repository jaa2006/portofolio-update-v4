import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Mail, FileText, Info, Eye, EyeOff } from 'lucide-react';
import FuzzyText from './FuzzyText';
import ScrollVelocity from './ScrollVelocity';

type Section = 'home' | 'about' | 'projects' | 'certificates' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [navigationVisible, setNavigationVisible] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNavigation = () => {
    setNavigationVisible(!navigationVisible);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-[#121212] text-[#EAEAEA]' : 'bg-[#E4DED5] text-[#1A1A1A]'
    }`}>
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Header */}
        <header className="relative px-6 py-8 md:px-12 md:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Top Navigation */}
            <nav className="flex justify-between items-center mb-8">
              <div className="text-sm font-medium tracking-wide">
                ZULFIKAR SANDIRA
              </div>
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => setActiveSection('about')}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${
                    activeSection === 'about' ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  INFO
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${
                    activeSection === 'projects' ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  PROJECTS
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={toggleNavigation}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
                  title={navigationVisible ? "Hide Navigation" : "Show Navigation"}
                >
                  {navigationVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </nav>

            {/* Main Content */}
            {activeSection === 'home' && (
              <div className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
                {/* Available for Hire */}
                <div className="text-center mb-8">
                  <p className="text-lg md:text-xl font-serif italic opacity-70">
                    Available for Hire
                  </p>
                </div>

                {/* Main Title - Bold and Large */}
                <div className="text-center relative z-10 mb-16">
                  <div className="flex flex-col items-center space-y-4">
                    <FuzzyText 
                      baseIntensity={0.2} 
                      hoverIntensity={0.5} 
                      enableHover={true}
                      fontSize="clamp(4rem, 12vw, 12rem)"
                      fontWeight={900}
                      fontFamily="Space Grotesk"
                      color={darkMode ? "#EAEAEA" : "#1A1A1A"}
                    >
                      ZULFIKAR
                    </FuzzyText>
                    <FuzzyText 
                      baseIntensity={0.2} 
                      hoverIntensity={0.5} 
                      enableHover={true}
                      fontSize="clamp(4rem, 12vw, 12rem)"
                      fontWeight={900}
                      fontFamily="Space Grotesk"
                      color={darkMode ? "#EAEAEA" : "#1A1A1A"}
                    >
                      SANDIRA
                    </FuzzyText>
                  </div>
                </div>

                {/* Character GIF - Positioned to overlap title */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="relative transform translate-y-4">
                    <img
                      src="/Standard-Mode-buat-character-i-unscreen (1).gif"
                      alt="Zulfikar Sandira - Developer Character"
                      className="w-72 md:w-80 lg:w-96 xl:w-[28rem] h-auto transition-transform duration-300 hover:scale-105 pointer-events-auto"
                      style={{ 
                        filter: darkMode ? 'brightness(0.95) contrast(1.05) drop-shadow(0 20px 40px rgba(0,0,0,0.3))' : 'brightness(1.05) contrast(1.02) drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    {/* Character glow effect */}
                    <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-30 ${
                      darkMode 
                        ? 'bg-gradient-radial from-white/20 via-transparent to-transparent' 
                        : 'bg-gradient-radial from-black/10 via-transparent to-transparent'
                    }`}></div>
                  </div>
                </div>

                {/* Subtitle - Split layout */}
                <div className="relative z-30 mt-auto mb-12">
                  <div className="max-w-7xl mx-auto">
                    <ScrollVelocity
                      texts={['A MULTI-SKILLED FULL STACK DEVELOPER', '& CYBERSECURITY ENTHUSIAST BASED IN INDONESIA']} 
                      velocity={50}
                      className="text-xs md:text-sm lg:text-base font-bold tracking-wide opacity-80"
                      scrollerClassName="!text-xs md:!text-sm lg:!text-base !font-bold !tracking-wide"
                      numCopies={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'about' && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-center">ABOUT</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Background</h3>
                    <p className="text-lg leading-relaxed mb-6 opacity-80">
                      I'm a passionate full-stack developer with expertise in modern web technologies 
                      and cybersecurity. Based in Indonesia, I create robust, scalable applications 
                      while maintaining the highest security standards.
                    </p>
                    <p className="text-lg leading-relaxed opacity-80">
                      My journey spans from frontend development with React and TypeScript to 
                      backend systems with Node.js and Python, complemented by my deep understanding 
                      of cybersecurity principles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Skills</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Frontend</h4>
                        <p className="opacity-80">React, TypeScript, Next.js, Tailwind CSS</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Backend</h4>
                        <p className="opacity-80">Node.js, Python, Express, FastAPI</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cybersecurity</h4>
                        <p className="opacity-80">Penetration Testing, Vulnerability Assessment, Security Auditing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">PROJECTS</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "E-Commerce Platform",
                      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                      tech: "React, Node.js, MongoDB"
                    },
                    {
                      title: "Security Dashboard",
                      description: "Real-time cybersecurity monitoring dashboard with threat detection",
                      tech: "Python, FastAPI, React"
                    },
                    {
                      title: "Mobile Banking App",
                      description: "Secure mobile banking application with biometric authentication",
                      tech: "React Native, Node.js"
                    },
                    {
                      title: "Portfolio Website",
                      description: "Minimalist portfolio with dark mode and responsive design",
                      tech: "React, TypeScript, Tailwind"
                    },
                    {
                      title: "API Gateway",
                      description: "Microservices API gateway with rate limiting and authentication",
                      tech: "Node.js, Express, Redis"
                    },
                    {
                      title: "Penetration Testing Tool",
                      description: "Automated vulnerability scanner for web applications",
                      tech: "Python, Selenium, SQLite"
                    }
                  ].map((project, index) => (
                    <div key={index} className="group">
                      <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                      }`}>
                        <h3 className="text-xl font-bold mb-3 group-hover:opacity-80 transition-opacity">
                          {project.title}
                        </h3>
                        <p className="opacity-80 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-sm font-medium opacity-60">
                          {project.tech}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'certificates' && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">CERTIFICATES</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Certified Ethical Hacker (CEH)",
                      issuer: "EC-Council",
                      year: "2024"
                    },
                    {
                      title: "AWS Certified Solutions Architect",
                      issuer: "Amazon Web Services",
                      year: "2023"
                    },
                    {
                      title: "Certified Information Systems Security Professional (CISSP)",
                      issuer: "(ISC)²",
                      year: "2023"
                    },
                    {
                      title: "React Developer Certification",
                      issuer: "Meta",
                      year: "2022"
                    },
                    {
                      title: "CompTIA Security+",
                      issuer: "CompTIA",
                      year: "2022"
                    }
                  ].map((cert, index) => (
                    <div key={index} className={`p-6 rounded-lg ${
                      darkMode ? 'bg-white/5' : 'bg-white/40'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                          <p className="opacity-80">{cert.issuer}</p>
                        </div>
                        <span className="text-sm opacity-60 font-medium">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-12">CONTACT</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-lg opacity-80 mb-8">
                      I'm always interested in new opportunities and collaborations. 
                      Feel free to reach out if you'd like to work together.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <a
                      href="mailto:zulfikar.sandira@email.com"
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    >
                      <Mail className="w-8 h-8 mx-auto mb-4 opacity-80" />
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="opacity-80">zulfikar.sandira@email.com</p>
                    </a>
                    
                    <a
                      href="https://github.com/zulfikar-sandira"
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    >
                      <Github className="w-8 h-8 mx-auto mb-4 opacity-80" />
                      <h4 className="font-semibold mb-2">GitHub</h4>
                      <p className="opacity-80">@zulfikar-sandira</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Footer */}
        <footer className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          navigationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}>
          <div className="max-w-6xl mx-auto">
            {/* Modern Tab Navigation */}
            <div className="navigation-tabs">
              <div className={`tabs-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
                <div className="tabs">
                  <input 
                    type="radio" 
                    id="nav-home" 
                    name="navigation" 
                    checked={activeSection === 'home'}
                    onChange={() => setActiveSection('home')}
                  />
                  <label className="tab" htmlFor="nav-home">Home</label>
                  
                  <input 
                    type="radio" 
                    id="nav-about" 
                    name="navigation" 
                    checked={activeSection === 'about'}
                    onChange={() => setActiveSection('about')}
                  />
                  <label className="tab" htmlFor="nav-about">About</label>
                  
                  <input 
                    type="radio" 
                    id="nav-projects" 
                    name="navigation" 
                    checked={activeSection === 'projects'}
                    onChange={() => setActiveSection('projects')}
                  />
                  <label className="tab" htmlFor="nav-projects">Projects</label>
                  
                  <input 
                    type="radio" 
                    id="nav-certificates" 
                    name="navigation" 
                    checked={activeSection === 'certificates'}
                    onChange={() => setActiveSection('certificates')}
                  />
                  <label className="tab" htmlFor="nav-certificates">Certificates</label>
                  
                  <input 
                    type="radio" 
                    id="nav-contact" 
                    name="navigation" 
                    checked={activeSection === 'contact'}
                    onChange={() => setActiveSection('contact')}
                  />
                  <label className="tab" htmlFor="nav-contact">Contact</label>
                  
                  <span className="glider"></span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Copyright Footer */}
        <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
          navigationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <div className="text-center">
            <p className="text-xs opacity-50">
              © 2024 Zulfikar Sandira. All rights reserved.
            </p>
          </div>
        </div>

        {/* Social Links - Top Right */}
        <div className={`fixed top-20 right-6 z-40 flex flex-col space-y-3 transition-all duration-500 ${
          navigationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}>
          <a
            href="https://github.com/zulfikar-sandira"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 backdrop-blur-sm' 
                : 'bg-black/10 hover:bg-black/20 backdrop-blur-sm'
            }`}
          >
            <Github size={18} />
          </a>
          <a
            href="/cv.pdf"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 backdrop-blur-sm' 
                : 'bg-black/10 hover:bg-black/20 backdrop-blur-sm'
            }`}
          >
            <FileText size={18} />
          </a>
          <a
            href="mailto:zulfikar.sandira@email.com"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 backdrop-blur-sm' 
                : 'bg-black/10 hover:bg-black/20 backdrop-blur-sm'
            }`}
          >
            <Mail size={18} />
          </a>
        </div>

        <style jsx>{`
          .navigation-tabs {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .tabs-container {
            position: relative;
          }

          .tabs {
            display: flex;
            position: relative;
            padding: 0.75rem;
            border-radius: 99px;
            backdrop-filter: blur(20px);
            transition: all 0.3s ease;
          }

          .light-theme .tabs {
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .dark-theme .tabs {
            background-color: rgba(18, 18, 18, 0.9);
            box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .tabs * {
            z-index: 2;
          }

          .tabs input[type="radio"] {
            display: none;
          }

          .tab {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            min-width: 80px;
            padding: 0 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 99px;
            cursor: pointer;
            transition: all 0.25s ease;
            white-space: nowrap;
          }

          .light-theme .tab {
            color: #374151;
          }

          .dark-theme .tab {
            color: #D1D5DB;
          }

          .light-theme input[type="radio"]:checked + label {
            color: #185ee0;
          }

          .dark-theme input[type="radio"]:checked + label {
            color: #60A5FA;
          }

          .tabs input[id="nav-home"]:checked ~ .glider {
            transform: translateX(0);
          }

          .tabs input[id="nav-about"]:checked ~ .glider {
            transform: translateX(100%);
          }

          .tabs input[id="nav-projects"]:checked ~ .glider {
            transform: translateX(200%);
          }

          .tabs input[id="nav-certificates"]:checked ~ .glider {
            transform: translateX(300%);
          }

          .tabs input[id="nav-contact"]:checked ~ .glider {
            transform: translateX(400%);
          }

          .glider {
            position: absolute;
            display: flex;
            height: 40px;
            min-width: 80px;
            z-index: 1;
            border-radius: 99px;
            transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .light-theme .glider {
            background: linear-gradient(135deg, #e6eef9 0%, #f0f7ff 100%);
            box-shadow: 0 2px 8px rgba(24, 94, 224, 0.2);
          }

          .dark-theme .glider {
            background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.3) 100%);
            box-shadow: 0 2px 8px rgba(96, 165, 250, 0.3);
          }

          @media (max-width: 768px) {
            .tabs {
              transform: scale(0.85);
              padding: 0.5rem;
            }
            
            .tab {
              height: 36px;
              min-width: 70px;
              font-size: 0.8rem;
              padding: 0 0.75rem;
            }
            
            .glider {
              height: 36px;
              min-width: 70px;
            }
          }

          @media (max-width: 640px) {
            .tabs {
              transform: scale(0.75);
            }
            
            .tab {
              height: 32px;
              min-width: 60px;
              font-size: 0.75rem;
              padding: 0 0.5rem;
            }
            
            .glider {
              height: 32px;
              min-width: 60px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default App;