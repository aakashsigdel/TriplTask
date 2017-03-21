import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';

import nav from './components/nav';
import Cards from './components/Cards';
import CardList from './components/CardList';

class App extends Component {
  state = {
    photos: [],
    photoList: [], // returning new photos array re-renders the swiper resetting it so new array
    isLoading: true
  };

  componentDidMount = () => {
    fetch('https://www.reddit.com/r/aww.json')
      .then(resp => resp.json())
      .then(json => {
        const photos = this.cleanPhotosData(json.data.children.slice(1));
        this.setState({
          photos,
          photoList: photos,
          isLoading: false
        })
      })
      .catch(err => alert('Error! Couldn\'t fetch data'));
  }

  handleSwipe = (type, card) => {
    const photoList =  this.state.photoList.slice(0, card.id)
      .concat({
        ...card,
        likeDetail: {
          ...card.likeDetail,
          isPristine: false,
          isLoved: type === 'yup' ? true : false
        }})
      .concat(this.state.photoList.slice(card.id + 1));

    this.setState({ photoList });
  }

  cleanPhotosData = photos => {
    return photos.map((photo, index) => ({
      id: index,
      image: photo.data.thumbnail,
      thumbnail: photo.data.thumbnail,
      title: photo.data.title,
      author: photo.data.author,
      likeDetail: {
        isPristine: true,
        isLoved: false
      }
    }));
  }

  renderScene = route => {
    switch(route.name) {
      case 'cards':
        return <Cards
          photos={this.state.photos}
          handleSwipe={this.handleSwipe}
        />;
      case 'cardList':
        return <CardList photos={this.state.photoList} />;
      default:
        return <Cards photos={this.state.photos} />;
    }
  }

  render = () => {
    return <Navigator
      initialRoute={{ name: 'cards', title: 'Home' }}
      renderScene={this.renderScene}
      navigationBar={
        nav
      }
    />;
  }
}
export default App;
