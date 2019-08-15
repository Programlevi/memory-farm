import { combineReducers } from 'redux';
import cards from './cardListReducer';
import timer from './timerReducer';

export default combineReducers({
  cards,
  timer
});
