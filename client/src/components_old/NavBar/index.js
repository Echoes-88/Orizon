/* eslint-disable react/button-has-type */
// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
// import SignUp from '../SignUp';

// == Header
const Navbar = ({ logged, logout }) => {
  const handleOnClick = (event) => {
    console.log('Est ce que ça passe dans le component ?');
    event.preventDefault();
    logout();
  };

  if (logged === true) {
    return (
      <nav>
        <h3 className="navbar-logo">
          <Link to="/" className="navStyle">
            Logo
          </Link>
        </h3>
        <ul className="nav-links">
          <Link to="/news" className="navStyle">
            <li> News </li>
          </Link>
          <Link to="/profile" className="navStyle">
            <li> Profile </li>
          </Link>
          <button
            className="tululu"
            onClick={handleOnClick}
          >
            Déconnexion
          </button>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <h3 className="navbar-logo">
        <Link to="/" className="navStyle">
          Logo
        </Link>
      </h3>
      <ul className="nav-links">
        <Link to="/signup" className="navStyle">
          <li> Signup </li>
        </Link>
        <Link to="/signin" className="navStyle">
          <li> Sign In </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
