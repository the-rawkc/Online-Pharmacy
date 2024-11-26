import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/logo.png"  alt="Eden Pharmacy Logo" />
      </div>
      <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>

      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <img src="/Component-2.svg.png" alt="Phone Icon" />
          </div>
          <div className="contact-text">
            <p>Phone: +974 3118 1843</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <img src="/Component-2-1.svg.png" alt="Email Icon" />
          </div>
          <div className="contact-text">
            <p>Email: elbritqh@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <img src="/Component-2-2.svg.png" alt="Location Icon" />
          </div>
          <div className="contact-text">
            <p>Location: Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <p>&copy; 2024 Eden Pharmacy. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
