// src/components/UserDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './UserDetails.css'; // Import the CSS file

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.users.find((user) => user.id === parseInt(id)));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-detail">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
      <Link to={`/users/edit/${user.id}`} className="edit-link">
        Edit User
      </Link>
    </div>
  );
};

export default UserDetails;
