import axios from 'axios';
import { adressIp } from '../config';
import {
  SIGNUP,
  hasSignedUp,
} from '../actions/connexion';

const signupMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SIGNUP: {

      const lowerCase = state.user.temporary.username.toLowerCase();

      axios.post(`${adressIp}/api/signup`, {
        username: lowerCase,
        password: state.user.temporary.password,
        passwordConfirm: state.user.temporary.passwordConfirm,
        firstname: state.user.temporary.firstname,
        lastname: state.user.temporary.lastname,
        birthday: state.user.temporary.birthday,
        email: state.user.temporary.email,
      },
      {
        withCredentials: true,
      })
        .then((response) => {

          store.dispatch(hasSignedUp(response.data.message));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default signupMiddleware;
