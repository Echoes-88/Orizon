// == Import : npm
import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

// == Import : local
import './style.scss';

// == Composants
const Missions = ({ infos }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isHuman = (infos) => {
    if (infos.human_mission == true) {
      return 'Mission habitée : oui';
    }
    return 'Mission habitée : non';
  };

  const isInstitutional = (infos) => {
    if (infos.mission_type == 'institutional') {
      return 'Type de mission : institutionnelle';
    }
    return 'Type de mission : commerciale';
  };

  const isReturnFlight = (infos) => {
    if (infos.return_flight == true) {
      return 'Mission avec vol retour : oui';
    }
    return 'Mission avec vol retour : non';
  };

  const formatDate = (infos) => {
    if ((infos.launch_date.includes('01-01')) || (infos.launch_date.includes('12-01'))) {
      const year = dayjs(infos.launch_date).format('YYYY');
      return year;
    }
    const dateFormated = dayjs(infos.launch_date).format('DD/MM/YYYY');
    return dateFormated;
  };

  const imgLinkConverter = (data) => {
    const images = require.context('../../../../assets/images', true);
    const img = images(`./${data}`);
    return img.default;
  };

  // const min = 1;
  // const max = 100;
  // const randomNumber = () => {
  //   Math.round((Math.random() * (min - max)) + min);
  // };

  return (
    <>
      <div className="missions__body">
        {infos.map((elt) => (
          <div className="missions__body__container" id={`${elt.mission_name.replace(/[^a-zA-Z0-9]/g, '_')}-${elt.id}`}>
            <div className="missions__header">
              <div className="missions__image__container">
                <img className="missions__image" alt={elt.mission_name} src={imgLinkConverter(elt.picture_link)} />
              </div>

            </div>
            <div className="missions__description">
              <div className="missions__description__title">
                <h3 className="missions__description__title__mission">
                  MISSION : {elt.mission_name}
                </h3>
                <h3 className="missions__description__title__program">
                  PROGRAMME : {elt.program_name}
                </h3>

                <h3 className="missions__description__title__launch">
                  DATE DE LANCEMENT : {formatDate(elt)}
                </h3>
              </div>
              <div className="missions__description__ishuman">
                {isHuman(elt)}
              </div>

              <div className="missions__description__isinstitutional">
                {isInstitutional(elt)}
              </div>

              <div className="missions__description__isreturn">
                {isReturnFlight(elt)}
              </div>

              <div className="missions__description__goal">
                {elt.mission_goal}
              </div>
            </div>
          </div>
        ))};
      </div>
      <div className="missions__body__dot__container">
        <div className="missions__body__dot__body">
          {infos.map((elt) => (
            <a href={`#${elt.mission_name.replace(/[^a-zA-Z0-9]/g, '_')}-${elt.id}`} className={`missions__body__dot id-${elt.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};
// == Export
export default Missions;
