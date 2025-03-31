import React from 'react';
import './About.css';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { ReactComponent as GitIcon } from '../../assets/icons/git.svg';
import aboutImg from '../../assets/images/aboutme.png';
// Import your GIFs
import cssGif from '../../assets/gif/css.gif';
import figmaGif from '../../assets/gif/icons8-figma.gif';
import javaGif from '../../assets/gif/java.gif';
import pythonGif from '../../assets/gif/python.gif';

const About = () => {
  const skills = [
    { name: 'Figma', percentage: 85, gifSrc: figmaGif },
    { name: 'CSS/HTML', percentage: 80, gifSrc: cssGif },
    { name: 'JavaScript', percentage: 85, gifSrc: javaGif },
    { name: 'Python', percentage: 90, gifSrc: pythonGif },
    { name: 'Git/GitHub', percentage: 100, icon: <GitIcon /> }
  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p className="section-subtitle">
        User Interface And User Experience And Also Video Editing
      </p>

      <div className="about-content">
        <div className="about-image">
            <img src={aboutImg} alt="Zhanybek Sharsheev" />
        </div>
        
        <div className="about-text">
          <p>
            I'm a budding Software Engineer with a strong focus on web development 
            and Python scripting. I have completed courses such as Web Design, 
            Document Engineering, CMPSC 101, and CMPSC 100, and I'm proficient 
            in Python, JavaScript, HTML, and CSS. My passion is creating efficient, 
            user-friendly solutions that solve real-world problems. I look forward 
            to expanding my skill set and collaborating with teams to build innovative 
            digital products.
          </p>
          
          <button className="download-cv-btn">
            <DownloadIcon className="download-icon" />
            Download CV
          </button>
        </div>
      </div>

      <div className="skills-section">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-circle">
              {/* Orange progress circle */}
              <svg viewBox="0 0 100 100" width="120" height="120" className="progress-circle">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="#1e1e1e"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="var(--primary-color)"
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 45 * skill.percentage / 100} ${2 * Math.PI * 45 * (100 - skill.percentage) / 100}`}
                  strokeDashoffset={2 * Math.PI * 45 * 25 / 100}
                />
              </svg>
              
              {/* Icon or GIF inside the circle */}
              <div className="gif-container">
                {skill.gifSrc ? (
                  <img 
                    src={skill.gifSrc} 
                    alt={`${skill.name} skill`}
                    className="skill-gif"
                  />
                ) : skill.icon ? (
                  <div className="svg-icon">
                    {skill.icon}
                  </div>
                ) : null}
              </div>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;