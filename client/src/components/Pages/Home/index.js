// == Import : npm
import React, { useEffect } from 'react';

import Spoutnik from '../../../containers/Spoutnik';
import PlanetNavbar from '../../../containers/PlanetNavbar';

// == Composant
const Home = ({ displayPlanet }) => {

  useEffect(() => {
    displayPlanet();
  }, []);

  useEffect(() => {
    return () => {
      displayPlanet();
    };
  }, []);

  return(
  <>
    <PlanetNavbar />
    <Spoutnik />
  </>
)};

// == Export
export default Home;
