import { MOVE_DISC, START_CALCULATING, FINISH_CALCULATING } from './action-types';

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

function moveDisc(discNumber) {
  return {
    type: MOVE_DISC,
    discNumber,
  };
}


export default {
  startCalculating,
  finishCalculating,
  moveDisc,
};
