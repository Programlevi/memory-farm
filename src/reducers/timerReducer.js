export default (state = 60, action) => {
  switch (action.type) {
    case 'DECREMENT_TIMER':
      return state - 1;
    case 'SET_TIMER':
      return action.payload;
    default:
      return state;
  }
};
