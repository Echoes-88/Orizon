// == React Import
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
//= Top
import NavBar from '../../containers/Navbar';
import SignIn from '../../containers/Signin';
import SignUp from '../../containers/Signup';

//= Main & Pages

import Home from '../../containers/Home';
import News from '../../containers/News';

import Profile from '../../containers/Profile';
import NotFound from '../Pages/NotFound';

//= Footer
import Footer from '../Footer';
import AboutUs from '../Pages/AboutUs';
import GeneralConditions from '../Pages/GeneralConditions';

//= Styles
import './styles.scss';

// == App Component
const App = ({ checkIsLogged }) => {
  useEffect(() => {
    checkIsLogged();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/generalconditions" exact component={GeneralConditions} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
/* <Route path="/news/:id" component={News} /> */

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
