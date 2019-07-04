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
import Colors from "../constants/Colors";
import { FlatList } from "react-navigation";
import {MonoText} from "../components/StyledText";
const Entries = [{
  title:'this is a title',
  thumbnail:require('../assets/images/demo.png')
},{
  title:'this is a title',
  thumbnail:Demo
}];

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news:[{title:'title1', id:'adsf', intro:'ladsf asdfa adsf'},
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
  componentDidMount(): void {
    // TODO add articles request call

  }

  render(){
    console.log(Styles.CarouselStyle);
    return (
      <View style={styles.container}>
        {/*<View style={Styles.MainHeaderStyle}>*/}
        <Header navigation={this.props.navigation} style={Styles.MainHeaderStyle}/>
        {/*</View>*/}
        <Swiper entries={this.state.entries}/>
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
              <View
                key={item.item.id}
                style={{borderColor:Colors.AnalogousBlue,
                borderRadius:10,
                borderWidth:1,
                marginVertical:5,
              padding:10}}>
                <Text>{item.item.title}</Text>
                <MonoText>{item.item.intro}</MonoText>
                <Button title='see' onPress={()=>alert(item.item.id)}></Button>
              </View>
          )}}
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
    marginTop: 0,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  getStartedText: {
    fontSize: 37,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


});
