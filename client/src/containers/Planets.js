import { connect } from 'react-redux';
import Planet from '../components/Pages/Planet';
import { getPlanetDatas, displayPlanet, setPlanetTrue } from '../actions/planet';
import { checkIsLogged } from '../actions/user';
import { hideQuiz } from '../actions/quiz';

const mapStateToProps = (state) => ({
  currentPlanet: state.planet.currentPlanetName,
  planetInfos: state.planet.planetInfos,
  planetMissions: state.planet.planetMissions,
  userSession: state.user.session
});

const mapDispatchToProps = (dispatch) => ({

  setPlanetTrue: () => {
    dispatch(setPlanetTrue());
},

  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },

  getPlanetDatas: () => {
    dispatch(getPlanetDatas());
  },

  hideQuiz: () => {
    dispatch(hideQuiz());
  },

  displayPlanet: () => {
    dispatch(displayPlanet());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
