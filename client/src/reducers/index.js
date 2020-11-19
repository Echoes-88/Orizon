import { combineReducers } from 'redux';
import planet from './planet';
import login from './login';
import quiz from './quiz';
import news from './news';
import user from './user';
import spoutnik from './spoutnik';

export default combineReducers({
  planet,
  login,
  quiz,
  news,
  user,
  spoutnik,
});
