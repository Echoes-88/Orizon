// == React Import
import React, { useState } from 'react';

// == Import
import './styles.css';
import Catastronaut from '../../../assets/images/catastronaut.png';
import Quiz from '../../../containers/Quiz';

// == Spoutnik in homepage right border

const Spoutnik = () => {
  const [toggleQuiz, setToggleQuiz] = useState(false);
  const displayQuiz = () => {
    setToggleQuiz(!toggleQuiz);
  };
  return (
    <>
      <div className="spoutnik_cat" onClick={displayQuiz}>
        <img src={Catastronaut} alt="Spoutnik the cat" />
      </div>
      {toggleQuiz
    && <Quiz className="quiz" />}
    </>
  );
};

export default Spoutnik;
