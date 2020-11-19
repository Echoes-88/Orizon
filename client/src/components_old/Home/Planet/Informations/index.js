/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';

// == Import : local
import './style.scss';

// == Composant
const Informations = ({ infos }) => {
  const array = [];
  for (const [key, value] of Object.entries(infos)) {
    if ((key != 'name') && (key != 'description') && (key != 'id') && (key != 'position') && (key != 'is_planet') && (key != 'picture_link') && (key != 'missions')) {
      array.push(`${key} : ${value}`);
    }
  }
  return (
    <div className="informations__body">
      <div className="informations__header" />
      <div className="informations__separation">
        {/* Here : separation between header and text */}
      </div>
      <h3 className="informations__title">
        {infos.name}
      </h3>
      <ul className="informations__list">
        {array.map((elt) => (
          <li>{elt}</li>
        ))}
      </ul>
      <div className="informations__description">
        {infos.description}
      </div>
    </div>
  );
};

// == Export
export default Informations;
