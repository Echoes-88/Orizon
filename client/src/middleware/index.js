import {compose, applyMiddleware} from 'redux';

import getPlanetDatas from './getPlanetDatas';
import getMissionsDatas from './getMissionsDatas';
import logger from './logger';
import signup from './signup';
import userMiddleware from './userMiddleware';
import profile from './profile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(
  applyMiddleware(
    userMiddleware,
    getPlanetDatas,
    getMissionsDatas,
    logger,
    signup,
    profile,
  ),
);
