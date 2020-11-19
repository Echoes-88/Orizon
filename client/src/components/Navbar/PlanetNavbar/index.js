// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import moonNav from '../../../assets/images/moon.png';
import marsNav from '../../../assets/images/mars.png';
import jupiterNav from '../../../assets/images/jupiter.png';
// import { toggleSpoutnik } from '../../../actions/spoutnik';

// == Planet navigation bar - homepage - left side
const PlanetNav = ( {togglePlanet, showSpoutnik} ) => {

  const handleTogglePlanet = (id, name) => {
    togglePlanet(id, name);
    showSpoutnik();
  };

  return (
    <div className="barPlanet"> 
      <ul className="navPlanet__background">
        <Link to="/planet/moon">
          <li onClick={() => handleTogglePlanet(1, 'moon')}> <img src={moonNav} className="navPlanet__planets"/> </li>
        </Link>
        <Link to="/planet/mars">
        <li onClick={() => handleTogglePlanet(2, 'mars')}> <img src={marsNav} className="navPlanet__planets"/> </li>
        </Link>
        <Link to="/planet/jupiter">
        <li onClick={() => handleTogglePlanet(3, 'jupiter')}> <img src={jupiterNav} className="navPlanet__planets"/> </li>
        </Link>
      </ul>
    </div>
)};

export default PlanetNav;
