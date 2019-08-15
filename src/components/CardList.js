import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { setCardData } from '../actions';

const CardList = ({ data }) => {
  const renderCards = () => {
    return Object.values(data).map(element => {
      return <Card key={element.id} cardData={element} />;
    });
  };

  return <main className="card-list">{renderCards()}</main>;
};

const mapStateToProps = state => {
  return {
    data: state.cards
  };
};

export default connect(
  mapStateToProps,
  {
    setCardData
  }
)(CardList);
