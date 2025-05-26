import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ searchTerm, setSearchTerm, categories, selectedCategory, setSelectedCategory }) => (
  <div className="filter-bar">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((cat, i) => (
        <option key={i} value={cat}>{cat}</option>
      ))}
    </select>
  </div>
);

export default FilterBar;
