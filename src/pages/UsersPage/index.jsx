// src/components/UsersPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../../components/UserList';
import './UsersPage.css'; // Import the CSS file

const UsersPage = () => {
  return (
    <div className="users-page-container">
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
      <h1>User List</h1>
      <UserList />
    </div>
  );
};

export default UsersPage;
