import React from 'react';
import {ScrollView, View } from "react-native";
import { DrawerItems } from "react-navigation";
import { Button } from 'react-native-elements';

export default function Drawer(props){
  return (
    <ScrollView
      contentContainerStyle={styles.drawerContainer}
    >
      <DrawerItems {...props} />
      <View
        style={styles.bottomView}
      >
      <Button
        color={'pink'}
        title={'logout'}
        onPress={()=>{
          alert('logout!')
        }}
      ></Button>
      </View>
    </ScrollView>
  )
}
const styles = {
  drawerContainer:{
    height:'100%',
  },
  bottomView: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  }
};
