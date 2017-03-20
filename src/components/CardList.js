import React from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const renderLike = likeDetail => {
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
const formatTitle = title =>
  title.length > 25
    ? title.slice(0, 25) + '...'
    : title;

const renderRow = rowData =>
  <View style={styles.row}>
    <Image style={styles.image} source={{ uri: rowData.thumbnail }} />
    <View style={styles.photoDetail}>
      <Text style={styles.title}>{formatTitle(rowData.title)}</Text>
      <Text style={styles.author}>{rowData.author}</Text>
    </View>
    {renderLike(rowData.likeDetail)}
  </View>;

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const CardList = props =>
  <ListView
    dataSource={ds.cloneWithRows(props.photos)}
    renderRow={renderRow}
    enableEmptySections
  />;

const styles = StyleSheet.create({
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
