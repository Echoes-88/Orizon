import {
  SAVE_PLANET_INFOS, SAVE_PLANET_MISSIONS, TOGGLE_PLANET, DISPLAY_PLANET, SET_PLANET_TRUE
} from '../actions/planet';

export const initialState = {
  // currentPlanet : id of current planet to get datas from api. Change it on click on new planet
  isPlanetDisplayed: false,
  currentPlanet: 1,
  currentPlanetName: 'moon',
  planetMissions: [],
  planetInfos: [],

};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
   case SET_PLANET_TRUE:
     return {
     ...state,
     isPlanetDisplayed: true,
    }

    case DISPLAY_PLANET:
      return {
        ...state,
        isPlanetDisplayed: !state.isPlanetDisplayed,
      };
    case TOGGLE_PLANET:
      return {
        ...state,
        currentPlanet: action.id,
        currentPlanetName: action.name,
      };
    case SAVE_PLANET_INFOS:
      return {
        ...state,
        planetInfos: action.data,
      };
    case SAVE_PLANET_MISSIONS:
      return {
        ...state,
        planetMissions: action.data,
      };
    default:
      return state;
  }
};

export default data;
