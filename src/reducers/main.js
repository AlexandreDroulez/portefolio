/* eslint-disable import/no-unresolved */
// ici je crée un second reducer qui gère toutes les infos liées au user
import {
  CHANGE_VALUE_IN_FORM,
} from 'src/actions/main';

export const initialState = {
  email: '',
  name: '',
  number: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_IN_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
