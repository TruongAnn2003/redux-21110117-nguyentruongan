// src/components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../../redux/actions/cartAction';
import './CartPage.css';

const CartPage = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, parseInt(quantity)));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {items.map((item) => (
          <li className="cart-item" key={item.id}>
            <span>{item.name}</span> - ${item.price}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</h3>

      {/* Back to Home button */}
      <button className="back-home-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default CartPage;
