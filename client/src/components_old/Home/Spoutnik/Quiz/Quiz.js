/* eslint-disable max-len */
// == React Import
import React, { useEffect, useState } from 'react';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

// CSS import

import './quiz.scss';

// == Components Import

import Card from './Card/Card';

// == Quiz in homepage right border on Spoutnik click
const Quiz = ({
  fullQuiz, getQuiz, saveScores, saveCurrentQuiz,
}) => {
  // RESTE A FAIRE //

  // Page finale des resultats, 1 - score, 2 - questions bonnes / fausses
  // Récupérer le userid pour envoyer les scores
  // Envoyer bonnes réponses
  // Dire bonjour avec le pseudo
  // This fetches quizzes data from database through middleware

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [allAnswers, setAllAnswers] = useState([]);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(true);

  useEffect(() => {
    getQuiz();
  }, []);

  console.log(fullQuiz);

  const firstQuiz = fullQuiz[0];
  if (!firstQuiz) {
    return '';
  }

  const allQuestions = firstQuiz.questions;
  const question = allQuestions[currentQuestionIndex];

  const nextQuestion = () => {
    const nextQuestionGo = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionGo);
  };

  const saveNewAnswer = (answers) => {
    setAllAnswers([...allAnswers, answers]);
  };

  const countAnswers = (boolean) => {
    setCountCorrectAnswers([...countCorrectAnswers, boolean]);
  };

  const thisQuiz = 1;

  const getResults = () => {
    setIsComplete(true);
    saveCurrentQuiz(thisQuiz, score);
    saveScores();
  };

  // logique d'affichage true false
  // boolean complete pour afficher une conclusion et les résultats

  // DON'T FORGET: intro to quiz

  // Récupérer le firstname dans le state pour l'intro (et le passer en props à Card)

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
  };

  const closeQuiz = () => {
    setOpenQuiz(false);
  };

  // fonction callback

  // Send score and userid to database (username can change)

  const isLastQuestion = currentQuestionIndex + 1 === allQuestions.length;

  return (

    <div className={`quizContainer ${openQuiz ? '' : 'hidden'}`}>
      <CancelRoundedIcon className="closequiz" onClick={closeQuiz} />

      {isComplete && (
      <div className="results">
        <p className="score"> Score : {score}/8 </p>
        {countCorrectAnswers.map((answer, index) => (

          <p className="answers" key={`questionresult-${index}`}>Question {index + 1} : {answer}</p>
        ))}
      </div>
      )}
      {!isComplete
      && (
      <>
        <div className="description">
          <h3 className="welcome">Coucou toi !</h3>
          <p className="intro">Es-tu prêt.e à tester tes connaissances ? Je te propose le {firstQuiz.title}. Tu pourras trouver toutes les réponses sur le site.<br />
            Tu pourras aussi vérifier les bonnes et mauvaises réponses au fur et à mesure (n'oublie pas de cliquer sur "Valider") et passer à la question suivante en cliquant sur "Suivant".
            <br />
            Ton score s'affichera à la toute fin, mais ne rafraîchis pas la page en cours de quiz, tu pourrais perdre ta progression !
          </p>

        </div>
        <Card {...question} increaseScore={increaseScore} nextQuestion={nextQuestion} isLastQuestion={isLastQuestion} saveNewAnswer={saveNewAnswer} countAnswers={countAnswers} getResults={getResults} />
      </>
      )}

    </div>
  );
};

export default Quiz;
