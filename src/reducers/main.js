/* eslint-disable import/no-unresolved */
// ici je crée un second reducer qui gère toutes les infos liées au user
import {
} from 'src/actions/main';

export const initialState = {
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case CHANGE_VALUE:
    //   return {
    //     ...state,
    //     [action.name]: action.value,
    //   };
    default:
      return state;
  }
};

export default reducer;
