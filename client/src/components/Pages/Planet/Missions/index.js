// == Import : npm
import React from 'react';
import dayjs from 'dayjs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Import : local
import './style.scss';

// == Composants
const Missions = ({ missions }) => {
  const isHuman = (missions) => {
    if (missions.human_mission == true) {
      return 'Mission habitée : oui';
    }
    return 'Mission habitée : non';
  };

  const isInstitutional = (missions) => {
    if (missions.mission_type == 'institutional') {
      return 'Type de mission : institutionnelle';
    }
    return 'Type de mission : commerciale';
  };

  const isReturnFlight = (missions) => {
    if (missions.return_flight == true) {
      return 'Mission avec vol retour : oui';
    }
    return 'Mission avec vol retour : non';
  };

  const formatDate = (missions) => {
    if ((missions.launch_date.includes('01-01')) || (missions.launch_date.includes('12-01'))) {
      const year = dayjs(missions.launch_date).format('YYYY');
      return year;
    }
    const dateFormated = dayjs(missions.launch_date).format('DD/MM/YYYY');
    return dateFormated;
  };

  const imgLinkConverter = (data) => {
    const images = require.context('../../../../assets/images', true);
    const img = images(`./${data}`);
    return img.default;
  };

  const handleMouseOver = (missionId, missionName, programName) => {
    const balise = document.querySelector(`.id-${missionId}`);
    const name = document.createElement('div');
    const nameMission = document.createElement('div');
    const nameProgram = document.createElement('div');
    nameMission.textContent = missionName;
    nameProgram.textContent = programName;
    name.className = 'dot_name';
    balise.appendChild(name);
    name.appendChild(nameMission);
    name.appendChild(nameProgram);
  };

  const handleMouseOut = (missionId) => {
    const balise = document.querySelector(`.id-${missionId}`);
    const name = document.querySelector('.dot_name');
    balise.removeChild(name);
  };

  return (
    <>
      <div className="missions__body">
        {missions.map((elt) => (
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
                <h3 className="missions__description__title__program">
                  INSTITUTION(S) :
                  {elt.institutions.map((inst) => (
                    <div>{inst.name}</div>
                  ))}
                </h3>
                <h3 className="missions__description__title__launch">
                  DATE DE LANCEMENT : {formatDate(elt)}
                </h3>
              </div>

              <div className="mission_line" />
              <div className="missions__description__ishuman">
                {isHuman(elt)}
              </div>

              <div className="missions__description__isinstitutional">
                {isInstitutional(elt)}
              </div>

              <div className="missions__description__isreturn">
                {isReturnFlight(elt)}
              </div>

              <div className="mission_line" />

              <div className="missions__description__goal">
                {elt.mission_goal}
              </div>
            </div>
          </div>
        ))};
      </div>
      <div className="planet__position">
        <div className="missions__body__dot__body">
          {missions.map((elt) => (
            <AnchorLink offset={() => 100}
              href={`#${elt.mission_name.replace(/[^a-zA-Z0-9]/g, '_')}-${elt.id}`}
              className={`missions__body__dot id-${elt.id}`}
              onMouseEnter={() => {
                handleMouseOver(elt.id, elt.mission_name, formatDate(elt));
              }}
              onMouseOut={() => {
                handleMouseOut(elt.id);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
// == Export
export default Missions;
