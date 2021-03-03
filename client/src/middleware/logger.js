import axios from 'axios';
import { adressIp } from '../config';
import {
  LOGIN,
  LOGOUT,
  loginMessage,
  logoutMessage,
  loginHandler,
  logoutHandler,
} from '../actions/connexion';

import { checkAvatar, saveSession } from '../actions/user';

const logger = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const lowerCase = state.user.temporary.username.toLowerCase();

      axios.post(`${adressIp}/api/signin`, {
        username: lowerCase,
        password: state.user.temporary.password,
      },
      {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.logged) { 
            store.dispatch(saveSession(response.data));
            store.dispatch(loginHandler());
            store.dispatch(loginMessage(response.data.message));
            store.dispatch(checkAvatar());
          }
          else {
            console.log("c'est pas booooon");
          }
          // console.log(state.loginmessage.message);
        })
        .catch((error) => console.log(error));
      break;
    }
    case LOGOUT: {
      const state = store.getState();

      if (state.user.logged) {
        axios.post(`${adressIp}/api/logout`,
          {
            withCredentials: true,
          })
          .then((response) => {
            store.dispatch(logoutHandler());
            store.dispatch(logoutMessage(response.data.message));
          })
          .catch((error) => console.log(error));
      }
      else {
        console.log('Le logout a échoué');
      }
    }
      break;
    default:
      next(action);
  }
};

export default logger;
