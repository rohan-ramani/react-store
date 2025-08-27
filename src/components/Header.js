import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchTerm);
    }
  }

  handleNavClick = (e, page) => {
    e.preventDefault();
    if (this.props.onNavigate) {
      this.props.onNavigate(page);
    }
  }

  render() {
    const { cartItemCount, onCartClick, currentPage } = this.props;
    
    return (
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>Vintage Treasures</h1>
            <p className="tagline">Authentic Antiques & Collectibles</p>
          </div>
          
          <nav className="navigation">
            <ul>
              <li>
                <a 
                  href="#home" 
                  className={currentPage === 'home' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#furniture" 
                  className={currentPage === 'furniture' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'furniture')}
                >
                  Furniture
                </a>
              </li>
              <li>
                <a 
                  href="#jewelry" 
                  className={currentPage === 'jewelry' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'jewelry')}
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a 
                  href="#art" 
                  className={currentPage === 'art' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'art')}
                >
                  Art & Decor
                </a>
              </li>
              <li>
                <a 
                  href="#collectibles" 
                  className={currentPage === 'collectibles' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'collectibles')}
                >
                  Collectibles
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={currentPage === 'about' ? 'active' : ''}
                  onClick={(e) => this.handleNavClick(e, 'about')}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <form className="search-form" onSubmit={this.handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search antiques..."
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
                className="search-input"
              />
              <button type="submit" className="search-btn">Search</button>
            </form>
            
            <button className="cart-btn" onClick={onCartClick}>
              Cart ({cartItemCount || 0})
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
