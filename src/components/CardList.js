import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';



const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class CardList extends Component {
  renderLike = likeDetail => {
    if(likeDetail.isPristine) {
      return null
    }

    const likeImage = likeDetail.isLoved
      ? require('../../images/love.png')
      : require('../../images/dislike.png');

    return <Image
      style={styles.love}
      source={likeImage}
    />
  }

  formatTitle = title => {
    return title.length > 25
      ? title.slice(0, 25) + '...'
      : title;
  }

  renderRow = rowData => {
    return <View style={styles.row}>
      <Image style={styles.image} source={{ uri: rowData.thumbnail }} />
      <View style={styles.photoDetail}>
        <Text style={styles.title}>{this.formatTitle(rowData.title)}</Text>
        <Text style={styles.author}>{rowData.author}</Text>
      </View>
      {this.renderLike(rowData.likeDetail)}
    </View>;
  }

  render = () => {
    return <ListView
      dataSource={ds.cloneWithRows(this.props.photos)}
      renderRow={this.renderRow}
      enableEmptySections
      style={styles.container}
    />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    padding: 15,
  },
  photoDetail: {
    justifyContent: 'space-around',
    marginLeft: 20
  },
  image: {
    width: 50,
    height: 50
  },
  love: {
    position: 'absolute',
    right: 0,
    top: 30,
    height: 20,
    resizeMode: 'contain'
  }
})

export default CardList;
