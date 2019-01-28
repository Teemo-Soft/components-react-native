import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import {
  Login,
  LinksScreen,
  SettingsScreen,
  Slide,
  Home,
  CardList
} from '../screens';
import SideBar from './SideBar';

const AppDrawerNavigator = createDrawerNavigator({
  Settings: {
    screen: SettingsScreen
  },
  Home: {
    screen: Home
  },
  LinksScreen: {
    screen: LinksScreen
  },
  Slide: {
    screen: Slide
  },
  CardList: {
    screen : CardList
  }
},
  {
    initialRouteName: "Home",
    drawerWidth: 280,
    contentComponent: SideBar
  });

const AppSwitchNavigator = createSwitchNavigator({
  Login,
  Main: AppDrawerNavigator
});


const AppContainer = createAppContainer(AppSwitchNavigator);
export default class AppNavigator extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}