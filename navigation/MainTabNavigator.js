import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import InfoCardScreen from '../screens/InfoCardScreen';
import LabelRecognitionScreen from '../screens/LabelRecognitionScreen';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const LabelRecognitionStack = createStackNavigator({
    tabBarLabel: LabelRecognitionScreen,
});

LabelRecognitionStack.navigationOptions = {
    tabBarLabel: 'Label',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-aperture' : 'md-aperture'}
        />
    ),
};
const InfoCardStack = createStackNavigator({
    tabBarLabel: InfoCardScreen,
});

InfoCardStack.navigationOptions = {
    tabBarLabel: 'Cards',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-browsers' : 'md-browsers'}
        />
    ),
};
export default createBottomTabNavigator({
  HomeStack,
    LabelRecognitionStack,
  LinksStack,
    InfoCardStack,
  SettingsStack
});
