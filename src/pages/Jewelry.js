import React, { useState, memo, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { useImagePreloader, extractImageUrls } from '../utils/imagePreloader';

const Jewelry = memo(({ onAddToCart }) => {
  const [jewelryProducts] = useState([
    {
      id: 2,
      name: "Art Deco Pearl Necklace",
      era: "Art Deco (1920s)",
      description: "Stunning pearl necklace with geometric platinum clasp, typical of the Art Deco period.",
      price: 1650,
      condition: "Very Good",
      origin: "France",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      inStock: true,
      isRare: false,
      category: "jewelry"
    },
    {
      id: 6,
      name: "Victorian Cameo Brooch",
      era: "Victorian Era (1870s)",
      description: "Delicate shell cameo brooch set in 14k gold with intricate detailing.",
      price: 450,
      condition: "Excellent",
      origin: "Italy",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      inStock: true,
      isRare: false,
      category: "jewelry"
    },
    {
      id: 11,
      name: "Edwardian Diamond Ring",
      era: "Edwardian Era (1910s)",
      description: "Exquisite platinum ring featuring a 2-carat old European cut diamond with milgrain detailing.",
      price: 8900,
      condition: "Excellent",
      origin: "England",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "jewelry"
    },
    {
      id: 12,
      name: "Art Nouveau Pendant",
      era: "Art Nouveau (1900s)",
      description: "Beautiful gold pendant with enamel work depicting flowing botanical motifs.",
      price: 2200,
      condition: "Very Good",
      origin: "France",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "jewelry"
    },
    {
      id: 13,
      name: "Georgian Garnet Bracelet",
      era: "Georgian Period (1820s)",
      description: "Rare Georgian bracelet featuring Bohemian garnets in original gold setting.",
      price: 1800,
      condition: "Good",
      origin: "England",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "jewelry"
    },
    {
      id: 14,
      name: "Retro Cocktail Earrings",
      era: "Retro Period (1940s)",
      description: "Bold gold and citrine earrings typical of the glamorous 1940s cocktail style.",
      price: 950,
      condition: "Excellent",
      origin: "USA",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
      inStock: false,
      isRare: false,
      category: "jewelry"
    }
  ]);

  const imageUrls = useMemo(() => {
    return extractImageUrls(jewelryProducts);
  }, [jewelryProducts]);

  useImagePreloader(imageUrls);

  return (
    <div className="jewelry-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Vintage Jewelry Collection</h1>
          <p className="page-subtitle">Exquisite pieces that capture the essence of bygone eras</p>
          <p className="page-description">
            Our jewelry collection features carefully selected pieces from the most celebrated 
            periods in jewelry history. From delicate Victorian brooches to bold Art Deco 
            necklaces, each piece represents the pinnacle of craftsmanship from its era.
          </p>
        </div>
      </section>

      <section className="jewelry-periods">
        <div className="periods-container">
          <h2>Jewelry Through the Ages</h2>
          <div className="periods-grid">
            <div className="period-card">
              <h3>Victorian (1837-1901)</h3>
              <p>Romantic designs with intricate details, often featuring cameos and mourning jewelry</p>
            </div>
            <div className="period-card">
              <h3>Art Nouveau (1890-1910)</h3>
              <p>Nature-inspired motifs with flowing lines and innovative use of materials</p>
            </div>
            <div className="period-card">
              <h3>Art Deco (1920-1935)</h3>
              <p>Geometric patterns and bold designs reflecting the modern age</p>
            </div>
            <div className="period-card">
              <h3>Retro (1935-1950)</h3>
              <p>Large, glamorous pieces with colorful gemstones and gold settings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <h2>Available Jewelry</h2>
          <div className="products-grid">
            {jewelryProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="authentication-info">
        <div className="auth-container">
          <h2>Authentication & Certification</h2>
          <div className="auth-features">
            <div className="auth-feature">
              <h4>💎 Gemstone Analysis</h4>
              <p>All gemstones are professionally evaluated and certified by recognized gemological institutes.</p>
            </div>
            <div className="auth-feature">
              <h4>🔍 Hallmark Verification</h4>
              <p>Metal purity marks and maker's stamps are verified for authenticity and dating.</p>
            </div>
            <div className="auth-feature">
              <h4>📜 Provenance Documentation</h4>
              <p>Complete history and documentation provided with each significant piece.</p>
            </div>
            <div className="auth-feature">
              <h4>🛡️ Insurance Appraisal</h4>
              <p>Professional appraisals available for insurance and estate planning purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="care-guide">
        <div className="care-guide-container">
          <h2>Caring for Vintage Jewelry</h2>
          <div className="care-tips">
            <div className="care-tip">
              <h4>🧼 Gentle Cleaning</h4>
              <p>Use appropriate cleaning methods for different metals and gemstones.</p>
            </div>
            <div className="care-tip">
              <h4>🏠 Proper Storage</h4>
              <p>Store pieces separately in soft pouches to prevent scratching.</p>
            </div>
            <div className="care-tip">
              <h4>🔧 Professional Maintenance</h4>
              <p>Regular check-ups ensure settings remain secure and pieces stay beautiful.</p>
            </div>
            <div className="care-tip">
              <h4>📋 Documentation</h4>
              <p>Keep all certificates and appraisals with your jewelry collection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Jewelry;
