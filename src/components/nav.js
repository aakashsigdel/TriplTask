import React from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#05A6FC'
  },
  text: {
    color: 'white',
    margin: 10
  }
})

const renderLeftButton = (route, navigator) =>
  <TouchableOpacity onPress={() => navigator.pop()}>
    <Text style={styles.text}>{route.name === 'cardList' ? 'Back' : ''}</Text>
  </TouchableOpacity>;

const renderRightButton = (route, navigator) =>
  <TouchableOpacity onPress={() => navigator.push({name: 'cardList', title: 'Activity'})}>
    <Text style={styles.text}>{route.name === 'cards' ? 'Activity': ''}</Text>
  </TouchableOpacity>;

const renderTitle = route => <Text style={styles.text}>{route.title}</Text>;

const nav = (
  <Navigator.NavigationBar
    routeMapper={{
      LeftButton: renderLeftButton,
      RightButton: renderRightButton,
      Title: renderTitle,
    }}
    style={styles.nav}
  />
);

export default nav;
