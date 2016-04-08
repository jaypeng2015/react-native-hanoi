import { START_CALCULATING, FINISH_CALCULATING } from '../actions/action-types';

const initialState = {
  calculating: false,
  stepsRemaining: [],
};

export default function sketchpadReducer(state = initialState, action = {}) {
  const reducers = {

    [START_CALCULATING]: () => {
      return {
        ...state,
        calculating: action.calculating,
      };
    },

    [FINISH_CALCULATING]: () => {
      return {
        ...state,
        calculating: action.calculating,
        stepsRemaining: action.stepsRemaining,
      };
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
