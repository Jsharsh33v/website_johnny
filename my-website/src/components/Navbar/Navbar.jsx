import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar height
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={() => scrollToSection('home')}>JANYM</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About me
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            className={activeSection === 'portfolio' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('portfolio');
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact me
          </a>
        </li>
      </ul>
      <button 
        className="hire-me-btn"
        onClick={() => scrollToSection('contact')}
      >
        Start a project
      </button>
    </nav>
  );
};

export default Navbar;