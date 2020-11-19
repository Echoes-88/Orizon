import React, { useState } from 'react';

import './proposition.scss';

const Proposition = ({
  proposition, description, rightAnswerIds, estViteRepondue, addSavedAnswer,
  removedSavedAnswer,
}) => {
  const [is, setIs] = useState('');

  const saveAnswers = (event) => {
    const answerId = parseInt(event.target.id, 10);
    if (is !== '') {
      setIs('');
      removedSavedAnswer(answerId);
    }
    else if (rightAnswerIds.find((rightAnswerId) => answerId === rightAnswerId)) {
      setIs('true');
      addSavedAnswer(answerId);
    }
    else {
      setIs('false');
      addSavedAnswer(answerId);
    }
  };

  return (
    <div className={`card-answer ${estViteRepondue ? is : ''}`}>
      <input
      className="card-input"
        type="checkbox"
        key={`prop-${proposition.id}`}
        id={proposition.id}
        name={description}
        onChange={saveAnswers}
        value={proposition.description}
        disabled={estViteRepondue}
      />
      <label htmlFor={proposition.id}>{proposition.description} </label>
    </div>
  );
};

export default Proposition;
