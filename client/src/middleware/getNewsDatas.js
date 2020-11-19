import axios from 'axios';
import { adressIp } from '../config';
import { GET_NEWS_DATAS, toggleNews, newsFromApi, waitingDatas } from '../actions/news';

const getNewsDatas = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_NEWS_DATAS: {
      const state = store.getState();
      const { indexNews } = state.news;

      store.dispatch(waitingDatas(true));

      axios.get(`${adressIp}/api/news/${indexNews}`)
        .then((response) => {
          store.dispatch(newsFromApi(response.data));
          store.dispatch(toggleNews());
          store.dispatch(waitingDatas(false));
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('finally'));
      break;
    }
    default:
      next(action);
  }
};

export default getNewsDatas;
