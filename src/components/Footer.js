import React, { useState, useCallback, useEffect, memo } from 'react';

const Footer = memo(() => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  }, [email]);

  useEffect(() => {
    if (subscribed) {
      const timer = setTimeout(() => {
        setSubscribed(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [subscribed]);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Vintage Treasures</h3>
          <p>Discover authentic antiques and collectibles from around the world. Each piece tells a story of craftsmanship and history.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#authentication">Authentication</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#furniture">Antique Furniture</a></li>
            <li><a href="#jewelry">Vintage Jewelry</a></li>
            <li><a href="#art">Art & Decor</a></li>
            <li><a href="#collectibles">Collectibles</a></li>
            <li><a href="#books">Rare Books</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest finds and exclusive offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="subscription-success">Thank you for subscribing!</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Vintage Treasures. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
