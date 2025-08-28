import React, { useState, memo } from 'react';
import ProductCard from '../components/ProductCard';

const Furniture = memo(({ onAddToCart }) => {
  const [furnitureProducts] = useState([
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
    },
    {
      id: 7,
      name: "Georgian Dining Table",
      era: "Georgian Period (1820s)",
      description: "Magnificent mahogany dining table that seats 12, with original pedestal base and brass casters.",
      price: 6800,
      condition: "Excellent",
      origin: "England",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "furniture"
    },
    {
      id: 8,
      name: "Art Deco Vanity Set",
      era: "Art Deco (1930s)",
      description: "Stunning walnut vanity with matching stool and triple mirror, featuring geometric inlays.",
      price: 3200,
      condition: "Very Good",
      origin: "USA",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      inStock: true,
      isRare: false,
      category: "furniture"
    },
    {
      id: 9,
      name: "Chippendale Bookcase",
      era: "Chippendale Style (1760s)",
      description: "Rare mahogany bookcase with original glass doors and adjustable shelving.",
      price: 5400,
      condition: "Good",
      origin: "England",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "furniture"
    },
    {
      id: 10,
      name: "Windsor Rocking Chair",
      era: "Colonial Period (1790s)",
      description: "Traditional Windsor rocking chair in original paint with rush seat.",
      price: 1850,
      condition: "Good",
      origin: "USA",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      inStock: false,
      isRare: false,
      category: "furniture"
    }
  ]);

  return (
    <div className="furniture-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Antique Furniture Collection</h1>
          <p className="page-subtitle">Timeless pieces that bring history into your home</p>
          <p className="page-description">
            Our furniture collection spans centuries of craftsmanship, from elegant Victorian 
            writing desks to sturdy Colonial chairs. Each piece has been carefully selected 
            for its historical significance, quality construction, and enduring beauty.
          </p>
        </div>
      </section>

      <section className="furniture-categories">
        <div className="categories-container">
          <h2>Browse by Style</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Victorian Era</h3>
              <p>Ornate designs with rich woods and intricate details</p>
            </div>
            <div className="category-card">
              <h3>Georgian Period</h3>
              <p>Elegant proportions and classical influences</p>
            </div>
            <div className="category-card">
              <h3>Art Deco</h3>
              <p>Geometric patterns and luxurious materials</p>
            </div>
            <div className="category-card">
              <h3>Colonial American</h3>
              <p>Functional designs with rustic charm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <h2>Available Furniture</h2>
          <div className="products-grid">
            {furnitureProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="care-guide">
        <div className="care-guide-container">
          <h2>Caring for Your Antique Furniture</h2>
          <div className="care-tips">
            <div className="care-tip">
              <h4>🌡️ Climate Control</h4>
              <p>Maintain stable temperature and humidity to prevent wood movement and cracking.</p>
            </div>
            <div className="care-tip">
              <h4>☀️ Light Protection</h4>
              <p>Keep furniture away from direct sunlight to prevent fading and wood damage.</p>
            </div>
            <div className="care-tip">
              <h4>🧽 Gentle Cleaning</h4>
              <p>Use appropriate wood cleaners and soft cloths to maintain the original finish.</p>
            </div>
            <div className="care-tip">
              <h4>🔧 Professional Restoration</h4>
              <p>Consult experts for any repairs to preserve historical value and integrity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Furniture;
