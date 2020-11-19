import { connect } from 'react-redux';
import PlanetNavbar from '../components/Navbar/PlanetNavbar';
import { togglePlanet } from '../actions/planet';
import { showSpoutnik } from '../actions/spoutnik';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  togglePlanet: (id, name) => {
    dispatch(togglePlanet(id, name));
  },

  showSpoutnik: () => {
    dispatch(showSpoutnik());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetNavbar);
