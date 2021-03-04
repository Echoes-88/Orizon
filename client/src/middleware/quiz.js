import axios from 'axios';
import { adressIp } from '../config';
// actions import (callbacks)
import { GETQUIZ, saveQuizData, SAVE_SCORES } from '../actions/quiz';
import { updateSessionQuiz } from '../actions/user';

const getFullQuiz = (store) => (next) => (action) => {
  switch (action.type) {
    // Retrieves score from database
    case GETQUIZ: {
      // This request gets all quizzes stored in database
      axios.get(`${adressIp}/api/handlequiz/`)
        .then((response) => {
          // Stores data in initial state
          store.dispatch(saveQuizData(response.data));
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      break;
    }
    // Sends score back to database with user id, quiz id and score
    case SAVE_SCORES: {

      const state = store.getState();
      axios.post(`${adressIp}/api/handlequiz/save/${state.user.session.id}`, {
        id: state.user.session.id,
        quizid: state.quiz.currentquiz,
        score: state.quiz.score,
      },{
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(updateSessionQuiz(response.data));

          console.log('Score sauvegardé');
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default getFullQuiz;