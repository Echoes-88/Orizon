/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';

// == Import : local
import './styles.scss';

// == Composant
const Environment = ({ infos }) => {
  return (
    <div className="missions__body__container environment__container">
      <div className="informations__header" />
      <div className="informations__separation">
        {/* Here : separation between header and text */}
      </div>
      <div id="environment" className="missions__description">

        <div className="missions__description__title">
          <h3 className="missions__description__title__mission">
            A quand une écologie dans l'espace ?
          </h3>
        </div>
        <div className="missions__description__goal">
          {infos.pollution_info}
        </div>
      </div>
    </div>
  );
};

// == Export
export default Environment;
