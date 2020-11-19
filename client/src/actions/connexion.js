export const LOGIN_HANDLER = 'LOGIN_HANDLER';
export const SIGNUP = 'SIGNUP';
export const HAS_SIGNED_UP = 'HAS_SIGNED_UP';
export const LOGIN = 'LOGIN';
export const LOGIN_MESSAGE = 'LOGIN_MESSAGE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_MESSAGE = 'LOGOUT_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const LOGOUT_HANDLER = 'LOGOUT_HANDLER';

export const loginHandler = () => ({
  type: LOGIN_HANDLER,
});

export const signup = () => ({
  type: SIGNUP,
});

export const hasSignedUp = (message) => ({
  type: HAS_SIGNED_UP,
  message,
});

export const login = () => ({
  type: LOGIN,
});

export const loginMessage = (message) => ({
  type: LOGIN_MESSAGE,
  message,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutMessage = (message) => ({
  type: LOGOUT,
  message,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const logoutHandler = () => ({
  type: LOGOUT_HANDLER,
});
