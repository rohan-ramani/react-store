import React, { useState, useCallback, useMemo } from 'react';
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

  const handleAddToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const handleRemoveFromCart = useCallback((productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  }, []);

  const handleUpdateQuantity = useCallback((productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  const handleCartToggle = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage('products');
  }, []);

  const handleNavigation = useCallback((page) => {
    setCurrentPage(page);
    setSearchTerm('');
  }, []);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const renderCurrentPage = useCallback(() => {
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
  }, [currentPage, searchTerm, handleAddToCart, handleNavigation]);

  return (
    <div className="App">
      <Header
        cartItemCount={cartItemCount}
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
