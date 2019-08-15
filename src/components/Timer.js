import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { decrementTimer } from '../actions';

const Timer = ({ timer, decrementTimer }) => {
  useEffect(() => {
    setInterval(() => {
      decrementTimer();
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return <p className={`timer ${timer <= 10 ? 'timer--red' : ''}`}>{timer}s</p>;
};

const mapStateToProps = state => {
  return {
    timer: state.timer
  };
};

export default connect(
  mapStateToProps,
  {
    decrementTimer
  }
)(React.memo(Timer));
