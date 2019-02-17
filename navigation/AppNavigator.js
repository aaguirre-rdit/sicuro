import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import SignUp from './SignUp';
import MainTabNavigator from './MainTabNavigator';
import LogIn from "./LogIn";
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  LogIn: LogIn,
  SignUp: SignUp,
  Main: MainTabNavigator,
},{
  initialRouteName:'Main',
    }
);
