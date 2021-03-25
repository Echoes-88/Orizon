import axios from 'axios';
import { adressIp } from '../config';
import { UPDATE_PROFILE, updateSession, CHECK_AVATAR, hasAvatar } from '../actions/user';

axios.defaults.baseURL = adressIp;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

const sendProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PROFILE: {
      const state = store.getState();

      axios.patch(`${adressIp}/api/crud/user/${state.user.session.id}`, {
        username: state.user.temporary.username,
        lastname: state.user.temporary.lastname,
        firstname: state.user.temporary.firstname,
        email: state.user.temporary.email,
        password: state.user.temporary.password,
        token: state.user.session.token
      })
        .then((response) => {
          store.dispatch(updateSession(response.data));
        })
        .catch((error) => console.log(error));
        // .finally(() =>
        // This is an indication that the request was carried on, NOT THAT IT WAS SUCCESFUL
        // console.log('Requête pour récupérer les quizzes accomplie'));
      break;
    }

    case CHECK_AVATAR: {
      const state = store.getState();
      const idString = state.user.session.idString;

      axios.get(`${adressIp}/${idString}`)
        .then((response) => {
          store.dispatch(hasAvatar());
        })
        .catch((error) => console.log(error))
        .finally();break;
      }
    default:
      next(action);
  }
};

export default sendProfile;

