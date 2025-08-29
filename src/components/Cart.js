import React, { useEffect } from 'react';

const Cart = ({ cartItems, isOpen, onClose, onRemoveFromCart, onUpdateQuantity }) => {
  useEffect(() => {
  }, [isOpen]);

  const handleRemoveItem = (productId) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(productId);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else if (onUpdateQuantity) {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    alert('Thank you for your interest! Checkout functionality would be implemented here.');
  };
    const total = calculateTotal();

    if (!isOpen) return null;

    return (
      <div className="cart-overlay">
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-cart" onClick={onClose}>×</button>
          </div>

          <div className="cart-content">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <p>Browse our collection of authentic antiques to get started!</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-era">{item.era}</p>
                        <div className="cart-item-controls">
                          <div className="quantity-controls">
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="quantity-btn"
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="quantity-btn"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="remove-btn"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="cart-item-price">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <h3>Total: ${total.toLocaleString()}</h3>
                  </div>
                  <button 
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                  <p className="shipping-note">
                    * Free shipping on orders over $1,000
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Cart;
