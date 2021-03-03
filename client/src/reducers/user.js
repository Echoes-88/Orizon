import {
  SAVE_SESSION,
  UPDATE_SESSION,
  HANDLE_CHECK_LOGGED,
  UPDATE_SESSION_QUIZ,
  CLEAR_TEMP_USER_DATAS,
  HAS_AVATAR
} from '../actions/user';

import { CHANGE_INPUT_VALUE } from '../actions/field';

import { LOGIN_HANDLER, LOGOUT_HANDLER } from '../actions/connexion';

export const initialState = {
  logged: false,
  hasSignedUp: false,
  hasAvatar: false,
  temporary: {
    username: '',
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthday: '',
  },
  session: {
    username: '',
    lastname: '',
    firstname: '',
    email: '',
    idString: null,
    id: null,
    quiz: null,
  },
};

const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case HAS_AVATAR:
      return {
        ...state,
        hasAvatar: true,
      };
    case LOGIN_HANDLER:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_HANDLER:
      return {
        ...state,
        logged: false,
        session: {
          username: '',
          email: '',
          id: null,
        },
        temporary: {
          username: '',
          lastname: '',
          firstname: '',
          email: '',
        },
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        temporary: {
          ...state.temporary,
          [action.key]: action.value,
        },
      };
    case SAVE_SESSION:
      return {
        ...state,
        logged: action.datas.logged,
        session: {
          username: action.datas.username,
          lastname: action.datas.lastname,
          firstname: action.datas.firstname,
          email: action.datas.email,
          id: action.datas.id,
          idString: action.datas.idString,
          quiz: action.datas.quiz,
        },
        temporary: {
          username: action.datas.username,
          lastname: action.datas.lastname,
          firstname: action.datas.firstname,
          email: action.datas.email,
        },
      };
    case UPDATE_SESSION:
      return {
        ...state,
        session: {
          ...state.session,
          username: action.datas.newDatas.username,
          lastname: action.datas.newDatas.lastname,
          firstname: action.datas.newDatas.firstname,
          email: action.datas.newDatas.email,
        },
        temporary: {
          username: action.datas.newDatas.username,
          lastname: action.datas.newDatas.lastname,
          firstname: action.datas.newDatas.firstname,
          email: action.datas.newDatas.email,
        },
      };

    case UPDATE_SESSION_QUIZ:
      return {
        ...state,
        session: {
          ...state.session,
          quiz: action.datas.quiz,
        },
      };

    case HANDLE_CHECK_LOGGED:

      return {
        ...state,
        logged: action.datas.logged,
        session: {
          username: action.datas.username,
          lastname: action.datas.lastname,
          firstname: action.datas.firstname,
          email: action.datas.email,
          id: action.datas.id,
          idString: action.datas.idString,
          quiz: action.datas.quiz,
        },
        temporary: {
          username: action.datas.username,
          lastname: action.datas.lastname,
          firstname: action.datas.firstname,
          email: action.datas.email,
        },
      };
      
    default:
      return state;
  }
};

export default User;

