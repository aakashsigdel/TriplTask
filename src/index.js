import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Cards from './components/Cards';
import CardList from './components/CardList';

class App extends Component {
  state = {
    photos: [],
    isLoading: true
  };

  cleanPhotosData = photos =>
    photos.map(photo => ({
      image: photo.data.preview.images[0].source.url,
      thumbnail: photo.data.thumbnail,
      title: photo.data.title,
      author: photo.data.author,
      likeDetail: {
        isPristine: true,
        isLoved: false
      }
    }));

  componentDidMount = () => {
    fetch('https://www.reddit.com/r/aww.json')
      .then(resp => resp.json())
      .then(json => this.setState({
        photos: this.cleanPhotosData(json.data.children.slice(1)),
        isLoading: false
      }))
      .catch(err => alert('Error! Couldn\'t fetch data'));
  }

  renderScene = route => {
    switch(route.name) {
      case 'cards1':
        return <Cards photos={this.state.photos} />;
      case 'cards':
        return <CardList photos={this.state.photos} />;
      default:
        return <Cards photos={this.state.photos} />;
    }
  }

  render = () => {
    return <Navigator
      initialRoute={{ name: 'cards' }}
      renderScene={this.renderScene}
    />;
  }
}
export default App;
