import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import Colors from '../constants/Colors';
export default class RestScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      storeId:this.props.navigation.getParam('storeId',0)
    }
  }
  componentDidMound(){
    //TODO request restaurant data!
  }
  render() {
    return (
      <ScrollView style={styles.container}>

      <Text>
        {this.state.storeId}
      </Text>
      </ScrollView>
    );
  }
}

RestScreen.navigationOptions = {
  title: 'Restaurant Description & Revs',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.white,
  },
});
