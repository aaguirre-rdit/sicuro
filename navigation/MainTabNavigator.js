import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/Icons/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CardScreen from '../screens/CardScreen';
import RestaurantListScreen from '../screens/RestaurantListScreen';
import Header from '../components/MainHeader';
import RestaurantScreen from '../screens/RestaurantScreen';
import DrawerComponent from '../components/DrawerComponent';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: createDrawerNavigator({
        Home: {
          screen: createStackNavigator({
            Home: HomeScreen,
            Article: SettingsScreen //TODO change for article screen later on!
          })
        },
        Settings: SettingsScreen
      },{
        contentComponent:DrawerComponent,
        initialRouteName:'Home',
        header:null,
      })
    },
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type={'antdesign'}
      name={'home'}
    />
  ),
};

HomeStack.path = '';

const ScanStack = createStackNavigator(
  {
    Scan: ScanScreen,
  },
  config
);

ScanStack.navigationOptions = {
  tabBarLabel: 'Scan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type='antdesign' name={'scan1'} />
  ),
};

ScanStack.path = '';

const CardStack = createStackNavigator({
  Cards:CardScreen,
  },
  config
);
CardStack.navigationOptions = {
  tabBarLabel : 'Cards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type='material-community' name={'cards-outline'} />
  ),
};

CardStack.path = '';

const MapStack = createStackNavigator({
    Map:RestaurantListScreen,
    Restaurant:RestaurantScreen,
  },
  config
);
MapStack.navigationOptions = {
  tabBarLabel : 'Restaurants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type='material' name={'restaurant-menu'} />
  ),
};

MapStack.path = '';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ScanStack,
  CardStack,
  MapStack,
},);

tabNavigator.path = '';

export default tabNavigator;
