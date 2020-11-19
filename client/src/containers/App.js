import { connect } from 'react-redux';
import App from '../components/App';
import { checkIsLogged } from '../actions/user';

const mapStateToProps = (state) => ({
  currentPlanetName: state.planet.currentPlanetName,
  currentPlanet: state.planet.currentPlanet,
  isLogged: state.user.logged,
  hasSignedUp: state.user.hasSignedUp,
  isPlanetDisplayed: state.planet.isPlanetDisplayed,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
