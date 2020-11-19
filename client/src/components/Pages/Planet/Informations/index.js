/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';

// == Import : local
import './style.scss';

// == Composant
const Informations = ({ infos }) => {
  const isPlanet = (infos) => {
    if (!infos.is_planet) {
      return 'Catégorisée comme planète ? : Non';
    }
    return 'Catégorisée comme planète ? : Oui';
  };
  const massPlanet = (infos) => {
    if (infos.mass == 7347730924573500000000) {
      return 'Masse : 7,342 × 10²² kg';
    }
    return 'Masse : 7347730924573500000000 kg';
  };
  const imgLinkConverter = (data) => {
    const images = require.context('../../../../assets/images', true);
    const img = images(`./${data}`);
    return img.default;
  };
  return (
      <div id="infos" className="missions__body__container">
        <div className="missions__header">
          {/* <div className="missions__image__container">
        <img className="missions__image" alt={infos.name} src={imgLinkConverter(infos.picture_link)} />
      </div> */}
        </div>
        <div className="missions__description">
          <div className="missions__description__title">
            <h3 className="missions__description__title__mission">
              Nom : {infos.name}
            </h3>
            <h3 className="missions__description__title__program">
              {isPlanet(infos)}
            </h3>

            <h3 className="missions__description__title__launch">
              Découverte par : {infos.discovered_by}
            </h3>
          </div>

          <div className="mission_line" />
          <div className="missions__description__ishuman">
            <div>
              {massPlanet(infos)}
            </div>
            <div>
              Surface : {infos.surface} km²
            </div>
            <div>
              Gravitée : {infos.gravity} m/s²
            </div>
          </div>

          <div className="missions__description__isinstitutional">
            <div>
              Température minimale : {infos.temp_min} °C
            </div>
            <div>
              Température maximale : {infos.temp_max} °C
            </div>
            <div>
              Température moyenne : {infos.temp_average} °C
            </div>
          </div>

          <div className="missions__description__isreturn">
            <div>
              Rotation synodique (période de rotation autour de la Terre) : {infos.sidereal_orbit} jours
            </div>
            <div>
              Rotation sidérale : (période de rotation sur elle-même) : {infos.sidereal_rotation} jours
            </div>
            <div>
              Vitesse de rotation autour de la Terre : {infos.rotation_speed} km/h
            </div>
          </div>

          <div className="mission_line" />

          <div className="missions__description__goal">
            {infos.description}
          </div>
        </div>
      </div>

  );
};

// == Export
export default Informations;
