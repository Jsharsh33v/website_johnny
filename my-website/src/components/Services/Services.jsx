import React from 'react';
import './Services.css';
import { ReactComponent as ServiceIcon } from '../../assets/icons/service.svg';

const Services = () => {
  const serviceItems = [
    {
      title: 'Front-End development',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'UI/UX Fundamentals',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'Back-End development',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'Automation & Scripting',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'Document Engineering',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'Software Engineering',
      description: 'Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur'
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2>Services</h2>
      <p className="section-subtitle">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
      </p>

      <div className="services-grid">
        {serviceItems.map((service, index) => (
          <div className="service-card" key={index}>
            <ServiceIcon className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;