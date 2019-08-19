import React, { useEffect } from 'react';
import { setCardData, close, match } from '../../actions';
import { connect } from 'react-redux';
import devData from '../../utils/devData';
import CardList from '../CardList';
import Timer from '../Timer';

const Game = props => {
  const { data, setCardData, close, match, history } = props;
  useEffect(() => {
    const dataOpen = devData.map(element => {
      return { ...element, isOpen: true };
    });

    setCardData(dataOpen);

    setTimeout(() => {
      setCardData(devData);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const openCards = Object.values(data).filter(element => {
      return element.isOpen && !element.isMatched;
    });
    const [card1, card2] = openCards;
    if (openCards.length === 2) {
      if (card1.image === card2.image && !card1.isMatched && !card2.isMatched) {
        match([card1.id, card2.id]);
      } else if (card1.image !== card2.image) {
        setTimeout(() => {
          close([card1.id, card2.id]);
        }, 400);
      }
    }
  });

  return (
    <>
      <Timer history={history} />
      <CardList />
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cards
  };
};

export default connect(
  mapStateToProps,
  {
    setCardData,
    close,
    match
  }
)(React.memo(Game));
