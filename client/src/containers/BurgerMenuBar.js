import { connect } from 'react-redux';
import BurgerMenuBar from '../components/BurgerMenu/BurgerMenuBar';
import { logout } from '../actions/connexion';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuBar);
