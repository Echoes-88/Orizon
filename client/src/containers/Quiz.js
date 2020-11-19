import { connect } from 'react-redux';
import Quiz from '../components/Tools/Quiz';
// Actions import
import { saveQuizData, getQuiz, saveScores, saveCurrentQuiz } from '../actions/quiz';

const mapStateToProps = (state) => ({
  // This sends back to the component the data stored in the state (all quizzes)
  fullQuiz: state.quiz.fullQuiz,
  id: state.user.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  // This saves the quizzes retrieved from database in the state
  saveQuizData: (data) => {
    dispatch(saveQuizData(data));
  },
  // This allows the component to call for an HTTP request through a middleware to get all quizzes
  getQuiz: (data) => {
    dispatch(getQuiz(data));
  },
  saveScores: () => {
    dispatch(saveScores());
  },
  saveCurrentQuiz: (quizid, score) => {
    dispatch(saveCurrentQuiz(quizid, score));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
