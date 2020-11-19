// == Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Field from '../../containers/Field';
import './styles.scss';

const Connexion = ({
  open, toggle, login, loginMessage, logged,
}) => {
  // Classnames stored for the toggle state
  const classnames = classNames('connexion', { 'connexion--open': open });
  // const newclass = classNames('loginMessage', { 'loginMessage--on': logged });

  const handleOnClick = () => {
    console.log('passage toggle');
    toggle();
  };

  // Prevent page loading at form sending
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };
  if (!logged) {
    return (
      <div className={classnames}>
        <form className="connexion__connexionForm" onSubmit={handleOnSubmit}>
          <Field
            name="username"
            placeholder="username"
          />
          <Field
            name="password"
            placeholder="password"
            type="password"
          />
          <button
            className="connexion__sendingForm"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  {/* <button	
        className="connexion__openToggler"	
        type="button"	
        onClick={handleOnClick}	
      >	
        Sign In Navbar	
      </button> */}

  return (
    <div className="blabla">{loginMessage}</div>
  );
};
Connexion.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Connexion;
