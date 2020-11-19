export const GET_NEWS_DATAS = 'GET_NEWS_DATAS';
export const NEWS_FROM_API = 'NEWS_FROM_API';
export const TOGGLE_NEWS = 'TOGGLE_NEWS';
export const SET_NEW_INDEX = 'SET_NEW_INDEX';
export const WAITING_DATAS = 'WAITING_DATAS';

export const getNewsDatas = (indexNews) => ({
  type: GET_NEWS_DATAS,
  indexNews,
});

export const newsFromApi = (datas) => ({
  type: NEWS_FROM_API,
  datas,
});

export const toggleNews = () => ({
  type: TOGGLE_NEWS,
});

export const setNewIndex = () => ({
  type: SET_NEW_INDEX,
});

export const waitingDatas = (status) => ({
  type: WAITING_DATAS,
  status,
});
