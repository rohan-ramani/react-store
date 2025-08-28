import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function ArtDecor({ onAddToCart }) {
  const [artProducts] = useState([
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
          id: 15,
          name: "Japanese Woodblock Print",
          era: "Edo Period (1800s)",
          description: "Original ukiyo-e print by renowned artist, depicting Mount Fuji in cherry blossom season.",
          price: 3200,
          condition: "Very Good",
          origin: "Japan",
          image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "art"
        },
        {
          id: 16,
          name: "French Bronze Sculpture",
          era: "Belle Époque (1890s)",
          description: "Elegant bronze figurine of a dancer, signed by the artist with original patina.",
          price: 4800,
          condition: "Excellent",
          origin: "France",
          image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "art"
        },
        {
          id: 17,
          name: "Persian Miniature Painting",
          era: "Safavid Period (17th Century)",
          description: "Exquisite hand-painted miniature depicting a royal hunting scene with gold leaf details.",
          price: 6200,
          condition: "Very Good",
          origin: "Persia",
          image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
          inStock: true,
          isRare: true,
          category: "art"
        },
        {
          id: 18,
          name: "Venetian Glass Chandelier",
          era: "Murano Glass (1920s)",
          description: "Stunning Murano glass chandelier with hand-blown flowers and crystal drops.",
          price: 5600,
          condition: "Excellent",
          origin: "Italy",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
          inStock: false,
          isRare: true,
          category: "art"
        },
        {
          id: 19,
          name: "Art Nouveau Stained Glass Panel",
          era: "Art Nouveau (1905)",
          description: "Beautiful stained glass window panel featuring iris flowers in the Tiffany style.",
          price: 3800,
          condition: "Good",
          origin: "USA",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          inStock: true,
          isRare: false,
          category: "art"
        }
      ]);

    return (
      <div className="art-decor-page">
        <section className="page-header">
          <div className="page-header-content">
            <h1>Art & Decorative Objects</h1>
            <p className="page-subtitle">Masterpieces that transform spaces and inspire souls</p>
            <p className="page-description">
              Our art and decorative objects collection spans cultures and centuries, featuring 
              everything from ancient ceramics to Art Nouveau stained glass. Each piece has been 
              selected for its artistic merit, historical significance, and ability to enhance 
              any living space with beauty and character.
            </p>
          </div>
        </section>

        <section className="art-categories">
          <div className="categories-container">
            <h2>Artistic Traditions</h2>
            <div className="categories-grid">
              <div className="category-card">
                <h3>Asian Art</h3>
                <p>Porcelain, woodblock prints, and traditional paintings from China and Japan</p>
              </div>
              <div className="category-card">
                <h3>European Decorative Arts</h3>
                <p>Sculptures, glass work, and decorative objects from European masters</p>
              </div>
              <div className="category-card">
                <h3>Islamic Art</h3>
                <p>Miniature paintings, calligraphy, and decorative metalwork</p>
              </div>
              <div className="category-card">
                <h3>Art Glass</h3>
                <p>Tiffany, Murano, and other fine art glass pieces</p>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="products-container">
            <h2>Available Art & Decor</h2>
            <div className="products-grid">
              {artProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="collecting-guide">
          <div className="guide-container">
            <h2>Building Your Art Collection</h2>
            <div className="guide-tips">
              <div className="guide-tip">
                <h4>🎨 Start with What You Love</h4>
                <p>Choose pieces that speak to you personally rather than following trends.</p>
              </div>
              <div className="guide-tip">
                <h4>📚 Research and Learn</h4>
                <p>Understanding the history and context enhances appreciation and value.</p>
              </div>
              <div className="guide-tip">
                <h4>🔍 Condition Matters</h4>
                <p>Consider restoration costs and how condition affects both beauty and value.</p>
              </div>
              <div className="guide-tip">
                <h4>🏛️ Provenance is Key</h4>
                <p>Documentation of ownership history adds authenticity and value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="display-tips">
          <div className="display-container">
            <h2>Displaying Your Collection</h2>
            <div className="display-grid">
              <div className="display-tip">
                <h4>💡 Proper Lighting</h4>
                <p>Use UV-filtered lighting to protect artworks while showcasing their beauty.</p>
              </div>
              <div className="display-tip">
                <h4>🌡️ Climate Control</h4>
                <p>Maintain stable temperature and humidity to preserve delicate materials.</p>
              </div>
              <div className="display-tip">
                <h4>🖼️ Professional Framing</h4>
                <p>Use archival materials and proper mounting techniques for works on paper.</p>
              </div>
              <div className="display-tip">
                <h4>🔒 Security Considerations</h4>
                <p>Protect valuable pieces with appropriate security measures and insurance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ArtDecor;
