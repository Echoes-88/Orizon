/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
// == React Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

// Material UI Import for closing button
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

// == Import
import './styles.scss';
import Catastronaut from '../../../assets/images/spoutnik.png';
import SpoutnikHome from './SpoutnikHome';
import SpoutnikPlanet from './SpoutnikPlanet';

const Spoutnik = ({
  toggleSpoutnik,
  spoutnikSpeaks,
  isLogged,
  username,
  toggleQuiz,
  showQuiz,
  planetName,
  hasSignedUp,
}) => {
  const handleToggleQuiz = () => {
    toggleQuiz();
  };

  const handleShowQuiz = () => {
    showQuiz();
  };

  const handleClickOnSpoutnik = () => {
    toggleSpoutnik();
  };



  return (

    <div className="spoutnik">

      <img src={Catastronaut} alt="Spoutnik the cat" onClick={handleClickOnSpoutnik} />

      {spoutnikSpeaks && (

        <>

          <Switch>

            <Route exact path="/">
              <div className="spoutnik-speaks">

                <CancelRoundedIcon className="closeSpoutnik" onClick={toggleSpoutnik} />

                <SpoutnikHome isLogged={isLogged} username={username} handleToggleQuiz={handleToggleQuiz} />
              </div>
            </Route>

            <Route path="/planet/:slug">
              <div className="spoutnik-speaks specialquiz">

                <CancelRoundedIcon className="closeSpoutnik" onClick={toggleSpoutnik} />

                <SpoutnikPlanet isLogged={isLogged} planetName={planetName} handleShowQuiz={handleShowQuiz} handleToggleQuiz={handleToggleQuiz} toggleQuiz={toggleQuiz} />
              </div>
            </Route>

            <Route exact path="/signin">
              <div className="spoutnik-speaks signupin-position">

                <CancelRoundedIcon className="closeSpoutnik" onClick={toggleSpoutnik} />

                <p className="spoutnik-speaks-p">Connecte-toi ici, si tu n'a pas de compte tu peux en créer un en cliquant sur signup !</p>
              </div>
            </Route>

            <Route exact path="/signup">
              <div className="spoutnik-speaks signupin-position">

                <CancelRoundedIcon className="closeSpoutnik" onClick={toggleSpoutnik} />

                {hasSignedUp && (
                <p className="spoutnik-speaks-p">Ton inscription est validée ! Tu peux maintenant te connecter</p>
                )}
                <p className="spoutnik-speaks-p">Tu peux ici créer un compte qui te donnera accès aux quiz et aux actualités !</p>
              </div>
            </Route>

          </Switch>

        </>
      )}

    </div>

  );
};

Spoutnik.propTypes = {
  toggleSpoutnik: PropTypes.func.isRequired,
  spoutnikSpeaks: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  toggleQuiz: PropTypes.func.isRequired,
  showQuiz: PropTypes.func.isRequired,
  planetName: PropTypes.string.isRequired,
  hasSignedUp: PropTypes.bool.isRequired,
};

export default Spoutnik;
