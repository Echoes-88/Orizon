/* eslint-disable react/button-has-type */
// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import OrizonLogo from '../../assets/images/logowhite.png';
// import SignUp from '../SignUp';

// == Header
const Navbar = ({ logged, logout }) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    logout();
  };

  if (logged === true) {
    return (
      <nav>
        <h3 className="navbar-logo">
          <Link to="/">
          <img src={OrizonLogo} className="logo-img" />
          </Link>
        </h3>
        <ul className="nav-links">
          <Link to="/news" className="navStyle">
            <li> Actualités </li>
          </Link>
          <Link to="/profile" className="navStyle">
            <li> Profil </li>
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
        <Link to="/">
        <img src={OrizonLogo} className="logo-img" />
        </Link>
      </h3>
      <ul className="nav-links">
        <Link to="/signin" className="navStyle">
          <li> Se Connecter </li>
        </Link>
        <Link to="/signup">
          <button className="tululu"> S'inscrire </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
