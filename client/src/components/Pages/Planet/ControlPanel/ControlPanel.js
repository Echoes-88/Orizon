/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Import : local
import './styles.scss';

// == Composant
const ControlPanel = () => {
  return (
    <div className="controlpanel">

      <h3 className="controlpanel-title">Accès rapide</h3>
      <div className="controlpanel-text">
        <AnchorLink offset={() => 100} href="#infos">Informations</AnchorLink>
        <AnchorLink offset={() => 100} href="#geopolitics">Géopolitique</AnchorLink>
        <AnchorLink offset={() => 100} href="#environment">Environnement</AnchorLink>
      </div>

    </div>
  );
};

// == Export
export default ControlPanel;
