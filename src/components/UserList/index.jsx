// src/components/UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/actions/userActions';
import './UserList.css';

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className="user-list-container user-list">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/users/add">Add New User</Link>
    </div>
  );
};

export default UserList;
