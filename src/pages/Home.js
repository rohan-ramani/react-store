import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ onAddToCart, onNavigate }) => {
  const [featuredProducts] = useState([
        {
          id: 1,
          name: "Victorian Mahogany Writing Desk",
          era: "Victorian Era (1860s)",
          description: "Exquisite mahogany writing desk with intricate brass fittings and secret compartments.",
          price: 2850,
          originalPrice: 3200,
          condition: "Excellent",
          origin: "England",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "furniture"
        },
        {
          id: 3,
          name: "Ming Dynasty Porcelain Vase",
          era: "Ming Dynasty (16th Century)",
          description: "Rare blue and white porcelain vase with traditional dragon motifs.",
          price: 8500,
          condition: "Good",
          origin: "China",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "art"
        },
        {
          id: 5,
          name: "Louis XVI Armchair",
          era: "Louis XVI Period (1780s)",
          description: "Authentic French armchair with original silk upholstery and gilded wood frame.",
          price: 4200,
          condition: "Very Good",
          origin: "France",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "furniture"
        }
      ]
  );

    return (
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Vintage Treasures</h1>
            <p className="hero-subtitle">Discover Authentic Antiques & Timeless Collectibles</p>
            <p className="hero-description">
              Step into a world where history meets elegance. Our carefully curated collection 
              features authentic antiques from around the globe, each piece telling its own 
              unique story of craftsmanship and heritage.
            </p>
            <button className="cta-button" onClick={() => onNavigate('products')}>
              Explore Collection
            </button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop" 
              alt="Antique collection"
            />
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="feature">
              <div className="feature-icon">🏺</div>
              <h3>Authentic Pieces</h3>
              <p>Every item is carefully authenticated and comes with detailed provenance documentation.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h3>Global Collection</h3>
              <p>Sourced from estate sales, auctions, and private collections worldwide.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Expert Curation</h3>
              <p>Our team of antique specialists ensures quality and historical accuracy.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Secure Shipping</h3>
              <p>Professional packaging and insured delivery for your precious acquisitions.</p>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="featured-container">
            <h2>Featured Treasures</h2>
            <p className="section-subtitle">Handpicked exceptional pieces from our collection</p>
            <div className="featured-grid">
              {featuredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
            <button 
              className="view-all-button"
              onClick={() => onNavigate('products')}
            >
              View All Products
            </button>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2>What Our Collectors Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p>"The quality and authenticity of pieces from Vintage Treasures is unmatched. Each purchase feels like acquiring a piece of history."</p>
                <div className="testimonial-author">
                  <strong>Margaret Chen</strong>
                  <span>Art Collector</span>
                </div>
              </div>
              <div className="testimonial">
                <p>"I've been collecting antiques for 30 years, and this is my go-to source for exceptional pieces with verified provenance."</p>
                <div className="testimonial-author">
                  <strong>Robert Williams</strong>
                  <span>Antique Enthusiast</span>
                </div>
              </div>
              <div className="testimonial">
                <p>"The customer service is outstanding, and the packaging ensures my precious acquisitions arrive in perfect condition."</p>
                <div className="testimonial-author">
                  <strong>Elena Rodriguez</strong>
                  <span>Interior Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;
