import React from 'react';
import { Image } from 'react-native';

const Card = props =>
  <Image
    source={{ uri: props.cardData.image }}
    style={{width: 200, height: 200}}
  />;

export default Card;
