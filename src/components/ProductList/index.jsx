// ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAction } from '../../redux/actions/productAction';
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = (productId) => {
    dispatch(deleteAction(productId));
  };

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <ul className="product-items">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <span>
              {product.name} - ${product.price}
            </span>
            <div className="product-actions">
              <button className="edit-button" onClick={() => navigate(`/products/edit/${product.id}`)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={() => navigate('/products/add')}>
        Add New Product
      </button>
    </div>
  );
};

export default ProductList;
