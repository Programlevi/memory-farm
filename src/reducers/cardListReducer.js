import _ from 'lodash';
import shuffle from '../utils/shuffle';

export default (state = [], action) => {
  let card1,
    card2 = null;
  switch (action.type) {
    case 'SET_DATA':
      return _.mapKeys(shuffle(action.payload), 'id');
    case 'OPEN':
      const card = { ...state[action.payload] };
      card.isOpen = true;
      return { ...state, [action.payload]: card };
    case 'CLOSE':
      card1 = { ...state[action.payload[0]] };
      card1.isOpen = false;
      card2 = { ...state[action.payload[1]] };
      card2.isOpen = false;
      return {
        ...state,
        [action.payload[0]]: card1,
        [action.payload[1]]: card2
      };
    case 'MATCH':
      card1 = { ...state[action.payload[0]] };
      card1.isMatched = true;
      card2 = { ...state[action.payload[1]] };
      card2.isMatched = true;
      return {
        ...state,
        [action.payload[0]]: card1,
        [action.payload[1]]: card2
      };
    default:
      return state;
  }
};
