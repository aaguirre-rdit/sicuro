
import React from "react";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button, Icon } from 'react-native-elements';
const CustomHeader = props => {
  return (
    <View
      style={props.style}
    >
        <Button
          onPress = {()=>props.navigation.openDrawer()}
          type={'clear'}
          icon = {<Icon
            type={'material-community'}
            name={'menu'}

          />}
        ></Button>
    </View>
  );
};

export default CustomHeader;
