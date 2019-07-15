import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Layout from '../constants/Layout';

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    position:'relative',
    flex:1
  },
  container:{
    position:'relative',
    flex:1,
    maxHeight:Layout.window.height / 3
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
const img = require('../assets/images/demo.png');
export default class SwiperComponent extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} containerStyle={styles.container} showsButtons={false}>
        {this.props.entries ?
          this.props.entries.map((data, index) => (
            <View style={{flex:1}} key={`entry-${index}`}>
             <Image source={img} style={{width:'100%', height:'100%'}}/>
              <Text style={{position:'absolute', color:'white',fontSize:23, bottom:10}}>{data.text}</Text>

            </View>
            )):
        <View style={styles.slide1}>
          <Image source={img} style={{width:'100%', height:'100%'}}/>
          <Text style={{position:'absolute', color:'white',fontSize:23, bottom:10}}>Hello World</Text>
        </View>}
      </Swiper>
    )
  }
}
