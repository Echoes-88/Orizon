// Actions import
import { SAVE_QUIZ_DATA, SAVE_CURRENT_QUIZ, TOGGLE_QUIZ, HIDE_QUIZ, SHOW_QUIZ } from '../actions/quiz';

const initialState = {
  toggleQuiz: false,
  fullQuiz: [],
  currentquiz: null,
  score: 0,
};

const Quiz = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_QUIZ:
      return {
        ...state,
        toggleQuiz: !state.toggleQuiz,
      };
    case HIDE_QUIZ:
      return {
        ...state,
        toggleQuiz: false,
      };
      case SHOW_QUIZ:
        return {
          ...state,
          toggleQuiz: true,
        };
    case SAVE_QUIZ_DATA:
      return {
        ...state,
        fullQuiz: action.fullQuiz,
      };
    case SAVE_CURRENT_QUIZ:
      return {
        ...state,
        currentquiz: action.currentquiz,
        score: action.score,
      };
    default:
      return state;
  }
};

export default Quiz;
