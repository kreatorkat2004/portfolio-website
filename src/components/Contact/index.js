import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ''
  });
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your actual emailJS service details
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setFormStatus({
            success: true,
            error: false,
            message: 'Message sent successfully!'
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setFormStatus({
            success: false,
            error: true,
            message: 'Failed to send the message, please try again.'
          });
          console.error('Message sending failed:', error);
        }
      );
  };

  return (
    <div className="container contact-page">
      <div className="left-column">
        <section className="contact-section">
          <h1 className="fade-in-left-letter-by-letter" style={{ color: '#51e8d6', fontSize: '2.5em' }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <form ref={formRef} onSubmit={handleSubmit} className="pop-in">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="Your Message" 
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" />
            {formStatus.success && (
              <p className="success-message">{formStatus.message}</p>
            )}
            {formStatus.error && (
              <p className="error-message">{formStatus.message}</p>
            )}
          </form>
        </section>
      </div>
      <div className="right-column">
        <section className="thanks-section">
          <p className="pop-in">Thank you for taking the time to explore my portfolio!</p>
          <p className="pop-in" style={{ marginTop: '1em' }}>
            I am open to any questions, feedback, or collaboration proposals. 
            Don't hesitate to reach out by completing the form, connecting with 
            me on LinkedIn, or sending a more personalized message by email.
          </p>
          <div className="large-social-links pop-in">
            <a 
              href="https://www.linkedin.com/in/xianxi04" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="large-social-icon" />
            </a>
            <a 
              href="mailto:aw80@rice.edu" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="large-social-icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;