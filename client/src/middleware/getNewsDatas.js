
import axios from 'axios';
import { adressIp } from '../config';
import { GET_NEWS_DATAS, 
  toggleNews, newsFromApi 
} from '../actions/news';

const getNewsDatas = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_NEWS_DATAS: {
      const state = store.getState();
      const { indexNews } = state.news;

      axios.get(`${adressIp}/api/news/${indexNews}`)
        .then((response) => {
          store.dispatch(newsFromApi(response.data));
          store.dispatch(toggleNews());
        })
        .catch((error) => console.log(error))
        .finally();
      break;
    }
    default:
      next(action);
  }
};

export default getNewsDatas;

