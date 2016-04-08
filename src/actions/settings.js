import { CHANGE_DISC_NUMBER } from './action-types';

function changeDiscNumber(discNumber) {
  return {
    type: CHANGE_DISC_NUMBER,
    discNumber,
  };
}


export default {
  changeDiscNumber,
};
