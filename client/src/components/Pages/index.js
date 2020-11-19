// == React Import
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// == Import
import Home from '../../containers/Home';
import News from '../../containers/News';
import Planet from '../../containers/Planets';
import Profile from '../../containers/Profile';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import GeneralConditions from '../Pages/GeneralConditions';
import SignIn from '../../containers/Signin';
import SignUp from '../../containers/Signup';

//= Styles
import './styles.scss';

// == Home page
const Pages = ({ logged }) => (

    <div className="body__homepage">

    </div>

);

// == Export
export default Pages;
