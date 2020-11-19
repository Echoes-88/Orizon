/* eslint-disable react/button-has-type */
// == React Import
import React from 'react';

import './styles.scss';

const BurgerMenuButton = ({ drawMenu }) => (
  <button className="toggle-button" onClick={drawMenu}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>

);

export default BurgerMenuButton;
