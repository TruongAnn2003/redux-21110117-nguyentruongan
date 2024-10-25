// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/products" style={{ marginRight: '10px' }}>
          Products
        </Link>
      </nav>

      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the application.</p>
    </div>
  );
};

export default HomePage;
