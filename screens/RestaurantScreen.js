import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
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
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
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
