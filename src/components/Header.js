import React, { useState, useCallback, memo } from 'react';

const Header = memo(({ cartItemCount, onCartClick, onSearch, onNavigate, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  }, [onSearch, searchTerm]);

  const handleNavClick = useCallback((e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  }, [onNavigate]);

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
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#furniture" 
                className={currentPage === 'furniture' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'furniture')}
              >
                Furniture
              </a>
            </li>
            <li>
              <a 
                href="#jewelry" 
                className={currentPage === 'jewelry' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'jewelry')}
              >
                Jewelry
              </a>
            </li>
            <li>
              <a 
                href="#art" 
                className={currentPage === 'art' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'art')}
              >
                Art & Decor
              </a>
            </li>
            <li>
              <a 
                href="#collectibles" 
                className={currentPage === 'collectibles' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'collectibles')}
              >
                Collectibles
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={currentPage === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search antiques..."
              value={searchTerm}
              onChange={handleSearchChange}
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
});

export default Header;
