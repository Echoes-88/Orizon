// == React Import
import React, { useState } from 'react';

// == Import css
import './card.scss';

import Proposition from './Proposition/Proposition';

// == Quiz in homepage right border on Spoutnik click
const Card = ({
  title, questionsCONFIRMSpropositions, propositions, wiki, description, increaseScore, nextQuestion, isLastQuestion, saveNewAnswer, countAnswers, getResults
}) => {
  const [estViteRepondue, setEstViteRepondue] = useState(false);
  const correctAnswers = questionsCONFIRMSpropositions.map((answer) => answer.id);
  console.log('tableau réponses', correctAnswers)

  const stopAnswering = () => {
    setEstViteRepondue(true);
    const isCorrect = correctAnswers.length === savedAnswers.length && correctAnswers.every((correctAnswer) => savedAnswers.find((savedAnswer) => savedAnswer === correctAnswer));
    if (isCorrect) {
      increaseScore();
      countAnswers('Correct');
    }
    else {
      countAnswers('Incorrect');
    }
    saveNewAnswer(savedAnswers);
  };
  // Array of answers selected

  const [savedAnswers, setSavedAnswers] = useState([]);
  const addSavedAnswer = (id) => {
    setSavedAnswers([...savedAnswers, id]);
  };
  const removedSavedAnswer = (id) => {
    const newSavedAnswers = savedAnswers.filter((answer) => answer !== id);
    setSavedAnswers(newSavedAnswers);
  };

  const nextQuestionFirst = () => {
    setEstViteRepondue(false);
    setSavedAnswers([]);
    nextQuestion();
  };

  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-wiki">{wiki}</p>
      <p className="card-nbanswers">{questionsCONFIRMSpropositions.length} réponse(s) possible(s)</p>
      <form className="card-form">
        {
    propositions.map((proposition) => (
      <Proposition
        key={`prop-${proposition.id}`}
        proposition={proposition}
        description={description}
        rightAnswerIds={correctAnswers}
        estViteRepondue={estViteRepondue}
        addSavedAnswer={addSavedAnswer}
        removedSavedAnswer={removedSavedAnswer}
      />

    ))

  }
      </form>

      {/* booléen estViteRepondue pour faire une condition et afficher un bouton ou l'autre */}
      {!estViteRepondue && <button className="button" type="button" onClick={stopAnswering}>Valider</button>}
      {estViteRepondue && !isLastQuestion && <button className="button" type="button" onClick={nextQuestionFirst}>Suivant</button>}

      {isLastQuestion && estViteRepondue
          && <button className="button" type="button" onClick={getResults}>Voir les résultats</button>}

    </div>
  );
};
export default Card;
