/* eslint-disable max-len */
// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import '../styles.scss';

// == Planet navigation bar - homepage - left side
const SpoutnikHome = ( { isLogged, username, toggleQuiz }) => (
    <>
      {isLogged && (
        <>

          <p className="spoutnik-speaks-p">Heureux de te revoir <a className="strong">{username}</a> !</p>
          <p className="spoutnik-speaks-p">Que veux tu faire aujourd'hui ?</p>
            <ul>
              <Link to="/planet/moon" className="navStyle" onClick={toggleQuiz}>
                <li>JOUER AU QUIZ</li>
              </Link>
              <Link to="/news" className="navStyle">
                <li>LIRE L'ACTUALITÉ</li>
              </Link>
              <Link to="/profile" className="navStyle">
                <li>CONSULTER TON PROFIL</li>
              </Link>
            </ul>
        </>
      )}
      {!isLogged && (
        <>
          <p className="spoutnik-title">Bienvenue sur Orizon !</p>
          <div className="spoutnik-line"></div>
          <p className="spoutnik-speaks-p">Sur ce site tu pourras découvrir les nombreuses missions spatiales à venir à travers des fiches informatives, des quiz, des actualités...</p>
          <p className="spoutnik-speaks-p">Tu peux accéder aux fiches planètes et missions sans être connecté, si tu veux accéder à toutes les fonctionnalités, n'hésite pas à créer un compte !</p>
        </>
      )}
    </>
  );

export default SpoutnikHome;
