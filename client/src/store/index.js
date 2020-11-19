
import { createStore, compose, applyMiddleware } from 'redux';	
import rootReducer from '../reducers';	
import getPlanetDatas from '../middleware/getPlanetDatas';

import logger from '../middleware/logger';
import signup from '../middleware/signup';
import quiz from '../middleware/quiz';
import userMiddleware from '../middleware/userMiddleware';
import getNewsDatas from '../middleware/getNewsDatas';
import profile from '../middleware/profile';

// == Enhancers	
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;	

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
    getPlanetDatas,
    getNewsDatas,
    logger,
    profile,
    signup,
    quiz,
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
