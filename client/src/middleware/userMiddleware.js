import axios from 'axios';
import { CHECK_IS_LOGGED, handleCheckLogged, checkAvatar} from '../actions/user';
import { adressIp } from '../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_IS_LOGGED:
      axios.get(`${adressIp}/api/isLogged`, {
        withCredentials: true,
      }).then((response) => {
        store.dispatch(handleCheckLogged(response.data));
        store.dispatch(checkAvatar());
        next(action);
      })
        .catch((e) => {
          console.error(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
