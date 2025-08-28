import React, { useState, memo } from 'react';
import ProductCard from '../components/ProductCard';

const Collectibles = memo(({ onAddToCart }) => {
  const [collectiblesProducts] = useState([
    {
      id: 4,
      name: "Edwardian Silver Tea Set",
      era: "Edwardian Era (1905)",
      description: "Complete sterling silver tea service with ornate engravings and original hallmarks.",
      price: 1200,
      condition: "Excellent",
      origin: "England",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      inStock: false,
      isRare: false,
      category: "collectibles"
    },
    {
      id: 20,
      name: "Vintage Pocket Watch",
      era: "Railroad Era (1920s)",
      description: "Hamilton Railway Special pocket watch with 21 jewels, original case and chain.",
      price: 850,
      condition: "Very Good",
      origin: "USA",
      image: "https://images.unsplash.com/photo-1509048191080-d2e2678e67b4?w=400&h=300&fit=crop",
      inStock: true,
      isRare: false,
      category: "collectibles"
    },
    {
      id: 21,
      name: "Royal Doulton Figurine",
      era: "Mid-Century (1950s)",
      description: "Limited edition Royal Doulton figurine 'The Balloon Man' in perfect condition.",
      price: 320,
      condition: "Excellent",
      origin: "England",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      inStock: true,
      isRare: false,
      category: "collectibles"
    },
    {
      id: 22,
      name: "Antique Compass Set",
      era: "Victorian Era (1880s)",
      description: "Brass maritime compass in original mahogany box with nautical instruments.",
      price: 680,
      condition: "Good",
      origin: "England",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "collectibles"
    },
    {
      id: 23,
      name: "Vintage Camera Collection",
      era: "Mid-Century (1940s)",
      description: "Leica IIIf rangefinder camera with original leather case and multiple lenses.",
      price: 1450,
      condition: "Very Good",
      origin: "Germany",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "collectibles"
    },
    {
      id: 24,
      name: "Antique Map Collection",
      era: "Colonial Period (1750s)",
      description: "Hand-colored engraved maps of the American colonies, professionally framed.",
      price: 2200,
      condition: "Good",
      origin: "England",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "collectibles"
    }
  ]);

  return (
    <div className="collectibles-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Collectibles & Curiosities</h1>
          <p className="page-subtitle">Unique treasures for the discerning collector</p>
          <p className="page-description">
            Our collectibles section features an eclectic mix of fascinating objects that tell 
            stories of human ingenuity and craftsmanship. From precision timepieces to scientific 
            instruments, each piece represents a moment in history and a testament to the artisans 
            who created them.
          </p>
        </div>
      </section>

      <section className="collectibles-categories">
        <div className="categories-container">
          <h2>Collecting Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Timepieces</h3>
              <p>Pocket watches, clocks, and chronometers from renowned makers</p>
            </div>
            <div className="category-card">
              <h3>Scientific Instruments</h3>
              <p>Compasses, telescopes, and navigational tools from maritime history</p>
            </div>
            <div className="category-card">
              <h3>Silver & Metalwork</h3>
              <p>Tea services, serving pieces, and decorative metalwork</p>
            </div>
            <div className="category-card">
              <h3>Vintage Technology</h3>
              <p>Cameras, radios, and early technological innovations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <h2>Available Collectibles</h2>
          <div className="products-grid">
            {collectiblesProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="collecting-wisdom">
        <div className="wisdom-container">
          <h2>The Art of Collecting</h2>
          <div className="wisdom-grid">
            <div className="wisdom-item">
              <h4>🎯 Focus Your Collection</h4>
              <p>Develop expertise in specific areas rather than collecting everything that catches your eye.</p>
            </div>
            <div className="wisdom-item">
              <h4>📖 Document Everything</h4>
              <p>Keep detailed records of provenance, condition, and any restoration work performed.</p>
            </div>
            <div className="wisdom-item">
              <h4>🔍 Condition is Critical</h4>
              <p>Original condition often matters more than rarity in determining long-term value.</p>
            </div>
            <div className="wisdom-item">
              <h4>🤝 Build Relationships</h4>
              <p>Connect with other collectors, dealers, and experts in your field of interest.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-guide">
        <div className="investment-container">
          <h2>Collectibles as Investment</h2>
          <div className="investment-tips">
            <div className="investment-tip">
              <h4>📈 Market Research</h4>
              <p>Study market trends and auction results to understand value patterns in your collecting area.</p>
            </div>
            <div className="investment-tip">
              <h4>🛡️ Insurance & Storage</h4>
              <p>Protect your investment with proper insurance coverage and climate-controlled storage.</p>
            </div>
            <div className="investment-tip">
              <h4>⏰ Long-term Perspective</h4>
              <p>The best collectibles appreciate over decades, not months or years.</p>
            </div>
            <div className="investment-tip">
              <h4>💡 Buy Quality</h4>
              <p>One exceptional piece often outperforms multiple mediocre items over time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Collectibles;
