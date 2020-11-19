// == React Import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Not Found Page
const NotFound = () => (

  <div className="notfound"> <h1>404 <br/>
    not found page</h1>
    <Link to="/" className="notfound_back"> back </Link>
  </div>
);

// == Export
export default NotFound;
