export const setCardData = cardData => {
  return {
    type: 'SET_DATA',
    payload: cardData
  };
};

export const open = id => {
  return {
    type: 'OPEN',
    payload: id
  };
};

export const close = ids => {
  return {
    type: 'CLOSE',
    payload: ids
  };
};

export const match = ids => {
  return {
    type: 'MATCH',
    payload: ids
  };
};

export const decrementTimer = () => {
  return {
    type: 'DECREMENT_TIMER'
  };
};

export const setTimer = time => {
  return {
    type: 'SET_TIMER',
    payload: time
  };
};
