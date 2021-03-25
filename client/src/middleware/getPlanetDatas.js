import axios from 'axios';
import { adressIp } from '../config';
import { GET_PLANET_DATAS, savePlanetInfos, savePlanetMissions } from '../actions/planet';

const getPlanetDatas = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PLANET_DATAS: {
      const state = store.getState();
      const { currentPlanet } = state.planet;

      axios.get(`${adressIp}/api/crud/planet/${currentPlanet}`, {
        params: { token: state.user.session.token }
      })
        .then((response) => {
          store.dispatch(savePlanetInfos(response.data));
        })
        .catch((error) => console.log(error))
        .finally();

      axios.get(`${adressIp}/api/crud/mission`, {
        params: { token: state.user.session.token }
      })
        .then((response) => {
          store.dispatch(savePlanetMissions(response.data));
        })
        .catch((error) => console.log(error))
        .finally();
      break;
    }
    default:
      next(action);
  }
};

export default getPlanetDatas;
