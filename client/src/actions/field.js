export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (key, value) => ({
  type: CHANGE_INPUT_VALUE,
  key,
  value,
});
