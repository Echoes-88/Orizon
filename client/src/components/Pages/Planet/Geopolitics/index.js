/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';

// == Import : local
import './styles.scss';

// == Composant
const Geopolitics = ({ infos }) => {
  return (
    <div className="geopolitics__container">
      <div id="geopolitics" className="missions__body__container">
        {/* <div className="missions__header">
          <div className="missions__image__container">
            <img className="missions__image" alt={infos.name} src={imgLinkConverter(infos.picture_link)} />
          </div>
        </div> */}
        <div className="missions__description">
        <div className="missions__description__title">
          <h3 className="missions__description__title__mission">
            A qui appartient la Lune ?
          </h3>
        </div>
        <div className="mission_line" />
          <div className="missions__description__goal">
            {infos.geopolitics_info}
          </div>
        </div>
      </div>
    </div>

  );
};

// == Export
export default Geopolitics;
