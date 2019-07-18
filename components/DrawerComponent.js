import React from 'react';
import {ScrollView, View } from "react-native";
import { DrawerItems } from "react-navigation";
import { Button } from 'react-native-elements';

export default class Drawer extends React.Component{
  logout = () => {
    // TODO delete token and destroy in server too
    this.props.navigation.navigate('logIn')
  };
  render(){
  return (
    <ScrollView
      contentContainerStyle={styles.drawerContainer}
    >
      <DrawerItems {...this.props} />
      <View
        style={styles.bottomView}
      >
      <Button
        color={'pink'}
        title={'logout'}
        onPress={this.logout}
      ></Button>
      </View>
    </ScrollView>
  )}
}
const styles = {
  drawerContainer:{
    paddingTop:50,
    flex:1
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
