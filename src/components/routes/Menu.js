import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCardData, setTimer } from '../../actions';

const Menu = props => {
  return (
    <div>
      <div className="text-box">
        <h1 className="header">Memory Farm</h1>
        <Link
          className="btn"
          onClick={() => {
            props.setCardData([]);
            props.setTimer(60);
          }}
          to="/game"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    setCardData,
    setTimer
  }
)(Menu);
