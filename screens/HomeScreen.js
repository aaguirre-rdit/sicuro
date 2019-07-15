import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MainHeader from '../components/MainHeader';
import { Header, Icon } from 'react-native-elements';
import Styles from '../constants/Styles';
import Swiper from '../components/Swiper';
import Demo from 'sicuro/assets/images/demo.png';
import Colors from "../constants/Colors";
import { FlatList } from "react-navigation";
import PostListItem from '../components/PostListItem';
import * as Permissions  from 'expo-permissions';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news:[{title:'title1', id:'adsf', intro:'ladsf asdfa adsf',thumbnail:''},
        {title:'title2', id:'adsd', intro:'dssda fsdf adsf'},
        {title:'title3', id:'ad3d', intro:'erwer fsdf adsf'},
        {title:'title4', id:'a4sd', intro:'rwerw fsdf erwer'}],
      entries:[
        {
          title:'this is a title',
          thumbnail:require('../assets/images/demo.png')
        },{
          title:'this is a title',
          thumbnail:Demo
        }
      ]
    }
  }
  componentDidMount = async () => {

    // TODO ask for permissions
    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (permission.status !== 'granted') {
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (newPermission.status === 'granted') {
        //its granted.
      }
    } else {
      console.log(permission.status)
    }
    // TODO add articles request call

  }

  render(){
    return (
      <View style={styles.container}>

        <MainHeader drawer={true} title={'Home'} navigation={this.props.navigation}/>
        <ScrollView style={{flex:1}}>
          <View style={styles.container}>
          <Swiper entries={this.state.entries}/>
          </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentContainer}>
            <View style={{
              textAlign: 'center',
              borderBottomWidth:1,
              borderColor:'rgba(0,0,0,0.3)',
              lineHeight: "0.1em",
              paddingTop:30,
              alignItems:'center',
              position:'absolute',
              width:'80%',

              marginBottom:20}}>
              <Text
                style={{
                  backgroundColor:Colors.white,
                  textAlign:'center',
                  //position:'fixed',
                  fontSize:20,
                  marginBottom:-20,
                  height:30,
                  width:100,
                }}
              >
                News
              </Text>
            </View>


          </View>
          <FlatList
            style={{width:'100%',
            marginTop:50,
            paddingHorizontal:10,
            paddingVertical:5}}
            data={this.state.news}
            renderItem={(item) => {
              console.log(item.item)
              return(
                <PostListItem item={item.item} pressCb={()=>{
                  this.props.navigation.push(
                    'Article',
                    {
                      articleId:item.item.id
                    }
                    )}
                }/>

          )}}
          />
        </ScrollView>

        </ScrollView>
      </View>
    );
  }
}


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
    justifyContent:'center',
    alignItems:'center',
  },
  getStartedText: {
    fontSize: 37,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


});
