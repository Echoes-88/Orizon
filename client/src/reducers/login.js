import { TOGGLE_SETTINGS, HAS_SIGNED_UP, LOGIN_MESSAGE, LOGOUT_MESSAGE } from '../actions/connexion';

export const initialState = {
  open: false,
  message: '',
};

const Login = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        open: !state.open,
      };

    case HAS_SIGNED_UP:
      return {
        ...state,
        message: action.message,
      };
    case LOGIN_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case LOGOUT_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default Login;

