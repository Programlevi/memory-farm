export default (state = 50, action) => {
  switch (action.type) {
    case 'DECREMENT_TIMER':
      return state - 1;
    default:
      return state;
  }
};
