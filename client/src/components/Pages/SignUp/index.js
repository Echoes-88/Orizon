// == Import React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Field from '../../../containers/Field';
import Spoutnik from '../../../containers/Spoutnik';
import './styles.scss';

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
      <div className="signup_title">
        Inscription
      </div>

      <form className="signup__connexionForm" onSubmit={handleOnSubmit}>
        <Field
          name="firstname"
          placeholder="prénom"
        />
        <Field
          name="lastname"
          placeholder="nom"
        />
        <Field
          name="username"
          placeholder="pseudo"
        />
        <Field
          name="email"
          placeholder="email"
        />
        <Field
          name="birthday"
          className="field"
          placeholder="1996-11-23"
          type="date"
        />
        <Field
          name="password"
          placeholder="mot de passe"
          type="password"
        />
        <Field
          name="passwordConfirm"
          placeholder="confirmation mot de passe"
          type="password"
        />
        <button
          className="validation_Buttons"
          type="submit"
        >
          Valider
        </button>
      </form>
      <div className="bloublou">
      {signupmessage}
      </div>
      <Spoutnik />
    </div>
  );
};

signUp.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default signUp;
