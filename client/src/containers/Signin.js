import { connect } from 'react-redux';
import Signin from '../components/Pages/SignIn';
import { toggleSettings, login, loginHandler } from '../actions/connexion';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loginMessage: state.login.message,
  open: state.login.open,
  username: state.user.temporary.username,
  password: state.user.temporary.password,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    dispatch(toggleSettings());
  },
  login: () => {
    dispatch(login());
  },
  loginHandler: () => {
    dispatch(loginHandler());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
