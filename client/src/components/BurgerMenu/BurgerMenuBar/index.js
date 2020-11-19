/* eslint-disable react/button-has-type */
// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const BurgerMenuBar = ({ logged, logout }) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    logout();
  };
  if (logged === true) {
    return (
      <nav className="test2">
        <ul>
        <Link to="/">
            <li className="navLinks_burger"> Accueil </li>
          </Link>
          <Link to="/news">
            <li className="navLinks_burger"> Actualités </li>
          </Link>
          <Link to="/profile">
            <li className="navLinks_burger"> Profil </li>
          </Link>
          <button
            className="blue_button"
            onClick={handleOnClick}
          >
            Déconnexion
          </button>
        </ul>
      </nav>

    );
  }
  return (
    <nav className="test2">
      <ul>
      <Link to="/">
            <li className="navLinks_burger"> Accueil </li>
          </Link>
        <Link to="/signin">
          <li className="navLinks_burger"> Connexion </li>
        </Link>
        <Link to="/signup">
          <button className="sinup_button"> Inscription </button>
        </Link>
      </ul>
    </nav>
  );
};

export default BurgerMenuBar;
