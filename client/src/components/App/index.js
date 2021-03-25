// == React Import
import React, { useEffect, useState, Link } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
//= Top
import NavBar from '../../containers/Navbar';
import SignIn from '../../containers/Signin';
import SignUp from '../../containers/Signup';
import BurgerMenu from '../BurgerMenu';
import OrizonLogo from '../../assets/images/logowhite.png';

//= Main & Pages
import Home from '../../containers/Home';
import News from '../../containers/News';
import Planet from '../../containers/Planets';
import PlanetThree from '../Pages/Planet/PlanetThree';
import Profile from '../../containers/Profile';
import NotFound from '../Pages/NotFound';

//= Footer
import Footer from '../Footer';
import AboutUs from '../Pages/AboutUs';
import GeneralConditions from '../Pages/GeneralConditions';
import Animals from '../Pages/Animals/animals';

//= Styles
import './styles.scss';

// == App Component
const App = ({
  checkIsLogged, isLogged, hasSignedUp, isPlanetDisplayed, currentPlanetName, getPlanetDatas
}) => {
// burger menu
  const [openBurger, setOpenBurger] = useState(
    window.matchMedia('(max-width:750px)').matches,
  );
  const [closeNav, setCloseNav] = useState(
    window.matchMedia('(min-width:750px)').matches,
  );
  // end burger menu
  useEffect(() => {
    window.addEventListener('resize', () => {
      setOpenBurger(window.matchMedia('(max-width:1000px)').matches);
      setCloseNav(window.matchMedia('(min-width:1000px)').matches);
    });
    checkIsLogged();
  }, []);

  return (
    <Router>
      <div className="app">
        {closeNav
        && <NavBar /> }

        {openBurger
        && <BurgerMenu />}

        {isPlanetDisplayed && (
          <PlanetThree currentPlanet={currentPlanetName} />
        )}
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/planet/:slug" exact component={Planet} />
            {isLogged && (
            <>
            <Route path="/news" exact component={News} />
            <Route path="/profile" exact component={Profile} />
            </>
            )}
            <Route path="/signin" exact component={SignIn}>
              {/* {isLogged ? <Redirect to="/" exact /> : <SignIn />} */}
            </Route>
            <Route path="/signup" exact component={SignUp}>
              {hasSignedUp ? <Redirect to="/signin" exact /> : <SignUp />}
            </Route>
            <Route path="/aboutus" exact component={AboutUs} />
            {/* <Route path="/cosmo_miaou" exact component={Animals} /> */}

            <Route path="/generalconditions" exact component={GeneralConditions} />
            <Route path="/cosmo_miaou" exact component={Animals} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
