import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

    return (
      <div 
        className={`product-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
          {product.isRare && (
            <span className="rare-badge">Rare Find</span>
          )}
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-era">{product.era}</p>
          <p className="product-description">{product.description}</p>
          
          <div className="product-details">
            <span className="product-condition">
              Condition: {product.condition}
            </span>
            <span className="product-origin">
              Origin: {product.origin}
            </span>
          </div>
          
          <div className="product-footer">
            <div className="price-container">
              <span className="product-price">${product.price}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;
