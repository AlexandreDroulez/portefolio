export const CHANGE_VALUE_IN_FORM = 'CHANGE_VALUE_IN_FORM';

export const changeValueInForm = (name, value) => ({
  type: CHANGE_VALUE_IN_FORM,
  name,
  value,
});
