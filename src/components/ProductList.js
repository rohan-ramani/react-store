import React, { useState, useCallback, useMemo, memo } from 'react';
import ProductCard from './ProductCard';

const ProductList = memo(({ onAddToCart, searchTerm }) => {
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [products] = useState([
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
      id: 3,
      name: "Ming Dynasty Porcelain Vase",
      era: "Ming Dynasty (16th Century)",
      description: "Rare blue and white porcelain vase with traditional dragon motifs.",
      price: 8500,
      condition: "Good",
      origin: "China",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      inStock: true,
      isRare: true,
      category: "art"
    },
    {
      id: 4,
      name: "Edwardian Silver Tea Set",
      era: "Edwardian Era (1905)",
      description: "Complete sterling silver tea service with ornate engravings and original hallmarks.",
      price: 1200,
      condition: "Excellent",
      origin: "England",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      inStock: false,
      isRare: false,
      category: "collectibles"
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
    }
  ]);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleFilterChange = useCallback((e) => {
    setFilterBy(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Apply search filter if provided
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.era.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filterBy !== 'all') {
      filtered = filtered.filter(product =>
        product.category === filterBy
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'era':
          return a.era.localeCompare(b.era);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchTerm, filterBy, sortBy]);

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h2>Our Antique Collection</h2>
        <div className="controls">
          <div className="filter-control">
            <label htmlFor="filter">Filter by Category:</label>
            <select
              id="filter"
              value={filterBy}
              onChange={handleFilterChange}
            >
              <option value="all">All Categories</option>
              <option value="furniture">Furniture</option>
              <option value="jewelry">Jewelry</option>
              <option value="art">Art & Decor</option>
              <option value="collectibles">Collectibles</option>
            </select>
          </div>
          
          <div className="sort-control">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="era">Era</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default ProductList;
