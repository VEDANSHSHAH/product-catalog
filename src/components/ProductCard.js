import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="card">
    <Link to={`/product/${product.id}`}>
      <div className="card-img-wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <span>{product.category}</span>
    </Link>
  </div>
);

export default ProductCard;
