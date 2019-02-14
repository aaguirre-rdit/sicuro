import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import InfoCardScreen from '../screens/InfoCardScreen';
import TranslationScreen from '../screens/TranslationScreen';
import LabelRecognitionScreen from '../screens/LabelRecognitionScreen';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};
const TranslationStack = createStackNavigator({
  tabBarLabel: TranslationScreen,
});
TranslationStack.navigationOptions = {
    tabBarLabel: 'Translate',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={'translate'}
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
      name={'map'}
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
      name={'settings'}
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
            name={'settings-overscan'}
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
            name={'content-copy'}
        />
    ),
};
export default createBottomTabNavigator({
  HomeStack,
    LabelRecognitionStack,
    TranslationStack,
  LinksStack,
    InfoCardStack,
  SettingsStack
});
