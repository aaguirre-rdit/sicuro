import React from 'react';
import {ScrollView, Text, Button } from "react-native";
import { DrawerItems } from "react-navigation";

export default function Drawer(props){
  return (
    <ScrollView>
      <DrawerItems {...props} />
      <Button
        title={'logout'}
        onPress={()=>{
          alert('logout!')
        }}
      ></Button>
    </ScrollView>
  )
}
