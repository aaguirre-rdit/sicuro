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

import { MonoText } from '../components/StyledText';
import {Icon} from "react-native-elements";
import SettingsScreen from "./SettingsScreen";

export default class HomeScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.getStartedText}>HOME</Text>
          </View>
          <Button
            onPress={() =>{
              this.props.navigation.openDrawer();
            }}
            title="Go to Maps"
          />
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
    marginTop: 50,
    backgroundColor:'pink',
  },
  getStartedText: {
    fontSize: 37,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


});
