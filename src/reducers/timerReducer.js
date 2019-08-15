export default (state = 40, action) => {
  switch (action.type) {
    case 'DECREMENT_TIMER':
      return state - 1;
    default:
      return state;
  }
};
