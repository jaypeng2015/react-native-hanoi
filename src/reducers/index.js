import { combineReducers } from 'redux';

import settings from './settings';
import sketchpad from './sketchpad';

const rootReducer = combineReducers({
  settings,
  sketchpad,
});

export default rootReducer;
