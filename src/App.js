import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      isCartOpen: false,
      searchTerm: '',
      currentPage: 'home'
    };
  }

  handleAddToCart = (product) => {
    const existingItem = this.state.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      this.setState({
        cartItems: this.state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, quantity: 1 }]
      });
    }
  }

  handleRemoveFromCart = (productId) => {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== productId)
    });
  }

  handleUpdateQuantity = (productId, newQuantity) => {
    this.setState({
      cartItems: this.state.cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    });
  }

  handleCartToggle = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm, currentPage: 'products' });
  }

  handleNavigation = (page) => {
    this.setState({ currentPage: page, searchTerm: '' });
  }

  getCartItemCount = () => {
    return this.state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  renderCurrentPage = () => {
    const { currentPage, searchTerm } = this.state;
    const commonProps = {
      onAddToCart: this.handleAddToCart,
      onNavigate: this.handleNavigation
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
            onAddToCart={this.handleAddToCart}
            searchTerm={searchTerm}
          />
        );
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          cartItemCount={this.getCartItemCount()}
          onCartClick={this.handleCartToggle}
          onSearch={this.handleSearch}
          onNavigate={this.handleNavigation}
          currentPage={this.state.currentPage}
        />
        
        <main className="main-content">
          {this.renderCurrentPage()}
        </main>

        <Cart
          cartItems={this.state.cartItems}
          isOpen={this.state.isCartOpen}
          onClose={this.handleCartToggle}
          onRemoveFromCart={this.handleRemoveFromCart}
          onUpdateQuantity={this.handleUpdateQuantity}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
