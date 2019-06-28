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
export default class HomeScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation}/>
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
