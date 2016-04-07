import { combineReducers } from "redux";

const data = (state = {}, action) => {
  return {
    ...state
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
