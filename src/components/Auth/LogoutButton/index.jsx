import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import '../AuthStyles.css'; // Import the CSS file

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="logout-button" onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
};

export default LogoutButton;
