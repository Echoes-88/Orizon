// == React Import
import React from 'react';

// == Import
import PlanetNav from './PlanetNav';
import Planet from '../../containers/Planets';
import Spoutnik from './Spoutnik';
import Scene from './Three';

//= Styles
import './styles.scss';

// == Home page
const Home = ({ logged }) => (

  <div className="body__homepage">
    <PlanetNav /> {/* Planet navbar to the left side of the homepage */}
    <div className="missions__current">
      {/* WARNING : WHERE IS THE DASH */}
      {/* <Missions /> */}
    </div>
    {/* <div className="planets_information">
      Planets information
    </div> */}
    <div className="planet__body">
      <div className="planet__position">
        <Scene />
      </div>
      <Planet />
      {/* <div className="missions_spot">
          Missions spots
        </div> */}

    </div>
    <Spoutnik />
    {/* {
      logged && <Spoutnik />
      } */}
  </div>
);

// == Export
export default Home;
