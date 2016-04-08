import { MOVE_DISC } from './action-types';

function moveDisc(discNumber) {
  return {
    type: MOVE_DISC,
    discNumber,
  };
}


export default {
  moveDisc,
};
