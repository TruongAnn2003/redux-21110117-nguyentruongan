// HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import LogoutButton from '../../components/Auth/LogoutButton';

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product, 1));
    showSuccessMessage(`${product.name} added to cart successfully!`);
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/products" style={{ marginRight: '10px' }}>
          Products
        </Link>
        <Link to="/cart" style={{ marginRight: '10px' }}>
          Cart
        </Link>
        <Link to="/users" style={{ marginRight: '10px' }}>
          Users
        </Link>
        <Link to="/login" style={{ marginRight: '10px' }}>
          Login
        </Link>
      </nav>

      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the application.</p>

      {successMessage && (
        <div
          style={{ margin: '10px 0', padding: '10px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '4px' }}
        >
          {successMessage}
        </div>
      )}

      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span> - ${product.price}
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default HomePage;
