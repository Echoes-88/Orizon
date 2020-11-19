export const DISPLAY_PLANET = 'DISPLAY_PLANET';
export const GET_PLANET_DATAS = 'GET_PLANET_DATAS';
export const SAVE_PLANET_INFOS = 'SAVE_PLANET_INFOS';
export const SAVE_PLANET_MISSIONS = 'SAVE_PLANET_MISSIONS';
export const TOGGLE_PLANET = 'TOGGLE_PLANET';

export const displayPlanet = () => ({
  type: DISPLAY_PLANET,
});

export const getPlanetDatas = () => ({
  type: GET_PLANET_DATAS,
});

export const savePlanetInfos = (data) => ({
  type: SAVE_PLANET_INFOS,
  data,
});

export const savePlanetMissions = (data) => ({
  type: SAVE_PLANET_MISSIONS,
  data,
});

export const togglePlanet = (id, name) => ({
  type: TOGGLE_PLANET,
  id,
  name,
});
