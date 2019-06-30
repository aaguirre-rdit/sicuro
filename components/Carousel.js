import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../constants/Styles';

export default class MyCarousel extends React.Component {

  _renderItem ({item, index}) {
    console.log(item)
    return (
      <View style={Styles.CarouselStyle.slide}>
        <ParallaxImage
          source={item.thumbnail}
          containerStyle={{flex:1}}
          style={{...StyleSheet.absoluteFillObject,resizeMode: 'cover'}}
          parallaxFactor={1}
          showSpinner={true}
        />
        <Text style={Styles.CarouselStyle.title}>{ item.title }</Text>
      </View>
    );
  }

  render () {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.props.entries}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={350}
        sliderHeight={300}
        hasParallaxImages={true}
      />
    );
  }
}
