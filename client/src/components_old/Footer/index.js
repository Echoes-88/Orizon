// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Footer page
const Footer = () => (
  <footer>
    <ul className="wrap">
      <Link to="/aboutus" className="name">
        <li className="title"> About us </li>
      </Link>
      <Link to="/generalconditions" className="name">
        <li className="title"> Mentions légales </li>
      </Link>
      <li className="title"> Orizon 2020 all rights reserved </li>
    </ul>
  </footer>
);

export default Footer;
