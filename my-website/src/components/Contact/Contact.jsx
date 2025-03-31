import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      timeline: '',
      details: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact me</h2>
      <p className="section-subtitle">
        Cultivating Connections: Reach Out And Connect With Me
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Service Of Interest</option>
              <option value="Front-End">Front-End Development</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="Back-End">Back-End Development</option>
              <option value="Automation">Automation & Scripting</option>
              <option value="Document">Document Engineering</option>
              <option value="Software">Software Engineering</option>
            </select>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="timeline"
              placeholder="Timeline"
              value={formData.timeline}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group textarea-group">
            <textarea
              name="details"
              placeholder="Project Details..."
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;