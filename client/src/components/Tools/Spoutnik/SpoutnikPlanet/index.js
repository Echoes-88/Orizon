/* eslint-disable max-len */
// == React Import
import React from 'react';

// == Import
import '../styles.scss';
import Quiz from '../../../../containers/Quiz';

// == Planet navigation bar - homepage - left side
const SpoutnikHome = ( { isLogged, planetName }) => {

  const translate = (planetName) => {
    switch (planetName) {
      case 'moon':
        return 'la Lune';
      case 'mars':
        return 'Mars';
      case 'jupiter':
        return 'Jupiter';
      default:
        return planetName;
    }
  };

  const showQuizOrNot = () => {
    if (planetName === 'moon') {
      if(!isLogged) {
        return <p className="spoutnik-speaks-p">Te voilà sur {translate(planetName)} ! Tu peux partir à sa découverte, si tu veux t'exercer à un quiz tu peux créer un compte en cliquant sur "s'inscrire" !</p>
      } else {
        return <Quiz className="quiz" />;
      }
    } else {
      return <p className="spoutnik-speaks-big">Tu peux admirer ici {translate(planetName)} ! Tu pourras bientôt y découvrir plein d'informations et des quiz, n'hésite pas à revenir !</p>
    }
    
  }

  return (
    <>


      {showQuizOrNot()}


    </>
  );
};

export default SpoutnikHome;
