// Actions import
import { TOGGLE_SPOUTNIK, SHOW_SPOUTNIK } from '../actions/spoutnik';
import { HAS_SIGNED_UP } from '../actions/connexion';

export const initialState = {
  spoutnikSpeaks: true,
  hasSignedUp: false,
};

const spoutnik = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SPOUTNIK:
      return {
        ...state,
        spoutnikSpeaks: !state.spoutnikSpeaks,
      };
    case SHOW_SPOUTNIK:
      return {
        ...state,
        spoutnikSpeaks: true,
      };
    case HAS_SIGNED_UP:
    return {
      ...state,
      hasSignedUp: true,
    };
    default:
      return state;
  }
};

export default spoutnik;
