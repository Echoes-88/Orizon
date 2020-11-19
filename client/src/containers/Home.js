import { connect } from 'react-redux';
import Home from '../components/Pages/Home';
import { displayPlanet } from '../actions/planet';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  displayPlanet: () => {
    dispatch(displayPlanet());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
