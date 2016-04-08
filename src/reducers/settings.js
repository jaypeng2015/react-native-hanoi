import { CHANGE_DISC_NUMBER, START } from '../actions/action-types';

const initialState = {
  discNumber: 3,
};

export default function settingsReducer(state = initialState, action = {}) {
  const reducers = {

    [CHANGE_DISC_NUMBER]: () => {
      return {
        ...state,
        discNumber: action.discNumber,
      };
    },

    [START]: () => {
      return {
        ...state,
        mode: action.mode,
      };
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
