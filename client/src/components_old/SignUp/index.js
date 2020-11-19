// == Import React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Field from '../../containers/Field';
// import './styles.scss';

const signUp = ({ open, toggle, signup, signupmessage }) => {
  // Classnames stored for the toggle state
  const classnames = classNames('signup', { 'signup--open': open });

  const handleOnClick = () => {
    toggle();
  };

  // Prevent page loading at form sending
  const handleOnSubmit = (event) => {
    event.preventDefault();
    signup();
  };

  return (
    <div className={classnames}>
      <button
        className="signup__openToggler"
        type="button"
        onClick={handleOnClick}
      >
        Sign Up Navbar
      </button>

      <form className="signup__connexionForm" onSubmit={handleOnSubmit}>
        <Field
          name="firstname"
          placeholder="firstname"
        />
        <Field
          name="lastname"
          placeholder="lastname"
        />
        <Field
          name="username"
          placeholder="username"
        />
        <Field
          name="email"
          placeholder="email"
        />
        <Field
          name="birthday"
          className="field"
          placeholder="yyyy-mm-dd"
          type="date"
        />
        <Field
          name="password"
          placeholder="password"
          type="password"
        />
        <Field
          name="passwordConfirm"
          placeholder="passwordConfirm"
          type="password"
        />
        <button
          className="connexion__sendingForm"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="bloublou">
      {signupmessage}
      </div>
    </div>
  );
};

signUp.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default signUp;
