import React from 'react';
import './Footer.css';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discord.svg';
import { ReactComponent as GmailIcon } from '../../assets/icons/gmail.svg';

const Footer = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <footer className="footer">
      <div className="footer-logo">JANYM</div>
      
      <div className="footer-nav">
        <ul>
          <li>
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>
              About me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={(e) => {
              e.preventDefault();
              scrollToSection('portfolio');
            }}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>
              Contact me
            </a>
          </li>
        </ul>
      </div>
      
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <DiscordIcon />
        </a>
        <a href="mailto:janybek@gmail.com">
          <GmailIcon />
        </a>
      </div>
      
      <div className="footer-contact">
        <div className="contact-item">
          <span className="icon">✉️</span>
          <span>janybek@gmail.com</span>
        </div>
        <div className="contact-item">
          <span className="icon">📞</span>
          <span>+77777777</span>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-copyright">
        Designed by Johnny
      </div>
    </footer>
  );
};

export default Footer;