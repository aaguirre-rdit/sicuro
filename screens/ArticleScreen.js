import React from 'react';
import { ScrollView, StyleSheet,Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Header from '../components/MainHeader';
export default class ArticleScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articleId:this.props.navigation.getParam('articleId',0)
    }
  }
  componentDidMound(){
    //TODO request restaurant data!
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <Text>
          {this.state.articleId}
        </Text>
      </ScrollView>
    );
  }
}

ArticleScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.white,
  },
  header: {
    flex:1,
    backgroundColor:Colors.white,
    justifyContent:'flex-start',
  }
});
