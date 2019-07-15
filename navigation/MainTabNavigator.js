import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/Icons/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CardScreen from '../screens/CardScreen';
import RestaurantListScreen from '../screens/RestaurantListScreen';
import ArticleScreen from '../screens/ArticleScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import DrawerComponent from '../components/DrawerComponent';
import {Header,Icon} from "react-native-elements";
import MainHeader from '../components/MainHeader';
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
            Article: ArticleScreen
          },
            {
              header:null,
              headerMode:'none'
            }
          ),
          navigationOptions:{
            drawerIcon:
            <Icon
              type={'antdesign'}
              name={'home'}
            />
          }
        },
        Settings: SettingsScreen
      },{
        contentComponent:DrawerComponent,
        initialRouteName:'Home',
      })
    },
  },
  {
    headerMode:'none'
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  header:(props)=><Header
    leftComponent={{icon:'menu', color:'#000', onPress:()=>props.navigation.openDrawer()}}
  />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type={'antdesign'}
      name={'home'}
    />
  ),
};

HomeStack.path = 'home';

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

ScanStack.path = 'scan';

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

MapStack.path = 'map';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ScanStack,
  CardStack,
  MapStack,
},);

tabNavigator.path = 'main';

export default tabNavigator;
