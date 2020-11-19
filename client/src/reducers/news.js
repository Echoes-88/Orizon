import { NEWS_FROM_API, SET_NEW_INDEX, WAITING_DATAS } from '../actions/news';

export const initialState = {
  toggleNews: false,
  waitingDatas: false,
  newsDatas: [],
  indexNews: 0,
  loading: true,
};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_FROM_API:
      return {
        ...state,
        toggleNews: true,
        newsDatas: [
          ...state.newsDatas,
          action.datas,
        ],
      };
    case SET_NEW_INDEX:
      return {
        ...state,
        indexNews: state.indexNews + 3,
      };
    case WAITING_DATAS:
      return {
        ...state,
        waitingDatas: action.status,
      };

    default:
      return state;
  }
};

export default data;
