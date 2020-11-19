// == Import : npm
import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import PropTypes from 'prop-types';
// import Informations from './Informations';
import PlanetNavbar from '../../../containers/PlanetNavbar';
import Missions from './Missions';
import Informations from './Informations';
import Spoutnik from '../../../containers/Spoutnik';
import Geopolitics from './Geopolitics';
import Environment from './Environment';
import ControlPanel from './ControlPanel/ControlPanel';

// == Import : local
import './style.scss';
import { hideQuiz } from '../../../actions/quiz';

// == Composant
const Planet = ({
  getPlanetDatas, planetInfos, planetMissions, hideQuiz, displayPlanet, currentPlanet,
}) => {
  useEffect(() => {
    displayPlanet();
    getPlanetDatas();
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.missions__body__container').forEach(
        (element) => {
          const scrollY = element.getBoundingClientRect().top;
          if (scrollY < window.innerHeight && scrollY > 0 && !element.classList.contains('active')) {
            element.classList.add('active');
          }
          else if ((scrollY >= window.innerHeight || scrollY <= 0) && element.classList.contains('active')) {
            element.classList.remove('active');
          }
        },
      );
    });
  }, []);

  useEffect(() => () => {
    hideQuiz();
    displayPlanet();
  }, []);

  const movingContainer = document.querySelectorAll('.specialquiz');

  useEffect(() => () => {
    document.querySelectorAll('.specialquiz').forEach(
      (elementtwo) => {
        const heightContainer = elementtwo.getBoundingClientRect().height;
        console.log(heightContainer);
        if (heightContainer < 400 && !elementtwo.classList.contains('movedown')) {
          console.log('coucou');
          elementtwo.classList.add('movedown');
        }
        else if (heightContainer > 200 && elementtwo.classList.contains('movedown')) {
          elementtwo.classList.remove('movedown');
        }
      },
    );
  }, [movingContainer]);

  // ScrollOut({
  //   offset: 100,
  //   // onShown(el) {
  //   //   // use the web animation API
  //   //   el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  //   // },
  //   // onHidden(el) {
  //   //   // hide the element initially
  //   //   el.style.opacity = 0;
  //   // },
  // });

  //   let so = ScrollOut();

  //   so.teardown();

  //   setTimeout(() => {
  //     so = ScrollOut({
  //       cssProps: {
  //         visibleY: true,
  //         viewportY: true,
  //       },
  //     });
  //   });
  // console.log(currentPlanet);
  if (currentPlanet == 'moon') {
    return (
      <div className="body__homepage">

        <PlanetNavbar />
        <ControlPanel />
        <Informations infos={planetInfos} />
        <Geopolitics infos={planetInfos} />
        <Environment infos={planetInfos} />
        <Missions missions={planetMissions} />
        <Spoutnik />
      </div>
    );
  }
  return (
    <div className="body__homepage">

      <PlanetNavbar />

      <Spoutnik />
    </div>
  );
};
Planet.propTypes = {

};

// == Export
export default Planet;
