import { START_CALCULATING, FINISH_CALCULATING, MOVE_DISC } from '../actions/action-types';

const initialState = {
  calculating: false,
  stepsRemaining: [],
  stepsMoved: [],
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

    [MOVE_DISC]: () => {
      const steps = action.stepsRemaining.slice();
      const step = steps.shift();
      return {
        ...state,
        stepsRemaining: steps,
        stepsMoved: state.stepsMoved.concat(step),
      };
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
