import axios from 'axios';
import { adressIp } from '../config';
import { UPDATE_PROFILE, updateSession } from '../actions/user';

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
      })
        .then((response) => {
          console.log(response)
          store.dispatch(updateSession(response.data));
        });

      break;
    }
    default: 
      next(action);
      break;
  }
} 

export default sendProfile;

