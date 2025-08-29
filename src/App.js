import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Furniture from './pages/Furniture';
import Jewelry from './pages/Jewelry';
import ArtDecor from './pages/ArtDecor';
import Collectibles from './pages/Collectibles';
import About from './pages/About';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage('products');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSearchTerm('');
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderCurrentPage = () => {
    const commonProps = {
      onAddToCart: handleAddToCart,
      onNavigate: handleNavigation
    };

    switch (currentPage) {
      case 'home':
        return <Home {...commonProps} />;
      case 'furniture':
        return <Furniture {...commonProps} />;
      case 'jewelry':
        return <Jewelry {...commonProps} />;
      case 'art':
        return <ArtDecor {...commonProps} />;
      case 'collectibles':
        return <Collectibles {...commonProps} />;
      case 'about':
        return <About {...commonProps} />;
      case 'products':
      default:
        return (
          <ProductList
            onAddToCart={handleAddToCart}
            searchTerm={searchTerm}
          />
        );
    }
  };
    return (
      <div className="App">
        <Header
          cartItemCount={getCartItemCount()}
          onCartClick={handleCartToggle}
          onSearch={handleSearch}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
        
        <main className="main-content">
          {renderCurrentPage()}
        </main>

        <Cart
          cartItems={cartItems}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <Footer />
      </div>
    );
};

export default App;
