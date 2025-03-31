import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Website', 'Mobile Apps', 'Desktop Apps', 'Branding'];
  
  const projects = [
    { id: 1, name: 'Project 1', category: 'Website' },
    { id: 2, name: 'Project 2', category: 'Mobile Apps' },
    { id: 3, name: 'Project 3', category: 'Desktop Apps' },
    { id: 4, name: 'Project 4', category: 'Website' },
    { id: 5, name: 'Project 5', category: 'Branding' },
    { id: 6, name: 'Project 6', category: 'Mobile Apps' },
    { id: 7, name: 'Project 7', category: 'Desktop Apps' },
    { id: 8, name: 'Project 8', category: 'Branding' },
    { id: 9, name: 'Project 9', category: 'Website' }
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      
      <div className="portfolio-filters">
        {filters.map((filter, index) => (
          <button 
            key={index} 
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-item-content">
              {/* Image placeholder */}
              <div className="portfolio-image-placeholder"></div>
              
              {/* Project info */}
              <div className="project-info">
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <button 
                    className="category-tag"
                    onClick={() => setActiveFilter(project.category)}
                  >
                    {project.category}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;