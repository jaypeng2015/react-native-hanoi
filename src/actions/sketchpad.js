import { START_CALCULATING, FINISH_CALCULATING, MOVE_DISC } from './action-types';

function startCalculating() {
  return {
    type: START_CALCULATING,
    calculating: true,
  };
}

function finishCalculating(stepsRemaining) {
  return {
    type: FINISH_CALCULATING,
    calculating: false,
    stepsRemaining,
  };
}

function moveDisc(stepsRemaining) {
  return {
    type: MOVE_DISC,
    stepsRemaining,
  };
}


export default {
  startCalculating,
  finishCalculating,
  moveDisc,
};
