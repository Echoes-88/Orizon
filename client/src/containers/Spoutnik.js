
import { connect } from 'react-redux';
import Spoutnik from '../components/Tools/Spoutnik';
import { toggleQuiz, showQuiz } from '../actions/quiz';
import { toggleSpoutnik } from '../actions/spoutnik';

const mapStateToProps = (state) => ({
  spoutnikSpeaks: state.spoutnik.spoutnikSpeaks,
  isLogged: state.user.logged,
  username: state.user.session.username,
  toggleQuiz: state.quiz.toggleQuiz,
  planetName: state.planet.currentPlanetName,
  hasSignedUp: state.user.hasSignedUp,
});

const mapDispatchToProps = (dispatch) => ({

  toggleSpoutnik: () => {
    dispatch(toggleSpoutnik());
  },

  toggleQuiz: () => {
    dispatch(toggleQuiz());
  },

  showQuiz: () => {
    dispatch(showQuiz());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Spoutnik);
