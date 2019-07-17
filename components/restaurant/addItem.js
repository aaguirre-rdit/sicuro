import React from 'react';
import {View,ScrollView, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Input ,Button, Tile, Text } from 'react-native-elements';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import styled from 'styled-components';
import ImagePicker from '../../components/ImagePicker';
const HeaderText = styled.Text`
  font-weight:400;
  font-size:20px;
  color:${Colors.white};
  
`;
export default class AddItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scrollOffset:0
    }
  }
  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };
  render(){
    return(
      <Modal
        animationIn={'slideInUp'}
        isVisible={this.props.isVisible}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={400 - 300}
        scrollTo={this.handleScrollTo}
        onBackdropPress={this.props.onBdPress}
        style={{
          width:'90%',
          height:'70%',
          borderRadius:10,
          alignSelf:'center'}}
      >
        <View style={Styles.mainView}>
        <View style={{
          ...Styles.mainView,
          backgroundColor:Colors.tintColor,
          maxHeight:50,
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          margin:0,
          flex:1

        }}>
        <HeaderText>
          Add a new restaurant
        </HeaderText>
        </View>
        <ScrollView
          ref={ref => (this.scrollViewRef = ref)}
          onScroll={this.handleOnScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
          ...Styles.mainView,
          padding:10,
          flexGrow:1,
          justifyContent:'flex-start'
        }}>

          <Tile
            featured
            containerStyle={{
              marginHorizontal:10,
              height:220,
              alignContent:'center'}}
            imageContainerStyle={{width:'80%',height:200,margin:'auto'}}
            caption="Upload image"
            icon={{name:'image-plus', type:'material-community'}}
          >
          </Tile>
          <Input
            containerStyle={{marginVertical:10}}
            label={'Restaurant name'}
            placeholder='Enter name'
          />
          <Input
            multiline
            containerStyle={{marginVertical:10}}
            label={'Description'}
            placeholder='Enter name'
            inputStyle={{
              height:null
            }}
          />
          <View style={{marginVertical:10,justifyContent:'space-around'}}>
          <Input
            label={'Address'}
            placeholder='Enter address in English'
            containerStyle={{marginBottom:10}}
          />
          <Button
            type={'outline'}
            title={'Enter location in map'}
            buttonStyle={{width:'60%',alignSelf:'center'}}
            />
          </View>
          <View>

          </View>

        </ScrollView>
        </View>

      </Modal>
    )
  }
}
