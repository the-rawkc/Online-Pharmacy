import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Online Medical Supplies</p>
        <h1>Get Your Vitamins & Minerals</h1>
        <button className="cta-button">Explore</button>
      </div>

      <div className="hero-image-container">
        <div className="hero-left">
          {/* Left Section with Image */}
          
        </div>

        <div className="hero-right">
          {/* Right Section with 3 Divs */}
          <div className="hero-item">
            <div className="hero-right-image">
              <img src="\470ec862c44115964979f90b5cb3a94e.png" alt="Vitamin Bottle" />
            </div>
            <div className="hero-right-text">
              <h3>Vitamins</h3>
              <p>Increased Vitamins and minerals in your diet</p>
            </div>
          </div>

          <div className="hero-item">
            <div className="hero-right-image">
              <img src="\Frame-8364.png.png" alt="Vitamin Bottle" />
            </div>
            <div className="hero-right-text">
              <h3>Weight Loss</h3>
              <p>Weight Loss Find scientifically proven solutions</p>
            </div>
          </div>

          <div className="hero-item">
            <div className="hero-right-image">
              <img src="\Frame-8365.png.png" alt="Vitamin Bottle" />
            </div>
            <div className="hero-right-text">
              <h3>Functional Foods</h3>
              <p>Functional Foods From protein powders to baby formula</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
