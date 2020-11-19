import axios from 'axios';
import { CHECK_IS_LOGGED, handleCheckLogged} from '../actions/user';
import { adressIp } from '../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_IS_LOGGED:
      axios.get(`${adressIp}/api/isLogged`, {
        withCredentials: true,
      }).then((response) => {
        console.log(response.data)
        store.dispatch(handleCheckLogged(response.data));
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
