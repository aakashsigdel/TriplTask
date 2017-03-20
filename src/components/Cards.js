import React from 'react';
import SwipeCards from 'react-native-swipe-cards';

import Card from './Card';

const handleYup = card => console.log(card);

const handleNope = card => console.log(card);

const Cards = props =>
  <SwipeCards
    cards={props.photos}
    renderCard={cardData => <Card cardData={cardData} />}
    handleYup={() => null}
    handleNope={() => null}
  />;

export default Cards;
