import { CHANGE_DISC_NUMBER } from '../actions/action-types';

const initialState = {
  discNumber: 3,
};

export default function feedbackReducer(state = initialState, action = {}) {
  const reducers = {

    [CHANGE_DISC_NUMBER]: () => {
      return {
        ...state,
        discNumber: action.discNumber,
      };
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
