// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../../redux/actions/userActions';
import { useNavigate, useParams } from 'react-router-dom';
import './UserForm.css'; // Import the CSS file

const UserForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const user = users.find((user) => user.id === parseInt(id));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSubmit = () => {
    if (id) {
      dispatch(editUser(parseInt(id), { name, email, phone }));
    } else {
      dispatch(addUser({ id: Date.now(), name, email, phone }));
    }
    navigate('/users');
  };

  return (
    <div className="user-form-container">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="form-input"
      />
      <button onClick={handleSubmit} className="submit-button">
        {id ? 'Update' : 'Add'} User
      </button>
    </div>
  );
};

export default UserForm;
