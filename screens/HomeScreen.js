import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon} from "react-native-elements";
import Header from '../components/MainHeader';
import Styles from '../constants/Styles';
import Swiper from '../components/Swiper';
import Demo from 'sicuro/assets/images/demo.png';
const Entries = [{
  title:'this is a title',
  thumbnail:require('../assets/images/demo.png')
},{
  title:'this is a title',
  thumbnail:Demo
}];

export default class HomeScreen extends React.Component{
  render(){
    console.log(Styles.CarouselStyle);
    return (
      <View style={styles.container}>
        {/*<View style={Styles.MainHeaderStyle}>*/}
        <Header navigation={this.props.navigation} style={Styles.MainHeaderStyle}/>
        {/*</View>*/}
        <Swiper/>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.getStartedText}>HOME</Text>
            <Text>News will go here</Text>
          </View>
        </ScrollView>


      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

HomeScreen.navigationOptions = {
  title: 'Home',
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      type={'antdesign'}
      name={'home'}

    />
  ),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginTop: 0,
    backgroundColor:'#fff',
  },
  getStartedText: {
    fontSize: 37,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


});
