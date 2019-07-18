import React from 'react';
import {createStackNavigator} from "react-navigation";
import Login from '../screens/auth/LoginScreen';
import SignUp from '../screens/auth/SignupScreen';
const authNavigator = createStackNavigator({
  logIn:{
    screen:Login
  },
  signUp:{
    screen:SignUp
  }
},{
  initialRouteName:'logIn'
});

export default authNavigator;
