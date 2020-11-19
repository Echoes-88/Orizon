import { connect } from 'react-redux';
import Planet from '../components/Pages/Planet';
import { getPlanetDatas, displayPlanet } from '../actions/planet';
import { hideQuiz } from '../actions/quiz';

const mapStateToProps = (state) => ({
  currentPlanet: state.planet.currentPlanetName,
  planetInfos: state.planet.planetInfos,
  planetMissions: state.planet.planetMissions,
});

const mapDispatchToProps = (dispatch) => ({
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
