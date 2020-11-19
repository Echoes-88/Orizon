// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import ErrorPage from '../../../assets/images/errorpage.png';

// == Not Found Page
const NotFound = () => (

  <div className="notfound"> <div className="notfound_container">
  <img src={ErrorPage} className="errorimage" /></div>
  <h1 className="notfound_title">404</h1>
    <Link to="/"> <button className="back_home">retour</button> </Link>
    
  </div>
);

// == Export
export default NotFound;
