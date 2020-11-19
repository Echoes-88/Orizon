// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Moon from './Moon';
import Informations from './Informations';
import Missions from './Missions';

// == Import : local
import './style.scss';

// == Composant
const Planet = ({
  datasFromInformation,
  clickOnInformation,
  datasInformationReady,
  datasFromMission,
  clickOnMission,
  datasMissionReady,
}) => (
  <div className="planet__container">
    {/* planet__body : CSS for 2D / three.js importation for 3D */}
    {/* <div className="planet__body"> */}
      {/* <Moon /> */}
      {/* planet__title : show when we are in the top / hide when we scroll */}
      {/* <h2 className="planet__title">The Moon</h2> */}
      {/* planet__spot : appears when we scroll and the title disappears */}
      {/* <div className="planet__spot"> o </div>
    </div> */}

    {/* missions : function to display missions card when we click on the spot */}
    <button type="button" className="informations" onClick={clickOnInformation}> bouton </button>
    {datasInformationReady && (
      <Informations infos={datasFromInformation} />
    )}

    {/* missions : function to display missions card when we click on the spot */}
    {/* <Route exact path={'/moon'} component={Missions} /> */}
    <button type="button" className="missions" onClick={clickOnMission}> bouton </button>
    {datasMissionReady && (
      <Missions infos={datasFromMission} />
    )}
  </div>
);

Planet.propTypes = {
  datasFromInformation: PropTypes.array.isRequired,
  clickOnInformation: PropTypes.func.isRequired,
  datasInformationReady: PropTypes.bool.isRequired,
  datasFromMission: PropTypes.array.isRequired,
  clickOnMission: PropTypes.func.isRequired,
  datasMissionReady: PropTypes.bool.isRequired,
};

// == Export
export default Planet;
