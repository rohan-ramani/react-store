import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  handleAddToCart = () => {
    if (this.props.onAddToCart) {
      this.props.onAddToCart(this.props.product);
    }
  }

  render() {
    const { product } = this.props;
    const { isHovered } = this.state;

    return (
      <div 
        className={`product-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
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
              onClick={this.handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
