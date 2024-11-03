// import React from 'react'
// import "./ContactSection.css";

// function ContactPage() {
//   return (
//     <>
//     <section class="contact-section">
//   <h2>Feel Free to Ask Any Query</h2>
//   <p>If you have any questions, please don’t hesitate to reach out!</p>

//   <div class="contact-details">
//     <p><strong>Name:</strong> Anuj Tiwari</p>
//     <p><strong>Email:</strong> <a href="mailto:tiwarianuj6661@gmail.com">tiwarianuj6661@gmail.com</a></p>
//     <p><strong>Mobile:</strong> <a href="tel:+918874345003">8874345003</a></p>
//   </div>
//   <div class="social-media">
//     <p>Contact Me on:</p>
//     <a href="#" target="_blank" aria-label="Facebook" class="social-icon">
//     <i class="fab fa-github"></i>
//     </a>
//     <a href="#" target="_blank" aria-label="Twitter" class="social-icon">
//       <i class="fab fa-twitter"></i>
//     </a>
//     <a href="#" target="_blank" aria-label="LinkedIn" class="social-icon">
//       <i class="fab fa-linkedin-in"></i>
//     </a>
//     <a href="#" target="_blank" aria-label="Instagram" class="social-icon">
//       <i class="fab fa-instagram"></i>
//     </a>
//   </div>

//   <div class="message-box">
//     <label for="user-name">Your Name:</label>
//     <input type="text" id="user-name" placeholder="Enter your name" />
    
//     <label for="user-contact">Your Contact:</label>
//     <input type="text" id="user-contact" placeholder="Enter your contact number" />
    
//     <label for="message">Your Message:</label>
//     <textarea id="message" rows="6" placeholder="Type your message here..."></textarea>
//   </div>
//   <button type="submit" class="submit-button">Send Message</button>
// </section>

//     </>
//   )
// }

// export default ContactPage





import React, { useState } from 'react';
import axios from 'axios'; // We'll use Axios for API requests
import "./ContactSection.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section className="contact-section">
      <h2>Feel Free to Ask Any Query</h2>
      <p>If you have any questions, please don’t hesitate to reach out!</p>

      <div className="contact-details">
        <p><strong>Name:</strong> Anuj Tiwari</p>
        <p><strong>Email:</strong> <a href="mailto:tiwarianuj6661@gmail.com">tiwarianuj6661@gmail.com</a></p>
        <p><strong>Mobile:</strong> <a href="tel:+918874345003">8874345003</a></p>
      </div>

      <div className="social-media">
        <p>Contact Me on:</p>
        <a href="https://github.com/Tiwarigithub" target="_blank" aria-label="Github" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/AnujTiwari22061" target="_blank" aria-label="Twitter" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/anuj-tiwari%F0%9F%87%AE%F0%9F%87%B3-a9a086222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLl9brU2STAeanwWp6dWbRA%3D%3D" target="_blank" aria-label="LinkedIn" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/anujtiwari4708/" target="_blank" aria-label="Instagram" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <form className="message-box" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />

        <label htmlFor="contact">Your Contact:</label>
        <input type="text" id="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Type your message here..."></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
