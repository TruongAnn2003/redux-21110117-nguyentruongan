import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductForm from './components/ProductForm';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import UsersPage from './pages/UsersPage';
import { useSelector } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
const App = () => {
  const { message } = useSelector((state) => state.auth);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/users/add" element={<UserForm />} />
          <Route path="/users/edit/:id" element={<UserForm />} />

          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
      {message && <div className="notification">{message}</div>} {/* Hiển thị thông báo */}
    </div>
  );
};

export default App;
