export const GETQUIZ = 'GETQUIZ';
export const SAVE_QUIZ_DATA = 'SAVE_QUIZ_DATA';
export const SAVE_SCORES = 'SAVE_SCORES';
export const SAVE_CURRENT_QUIZ = 'SAVE_CURRENT_QUIZ';
export const TOGGLE_QUIZ = 'TOGGLE_QUIZ';
export const HIDE_QUIZ = 'HIDE_QUIZ';
export const SHOW_QUIZ = 'SHOW_QUIZ';

export const toggleQuiz = () => ({
  type: TOGGLE_QUIZ,
});

export const showQuiz = () => ({
  type: SHOW_QUIZ,
});

export const getQuiz = () => ({
  type: GETQUIZ,
});

export const hideQuiz = () => ({
  type: HIDE_QUIZ,
});

export const saveQuizData = (fullQuiz) => ({
  type: SAVE_QUIZ_DATA,
  fullQuiz,
});

export const saveCurrentQuiz = (currentquiz, score) => ({
  type: SAVE_CURRENT_QUIZ,
  currentquiz,
  score,
});

export const saveScores = () => ({
  type: SAVE_SCORES,
});
