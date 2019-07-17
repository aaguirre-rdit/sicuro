import React from 'react';
import {createStackNavigator} from "react-navigation";
import Login from '../screens/auth/LoginScreen';
const authNavigator = createStackNavigator({
  logIn:{
    screen:Login
  },
},{
  initialRouteName:'logIn'
});

export default authNavigator;
