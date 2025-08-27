import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subscribed: false
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (this.state.email) {
      this.setState({ subscribed: true, email: '' });
      setTimeout(() => {
        this.setState({ subscribed: false });
      }, 3000);
    }
  }

  render() {
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
            <form onSubmit={this.handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            {this.state.subscribed && (
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
  }
}

export default Footer;
