import { connect } from 'react-redux';
import { toggleSettings, signup } from '../actions/connexion';
import Signup from '../components/Pages/SignUp';

const mapStateToProps = (state) => ({
  signupmessage: state.login.message,
  birthday: state.user.temporary.birthday,
  username: state.user.temporary.username,
  firstname: state.user.temporary.firstname,
  lastname: state.user.temporary.lastname,
  email: state.user.temporary.email,
  password: state.user.temporary.password,
  passwordConfirm: state.user.temporary.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    dispatch(toggleSettings());
  },
  signup: () => {
    dispatch(signup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
