import React from 'react';
import SwipeCards from 'react-native-swipe-cards';

import Card from './Card';

const Cards = props =>
  <SwipeCards
    cards={props.photos}
    renderCard={cardData => <Card cardData={cardData} />}
    handleYup={card => props.handleSwipe('yup', card)}
    handleNope={card => props.handleSwipe('nope', card)}
  />;

export default Cards;
