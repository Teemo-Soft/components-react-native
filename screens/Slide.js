import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextStyle, Icon, ImgSlide } from '../components';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";

const images = [
  'https://www.landmarkbangkok.com/images/dining/Rendezvous-2.jpg',
  'https://yumbocentrum.com/wordpress/wp-content/uploads/2018/01/Sky-Bar-Yumbo-3.jpg',
  'https://www.mamashelter.com/files/live/sites/mamashelter/files/HP%20Rio/Restaurants/Bar/mama-shelter-rio-de-janeiro-bar%20(13).jpg',
  'http://alvearpalace.com/resources/img/roof-hero.jpg',
];

class Slide extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <ImgSlide
          title={<TextStyle> Slide De Imagenes </TextStyle>}
          images={images} 
          playInterval = {5000}
        />
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