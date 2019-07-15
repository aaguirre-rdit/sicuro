
import React from "react";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button, Icon, Header } from 'react-native-elements';
const CustomHeader = props => {
  return (
    <Header
      placement="left"
      backgroundColor={'#fff'}
      leftComponent={props.drawer?{ icon: 'menu', color: '#000',onPress:()=>props.navigation.openDrawer() }:undefined}
      centerComponent={{ text: props.title, style: { color: '#000' } }}
      //rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
};

export default CustomHeader;
