import React from 'react';
import './Hero.css';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discord.svg';
import { ReactComponent as GmailIcon } from '../../assets/icons/gmail.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import heroImg from '../../assets/images/hero.png';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text-content">
          <p className="hero-intro">Hey I am</p>
          <h1 className="hero-name">Zhanybek Sharsheev</h1>
          
          <h2 className="hero-title">
          Aspiring Software Engineer <br />
          <span className="hero-title-symbol">&</span> <br />
          Web Developer
          </h2>
          
          <div className="social-icons">
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
          
          <div className="hero-buttons">
            <button className="hire-me-btn" onClick={scrollToContact}>Start a project</button>
            <button className="download-cv-btn">
              <DownloadIcon className="download-icon" />
              Download CV
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>4</h3>
            <p>Courses Completed</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>10</h3>
            <p>Projects build</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>200</h3>
            <p>Hours of coding</p>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="profile-image-container">
          <img src={heroImg} alt="Zhanybek Sharsheev" />
        </div>
      </div>
    </div>
  );
};

export default Hero;