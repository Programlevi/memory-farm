import React from 'react';
import { connect } from 'react-redux';
import { open } from '../actions';

const Card = ({ cardData, open }) => {
  const onCardClick = cardData.isMatched
    ? null
    : () => {
        open(cardData.id);
      };

  const style1 = cardData.isOpen ? 'card--open' : '';
  const style2 = cardData.isMatched ? 'card--dimmed' : '';

  return (
    <div className={`card ${style1} ${style2}`} onClick={onCardClick}>
      <div className="card__side card__side--front" />
      <div className="card__side card__side--back">
        <span role="img" aria-label="cheese" className="card__emoji">
          {cardData.image}
        </span>
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    open
  }
)(Card);
