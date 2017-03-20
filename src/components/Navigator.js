import { Navigator, StyleSheet } from 'react-native';

const Nav = (props) =>
  <Navigator.NavigationBar
    routeMapper={{
      LeftButton: (route, navigator, index, navState) =>
      { return (<Text>Back</Text>); },
      RightButton: (route, navigator, index, navState) =>
      { return null; },
      Title: (route, navigator, index, navState) =>
      { return (<Text>Awesome Nav Bar</Text>); },
    }}
    style={{backgroundColor: 'gray'}}
  />;

const styles = StyleSheet.create({
});

export default Nav;
