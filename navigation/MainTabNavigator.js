import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/Icons/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CardScreen from '../screens/CardScreen';
import MapScreen from '../screens/MapScreen';
import Header from '../components/MainHeader';
import DrawerComponent from '../components/DrawerComponent';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: createDrawerNavigator({
        Home: HomeScreen,
        Settings: SettingsScreen
      },{
        contentComponent:DrawerComponent
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
    Map:MapScreen,
  },
  config
);
MapStack.navigationOptions = {
  tabBarLabel : 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type='material-community' name={'map-search-outline'} />
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
