// ProductPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import './ProductPage.css'; // Import CSS file for styling

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <header className="product-page-header">
        <h1>Product List</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </header>
      <ProductList />
    </div>
  );
};

export default ProductPage;
