import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { decrementTimer } from '../actions';

let interval = null;

const Timer = props => {
  const { timer, decrementTimer, history } = props;

  useEffect(() => {
    setTimeout(() => {
      interval = setInterval(() => {
        decrementTimer();
      }, 1000);
    }, 2000);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(interval);
      history.push('/');
    }
  });

  return <p className={`timer ${timer <= 10 ? 'timer--red' : ''}`}>{timer}</p>;
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
