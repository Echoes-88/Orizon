export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const SAVE_SESSION = 'SAVE_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const HANDLE_CHECK_LOGGED = 'HANDLE_CHECK_LOGGED';
export const UPDATE_SESSION_QUIZ = 'UPDATE_SESSION_QUIZ';
export const CHECK_AVATAR = 'CHECK_AVATAR';
export const HAS_AVATAR = 'HAS_AVATAR';

export const checkAvatar = () => ({
  type: CHECK_AVATAR,
});

export const hasAvatar = () => ({
  type: HAS_AVATAR,
})

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const updateSessionQuiz = (datas) => ({
  type: UPDATE_SESSION_QUIZ,
  datas
});

export const saveSession = (datas) => ({
  type: SAVE_SESSION,
  datas,
});

export const updateSession = (datas) => ({
  type: UPDATE_SESSION,
  datas,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const handleCheckLogged = (datas) => ({
  type: HANDLE_CHECK_LOGGED,
  datas,
});

