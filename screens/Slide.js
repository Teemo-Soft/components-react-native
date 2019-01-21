import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextStyle, Icon, ImgSlide } from '../components';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";

const images = [
  'https://placeimg.com/640/640/nature',
  'https://placeimg.com/640/640/people',
  'https://placeimg.com/640/640/animals',
  'https://placeimg.com/640/640/beer',
];

class Slide extends React.Component {
  componentWillMount() {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImgSlide
          title={<TextStyle> Slide De Imagenes </TextStyle>}
          images={images} />
      </Container>
    );
  }
}

export default SlideNavigator = createStackNavigator(
  {
    Slide: Slide
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 15 }}
            size={30}
            onPress={() => navigation.openDrawer()}
            name={Icons.menu}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 15 }}
            size={30}
            onPress={() => navigation.navigate('Login')}
            name={Icons.logOut}
          />
        ),
        headerTitle: navigation.state.routeName,
        headerTintColor: Colors.tabIconDefault
      };
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});