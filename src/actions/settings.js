import { CHANGE_DISC_NUMBER, START } from './action-types';

function changeDiscNumber(discNumber) {
  return {
    type: CHANGE_DISC_NUMBER,
    discNumber,
  };
}

function start(mode) {
  return {
    type: START,
    mode,
  };
}

export default {
  changeDiscNumber,
  start,
};
