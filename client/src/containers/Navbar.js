import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logout } from '../actions/connexion';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    console.log('coucou du container');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
