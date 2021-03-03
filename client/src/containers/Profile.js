import { connect } from 'react-redux';
import Profile from '../components/Pages/Profile';
import { updateProfile, checkAvatar } from '../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.temporary.username,
  lastname: state.user.temporary.lastname,
  firstname: state.user.temporary.firstname,
  email: state.user.temporary.email,
  idString: state.user.session.idString,
  quiz: state.user.session.quiz,
  hasAvatar: state.user.hasAvatar,
}); 

const mapDispatchToProps = (dispatch) => ({

  updateProfile: () => {
    dispatch(updateProfile());
  },

  checkAvatar: () => {
    dispatch(checkAvatar());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
